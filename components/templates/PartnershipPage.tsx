import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { HeroFeatureCards } from '@/components/sections/Hero';
import { CardGrid, type CardItem } from '@/components/sections/CardGrid';
import { NumberedSteps, type Step } from '@/components/sections/Steps';
import type { HeroFeature } from '@/components/sections/Hero';
import type { Crumb } from '@/components/ui/Breadcrumb';

export interface PartnershipPageProps {
  crumbs: Crumb[];
  title: React.ReactNode;
  body: string;
  note?: string;
  image: { src: string; alt: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  features: HeroFeature[];
  who: { heading: string; items: CardItem[] };
  process: { heading: string; steps: Step[] };
  services: { heading: string; items: CardItem[]; columns?: 4 | 5 | 6 };
  why: { heading: string; items: CardItem[]; columns?: 4 | 5 | 6 };
  softBand: { title: string; body: string; cta: { label: string; href: string }; icon: CardItem['icon'] };
  ctaTitle: string;
  ctaBody?: string;
  ctaLabel?: string;
}

/**
 * Partnership / pathway template — professional referrals, schools,
 * employers and the clinical care pathway (design pages 60–63).
 */
export function PartnershipPage({
  crumbs,
  title,
  body,
  note,
  image,
  primaryCta,
  secondaryCta,
  features,
  who,
  process,
  services,
  why,
  softBand,
  ctaTitle,
  ctaBody,
  ctaLabel = 'Book a Free Consultation',
}: PartnershipPageProps) {
  return (
    <>
      <Hero
        crumbs={crumbs}
        title={title}
        body={body}
        lede={undefined}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={image}
        ticks={note ? [note] : undefined}
      />

      <HeroFeatureCards items={features} />

      <CardGrid
        title={who.heading}
        items={who.items}
        columns={6}
        align="left"
        background="white"
      />

      <NumberedSteps title={process.heading} steps={process.steps} background="white" />

      <CardGrid
        title={services.heading}
        items={services.items}
        columns={services.columns ?? 6}
        align="left"
        background="white"
      />

      <CardGrid
        title={why.heading}
        items={why.items}
        columns={why.columns ?? 6}
        align="left"
        background="white"
      />

      <SplitBand
        title={softBand.title}
        body={softBand.body}
        cta={softBand.cta}
        icon={softBand.icon}
        background="white"
      />

      <CtaBand
        title={ctaTitle}
        body={ctaBody}
        cta={{ label: ctaLabel, href: '/book-consultation' }}
        ticks={null}
        background="white"
      />
    </>
  );
}
