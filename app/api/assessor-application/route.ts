import { NextResponse } from 'next/server';
import {
  declarations,
  isEmail,
  isPhone,
  isUrl,
  sections,
  type Field,
  type ShowIf,
} from '@/components/forms/assessorApplication';
import { APPLICATIONS_FROM, APPLICATIONS_TO, mailConfigured, transport } from '@/lib/mail';

// nodemailer needs the Node runtime; it does not run on the edge.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Vercel caps a serverless request body at 4.5MB, so attachments are held
 * below that with headroom for the form fields themselves. Anything larger is
 * reported in the email rather than silently dropped, and the applicant is
 * asked to send it on.
 */
const MAX_ATTACHMENT_BYTES = 4_000_000;

type Values = Record<string, string[]>;

function visible(showIf: ShowIf | undefined, values: Values): boolean {
  if (!showIf) return true;
  const selected = values[showIf.field] ?? [];
  if (showIf.anyOf.some((v) => selected.includes(v))) return true;
  if (showIf.allOf && showIf.allOf.every((v) => selected.includes(v))) return true;
  return false;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Answered fields, in the order the form asks them. */
function walk(values: Values) {
  const out: { section: string; number: number; items: { label: string; answer: string }[] }[] = [];

  for (const section of sections) {
    if (!visible(section.showIf, values)) continue;
    const items: { label: string; answer: string }[] = [];

    for (const field of section.fields as Field[]) {
      if (!field.name || field.kind === 'note' || field.kind === 'subheading') continue;
      if (!visible(field.showIf, values)) continue;
      const answer = (values[field.name] ?? []).filter(Boolean).join(', ');
      if (!answer) continue;
      items.push({ label: field.label ?? field.name, answer });
    }

    if (items.length) out.push({ section: section.title, number: section.number, items });
  }

  return out;
}

function render(
  groups: ReturnType<typeof walk>,
  confirmed: number,
  attached: string[],
  oversized: { name: string; mb: string }[],
) {
  const text = groups
    .map(
      (g) =>
        `SECTION ${g.number} — ${g.section}\n` +
        g.items.map((i) => `  ${i.label}\n    ${i.answer}`).join('\n'),
    )
    .join('\n\n');

  const html = `<div style="font:14px/1.55 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#113A61">
    <h2 style="margin:0 0 4px;font-size:18px">New assessor application</h2>
    <p style="margin:0 0 20px;color:#5b7189">Submitted via fairneurodiagnostics.com</p>
    ${groups
      .map(
        (g) => `<h3 style="margin:22px 0 8px;padding-bottom:5px;border-bottom:1px solid #e3e9ef;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#45AEB6">
            Section ${g.number} — ${esc(g.section)}</h3>
          <table style="width:100%;border-collapse:collapse">${g.items
            .map(
              (i) => `<tr>
                <td style="padding:5px 12px 5px 0;vertical-align:top;width:40%;color:#5b7189">${esc(i.label)}</td>
                <td style="padding:5px 0;vertical-align:top;font-weight:600;white-space:pre-wrap">${esc(i.answer)}</td>
              </tr>`,
            )
            .join('')}</table>`,
      )
      .join('')}
    <h3 style="margin:22px 0 8px;padding-bottom:5px;border-bottom:1px solid #e3e9ef;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#45AEB6">Declaration</h3>
    <p style="margin:0">${confirmed} of ${declarations.length} statements confirmed.</p>
    <h3 style="margin:22px 0 8px;padding-bottom:5px;border-bottom:1px solid #e3e9ef;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#45AEB6">Documents</h3>
    <p style="margin:0">${attached.length ? esc(attached.join(', ')) : 'None attached.'}</p>
    ${
      oversized.length
        ? `<p style="margin:10px 0 0;padding:10px 12px;background:#FDEFF4;border-radius:6px">
             <strong>Too large to attach</strong> — the applicant has been asked to email these
             separately: ${esc(oversized.map((o) => `${o.name} (${o.mb}MB)`).join(', '))}.
           </p>`
        : ''
    }
  </div>`;

  return { text, html };
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Could not read the submitted form.' }, { status: 400 });
  }

  // Bots fill hidden fields; people do not.
  if (String(form.get('company_website') ?? '').trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const values: Values = {};
  const attachments: { filename: string; content: Buffer }[] = [];
  const oversized: { name: string; mb: string }[] = [];
  const attached: string[] = [];
  let budget = MAX_ATTACHMENT_BYTES;

  for (const [rawKey, value] of form.entries()) {
    // Checkbox groups post as `name[]`; the schema knows them as `name`.
    const key = rawKey.endsWith('[]') ? rawKey.slice(0, -2) : rawKey;
    if (key === 'company_website') continue;
    if (typeof value === 'string') {
      if (!value.trim()) continue;
      (values[key] ??= []).push(value);
      continue;
    }
    const file = value as File;
    if (!file || file.size === 0) continue;
    if (file.size > budget) {
      oversized.push({ name: file.name, mb: (file.size / 1_000_000).toFixed(1) });
      continue;
    }
    budget -= file.size;
    attachments.push({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    });
    attached.push(file.name);
  }

  // Server-side check of the same rules the form applies, so a crafted POST
  // cannot skip a required question.
  const missing: string[] = [];
  for (const section of sections) {
    if (!visible(section.showIf, values)) continue;
    for (const field of section.fields as Field[]) {
      if (!field.required || !field.name) continue;
      if (field.kind === 'note' || field.kind === 'subheading') continue;
      if (!visible(field.showIf, values)) continue;
      // Documents are not enforced here: a required file may legitimately be
      // one the applicant has to send on separately because it was too large.
      if (field.kind === 'file') continue;
      if ((values[field.name] ?? []).length === 0) missing.push(field.label ?? field.name);
    }
  }
  if (missing.length) {
    return NextResponse.json(
      { error: `Please answer: ${missing.slice(0, 4).join(', ')}${missing.length > 4 ? '…' : ''}` },
      { status: 422 },
    );
  }

  // Formats are re-checked here: the browser's pattern attribute is a
  // convenience for the applicant, not a guarantee about what arrives.
  const malformed: string[] = [];
  for (const section of sections) {
    if (!visible(section.showIf, values)) continue;
    for (const field of section.fields as Field[]) {
      if (!field.name || !visible(field.showIf, values)) continue;
      const given = values[field.name] ?? [];
      for (const value of given) {
        const bad =
          (field.kind === 'email' && !isEmail(value)) ||
          (field.kind === 'tel' && !isPhone(value)) ||
          (field.kind === 'url' && !isUrl(value));
        if (bad) malformed.push(field.label ?? field.name);
      }
    }
  }
  if (malformed.length) {
    return NextResponse.json(
      {
        error: `Please check the format of: ${malformed.slice(0, 4).join(', ')}${
          malformed.length > 4 ? '…' : ''
        }`,
      },
      { status: 422 },
    );
  }

  const confirmed = declarations.filter((_, i) => values[`declaration_${i + 1}`]?.length).length;
  if (confirmed < declarations.length) {
    return NextResponse.json(
      { error: 'Please confirm every statement in the declaration.' },
      { status: 422 },
    );
  }

  const groups = walk(values);
  const name = values.full_name?.[0] ?? 'Applicant';
  const email = values.email?.[0];
  const { text, html } = render(groups, confirmed, attached, oversized);

  if (!mailConfigured()) {
    console.error('[assessor-application] SMTP not configured — application not delivered', {
      name,
      email,
    });
    return NextResponse.json(
      { error: 'Applications are temporarily unavailable. Please email us directly.' },
      { status: 503 },
    );
  }

  try {
    const info = await transport().sendMail({
      from: `FairNeuro Website <${APPLICATIONS_FROM}>`,
      to: APPLICATIONS_TO,
      replyTo: email ? `${name} <${email}>` : undefined,
      subject: `Assessor application — ${name}`,
      text,
      html,
      attachments,
    });
    // Logged so a delivery problem can be traced without reproducing it.
    console.info('[assessor-application] sent', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
      attachments: attached.length,
    });
  } catch (error) {
    console.error('[assessor-application] send failed', error);
    return NextResponse.json(
      { error: 'We could not send your application just now. Please try again shortly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, oversized: oversized.map((o) => o.name) });
}
