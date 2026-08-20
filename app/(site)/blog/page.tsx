import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBadge } from '@/components/ui/IconBadge';
import { ArrowRight, Calendar, Clock, Question } from '@/components/icons';
import { blogPosts, type BlogPost } from '@/lib/blog';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { img } from '@/lib/images';
import { accentCycle, cycle } from '@/lib/accents';

export const revalidate = 60;

export const metadata = {
  title: 'Blog',
  description:
    'Articles and insights on ADHD, autism, dyslexia and neurodiversity — written by the Fairneuro clinical team.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPage() {
  // Sanity posts when the CMS is connected; the sample post otherwise, so the
  // page is never empty.
  const posts = await sanityFetch<BlogPost[]>({
    query: POSTS_QUERY,
    fallback: blogPosts,
    tags: ['post'],
  });

  const [lead, ...rest] = posts.length ? posts : blogPosts;

  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        title="Blog"
        lede="Insights, guidance and plain-English answers."
        body="Articles from our clinical team on ADHD, autism, dyslexia and everything that surrounds them — assessment, support, work, study and daily life."
        secondaryCta={{ label: 'Free ADHD Quiz', href: '/adhd-quiz' }}
        image={{ src: img.heroResources, alt: 'A person reading an article' }}
      />

      <section className="bg-white">
        <div className="shell py-11 lg:py-14">
          <SectionHeading title="Latest article" />

          <Link
            href={`/blog/${lead.slug}`}
            className="group block rounded-2xl border border-navy/[0.07] bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-navy/[0.12] hover:shadow-card-hover lg:p-10"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-navy/55">
              {lead.categories?.[0] && (
                <span className="rounded-full bg-soft-teal px-3 py-1 font-heading text-[12.5px] font-medium text-teal">
                  {lead.categories[0].title}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(lead.publishedAt)}
              </span>
              {lead.readingMinutes && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {lead.readingMinutes} min read
                </span>
              )}
            </div>

            <h3 className="mt-4 max-w-3xl font-heading text-[26px] font-semibold leading-snug text-navy sm:text-[29px]">
              {lead.title}
            </h3>
            <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-navy/70">{lead.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-[14px] font-medium text-coral">
              Read the article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="bg-ivory">
          <div className="shell py-11 lg:py-14">
            <SectionHeading title="More from the blog" />
            <div data-reveal-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Link
                  key={post._id}
                  data-reveal
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-navy/[0.07] bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-navy/[0.12] hover:shadow-card-hover"
                >
                  <IconBadge icon={Calendar} accent={cycle(accentCycle, i)} size="sm" />
                  <h3 className="mt-4 font-heading text-[16.5px] font-semibold leading-snug text-navy">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-navy/65">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-coral">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PromptBand
        title="Not sure where to start?"
        body="Our team can point you to the right assessment or support for your situation."
        icon={Question}
        background="white"
      />

      <CtaBand
        title="Ready to take the first step?"
        body="Book a free consultation and let our team guide you."
        background="white"
      />
    </>
  );
}
