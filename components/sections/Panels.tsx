import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { IconBadge, type IconType } from '@/components/ui/IconBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TickList } from '@/components/ui/TickList';
import { Quote } from '@/components/icons';
import { Stars, type Testimonial } from './Testimonials';
import { accents, accentCycle, cycle, type Accent } from '@/lib/accents';
import { cn } from '@/lib/cn';

/**
 * Two-column band: heading + copy + CTA on the left, divided icon
 * columns on the right ("Included in every assessment", "Designed around you").
 */
export function SplitFeatureBand({
  title,
  body,
  cta,
  items,
  background = 'soft-teal',
}: {
  title: string;
  body?: string;
  cta?: { label: string; href: string };
  items: { icon: IconType; title: string; desc?: string; accent?: Accent }[];
  background?: 'white' | 'ivory' | 'soft-teal';
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-11 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] lg:gap-14">
          <div data-reveal="left">
            <h2 className="font-heading text-[26px] font-semibold leading-snug text-navy sm:text-[29px]">
              {title}
            </h2>
            {body && <p className="mt-4 text-[15px] leading-relaxed text-navy/68">{body}</p>}
            {cta && (
              <Button href={cta.href} variant="tertiary" className="mt-6">
                {cta.label}
              </Button>
            )}
          </div>

          <div data-reveal-stagger="0.07" className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={cn('px-5 text-center', i > 0 && 'lg:border-l lg:border-navy/[0.09]')}
              >
                <IconBadge
                  icon={item.icon}
                  accent={item.accent ?? cycle(accentCycle, i)}
                  size="md"
                  className="mx-auto"
                />
                <h3 className="mt-3.5 font-heading text-[15px] font-semibold leading-snug text-navy">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="mt-2 text-[12.5px] leading-relaxed text-navy/62">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Benefits panel: check list on the left, decorative line illustration right.
 */
export function BenefitsPanel({
  title,
  items,
  background = 'soft-teal',
  columns = 5,
}: {
  title: string;
  items: { title: string; desc?: string }[];
  background?: 'white' | 'ivory' | 'soft-teal';
  columns?: 4 | 5;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-11 lg:py-14">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl bg-soft-teal/70 px-7 py-10 lg:px-10"
        >
          <h2 className="mb-9 font-heading text-[26px] font-semibold text-navy sm:text-[29px]">
            {title}
          </h2>
          <div
            data-reveal-stagger="0.07"
            className={cn(
              'relative z-10 grid gap-y-8',
              columns === 5 ? 'sm:grid-cols-2 lg:grid-cols-5' : 'sm:grid-cols-2 lg:grid-cols-4',
            )}
          >
            {items.map((item, i) => (
              <div
                key={item.title}
                className={cn('px-5 text-center', i > 0 && 'lg:border-l lg:border-navy/[0.09]')}
              >
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border-[1.6px] border-teal">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-teal" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12.6 4.4 4.4L19 7.4" />
                  </svg>
                </span>
                <h3 className="mt-3.5 font-heading text-[14px] font-semibold text-navy">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="mt-2 text-[12.5px] leading-relaxed text-navy/62">{item.desc}</p>
                )}
              </div>
            ))}
          </div>

          {/* potted-plant line art, as in the mockups */}
          <svg
            viewBox="0 0 120 130"
            aria-hidden="true"
            data-parallax="22"
            data-float="6"
            className="pointer-events-none absolute -bottom-4 right-2 hidden h-[130px] w-[120px] text-teal/25 lg:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M40 92h40l-5 32H45Z" />
            <path d="M36 92h48" />
            <path d="M60 92V44" />
            <path d="M60 62c-14 0-22-8-22-20 14 0 22 8 22 20Z" />
            <path d="M60 74c14 0 22-8 22-20-14 0-22 8-22 20Z" />
            <path d="M60 48c0-12 6-20 16-22 0 12-6 20-16 22Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/**
 * Left copy + tick list, right testimonial card ("Built on trust.",
 * "Why book a free consultation?").
 */
export function TrustSplit({
  title,
  body,
  ticks,
  testimonial,
  background = 'soft-teal',
  boxed = true,
}: {
  title: string;
  body?: string;
  ticks: string[];
  testimonial: Testimonial;
  background?: 'white' | 'ivory' | 'soft-teal';
  boxed?: boolean;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-11 lg:py-14">
        <div
          className={cn(
            'grid items-center gap-9 lg:grid-cols-2 lg:gap-14',
            boxed && 'rounded-2xl bg-soft-teal/60 px-7 py-10 lg:px-10',
          )}
        >
          <div data-reveal="left">
            <h2 className="font-heading text-[26px] font-semibold leading-snug text-navy sm:text-[29px]">
              {title}
            </h2>
            {body && <p className="mt-4 text-[15px] leading-relaxed text-navy/68">{body}</p>}
            <TickList items={ticks} className="mt-6" />
          </div>

          <figure
            data-reveal="right"
            className="rounded-xl border border-navy/[0.07] bg-white p-7 shadow-card"
          >
            <Quote className="h-7 w-7 text-teal/70" />
            <blockquote className="mt-4 text-[16px] leading-relaxed text-navy/80">
              {testimonial.quote}
            </blockquote>
            <Stars count={testimonial.stars ?? 5} className="mt-5" />
            <figcaption className="mt-3 text-[13px] text-navy/58">
              {testimonial.role ?? testimonial.name}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Wide tinted audience cards with a photo (Assessments hub). */
export function AudienceCards({
  items,
}: {
  items: { title: string; desc: string; href: string; image: string; tone: 'teal' | 'coral' }[];
}) {
  return (
    <section className="bg-ivory">
      <div className="shell pb-6">
        <div data-reveal-stagger="0.1" className="grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                'group grid grid-cols-[minmax(0,1fr)_150px] items-center gap-4 overflow-hidden rounded-2xl p-7 transition-shadow hover:shadow-card-hover sm:grid-cols-[minmax(0,1fr)_190px]',
                item.tone === 'teal' ? 'bg-soft-teal/70' : 'bg-blush/70',
              )}
            >
              <div>
                <h3 className="font-heading text-[21.5px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy/68">{item.desc}</p>
                <span
                  className={cn(
                    'mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium',
                    item.tone === 'teal' ? 'text-teal' : 'text-coral',
                  )}
                >
                  Explore
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
              <div className="blob-mask relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="190px"
                  data-parallax-zoom="1.06"
                  className="object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The FAIR Standard™ four-letter band. */
export function FairStandard({
  title = 'The FAIR Standard\u2122',
  background = 'soft-teal',
  letters = [
    { letter: 'F', word: 'Fast', desc: 'Efficient access without unnecessary barriers.', accent: 'teal' as Accent },
    { letter: 'A', word: 'Accessible', desc: 'Straightforward, transparent and designed around real people.', accent: 'coral' as Accent },
    { letter: 'I', word: 'Integrated', desc: 'Assessment connected to the support that can follow.', accent: 'orange' as Accent },
    { letter: 'R', word: 'Reliable', desc: 'Professional assessment and care you can have confidence in.', accent: 'navy' as Accent },
  ],
  serif = false,
}: {
  /** Some pages introduce the framework as "Why choose Fairneuro?". */
  title?: string;
  background?: 'white' | 'ivory' | 'soft-teal';
  letters?: { letter: string; word: string; desc: string; accent: Accent }[];
  serif?: boolean;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-11 lg:py-14">
        <SectionHeading
          title={title}
          subtitle="Every Fairneuro journey is built around four principles."
          serif={serif}
        />
        <div className="grid gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {letters.map((l, i) => {
            const a = accents[l.accent];
            // `navy` is the one accent with no pastel of its own — its tint is a
            // neutral grey beside the other three. Pair the navy letter with the
            // soft-blue tile so all four read as pastels; letter colours are
            // untouched.
            const tile = l.accent === 'navy' ? 'bg-soft-blue' : a.bg;
            // Each letter leads its own word and description in by a beat, so
            // the row reads left to right rather than arriving all at once.
            const beat = 0.08 * i;
            return (
              <div
                key={l.letter}
                className={cn(
                  'group px-6 text-center',
                  i > 0 && 'lg:border-l lg:border-navy/[0.1]',
                )}
              >
                {/* Two nested spans on purpose: GSAP owns the outer transform
                    (the pop-in and the idle drift), CSS owns the inner one (the
                    hover lift). Sharing one element would mean a CSS transition
                    interpolating GSAP's per-frame writes, which smears. */}
                <span data-reveal="pop" data-reveal-delay={beat} data-float="4" className="block">
                  <span
                    className={cn(
                      'mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-[28px]',
                      'transition-[transform,box-shadow] duration-300 ease-out',
                      'group-hover:-translate-y-1.5 group-hover:rotate-[-5deg] group-hover:shadow-card-hover',
                      tile,
                    )}
                  >
                    <span
                      className={cn(
                        'font-heading text-[46px] font-semibold leading-none',
                        'transition-transform duration-300 ease-out group-hover:scale-[1.12]',
                        a.fg,
                      )}
                    >
                      {l.letter}
                    </span>
                  </span>
                </span>

                <h3
                  data-reveal
                  data-reveal-delay={beat + 0.12}
                  className="mt-4 font-heading text-[16.5px] font-semibold text-navy"
                >
                  {l.word}
                </h3>
                <p
                  data-reveal
                  data-reveal-delay={beat + 0.16}
                  className="mx-auto mt-2 max-w-[15rem] text-[13px] leading-relaxed text-navy/62"
                >
                  {l.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
