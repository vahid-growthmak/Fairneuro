import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns, type CardItem } from '@/components/sections/CardGrid';
import { JourneySteps, NumberedSteps, type Step } from '@/components/sections/Steps';
import { FairStandard } from '@/components/sections/Panels';
import { TestimonialGrid } from '@/components/sections/Testimonials';
import type { Crumb } from '@/components/ui/Breadcrumb';

export interface AssessmentPageProps {
  crumbs: Crumb[];
  title: string;
  lede: string;
  body: string;
  image: { src: string; alt: string };
  ticks?: string[];
  /** "Is an ADHD assessment right for you?" */
  signals: { heading: string; sub?: string; items: CardItem[] };
  /** "What's included in …" */
  includes: { heading: string; steps: Step[] };
  /** "Who is this assessment for?" */
  audience: { heading: string; items: CardItem[] };
  /** Bottom trust strip. */
  trust: CardItem[];
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

      <IconColumns
        title={signals.heading}
        subtitle={signals.sub}
        items={signals.items}
        columns={6}
        background="white"
      />

      <PromptBand title={promptTitle} body={promptBody} background="white" />

      <NumberedSteps title={includes.heading} steps={includes.steps} background="white" />

      <CardGrid
        title={audience.heading}
        items={audience.items}
        columns={3}
        cardAlign="left"
        background="white"
      />

      <IconColumns
        items={trust}
        columns={trust.length >= 6 ? 6 : 5}
        boxed
        compact
        background="white"
      />

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
