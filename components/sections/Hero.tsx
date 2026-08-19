import type { ReactNode } from 'react';
import { BlobPhoto } from '@/components/ui/BlobPhoto';
import { Breadcrumb, type Crumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { IconBadge, type IconType } from '@/components/ui/IconBadge';
import { TickRow } from '@/components/ui/TickList';
import { Calendar, PlayCircle } from '@/components/icons';
import { accents, type Accent } from '@/lib/accents';
import { cn } from '@/lib/cn';

export interface HeroFeature {
  icon: IconType;
  title: string;
  desc?: string;
  accent?: Accent;
}

export interface HeroProps {
  crumbs?: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  /** Teal sub-headline that sits directly beneath the H1. */
  lede?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  ticks?: string[];
  image: { src: string; alt: string };
  /** Compact icon strip rendered between the body copy and the CTAs. */
  features?: HeroFeature[];
  /** Inner pages sit on warm ivory; some sit on white. */
  background?: 'ivory' | 'white';
  /** Homepage uses the Poppins heading face; inner pages use the display serif. */
  titleFont?: 'serif' | 'sans';
  titleClassName?: string;
}

export function Hero({
  crumbs,
  eyebrow,
  title,
  lede,
  body,
  primaryCta = { label: 'Book a Free Consultation', href: '/book-consultation' },
  secondaryCta,
  ticks,
  image,
  features,
  background = 'ivory',
  titleFont = 'serif',
  titleClassName,
}: HeroProps) {
  return (
    <section className={cn('relative overflow-hidden', background === 'ivory' ? 'bg-ivory' : 'bg-white')}>
      <div className="shell pb-10 pt-8 lg:pb-12 lg:pt-9">
        {crumbs && <Breadcrumb items={crumbs} />}

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
          <div>
            {eyebrow && (
              <p className="mb-4 font-heading text-[11.5px] font-semibold uppercase tracking-[0.18em] text-teal">
                {eyebrow}
              </p>
            )}

            <h1
              className={cn(
                'text-[40px] font-semibold leading-[1.06] text-navy sm:text-[50px] lg:text-[57px]',
                titleFont === 'serif' ? 'font-display' : 'font-heading tracking-[-0.015em]',
                titleClassName,
              )}
            >
              {title}
            </h1>

            {lede && (
              <p className="mt-3.5 font-heading text-[18px] font-medium leading-snug text-teal sm:text-[20px]">
                {lede}
              </p>
            )}

            {body && (
              <p className="mt-5 max-w-[21.5rem] text-[15px] leading-[1.65] text-navy/70">{body}</p>
            )}

            {features && (
              <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-5">
                {features.map((f, i) => (
                  <li
                    key={f.title}
                    className={cn(
                      'max-w-[150px]',
                      i > 0 && 'border-l border-navy/10 pl-8',
                    )}
                  >
                    <f.icon className={cn('mb-2 h-6 w-6', accents[f.accent ?? 'teal'].fg)} />
                    <p className="font-heading text-[13px] font-semibold text-navy">{f.title}</p>
                    {f.desc && (
                      <p className="mt-1 text-[11.5px] leading-relaxed text-navy/60">{f.desc}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Button href={primaryCta.href} icon={<Calendar />} size="lg">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="tertiary"
                  icon={<PlayCircle />}
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {ticks && <TickRow items={ticks} className="mt-5" />}
          </div>

          <BlobPhoto src={image.src} alt={image.alt} priority />
        </div>
      </div>
    </section>
  );
}

/** Variant used by the hero feature strips that sit in their own white cards. */
export function HeroFeatureCards({ items }: { items: HeroFeature[] }) {
  return (
    <section className="bg-ivory">
      <div className="shell pb-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <div
              key={f.title}
              className="flex gap-3.5 rounded-xl border border-navy/[0.07] bg-white p-5 shadow-card"
            >
              <IconBadge icon={f.icon} accent={f.accent ?? (['teal', 'coral', 'orange', 'teal'] as const)[i % 4]} size="sm" />
              <div>
                <p className="font-heading text-[13.5px] font-semibold leading-snug text-navy">
                  {f.title}
                </p>
                {f.desc && (
                  <p className="mt-1.5 text-[12px] leading-relaxed text-navy/62">{f.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
