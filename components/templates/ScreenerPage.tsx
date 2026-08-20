import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { HeroFeatureCards, type HeroFeature } from '@/components/sections/Hero';
import { CardGrid, type CardItem } from '@/components/sections/CardGrid';
import { ProcessRow, type Step } from '@/components/sections/Steps';
import { TickList } from '@/components/ui/TickList';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Brain } from '@/components/icons';
import type { Crumb } from '@/components/ui/Breadcrumb';

export interface ScreenerPageProps {
  crumbs: Crumb[];
  title: string;
  lede: string;
  body: string;
  image: { src: string; alt: string };
  features: HeroFeature[];
  what: { heading: string; body: string; checksHeading: string; checks: string[] };
  who: { heading: string; items: CardItem[] };
  how: { heading: string; steps: Step[] };
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
  what,
  who,
  how,
  ctaTitle,
  quizHref,
}: ScreenerPageProps) {
  return (
    <>
      <Hero
        crumbs={crumbs}
        title={title}
        lede={lede}
        body={body}
        primaryCta={{ label: 'Start the Screener', href: quizHref ?? '#screener' }}
        secondaryCta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        image={image}
      />

      <HeroFeatureCards items={features} />

      {/* What is …? / What can it explore? */}
      <section className="bg-white">
        <div className="shell py-16 lg:py-20">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-blush/55 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">{what.heading}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/72">{what.body}</p>
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
        title={`Take the ${title.toLowerCase()} today`}
        body={
          quizHref
            ? 'It is completely free, takes about three minutes, and there is no obligation to go any further.'
            : 'It is completely free, takes around ten minutes, and there is no obligation to go any further.'
        }
        cta={{ label: 'Start the Screener', href: quizHref ?? '#screener' }}
        icon={Brain}
        background="white"
      />

      <ProcessRow title={how.heading} steps={how.steps} background="white" />

      <section id="screener" className="scroll-mt-24 bg-ivory">
        <div className="shell py-16 lg:py-20">
          {quizHref ? (
            <>
              <SectionHeading
                title="Start your screener"
                subtitle="Free, confidential and about three minutes. Your answers never leave your browser."
              />
              <div className="mx-auto max-w-2xl rounded-2xl border border-navy/[0.07] bg-white p-10 text-center shadow-card">
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
                subtitle="The screener form will appear here once connected to your screening platform."
              />
              <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-teal/40 bg-white p-12 text-center">
                <p className="text-[15px] text-navy/60">
                  Screener integration point — connect your assessment provider or form backend here.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBand
        title={ctaTitle}
        body="Whatever your result, our team can help you decide what to do next."
        background="white"
      />
    </>
  );
}
