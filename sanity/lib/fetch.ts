import { draftMode } from 'next/headers';
import { client, draftClient } from '../client';
import { isSanityConfigured } from '../env';

/**
 * Fetch from Sanity, falling back to locally-defined content when the CMS is
 * not configured or the query returns nothing.
 *
 * Every CMS-backed section on this site keeps its original hard-coded content
 * as the fallback, so the site renders correctly before Sanity is connected
 * and degrades gracefully if a query fails.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  fallback,
  tags = [],
  revalidate = 60,
}: {
  query: string;
  params?: Record<string, unknown>;
  fallback: T;
  tags?: string[];
  revalidate?: number;
}): Promise<T> {
  if (!isSanityConfigured || !client) return fallback;

  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    // draftMode() is unavailable outside a request scope (e.g. sitemap).
    isDraft = false;
  }

  try {
    const active = isDraft && draftClient ? draftClient : client;
    const data = await active.fetch<T>(query, params, {
      // Drafts must never be cached; published content uses ISR + tags.
      ...(isDraft
        ? { cache: 'no-store' as const }
        : { next: { revalidate, tags: ['sanity', ...tags] } }),
    });

    if (data === null || data === undefined) return fallback;
    if (Array.isArray(data) && data.length === 0) return fallback;
    return data;
  } catch (error) {
    console.error('[sanity] query failed, using fallback content:', error);
    return fallback;
  }
}
