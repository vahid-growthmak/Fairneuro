'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
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
  serif = false,
  /** Seconds between slides. Autoplay is off entirely for reduced motion. */
  interval = 4,
}: {
  title?: string;
  items: Testimonial[];
  background?: 'white' | 'ivory' | 'soft-teal';
  withAvatar?: boolean;
  serif?: boolean;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const total = items.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total),
    [total],
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  // Quotes rotate on their own, but never for readers who asked for less
  // motion, and never while someone is reading or tabbing through the card.
  useEffect(() => {
    if (total < 2 || paused || reducedMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), interval * 1000);
    return () => window.clearInterval(id);
  }, [total, paused, reducedMotion, interval]);

  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];
  const current = items[index];

  return (
    <section className={bg}>
      <div className="shell py-11 lg:py-14">
        {title && <SectionHeading title={title} serif={serif} />}

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label={title ?? 'Testimonials'}
        >
          <div
            data-reveal="scale"
            className="rounded-2xl border border-navy/[0.07] bg-white p-8 shadow-card sm:p-10"
          >
            <Quote className="mx-auto h-8 w-8 text-teal/70" />
            <div
              key={index}
              className={cn(
                'mt-6 flex animate-fade-in-up flex-col items-center gap-7 text-center',
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
                <blockquote className="text-[16.5px] leading-relaxed text-navy/80">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <p className="mt-4 font-heading text-[15px] font-semibold text-navy">
                  {current.name}
                </p>
                {current.role && (
                  <p className="mt-0.5 text-[13px] text-navy/58">{current.role}</p>
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
                className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-card transition-[transform,color,border-color] duration-200 hover:scale-110 hover:border-teal hover:text-teal lg:flex"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-card transition-[transform,color,border-color] duration-200 hover:scale-110 hover:border-teal hover:text-teal lg:flex"
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
      <div className="shell py-11 lg:py-14">
        {title && <SectionHeading title={title} subtitle={subtitle} />}
        <div data-reveal-stagger="0.08" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name + t.quote.slice(0, 12)}
              className="flex flex-col rounded-xl border border-navy/[0.07] bg-white p-6 shadow-card"
            >
              <Stars count={t.stars ?? 5} className="mb-4" />
              <blockquote className="flex-1 text-[15px] leading-relaxed text-navy/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-navy/[0.07] pt-4">
                <p className="font-heading text-[14px] font-semibold text-navy">{t.name}</p>
                {t.role && <p className="mt-0.5 text-[12.5px] text-navy/55">{t.role}</p>}
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
  /** Seconds between slides. Autoplay is off entirely for reduced motion. */
  interval = 4,
}: {
  items: Testimonial[];
  background?: 'white' | 'ivory' | 'soft-teal';
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const total = items.length;
  const current = items[index];
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  // Quotes rotate on their own, but never for readers who asked for less
  // motion, and never while someone is reading or tabbing through the card.
  useEffect(() => {
    if (total < 2 || paused || reducedMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), interval * 1000);
    return () => window.clearInterval(id);
  }, [total, paused, reducedMotion, interval]);


  return (
    <section className={bg}>
      <div className="shell py-11 lg:py-14">
        <div
          className="relative mx-auto max-w-4xl rounded-2xl border border-navy/[0.07] bg-white px-14 py-10 text-center shadow-card lg:px-16 lg:py-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="What our clients say"
        >
          <Quote className="mx-auto h-8 w-8 text-teal/75" />

          <div key={index} className="animate-fade-in-up">
            <blockquote className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.75] text-navy/80">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <Stars count={current.stars ?? 5} tone="teal" className="mt-4 justify-center" />

            <p className="mt-2.5 text-[14px] text-navy/65">&ndash; {current.name}</p>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-navy/60 transition-[transform,color,background-color] duration-200 hover:scale-110 hover:bg-soft-teal/60 hover:text-teal lg:left-3"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-navy/60 transition-[transform,color,background-color] duration-200 hover:scale-110 hover:bg-soft-teal/60 hover:text-teal lg:right-3"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-7 flex items-center justify-center gap-2">
                {items.map((item, i) => (
                  <button
                    key={item.name + i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1} of ${total}`}
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
