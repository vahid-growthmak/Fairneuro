/**
 * Environment for the Sanity integration.
 *
 * The site is designed to render fully without a CMS connection: every
 * CMS-backed section falls back to its built-in content when Sanity is not
 * configured. `isSanityConfigured` is the switch that decides which path runs,
 * so `npm run build` keeps working before credentials are added.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

/** Server-only. Used for draft reads; never expose to the browser. */
export const readToken = process.env.SANITY_API_READ_TOKEN ?? '';

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
