import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { imageUrl } from '@/sanity/image';

/**
 * Renders Sanity Portable Text in the site's type scale. Without an explicit
 * component map, rich text falls back to unstyled tags — this keeps article
 * bodies consistent with the rest of the design system.
 */
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-[24px] font-semibold text-navy sm:text-[27px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-heading text-[18px] font-semibold text-navy">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 font-heading text-[15.5px] font-semibold text-navy">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-[14.5px] leading-[1.75] text-navy/75">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 rounded-r-xl border-l-[3px] border-teal bg-soft-teal/40 px-6 py-4 text-[14.5px] italic leading-relaxed text-navy/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 space-y-2.5 pl-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-inside list-decimal space-y-2.5 pl-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative pl-6 text-[14.5px] leading-relaxed text-navy/75 before:absolute before:left-0 before:top-[9px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-teal">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[14.5px] leading-relaxed text-navy/75">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-navy">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = String(value?.href ?? '');
      const external = /^https?:\/\//.test(href);
      return external ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-teal underline underline-offset-2 hover:text-navy"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className="text-teal underline underline-offset-2 hover:text-navy">
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const src = imageUrl(value, 1200);
      if (!src) return null;
      return (
        <figure className="mt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src={src}
              alt={value?.alt ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          {value?.alt && (
            <figcaption className="mt-2.5 text-center text-[12px] text-navy/55">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableBody({ value }: { value: unknown }) {
  if (!value) return null;
  return <PortableText value={value as never} components={components} />;
}
