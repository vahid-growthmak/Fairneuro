import Link from 'next/link';
import { IconBadge, type IconType } from '@/components/ui/IconBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/icons';
import { accents, accentCycle, cycle, type Accent } from '@/lib/accents';
import { cn } from '@/lib/cn';

export interface CardItem {
  icon: IconType;
  title: string;
  desc?: string;
  href?: string;
  accent?: Accent;
  linkLabel?: string;
}

/**
 * The workhorse grid: "Our support services", "Who can refer?",
 * "What makes us different", etc. Cards optionally carry a coloured
 * "Learn more →" link matching their accent.
 */
export function CardGrid({
  title,
  subtitle,
  items,
  columns = 4,
  align = 'center',
  serif = true,
  underline = false,
  background = 'white',
  cardAlign = 'center',
  className,
}: {
  title?: string;
  subtitle?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4 | 5 | 6;
  align?: 'center' | 'left';
  serif?: boolean;
  underline?: boolean;
  background?: 'white' | 'ivory' | 'soft-teal';
  cardAlign?: 'center' | 'left';
  className?: string;
}) {
  const cols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }[columns];

  const bg = {
    white: 'bg-white',
    ivory: 'bg-ivory',
    'soft-teal': 'bg-soft-teal/45',
  }[background];

  return (
    <section className={cn(bg, className)}>
      <div className="shell py-16 lg:py-20">
        {title && (
          <SectionHeading
            title={title}
            subtitle={subtitle}
            align={align}
            serif={serif}
            underline={underline}
          />
        )}
        <div className={cn('grid gap-4', cols)}>
          {items.map((item, i) => {
            const accent = item.accent ?? cycle(accentCycle, i);
            const a = accents[accent];
            const inner = (
              <>
                <IconBadge
                  icon={item.icon}
                  accent={accent}
                  size="md"
                  className={cardAlign === 'center' ? 'mx-auto' : undefined}
                />
                <h3 className="mt-4 font-heading text-[15px] font-semibold leading-snug text-navy">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-navy/65">{item.desc}</p>
                )}
                {item.href && (
                  <span
                    className={cn(
                      'mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium',
                      a.link,
                    )}
                  >
                    {item.linkLabel ?? 'Learn more'}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                )}
              </>
            );

            const cls = cn(
              'group flex flex-col rounded-xl border border-navy/[0.07] bg-white p-6 shadow-card transition-all duration-200',
              item.href && 'hover:-translate-y-0.5 hover:border-navy/[0.12] hover:shadow-card-hover',
              cardAlign === 'center' && 'text-center items-center',
            );

            return item.href ? (
              <Link key={item.title} href={item.href} className={cls}>
                {inner}
              </Link>
            ) : (
              <div key={item.title} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Borderless column row with thin dividers — "Is an ADHD assessment right
 * for you?", "How X can help", trust strips.
 */
export function IconColumns({
  title,
  subtitle,
  items,
  columns = 6,
  background = 'white',
  boxed = false,
  compact = false,
  serif = true,
}: {
  title?: string;
  subtitle?: string;
  items: CardItem[];
  columns?: 4 | 5 | 6 | 7;
  background?: 'white' | 'ivory' | 'soft-teal';
  /** Wrap the row in a rounded panel (used by trust strips). */
  boxed?: boolean;
  /** Title-only cells with no description. */
  compact?: boolean;
  serif?: boolean;
}) {
  const cols = {
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-2 lg:grid-cols-5',
    6: 'sm:grid-cols-3 lg:grid-cols-6',
    7: 'sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7',
  }[columns];

  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-16 lg:py-20">
        {title && <SectionHeading title={title} subtitle={subtitle} serif={serif} />}
        <div
          className={cn(
            'grid gap-y-9',
            cols,
            boxed && 'rounded-2xl border border-navy/[0.06] bg-white p-8 shadow-card',
          )}
        >
          {items.map((item, i) => {
            const accent = item.accent ?? cycle(accentCycle, i);
            return (
              <div
                key={item.title}
                className={cn(
                  'px-5 text-center',
                  i > 0 && 'lg:border-l lg:border-navy/[0.09]',
                )}
              >
                <IconBadge icon={item.icon} accent={accent} size="md" className="mx-auto" />
                <p
                  className={cn(
                    'mx-auto mt-3.5 max-w-[16rem] font-heading text-[13px] font-semibold leading-snug text-navy',
                    compact && 'text-[13.5px]',
                  )}
                >
                  {item.title}
                </p>
                {item.desc && (
                  <p className="mx-auto mt-2 max-w-[16rem] text-[11.5px] leading-relaxed text-navy/62">
                    {item.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
