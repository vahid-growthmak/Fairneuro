/**
 * Seeds the Sanity dataset from the site's own content.
 *
 *   node scripts/seed-sanity.js <content.json> [--dry-run]
 *
 * Page documents come from scripts/extract-content.js, so the CMS mirrors what
 * the site actually renders. Everything is written with deterministic _ids
 * (createOrReplace), so re-running updates rather than duplicating.
 *
 * Requires NEXT_PUBLIC_SANITY_* and a token with write access.
 */
const fs = require('fs');
const https = require('https');

const PROJECT = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const API = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';
const TOKEN =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_WRITE_TOKEN ||
  process.env.SANITY_API_READ_TOKEN;
const DRY = process.argv.includes('--dry-run');

if (!PROJECT || !TOKEN) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or a write token.');
  process.exit(2);
}

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

const key = (() => { let n = 0; return () => `k${(n++).toString(36)}`; })();
const withKeys = (arr) => arr.map((o) => ({ _key: key(), ...o }));

function mutate(mutations) {
  const body = JSON.stringify({ mutations });
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: `${PROJECT}.api.sanity.io`,
        path: `/v${API}/data/mutate/${DATASET}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let d = '';
        res.on('data', (c) => (d += c));
        res.on('end', () =>
          res.statusCode < 300 ? resolve(JSON.parse(d)) : reject(new Error(`${res.statusCode}: ${d.slice(0, 300)}`)),
        );
      },
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── documents ───────────────────────────────────────────────────────────────
const pages = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

const pageDocs = pages
  .filter((p) => p.title)
  .map((p) => ({
    _id: `page-${slugify(p.route === '/' ? 'home' : p.route)}`,
    _type: 'page',
    route: p.route,
    title: p.title,
    ...(p.eyebrow ? { eyebrow: p.eyebrow } : {}),
    ...(p.lede ? { lede: p.lede } : {}),
    ...(p.body ? { body: p.body } : {}),
    ...(p.ticks?.length ? { ticks: p.ticks } : {}),
    ...(p.ctas?.[0] ? { primaryCta: { label: p.ctas[0].label, href: p.ctas[0].href } } : {}),
    ...(p.ctas?.[1] ? { secondaryCta: { label: p.ctas[1].label, href: p.ctas[1].href } } : {}),
    sections: withKeys(
      (p.sections || []).map((s) => ({
        _type: 'section',
        heading: s.heading,
        ...(s.subtitle ? { subtitle: s.subtitle } : {}),
        layout: s.items?.length ? 'cards' : 'band',
        items: withKeys(
          (s.items || []).map((it) => ({
            _type: 'item',
            title: it.title,
            ...(it.desc ? { desc: it.desc } : {}),
            ...(it.href ? { href: it.href } : {}),
          })),
        ),
      })),
    ),
  }));

// FAQs, testimonials and site settings mirror what the site renders today.
const faqSource = require('./seed-data/faqs.json');
const faqDocs = faqSource.map((f, i) => ({
  _id: `faq-${slugify(f.q)}`,
  _type: 'faq',
  question: f.q,
  answer: f.a,
  ...(f.topic ? { topic: f.topic } : {}),
  // /faqs renders POPULAR_FAQS_QUERY, which filters on this flag.
  popular: true,
  order: i,
}));

const testimonialSource = require('./seed-data/testimonials.json');
const testimonialDocs = testimonialSource.map((t, i) => ({
  _id: `testimonial-${slugify(t.name + '-' + i)}`,
  _type: 'testimonial',
  quote: t.quote,
  name: t.name,
  ...(t.role ? { role: t.role } : {}),
  rating: 5,
  placement: t.placement || 'any',
  order: i,
}));

const settings = require('./seed-data/site-settings.json');
const settingsDoc = { _id: 'siteSettings', _type: 'siteSettings', ...settings,
  stats: withKeys(settings.stats || []) };

const categories = require('./seed-data/categories.json').map((c) => ({
  _id: `category-${c.slug}`,
  _type: 'category',
  title: c.title,
  slug: { _type: 'slug', current: c.slug },
  description: c.description,
  accent: c.accent,
}));

const author = {
  _id: 'author-clinical-team',
  _type: 'author',
  name: 'The Fairneuro Clinical Team',
  slug: { _type: 'slug', current: 'fairneuro-clinical-team' },
  role: 'Neurodevelopmental specialists',
  bio: 'Our assessors and clinicians write on ADHD, autism, dyslexia and the support that follows.',
};

const post = require('./seed-data/post.json');
const postDoc = {
  _id: `post-${post.slug}`,
  _type: 'post',
  title: post.title,
  slug: { _type: 'slug', current: post.slug },
  excerpt: post.excerpt,
  publishedAt: new Date(post.publishedAt).toISOString(),
  featured: true,
  author: { _type: 'reference', _ref: author._id },
  categories: [{ _type: 'reference', _ref: 'category-adhd', _key: key() }],
  body: post.body.map((b) => ({ ...b, _key: key(), children: b.children.map((c) => ({ ...c, _key: key() })) })),
};

const docs = [settingsDoc, author, ...categories, postDoc, ...faqDocs, ...testimonialDocs, ...pageDocs];

(async () => {
  console.log(`prepared ${docs.length} documents:`);
  const counts = docs.reduce((a, d) => ((a[d._type] = (a[d._type] || 0) + 1), a), {});
  Object.entries(counts).forEach(([t, n]) => console.log(`  ${t.padEnd(14)} ${n}`));

  if (DRY) return console.log('\ndry run — nothing written');

  // Sanity caps transaction size, so write in batches.
  const BATCH = 25;
  let written = 0;
  for (let i = 0; i < docs.length; i += BATCH) {
    const slice = docs.slice(i, i + BATCH);
    await mutate(slice.map((d) => ({ createOrReplace: d })));
    written += slice.length;
    process.stdout.write(`\r  written ${written}/${docs.length}`);
  }
  console.log('\ndone');
})().catch((e) => { console.error('\n' + e.message); process.exit(1); });
