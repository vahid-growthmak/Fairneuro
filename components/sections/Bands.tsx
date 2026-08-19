import { Button } from '@/components/ui/Button';
import { IconBadge, type IconType } from '@/components/ui/IconBadge';
import { TickRow } from '@/components/ui/TickList';
import { ArrowRight, Calendar, Check, Question } from '@/components/icons';
import { cn } from '@/lib/cn';

/**
 * The pale "Not sure where to start?" prompt that recurs between sections.
 */
export function PromptBand({
  title,
  body,
  cta = { label: 'Book a Free Consultation', href: '/book-consultation' },
  icon: Icon = Question,
  variant = 'outline',
  background = 'white',
  buttonVariant = 'primary',
}: {
  title: string;
  body?: string;
  cta?: { label: string; href: string };
  icon?: IconType;
  /** `outline` = thin ringed "?" circle, `filled` = pastel icon badge. */
  variant?: 'outline' | 'filled';
  background?: 'white' | 'ivory' | 'soft-teal';
  buttonVariant?: 'primary' | 'secondary';
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell pb-4">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-soft-teal/55 px-7 py-7 sm:flex-row sm:items-center lg:px-9">
          <div className="flex items-center gap-4">
            {variant === 'outline' ? (
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.6px] border-navy/25 sm:flex">
                <Icon className="h-5 w-5 text-navy/70" />
              </span>
            ) : (
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-white sm:flex">
                <Icon className="h-7 w-7" />
              </span>
            )}
            <div>
              <h2 className="font-heading text-[16.5px] font-semibold text-navy">{title}</h2>
              {body && <p className="mt-1.5 max-w-lg text-[13.5px] leading-relaxed text-navy/68">{body}</p>}
            </div>
          </div>
          <Button href={cta.href} variant={buttonVariant} icon={<Calendar />} className="shrink-0">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

/** Decorative leaf line-art used at both ends of the navy CTA band. */
function Leaves({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 120"
      className={cn('pointer-events-none absolute h-[120px] w-[160px] text-white/10', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M10 110C10 60 40 26 96 22c0 46-30 80-76 84Z" />
      <path d="M12 112C28 84 50 62 78 48" />
      <path d="M96 96c0-26 16-44 44-46 0 24-16 42-40 46Z" />
      <path d="M97 97c8-14 20-26 34-33" />
    </svg>
  );
}

/**
 * The navy "Ready to take the first step?" band that closes nearly every page.
 */
export function CtaBand({
  title,
  body,
  cta = { label: 'Book a Free Consultation', href: '/book-consultation' },
  ticks = ['Free', 'No obligation', 'Confidential'],
  tone = 'navy',
  background = 'white',
  layout = 'inline',
  /** The calendar medallion appears on inner pages but not the homepage band. */
  medallion = true,
}: {
  title: string;
  body?: string;
  cta?: { label: string; href: string };
  ticks?: string[] | null;
  tone?: 'navy' | 'teal';
  background?: 'white' | 'ivory' | 'soft-teal';
  /** `inline` puts the ticks under the button, `split` puts them in a right column. */
  layout?: 'inline' | 'split';
  medallion?: boolean;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-12">
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl px-6 py-10 sm:px-10 lg:px-14',
            tone === 'navy' ? 'bg-navy' : 'bg-teal',
          )}
        >
          <Leaves className="-left-6 top-0" />
          <Leaves className="-right-6 bottom-0 scale-x-[-1]" />

          <div
            className={cn(
              'relative flex flex-col items-center gap-7 text-center lg:flex-row lg:text-left',
              layout === 'split' ? 'lg:justify-between' : 'lg:justify-center',
            )}
          >
            {medallion && (
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
                <Calendar className="h-8 w-8 text-navy" />
              </span>
            )}

            <div className="lg:mr-auto">
              <h2 className="font-heading text-[25px] font-semibold text-white sm:text-[28px]">
                {title}
              </h2>
              {body && <p className="mt-2 max-w-xl text-[14px] text-white/75">{body}</p>}
              {layout === 'split' && (
                <div className="mt-6">
                  <Button href={cta.href} variant="secondary" icon={<Calendar />} size="lg">
                    {cta.label}
                  </Button>
                </div>
              )}
            </div>

            {layout === 'inline' && (
              <div className="shrink-0">
                <Button href={cta.href} variant="secondary" icon={<Calendar />} size="lg">
                  {cta.label}
                </Button>
                {ticks && (
                  <ul className="mt-3.5 flex flex-wrap justify-center gap-x-5 gap-y-1.5">
                    {ticks.map((t) => (
                      <li key={t} className="flex items-center gap-1.5 text-[12px] text-white/70">
                        <Check className="h-3 w-3 text-teal" strokeWidth={3} />
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {ticks && layout === 'split' && (
              <ul className="shrink-0 space-y-3.5 self-center border-white/25 lg:border-l lg:pl-14">
                {ticks.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[13.5px] text-white/80">
                    <Check className="h-4 w-4 shrink-0 text-teal" strokeWidth={2.6} />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Wide split band with a heading + copy on the left and a CTA on the right. */
export function SplitBand({
  title,
  body,
  cta,
  icon: Icon,
  tone = 'soft-teal',
  background = 'white',
}: {
  title: string;
  body?: string;
  cta: { label: string; href: string };
  icon: IconType;
  tone?: 'soft-teal' | 'navy';
  background?: 'white' | 'ivory' | 'soft-teal';
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];
  const navy = tone === 'navy';

  return (
    <section className={bg}>
      <div className="shell pb-5">
        <div
          className={cn(
            'flex flex-col items-start justify-between gap-5 rounded-2xl px-6 py-7 sm:flex-row sm:items-center lg:px-9',
            navy ? 'bg-navy' : 'border border-teal/25 bg-soft-teal/55',
          )}
        >
          <div className="flex items-center gap-5">
            <span
              className={cn(
                'hidden h-14 w-14 shrink-0 items-center justify-center rounded-full sm:flex',
                navy ? 'border border-white/30 text-white' : 'bg-teal text-white',
              )}
            >
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <h2
                className={cn(
                  'font-display text-[19px] font-semibold sm:text-[21px]',
                  navy ? 'text-white' : 'text-navy',
                )}
              >
                {title}
              </h2>
              {body && (
                <p className={cn('mt-1.5 max-w-2xl text-[13px]', navy ? 'text-white/72' : 'text-navy/68')}>
                  {body}
                </p>
              )}
            </div>
          </div>
          <Button
            href={cta.href}
            variant={navy ? 'secondary' : 'primary'}
            iconAfter={<ArrowRight />}
            className="shrink-0"
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

/** Stats bar sitting under the homepage hero. */
export function StatsBar({
  items,
}: {
  items: { icon: IconType; value: string; label: string; accent?: 'teal' | 'coral' | 'orange' }[];
}) {
  return (
    <section className="bg-ivory">
      <div className="shell pb-14">
        <div className="grid rounded-2xl border border-navy/[0.06] bg-white shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                'flex items-center gap-4 px-7 py-6',
                i > 0 && 'lg:border-l lg:border-navy/[0.08]',
              )}
            >
              <IconBadge
                icon={item.icon}
                accent={item.accent ?? (['teal', 'coral', 'orange', 'teal'] as const)[i % 4]}
                size="lg"
              />
              <div>
                <p className="font-heading text-[21px] font-semibold leading-tight text-navy">
                  {item.value}
                </p>
                <p className="mt-1 max-w-[9rem] text-[12.5px] leading-[1.35] text-navy/62">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TickRow };
