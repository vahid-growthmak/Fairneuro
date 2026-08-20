import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/sections/Bands';
import { PortableBody } from '@/components/sections/PortableBody';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ArrowRight, Calendar, Clock, Person } from '@/components/icons';
import { blogPosts, type BlogPost } from '@/lib/blog';
import { client } from '@/sanity/client';
import { isSanityConfigured } from '@/sanity/env';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries';

export const revalidate = 60;

/** Pre-build CMS posts plus the sample that ships with the repo. */
export async function generateStaticParams() {
  const sample = blogPosts.map((p) => ({ slug: p.slug }));
  if (!isSanityConfigured || !client) return sample;
  try {
    const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
    const fromCms = slugs.map((s) => ({ slug: s.slug }));
    const seen = new Set(fromCms.map((s) => s.slug));
    return [...fromCms, ...sample.filter((s) => !seen.has(s.slug))];
  } catch {
    return sample;
  }
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const fallback = blogPosts.find((p) => p.slug === slug) ?? null;
  return sanityFetch<BlogPost | null>({
    query: POST_QUERY,
    params: { slug },
    fallback,
    tags: [`post:${slug}`],
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Article not found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const published = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <>
      <article className="bg-white">
        <div className="shell pb-11 pt-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="mx-auto max-w-3xl">
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-navy/55">
              {post.categories?.[0] && (
                <span className="rounded-full bg-soft-teal px-3 py-1 font-heading text-[12.5px] font-medium text-teal">
                  {post.categories[0].title}
                </span>
              )}
              {published && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {published}
                </span>
              )}
              {post.readingMinutes && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingMinutes} min read
                </span>
              )}
            </div>

            <h1 className="mt-4 font-heading text-[34px] font-semibold leading-[1.15] text-navy sm:text-[42px]">
              {post.title}
            </h1>
            <p className="mt-5 text-[18px] leading-relaxed text-navy/70">{post.excerpt}</p>

            {post.author && (
              <div className="mt-7 flex items-center gap-3 border-t border-navy/[0.08] pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-soft-teal text-teal">
                  <Person className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-[14px] font-semibold text-navy">
                    {post.author.name}
                  </p>
                  {post.author.role && (
                    <p className="text-[13px] text-navy/60">{post.author.role}</p>
                  )}
                </div>
              </div>
            )}

            {post.body ? (
              <div className="mt-4">
                <PortableBody value={post.body} />
              </div>
            ) : null}

            {/* Every article ends by pointing somewhere useful. */}
            <div className="mt-12 rounded-2xl bg-soft-teal/45 p-7 lg:p-9">
              <h2 className="font-heading text-[19.5px] font-semibold text-navy">
                Wondering whether this applies to you?
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-navy/72">
                Our free ADHD quiz takes about three minutes and tells you whether a full
                assessment is worth considering. It is not a diagnosis.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/adhd-quiz"
                  className="inline-flex items-center gap-2 rounded-lg bg-coral px-6 py-3 font-heading text-[14px] font-medium text-white transition-colors hover:bg-coral/90"
                >
                  Take the free quiz
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 rounded-lg border border-teal/45 bg-white px-6 py-3 font-heading text-[14px] font-medium text-teal transition-colors hover:border-teal hover:bg-soft-teal/50"
                >
                  Book a free consultation
                </Link>
              </div>
            </div>

            <div className="mt-10 border-t border-navy/[0.08] pt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-heading text-[14px] font-medium text-navy/70 transition-colors hover:text-navy"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                All articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBand
        title="Ready to take the first step?"
        body="Book a free consultation and let our team guide you."
        background="ivory"
      />
    </>
  );
}
