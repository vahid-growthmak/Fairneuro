import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns, type CardItem } from '@/components/sections/CardGrid';
import { NumberedSteps, type Step } from '@/components/sections/Steps';
import type { Crumb } from '@/components/ui/Breadcrumb';

export interface SupportServicePageProps {
  crumbs: Crumb[];
  title: string;
  lede: string;
  body: string;
  image: { src: string; alt: string };
  ticks?: string[];
  /** "Who is X for?" */
  audience: { heading: string; items: CardItem[] };
  /** "How X can help" — label-only cells. Omitted on pages the design drops it from. */
  helps?: { heading: string; items: CardItem[] };
  /** "What's included in X?" */
  includes: { heading: string; steps: Step[] };
  /** Optional card grid ("How could ADHD coaching help?"). */
  benefits?: { heading: string; items: CardItem[] };
  /** Optional bottom trust strip. */
  trust?: CardItem[];
  /**
   * Section order. The service pages run who -> helps -> included -> prompt;
   * the newer coaching designs run benefits -> prompt -> included -> who.
   */
  layout?: 'service' | 'coaching';
  promptTitle: string;
  promptBody?: string;
  ctaTitle: string;
  ctaBody?: string;
}

/**
 * The support-service template (design pages 15–25, 30–32, 37–38).
 */
export function SupportServicePage({
  crumbs,
  title,
  lede,
  body,
  image,
  ticks = ['Free consultation', 'No obligation', 'Confidential', 'Here to help'],
  audience,
  helps,
  includes,
  benefits,
  trust,
  layout = 'service',
  promptTitle,
  promptBody = "Book a free consultation with our team and we'll help you decide.",
  ctaTitle,
  ctaBody = 'Book a free consultation and let our team guide you.',
}: SupportServicePageProps) {
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

      {benefits && (
        <CardGrid
          title={benefits.heading}
          items={benefits.items}
          columns={6}
          background="white"
        />
      )}

      {layout === 'coaching' ? (
        <>
          <PromptBand title={promptTitle} body={promptBody} background="white" />

          <NumberedSteps title={includes.heading} steps={includes.steps} background="white" />

          <CardGrid
            title={audience.heading}
            items={audience.items}
            columns={3}
            cardAlign="left"
            background="white"
          />
        </>
      ) : (
        <>
          <IconColumns title={audience.heading} items={audience.items} background="white" />

          {helps && (
            <IconColumns
              title={helps.heading}
              items={helps.items}
              compact
              background="white"
            />
          )}

          <NumberedSteps title={includes.heading} steps={includes.steps} background="white" />

          <PromptBand title={promptTitle} body={promptBody} background="white" />
        </>
      )}

      {trust && <IconColumns items={trust} columns={6} boxed compact background="white" />}

      <CtaBand title={ctaTitle} body={ctaBody} background="white" />
    </>
  );
}
