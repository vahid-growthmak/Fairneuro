import { createClient } from 'next-sanity';
import { apiVersion, dataset, isSanityConfigured, projectId, readToken } from './env';

/**
 * Read client for published content. `useCdn` keeps published reads fast and
 * cached; draft reads go through `draftClient` with a token instead.
 */
export const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' })
  : null;

/** Token-authenticated client used only in draft mode. Never cached. */
export const draftClient = isSanityConfigured && readToken
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: readToken,
      perspective: 'drafts',
    })
  : null;
