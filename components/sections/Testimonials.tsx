'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { ArrowRight, Quote, StarFilled } from '@/components/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/cn';

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
  stars?: number;
}

export function Stars({
  count = 5,
  className,
  tone = 'orange',
}: {
  count?: number;
  className?: string;
  tone?: 'orange' | 'teal';
}) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarFilled
          key={i}
          className={cn('h-4 w-4', tone === 'teal' ? 'text-teal' : 'text-orange')}
        />
      ))}
    </div>
  );
}

/** Single-quote carousel with side arrows and dot pagination. */
export function TestimonialCarousel({
  title,
  items,
  background = 'white',
  withAvatar = true,
  serif = true,
}: {
  title?: string;
  items: Testimonial[];
  background?: 'white' | 'ivory' | 'soft-teal';
  withAvatar?: boolean;
  serif?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total),
    [total],
  );

  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];
  const current = items[index];

  return (
    <section className={bg}>
      <div className="shell py-16 lg:py-20">
        {title && <SectionHeading title={title} serif={serif} />}

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl border border-navy/[0.07] bg-white p-8 shadow-card sm:p-10">
            <Quote className="mx-auto h-8 w-8 text-teal/70" />
            <div
              className={cn(
                'mt-6 flex flex-col items-center gap-7 text-center',
                withAvatar && current.avatar && 'sm:flex-row sm:text-left',
              )}
            >
              {withAvatar && current.avatar && (
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-soft-teal">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <Stars
                  count={current.stars ?? 5}
                  className={cn('mb-3', !current.avatar && 'justify-center')}
                />
                <blockquote className="text-[15px] leading-relaxed text-navy/80">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <p className="mt-4 font-heading text-[13.5px] font-semibold text-navy">
                  {current.name}
                </p>
                {current.role && (
                  <p className="mt-0.5 text-[12px] text-navy/58">{current.role}</p>
                )}
              </div>
            </div>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-card transition-colors hover:border-teal hover:text-teal lg:flex"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-card transition-colors hover:border-teal hover:text-teal lg:flex"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-6 flex justify-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    className={cn(
                      'h-2 rounded-full transition-all duration-200',
                      i === index ? 'w-6 bg-teal' : 'w-2 bg-navy/20 hover:bg-navy/35',
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/** Static 2–3 up testimonial grid. */
export function TestimonialGrid({
  title,
  subtitle,
  items,
  background = 'ivory',
}: {
  title?: string;
  subtitle?: string;
  items: Testimonial[];
  background?: 'white' | 'ivory' | 'soft-teal';
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-16 lg:py-20">
        {title && <SectionHeading title={title} subtitle={subtitle} />}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name + t.quote.slice(0, 12)}
              className="flex flex-col rounded-xl border border-navy/[0.07] bg-white p-6 shadow-card"
            >
              <Stars count={t.stars ?? 5} className="mb-4" />
              <blockquote className="flex-1 text-[13.5px] leading-relaxed text-navy/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-navy/[0.07] pt-4">
                <p className="font-heading text-[13px] font-semibold text-navy">{t.name}</p>
                {t.role && <p className="mt-0.5 text-[11.5px] text-navy/55">{t.role}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


/**
 * Card-less centred quote with edge arrows — the homepage treatment in the
 * reference design: quote mark, two-line quote, teal stars, attribution.
 */
export function TestimonialQuote({
  items,
  background = 'ivory',
}: {
  items: Testimonial[];
  background?: 'white' | 'ivory' | 'soft-teal';
}) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const current = items[index];
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <section className={bg}>
      <div className="shell py-14 lg:py-16">
        <div className="relative mx-auto max-w-4xl px-14 text-center">
          <Quote className="mx-auto h-8 w-8 text-teal/75" />

          <blockquote className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-[1.75] text-navy/80">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <Stars count={current.stars ?? 5} tone="teal" className="mt-4 justify-center" />

          <p className="mt-2.5 text-[13px] text-navy/65">&ndash; {current.name}</p>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy/70 transition-colors hover:bg-white hover:text-teal"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy/70 transition-colors hover:bg-white hover:text-teal"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
