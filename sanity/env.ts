/**
 * Environment for the Sanity integration.
 *
 * The site is designed to render fully without a CMS connection: every
 * CMS-backed section falls back to its built-in content when Sanity is not
 * configured. `isSanityConfigured` is the switch that decides which path runs,
 * so `npm run build` keeps working before credentials are added.
 */

/**
 * The project this site's content lives in.
 *
 * Defaulted in code rather than carried in a committed .env. NEXT_PUBLIC_*
 * values are inlined into the browser bundle at build time and the dataset is
 * world-readable, so this is public either way — and hardcoding the default
 * means any build reaches the CMS without per-environment configuration.
 * Override it to point a checkout at a different project.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'th11nlwk';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

/** Server-only. Used for draft reads; never expose to the browser. */
export const readToken =
  process.env.SANITY_API_READ_TOKEN ?? process.env.SANITY_API_WRITE_TOKEN ?? '';

/** Shared secret for the publish webhook. Server-only. */
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET ?? '';

export const isSanityConfigured = projectId.length > 0;

export function assertSanityConfigured() {
  if (!isSanityConfigured) {
    throw new Error(
      'Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local — see README.',
    );
  }
}
