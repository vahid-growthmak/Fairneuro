import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { HeroFeatureCards, type HeroFeature } from '@/components/sections/Hero';
import { CardGrid, IconColumns, type CardItem } from '@/components/sections/CardGrid';
import { ProcessRow, type Step } from '@/components/sections/Steps';
import { TickList } from '@/components/ui/TickList';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Brain, Calendar } from '@/components/icons';
import type { Crumb } from '@/components/ui/Breadcrumb';

export interface ScreenerPageProps {
  crumbs: Crumb[];
  title: string;
  lede: string;
  body: string;
  image: { src: string; alt: string };
  features: HeroFeature[];
  /** Reassurances under the hero CTAs. */
  ticks?: string[];
  /** Hero and band CTA label, e.g. "Start Dyslexia Screener". */
  startLabel?: string;
  /** Hero secondary CTA. */
  secondaryCta?: { label: string; href: string };
  what: { heading: string; body: string | string[]; checksHeading: string; checks: string[] };
  who: { heading: string; items: CardItem[] };
  how: { heading: string; steps: Step[] };
  /** Band above the CTA inviting people to start. */
  invite?: { title?: string; body?: string };
  /** Reassurance strip at the foot of the page. */
  trust?: CardItem[];
  ctaTitle: string;
  /** Where the working screener lives. Falls back to the integration placeholder. */
  quizHref?: string;
}

/**
 * Free screener template (design pages 49–53).
 */
export function ScreenerPage({
  crumbs,
  title,
  lede,
  body,
  image,
  features,
  ticks,
  startLabel = 'Start the Screener',
  secondaryCta = { label: 'Book a Free Consultation', href: '/book-consultation' },
  what,
  who,
  how,
  invite,
  trust,
  ctaTitle,
  quizHref,
}: ScreenerPageProps) {
  const whatBody = Array.isArray(what.body) ? what.body : [what.body];
  return (
    <>
      <Hero
        crumbs={crumbs}
        title={title}
        lede={lede}
        body={body}
        primaryCta={{ label: startLabel, href: quizHref ?? '#screener' }}
        secondaryCta={secondaryCta}
        ticks={ticks}
        image={image}
      />

      <HeroFeatureCards items={features} />

      {/* What is …? / What can it explore? */}
      <section className="bg-white">
        <div className="shell py-11 lg:py-14">
          <div data-reveal-stagger="0.1" className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-blush/55 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">{what.heading}</h2>
              {whatBody.map((para) => (
                <p key={para} className="mt-4 text-[15px] leading-relaxed text-navy/72">
                  {para}
                </p>
              ))}
            </div>
            <div className="rounded-2xl bg-soft-teal/60 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">
                {what.checksHeading}
              </h2>
              <TickList className="mt-5" items={what.checks} />
            </div>
          </div>
        </div>
      </section>

      <CardGrid
        title={who.heading}
        items={who.items}
        columns={4}
        background="ivory"
        cardAlign="left"
      />

      <SplitBand
        title={invite?.title ?? `Take the ${title} today`}
        body={
          invite?.body ??
          (quizHref
            ? 'It is completely free, takes about three minutes, and there is no obligation to go any further.'
            : 'It is completely free, takes around ten minutes, and there is no obligation to go any further.')
        }
        cta={{ label: startLabel, href: quizHref ?? '#screener' }}
        icon={Brain}
        background="white"
      />

      <ProcessRow title={how.heading} steps={how.steps} background="white" />

      <section id="screener" className="scroll-mt-24 bg-ivory">
        <div className="shell py-11 lg:py-14">
          {quizHref ? (
            <>
              <SectionHeading
                title="Start your screener"
                subtitle="Free, confidential and about three minutes. Your answers never leave your browser."
              />
              <div
                data-reveal="scale"
                className="mx-auto max-w-2xl rounded-2xl border border-navy/[0.07] bg-white p-10 text-center shadow-card"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-soft-teal text-teal">
                  <Brain className="h-7 w-7" />
                </span>
                <p className="mt-5 text-[15px] leading-relaxed text-navy/70">
                  You will answer a short set of questions one at a time, then see your score
                  straight away with a plain-English explanation of what it means.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button href={quizHref} icon={<ArrowRight />}>
                    Start the Screener
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <SectionHeading
                title="Start your screener"
                subtitle="This screener is being finalised. In the meantime our team can talk you through what it covers."
              />
              <div
                data-reveal="scale"
                className="mx-auto max-w-2xl rounded-2xl border border-navy/[0.07] bg-white p-10 text-center shadow-card"
              >
                <p className="text-[15px] leading-relaxed text-navy/70">
                  Book a free consultation and we will help you decide whether a full assessment is
                  the right next step — no screener required.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button href="/book-consultation" icon={<Calendar />}>
                    Book a Free Consultation
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {trust && <IconColumns boxed compact background="ivory" items={trust} />}

      <CtaBand
        title={ctaTitle}
        body="Whatever your result, our team can help you decide what to do next."
        background="white"
      />
    </>
  );
}
