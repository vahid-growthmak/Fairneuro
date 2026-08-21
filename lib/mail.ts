import nodemailer from 'nodemailer';

/**
 * SMTP transport for outbound site mail.
 *
 * Configured for Zoho Mail, which requires the `from` address to be a real
 * mailbox or alias on the account — it will not let you send as an arbitrary
 * address. Applicant addresses therefore go in `replyTo`, not `from`, so that
 * replying from the inbox still reaches the applicant.
 *
 * Zoho accounts with two-factor authentication need an application-specific
 * password (Zoho Mail → Settings → Security → App Passwords), not the account
 * password.
 */
const host = process.env.SMTP_HOST ?? 'smtp.zoho.eu';
const port = Number(process.env.SMTP_PORT ?? 465);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;

/** Where applications are delivered. */
export const APPLICATIONS_TO =
  process.env.APPLICATIONS_TO ?? 'management@fairneurodiagnostics.com';

/** Envelope sender. Must be a mailbox Zoho recognises on this account. */
export const APPLICATIONS_FROM = process.env.APPLICATIONS_FROM ?? user ?? APPLICATIONS_TO;

export function mailConfigured(): boolean {
  return Boolean(user && pass);
}

let cached: nodemailer.Transporter | null = null;

export function transport(): nodemailer.Transporter {
  if (!mailConfigured()) {
    throw new Error(
      'SMTP is not configured. Set SMTP_USER and SMTP_PASSWORD (and SMTP_HOST / SMTP_PORT if not Zoho EU).',
    );
  }
  if (!cached) {
    cached = nodemailer.createTransport({
      host,
      port,
      // 465 is implicit TLS; 587 upgrades with STARTTLS.
      secure: port === 465,
      auth: { user: user as string, pass: pass as string },
    });
  }
  return cached;
}
