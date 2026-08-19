import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns, type CardItem } from '@/components/sections/CardGrid';
import { NumberedSteps, type Step } from '@/components/sections/Steps';
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

      <CtaBand title={ctaTitle} body={ctaBody} background="white" />
    </>
  );
}
