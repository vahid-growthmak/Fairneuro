import { Hero, HeroFeatureCards, type HeroFeature } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns, type CardItem } from '@/components/sections/CardGrid';
import { NumberedSteps, type Step } from '@/components/sections/Steps';
import { IconBadge, type IconType } from '@/components/ui/IconBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Question } from '@/components/icons';
import type { Crumb } from '@/components/ui/Breadcrumb';
import { cn } from '@/lib/cn';

export interface LearningDifferencePageProps {
  crumbs: Crumb[];
  title: React.ReactNode;
  body: string;
  image: { src: string; alt: string };
  features: HeroFeature[];
  /** "What is dyscalculia?" explainer band. */
  what: {
    heading: string;
    icon: IconType;
    lead: string;
    points: { icon: IconType; text: string }[];
  };
  signs: { heading: string; items: CardItem[] };
  includes: { heading: string; steps: Step[] };
  audience: { heading: string; items: CardItem[] };
  report: { heading: string; items: CardItem[] };
  promptTitle: string;
  promptBody: string;
  ctaTitle: string;
  ctaBody: string;
}

/**
 * Dyscalculia and dyspraxia / DCD pages (design 64–65).
 */
export function LearningDifferencePage({
  crumbs,
  title,
  body,
  image,
  features,
  what,
  signs,
  includes,
  audience,
  report,
  promptTitle,
  promptBody,
  ctaTitle,
  ctaBody,
}: LearningDifferencePageProps) {
  return (
    <>
      <Hero
        crumbs={crumbs}
        title={title}
        body={body}
        secondaryCta={{ label: 'Explore Assessments', href: '/assessments' }}
        image={image}
      />

      <HeroFeatureCards items={features} />

      {/* What is …? */}
      <section className="bg-white">
        <div className="shell py-16 lg:py-20">
          <SectionHeading title={what.heading} align="left" />
          <div className="grid items-center gap-8 rounded-2xl border border-navy/[0.06] bg-ivory/70 p-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] lg:p-10">
            <div className="flex items-start gap-5">
              <IconBadge icon={what.icon} accent="teal" size="lg" className="shrink-0" />
              <p className="text-[13.5px] leading-relaxed text-navy/72">{what.lead}</p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-3">
              {what.points.map((p, i) => (
                <li
                  key={p.text}
                  className={cn('flex flex-col gap-3', i > 0 && 'sm:border-l sm:border-navy/[0.09] sm:pl-6')}
                >
                  <IconBadge
                    icon={p.icon}
                    accent={(['coral', 'orange', 'teal'] as const)[i % 3]}
                    size="sm"
                  />
                  <p className="text-[12px] leading-relaxed text-navy/68">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CardGrid
        title={signs.heading}
        items={signs.items}
        columns={6}
        align="left"
        background="white"
      />

      <NumberedSteps title={includes.heading} steps={includes.steps} background="white" />

      <CardGrid
        title={audience.heading}
        items={audience.items}
        columns={4}
        align="left"
        cardAlign="left"
        background="white"
      />

      <IconColumns title={report.heading} items={report.items} columns={5} background="white" />

      <SplitBand
        title={promptTitle}
        body={promptBody}
        cta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        icon={Question}
        background="white"
      />

      <CtaBand title={ctaTitle} body={ctaBody} ticks={null} background="white" />
    </>
  );
}
