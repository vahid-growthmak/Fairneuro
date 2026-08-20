/**
 * Reads every route from the running dev server and turns the rendered page
 * into structured content: the hero, then each section with its cards.
 *
 * Extracting from the DOM rather than parsing the page source means the seed
 * mirrors exactly what a visitor sees, including anything a template composes.
 *
 *   node scripts/extract-content.js <out.json>
 */
const WebSocket = require('../node_modules/ws');
const http = require('http');
const fs = require('fs');

const get = (p) =>
  new Promise((res, rej) =>
    http.get({ host: '127.0.0.1', port: 9222, path: p }, (r) => {
      let d = '';
      r.on('data', (c) => (d += c));
      r.on('end', () => res(JSON.parse(d)));
    }).on('error', rej),
  );

const ROUTES = JSON.parse(
  fs.readFileSync(process.argv[3] || '/dev/stdin', 'utf8'),
);

const EXTRACT = `
(() => {
  const clean = (s) => (s || '').replace(/\\s+/g, ' ').trim();
  const main = document.querySelector('main');
  if (!main) return JSON.stringify({ error: 'no main' });

  const h1 = main.querySelector('h1');
  const heroRoot = h1 ? h1.parentElement : null;

  // Hero: the accent line and intro sit right after the h1 in the same column.
  let lede = null, body = null, eyebrow = null, ticks = [];
  if (heroRoot) {
    const ps = [...heroRoot.querySelectorAll(':scope > p')];
    const before = [...heroRoot.children].indexOf(h1);
    const eb = [...heroRoot.children].slice(0, before).find((n) => n.tagName === 'P');
    if (eb) eyebrow = clean(eb.textContent);
    const after = ps.filter((p) => h1.compareDocumentPosition(p) & Node.DOCUMENT_POSITION_FOLLOWING);
    if (after[0]) lede = clean(after[0].textContent);
    if (after[1]) body = clean(after[1].textContent);
    const list = heroRoot.querySelector('ul');
    if (list) ticks = [...list.querySelectorAll('li')].map((li) => clean(li.textContent)).filter(Boolean);
  }

  const ctas = [...main.querySelectorAll('a')]
    .filter((a) => h1 && heroRoot && heroRoot.contains(a))
    .map((a) => ({ label: clean(a.textContent), href: a.getAttribute('href') }))
    .filter((c) => c.label);

  // Sections: every h2 becomes a section; its cards are the h3/p pairs beneath.
  const sections = [];
  main.querySelectorAll('h2').forEach((h2) => {
    const sec = h2.closest('section') || h2.parentElement;
    if (!sec) return;
    const heading = clean(h2.textContent);
    if (!heading) return;

    // subtitle: the paragraph immediately following the heading
    let subtitle = null;
    const sib = h2.nextElementSibling;
    if (sib && sib.tagName === 'P') subtitle = clean(sib.textContent);

    const items = [];
    sec.querySelectorAll('h3').forEach((h3) => {
      const card = h3.closest('a, li, div');
      const p = card ? card.querySelector('p') : null;
      const link = h3.closest('a');
      const t = clean(h3.textContent);
      if (!t) return;
      items.push({
        title: t,
        desc: p ? clean(p.textContent) : null,
        href: link ? link.getAttribute('href') : null,
      });
    });

    // IconColumns cells title with a styled <p>, not an <h3>.
    if (!items.length) {
      sec.querySelectorAll('p[class*="font-semibold"]').forEach((p) => {
        const cell = p.parentElement;
        if (!cell) return;
        const desc = [...cell.querySelectorAll(':scope > p')].filter((x) => x !== p)[0];
        const link = p.closest('a');
        const t = clean(p.textContent);
        if (!t || t === heading) return;
        items.push({
          title: t,
          desc: desc ? clean(desc.textContent) : null,
          href: link ? link.getAttribute('href') : null,
        });
      });
    }

    // tick-list sections carry their content in <li> rather than h3
    if (!items.length) {
      sec.querySelectorAll('ul li').forEach((li) => {
        const t = clean(li.textContent);
        if (t && t.length < 160) items.push({ title: t, desc: null, href: null });
      });
    }

    sections.push({ heading, subtitle, items: items.slice(0, 12) });
  });

  return JSON.stringify({
    title: h1 ? clean(h1.textContent) : null,
    eyebrow, lede, body, ticks,
    ctas: ctas.slice(0, 3),
    sections,
  });
})()`;

(async () => {
  const target = (await get('/json')).find((t) => t.type === 'page');
  const ws = new WebSocket(target.webSocketDebuggerUrl, { perMessageDeflate: false });
  let id = 0;
  const pending = new Map();
  const send = (method, params = {}) =>
    new Promise((r) => {
      const i = ++id;
      pending.set(i, r);
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  ws.on('message', (m) => {
    const o = JSON.parse(m);
    if (o.id && pending.has(o.id)) {
      pending.get(o.id)(o.result);
      pending.delete(o.id);
    }
  });
  await new Promise((r) => ws.on('open', r));
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false,
  });

  const out = [];
  for (const route of ROUTES) {
    await send('Page.navigate', { url: 'http://localhost:3000' + (route || '/') });
    await new Promise((r) => setTimeout(r, 1100));
    const res = await send('Runtime.evaluate', { expression: EXTRACT, returnByValue: true });
    let data;
    try { data = JSON.parse(res.result.value); } catch { data = { error: 'parse' }; }
    out.push({ route: route || '/', ...data });
    process.stderr.write(`${route || '/'} — ${data.sections ? data.sections.length + ' sections' : data.error}\n`);
  }
  fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 2));
  console.log(`\nextracted ${out.length} routes`);
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
