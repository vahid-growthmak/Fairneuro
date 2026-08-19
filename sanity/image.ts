import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, isSanityConfigured, projectId } from './env';

const builder = isSanityConfigured ? imageUrlBuilder({ projectId, dataset }) : null;

/**
 * Build a CDN URL for a Sanity image. Returns null when the CMS is not
 * configured or the source is missing, so callers can fall back to local art.
 */
export function urlForImage(source: Image | undefined | null) {
  if (!builder || !source) return null;
  return builder.image(source).auto('format').fit('max');
}

export function imageUrl(
  source: Image | undefined | null,
  width: number,
  height?: number,
): string | null {
  const b = urlForImage(source);
  if (!b) return null;
  return height ? b.width(width).height(height).url() : b.width(width).url();
}
