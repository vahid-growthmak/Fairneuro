import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Everything public is crawlable. The exclusions are routes with nothing to
 * index and no business being in search results: the Sanity Studio, the API,
 * and the draft-mode entry points that toggle preview cookies.
 *
 * `_next/static` is deliberately left open — blocking it stops crawlers
 * fetching the CSS and JavaScript they need to render the pages properly.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/studio/', '/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
