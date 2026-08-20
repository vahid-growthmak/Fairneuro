import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns, type CardItem } from '@/components/sections/CardGrid';
import { JourneySteps, NumberedSteps, type Step } from '@/components/sections/Steps';
import { FairStandard } from '@/components/sections/Panels';
import { TestimonialGrid } from '@/components/sections/Testimonials';
import { TickList } from '@/components/ui/TickList';
import type { Crumb } from '@/components/ui/Breadcrumb';

export interface AssessmentPageProps {
  crumbs: Crumb[];
  title: string;
  lede: string;
  body: string;
  image: { src: string; alt: string };
  ticks?: string[];
  /** "Is an ADHD assessment right for you?" */
  signals?: { heading: string; sub?: string; items: CardItem[] };
  /** Two-panel explainer with a tick list, used by the combined child pathway. */
  explainer?: { heading: string; body: string[]; checksHeading: string; checks: string[] };
  /** "What's included in …" */
  includes: { heading: string; steps: Step[] };
  /** "Who is this assessment for?" */
  audience: { heading: string; items: CardItem[] };
  /** Bottom trust strip. */
  trust?: CardItem[];
  /** Feature strip under the hero. */
  highlights?: CardItem[];
  /** "The Fairneuro Assessment Journey" — shown when supplied. */
  journey?: { heading: string; steps: Step[] };
  /** "What you receive" — shown when supplied. */
  receive?: { heading: string; items: CardItem[] };
  /** FAIR panel — pass true, or a heading to introduce it differently. */
  fair?: boolean | { title: string };
  /** Client quotes above the closing CTA. */
  testimonials?: { quote: string; name: string; role?: string }[];
  promptTitle?: string;
  promptBody?: string;
  ctaTitle?: string;
  ctaBody?: string;
}

/**
 * The assessment detail template shared by every ADHD / autism / dyslexia /
 * combined page (design pages 5–7, 10–14, 45–48, 64–65).
 */
export function AssessmentPage({
  crumbs,
  title,
  lede,
  body,
  image,
  ticks = ['Free consultation', 'No obligation', 'Confidential', 'Here to help'],
  signals,
  explainer,
  includes,
  audience,
  trust,
  highlights,
  journey,
  receive,
  fair,
  testimonials,
  promptTitle = 'Not sure if this is the right assessment for you?',
  promptBody = "Book a free consultation with our team and we'll help you find the right pathway.",
  ctaTitle = 'Ready to take the first step?',
  ctaBody = 'Book a free consultation and let our team guide you.',
}: AssessmentPageProps) {
  return (
    <>
      <Hero
        crumbs={crumbs}
        title={title}
        lede={lede}
        body={body}
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        ticks={ticks}
        image={image}
      />

      {highlights && <IconColumns boxed compact items={highlights} background="white" />}

      {explainer && (
        <section className="bg-white">
          <div className="shell py-11 lg:py-14">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl bg-blush/55 p-8 lg:p-10">
                <h2 className="font-heading text-[24px] font-semibold text-navy">
                  {explainer.heading}
                </h2>
                {explainer.body.map((para) => (
                  <p key={para} className="mt-4 text-[15px] leading-relaxed text-navy/72">
                    {para}
                  </p>
                ))}
              </div>
              <div className="rounded-2xl bg-soft-teal/60 p-8 lg:p-10">
                <h2 className="font-heading text-[24px] font-semibold text-navy">
                  {explainer.checksHeading}
                </h2>
                <TickList className="mt-5" items={explainer.checks} />
              </div>
            </div>
          </div>
        </section>
      )}

      {signals && (
        <IconColumns
          title={signals.heading}
        subtitle={signals.sub}
        items={signals.items}
        columns={6}
        background="white"
        />
      )}

      <PromptBand title={promptTitle} body={promptBody} background="white" />

      <NumberedSteps title={includes.heading} steps={includes.steps} background="white" />

      <CardGrid
        title={audience.heading}
        items={audience.items}
        columns={3}
        cardAlign="left"
        background="white"
      />

      {trust && (
        <IconColumns
          items={trust}
          columns={trust.length >= 6 ? 6 : 5}
          boxed
          compact
          background="white"
        />
      )}

      {journey && <JourneySteps title={journey.heading} steps={journey.steps} background="ivory" />}

      {receive && (
        <CardGrid
          title={receive.heading}
          items={receive.items}
          columns={5}
          cardAlign="left"
          background="white"
        />
      )}

      {fair && (
        <FairStandard
          title={typeof fair === 'object' ? fair.title : undefined}
          background="ivory"
        />
      )}

      {testimonials && <TestimonialGrid items={testimonials} background="white" />}

      <CtaBand title={ctaTitle} body={ctaBody} background="white" />
    </>
  );
}
