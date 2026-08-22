import type { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { isSanityConfigured } from '@/sanity/env';
import { SITEMAP_QUERY } from '@/sanity/lib/queries';
import { SITE_URL } from '@/lib/site';

const routes = [
  '',
  '/assessments',
  '/assessments/adhd',
  '/assessments/autism',
  '/assessments/adhd-autism',
  '/assessments/dyslexia',
  '/assessments/dyscalculia',
  '/assessments/dyspraxia',
  '/adults',
  '/adults/adhd',
  '/adults/autism',
  '/adults/dyslexia',
  '/adults/adhd-autism',
  '/children',
  '/children/adhd',
  '/children/autism',
  '/children/dyslexia',
  '/children/adhd-autism',
  '/support',
  '/support/adhd-coaching',
  '/support/autism-coaching',
  '/support/executive-function',
  '/support/learning-support',
  '/support/education-support',
  '/support/behaviour-support',
  '/support/workplace-support',
  '/support/therapy-wellbeing',
  '/support/post-diagnostic',
  '/support/parent-family',
  '/how-it-works',
  '/why-fairneuro',
  '/why-fairneuro/our-standards',
  '/about',
  '/contact',
  '/faqs',
  '/resources',
  '/resources/preparing-for-your-assessment',
  '/resources/your-report-explained',
  '/screener',
  '/screener/adhd',
  '/screener/autism',
  '/screener/dyslexia',
  '/screener/general',
  '/professional-referrals',
  '/become-an-assessor',
  '/adhd-quiz',
  '/dyslexia-test',
  '/autism-test',
  '/blog',
  '/schools',
  '/employers',
  '/clinical-care',
  '/book-consultation',
  '/privacy-policy',
  '/terms',
  '/cookies',
  '/complaints',
];

export const revalidate = 3600;

/** Static routes plus every published CMS article. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_URL;

  let articles: MetadataRoute.Sitemap = [];
  if (isSanityConfigured && client) {
    try {
      const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(SITEMAP_QUERY);
      articles = posts.map((p) => ({
        url: `${base}/resources/${p.slug}`,
        lastModified: new Date(p._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    } catch (error) {
      console.error('[sitemap] could not load CMS articles:', error);
    }
  }

  const staticRoutes = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...articles];
}
