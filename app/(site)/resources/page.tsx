import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid, type CardItem } from '@/components/sections/CardGrid';
import { featuredResources, type ResourceCard } from '@/lib/fallbacks';
import { sanityFetch } from '@/sanity/lib/fetch';
import { FEATURED_POSTS_QUERY } from '@/sanity/lib/queries';
import { ProcessRow } from '@/components/sections/Steps';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBadge } from '@/components/ui/IconBadge';
import { img } from '@/lib/images';
import {
  ArrowRight,
  Book,
  Brain,
  Briefcase,
  ClipboardCheck,
  Document,
  GradCap,
  Leaf,
  People,
  Person,
  Search,
  Signpost,
  Sparkle,
} from '@/components/icons';

export const metadata = {
  title: 'Resources',
  description:
    'Guides, articles and practical tools on ADHD, autism, dyslexia, parenting, education, workplace support and life after diagnosis.',
};

const topics = [
  { icon: Brain, title: 'ADHD', href: '/assessments/adhd', accent: 'teal' as const },
  { icon: Person, title: 'Autism', href: '/assessments/autism', accent: 'coral' as const },
  { icon: Book, title: 'Dyslexia', href: '/assessments/dyslexia', accent: 'orange' as const },
  { icon: People, title: 'Parents & Families', href: '/support/parent-family', accent: 'purple' as const },
  { icon: GradCap, title: 'Education', href: '/support/education-support', accent: 'teal' as const },
  { icon: Briefcase, title: 'Workplace', href: '/support/workplace-support', accent: 'coral' as const },
  { icon: Leaf, title: 'After Diagnosis', href: '/support/post-diagnostic', accent: 'green' as const },
  { icon: Sparkle, title: 'General Neurodiversity', href: '/screener/general', accent: 'blue' as const },
];

const tags = ['ADHD', 'Autism', 'Dyslexia', 'Adults', 'Children', 'Parents', 'Work', 'Study'];

export const revalidate = 60;

export default async function Page() {
  const posts = await sanityFetch<ResourceCard[]>({
    query: FEATURED_POSTS_QUERY,
    fallback: featuredResources,
    tags: ['post'],
  });

  // CMS articles live at /resources/<slug>; fallbacks keep their own routes.
  const featuredItems: CardItem[] = posts.map((p, i) => ({
    icon: [ClipboardCheck, Document, Signpost, Briefcase, GradCap, People][i % 6],
    title: p.title,
    desc: p.excerpt,
    href: p.href ?? `/resources/${p.slug}`,
    linkLabel: 'Read guide',
    accent: (['teal', 'coral', 'orange', 'purple', 'teal', 'coral'] as const)[i % 6],
  }));

  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
        title="Resources"
        lede="Helpful guidance, insights and practical support for every stage of the journey."
        body="Guides, articles and tools written by our clinicians — covering everything from preparing for an assessment to thriving at work and school afterwards."
        secondaryCta={{ label: 'Free Online Screener', href: '/screener' }}
        image={{ src: img.heroResources, alt: 'A person reading a guide' }}
      />

      {/* Explore by topic */}
      <section className="bg-white">
        <div className="shell py-11 lg:py-14">
          <SectionHeading title="Explore by topic" />
          <div data-reveal-stagger="0.08" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group flex items-center gap-4 rounded-xl border border-navy/[0.07] bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <IconBadge icon={t.icon} accent={t.accent} size="md" />
                <span className="flex-1">
                  <span className="block font-heading text-[15.5px] font-semibold text-navy">
                    {t.title}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-teal">
                    Explore
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CardGrid
        title="Featured articles and guides"
        columns={3}
        background="ivory"
        cardAlign="left"
        items={featuredItems}
      />

      <ProcessRow
        title="Browse by stage"
        background="white"
        steps={[
          { icon: Search, title: 'Before Assessment', desc: 'Understanding your options and deciding whether to proceed.', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Preparing for Assessment', desc: 'Practical preparation so you feel calm and ready.', accent: 'coral' },
          { icon: Document, title: 'Understanding Your Report', desc: 'Making sense of the findings and recommendations.', accent: 'orange' },
          { icon: Leaf, title: 'Support & Next Steps', desc: 'Putting recommendations into practice in everyday life.', accent: 'teal' },
        ]}
      />

      {/* Search + tags */}
      <section className="bg-ivory">
        <div className="shell py-11 lg:py-14">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading title="Looking for something specific?" />
            <label htmlFor="resource-search" className="sr-only">
              Search resources
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-navy/40" />
              <input
                id="resource-search"
                type="search"
                placeholder="Search guides and articles…"
                className="w-full rounded-full border border-navy/15 bg-white py-3.5 pl-12 pr-5 text-[15px] text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25"
              />
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
              {tags.map((t) => (
                <li key={t}>
                  <span className="inline-flex rounded-full border border-navy/12 bg-white px-4 py-1.5 text-[13px] text-navy/70">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SplitBand
        title="Assessment is only the beginning."
        body="Understand. Support. Thrive. — explore the support available once you have your answers."
        cta={{ label: 'Explore Support', href: '/support' }}
        icon={Leaf}
        background="white"
      />

      <CtaBand
        title="Not sure where to start?"
        body="Book a free consultation and we'll point you to the right resources and pathway."
        background="white"
      />
    </>
  );
}
