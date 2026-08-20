import { IconBadge, type IconType } from '@/components/ui/IconBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/icons';
import { accents, cycle, solidStep, stepCycle, type Accent } from '@/lib/accents';
import { cn } from '@/lib/cn';

export interface Step {
  icon: IconType;
  title: string;
  desc?: string;
  accent?: Accent;
}

/**
 * "What's included in an ADHD assessment?" — numbered badges sitting on a
 * dotted rule, pastel icon below, then title + description.
 */
export function NumberedSteps({
  title,
  subtitle,
  steps,
  background = 'white',
  serif = false,
}: {
  title?: string;
  subtitle?: string;
  steps: Step[];
  background?: 'white' | 'ivory' | 'soft-teal';
  serif?: boolean;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-16 lg:py-20">
        {title && <SectionHeading title={title} subtitle={subtitle} serif={serif} />}

        <div className="relative">
          {/* dotted connector, desktop only */}
          <span
            aria-hidden
            className="absolute left-[8%] right-[8%] top-[13px] hidden border-t-2 border-dashed border-navy/15 lg:block"
          />
          <div
            data-reveal-stagger
            className="relative grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            style={{ gridTemplateColumns: undefined }}
          >
            {steps.map((step, i) => {
              const accent = step.accent ?? cycle(stepCycle, i);
              return (
                <div key={step.title} data-reveal className="text-center">
                  <span
                    className={cn(
                      'relative z-10 mx-auto flex h-[26px] w-[26px] items-center justify-center rounded-full font-heading text-[13px] font-semibold ring-4 ring-white',
                      solidStep[accent],
                    )}
                  >
                    {i + 1}
                  </span>
                  <IconBadge icon={step.icon} accent={accent} size="md" className="mx-auto mt-4" />
                  <h3 className="mx-auto mt-3 max-w-[13rem] font-heading text-[15px] font-semibold leading-snug text-navy">
                    {step.title}
                  </h3>
                  {step.desc && (
                    <p className="mx-auto mt-2 max-w-[14rem] text-[12.5px] leading-relaxed text-navy/62">
                      {step.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * "Your journey with Fairneuro" — solid filled circles joined by dotted
 * connectors, used on the homepage and assessment hub.
 */
export function JourneySteps({
  title,
  subtitle,
  steps,
  background = 'white',
  connector = 'dotted',
  serif = false,
}: {
  title?: string;
  subtitle?: string;
  steps: Step[];
  background?: 'white' | 'ivory' | 'soft-teal';
  connector?: 'dotted' | 'arrow';
  serif?: boolean;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-16 lg:py-20">
        {title && <SectionHeading title={title} subtitle={subtitle} serif={serif} />}

        <div className="relative">
          {connector === 'dotted' && (
            <span
              aria-hidden
              className="absolute left-[9%] right-[9%] top-[30px] hidden border-t-2 border-dotted border-navy/20 lg:block"
            />
          )}
          <div className="grid gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step, i) => {
              const accent = step.accent ?? cycle(stepCycle, i);
              return (
                <div key={step.title} className="relative text-center">
                  <span
                    className={cn(
                      'relative z-10 mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full ring-[6px] ring-white',
                      solidStep[accent],
                    )}
                  >
                    <step.icon className="h-[30px] w-[30px]" />
                  </span>
                  {connector === 'arrow' && i < steps.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="absolute right-[-14px] top-[22px] hidden h-4 w-4 text-navy/25 xl:block"
                    />
                  )}
                  <h3 className="mt-4 font-heading text-[16px] font-semibold text-navy">
                    {i + 1}. {step.title}
                  </h3>
                  {step.desc && (
                    <p className="mx-auto mt-2 max-w-[12rem] text-[13px] leading-[1.55] text-navy/62">
                      {step.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Horizontal process row inside a tinted panel — "How support works". */
export function ProcessRow({
  title,
  steps,
  background = 'ivory',
  serif = false,
}: {
  title?: string;
  steps: Step[];
  background?: 'white' | 'ivory' | 'soft-teal';
  serif?: boolean;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-16 lg:py-20">
        <div className="rounded-2xl bg-white/70 p-8 shadow-card lg:p-10">
          {title && (
            <h2
              className={cn(
                'mb-9 text-center text-[26px] font-semibold text-navy sm:text-[29px]',
                serif ? 'font-display' : 'font-heading',
              )}
            >
              {title}
            </h2>
          )}
          <div data-reveal-stagger className="grid items-start gap-y-9 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
            {steps.map((step, i) => {
              const accent = step.accent ?? cycle(stepCycle, i);
              return (
                <div key={step.title} data-reveal className="relative px-3 text-center">
                  <IconBadge icon={step.icon} accent={accent} size="md" className="mx-auto" />
                  <h3 className="mt-3.5 font-heading text-[14px] font-semibold text-navy">
                    {i + 1}. {step.title}
                  </h3>
                  {step.desc && (
                    <p className="mx-auto mt-2 max-w-[14rem] text-[12.5px] leading-relaxed text-navy/62">
                      {step.desc}
                    </p>
                  )}
                  {i < steps.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="absolute right-[-10px] top-[22px] hidden h-4 w-4 text-navy/25 lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Tall step cards with numbered badge + illustration foot (design page 8). */
export function StepCards({
  title,
  subtitle,
  steps,
  background = 'white',
  serif = false,
}: {
  title?: string;
  subtitle?: string;
  steps: Step[];
  background?: 'white' | 'ivory' | 'soft-teal';
  serif?: boolean;
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell py-16 lg:py-20">
        {title && <SectionHeading title={title} subtitle={subtitle} serif={serif} />}
        <div data-reveal-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((step, i) => {
            const accent = step.accent ?? cycle(stepCycle, i);
            const a = accents[accent];
            return (
              <div
                data-reveal
                key={step.title}
                className="relative flex flex-col rounded-xl border border-navy/[0.07] bg-white p-5 pt-7 text-center shadow-card"
              >
                <span
                  className={cn(
                    'absolute left-4 top-4 flex h-[24px] w-[24px] items-center justify-center rounded-full font-heading text-[12.5px] font-semibold',
                    solidStep[accent],
                  )}
                >
                  {i + 1}
                </span>
                <IconBadge icon={step.icon} accent={accent} size="md" className="mx-auto" />
                <h3 className="mt-3.5 font-heading text-[15.5px] font-semibold text-navy">
                  {step.title}
                </h3>
                {step.desc && (
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-navy/62">{step.desc}</p>
                )}
                <span className={cn('mt-auto pt-5', a.fg)}>
                  <step.icon className="mx-auto h-9 w-9 opacity-25" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
