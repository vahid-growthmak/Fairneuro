import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/sections/Bands';
import { PortableBody } from '@/components/sections/PortableBody';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ArrowRight, Calendar, Person } from '@/components/icons';
import { client } from '@/sanity/client';
import { isSanityConfigured } from '@/sanity/env';
import { imageUrl } from '@/sanity/image';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries';

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: { alt?: string };
  body?: unknown;
  author?: { name: string; role?: string; bio?: string; image?: unknown };
  categories?: { title: string; slug: string; accent?: string }[];
}

/** Pre-build article pages that exist at build time. */
export async function generateStaticParams() {
  if (!isSanityConfigured || !client) return [];
  try {
    const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

async function getPost(slug: string) {
  return sanityFetch<Post | null>({
    query: POST_QUERY,
    params: { slug },
    fallback: null,
    tags: [`post:${slug}`],
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Resource not found' };

  const og = imageUrl(post.coverImage as never, 1200, 630);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      ...(og ? { images: [{ url: og, width: 1200, height: 630 }] } : {}),
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const cover = imageUrl(post.coverImage as never, 1400, 760);
  const published = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <>
      <article>
        <header className="bg-ivory">
          <div className="shell pb-12 pt-8">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Resources', href: '/resources' },
                { label: post.title },
              ]}
            />

            {post.categories && post.categories.length > 0 && (
              <ul className="mb-5 flex flex-wrap gap-2">
                {post.categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/resources?topic=${c.slug}`}
                      className="inline-flex rounded-full bg-soft-teal px-3.5 py-1.5 text-[13px] font-medium text-teal transition-colors hover:bg-teal hover:text-white"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <h1 className="max-w-3xl font-heading text-[36px] font-semibold leading-[1.12] text-navy sm:text-[44px]">
              {post.title}
            </h1>

            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-navy/70">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-navy/60">
              {post.author && (
                <span className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-soft-teal">
                    <Person className="h-4 w-4 text-teal" />
                  </span>
                  <span>
                    <span className="font-heading font-semibold text-navy">{post.author.name}</span>
                    {post.author.role && (
                      <span className="ml-1.5 text-navy/55">· {post.author.role}</span>
                    )}
                  </span>
                </span>
              )}
              {published && (
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-teal" />
                  {published}
                </span>
              )}
            </div>
          </div>
        </header>

        {cover && (
          <div className="bg-ivory">
            <div className="shell pb-12">
              <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl">
                <Image
                  src={cover}
                  alt={post.coverImage?.alt ?? post.title}
                  fill
                  priority
                  sizes="(max-width: 1340px) 100vw, 1292px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white">
          <div className="shell py-14">
            <div className="mx-auto max-w-[720px]">
              <PortableBody value={post.body} />

              {post.author?.bio && (
                <aside className="mt-14 rounded-2xl bg-soft-teal/45 p-7">
                  <h2 className="font-heading text-[15.5px] font-semibold text-navy">
                    About {post.author.name}
                  </h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-navy/70">
                    {post.author.bio}
                  </p>
                </aside>
              )}

              <Link
                href="/resources"
                className="mt-12 inline-flex items-center gap-2 text-[15px] font-medium text-teal hover:text-navy"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to all resources
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBand
        title="Not sure what your next step is?"
        body="Book a free consultation and our team will help you find the right pathway."
        background="ivory"
      />
    </>
  );
}
