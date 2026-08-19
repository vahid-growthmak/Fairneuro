import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { JourneySteps } from '@/components/sections/Steps';
import { AudienceCards, FairStandard, SplitFeatureBand } from '@/components/sections/Panels';
import { TestimonialGrid } from '@/components/sections/Testimonials';
import { journey } from '@/lib/journey';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Document,
  Heart,
  Lock,
  Person,
  ShieldCheck,
  TwoHeads,
} from '@/components/icons';

export const metadata = {
  title: 'Our Assessments',
  description:
    'Comprehensive, personalised neurodevelopmental assessments for adults and children — ADHD, autism, combined and dyslexia.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Assessments' }]}
        title="Our Assessments"
        lede="Comprehensive. Personalised. Built around you."
        body="Expert neurodevelopmental assessments for adults and children, followed by clear insights and support that helps you move forward with confidence."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        ticks={['Free consultation', 'No obligation', 'Confidential', 'Here to help']}
        image={{ src: img.heroAssessments, alt: 'A person smiling, looking to the side' }}
      />

      <CardGrid
        title="Areas we assess"
        columns={4}
        background="white"
        items={[
          { icon: Brain, title: 'ADHD', desc: 'Assessment for adults and children.', href: '/assessments/adhd', accent: 'teal' },
          { icon: Person, title: 'Autism', desc: 'Assessment for adults and children.', href: '/assessments/autism', accent: 'coral' },
          { icon: TwoHeads, title: 'ADHD + Autism', desc: 'Combined assessments for overlapping experiences.', href: '/assessments/adhd-autism', accent: 'purple' },
          { icon: Book, title: 'Dyslexia', desc: 'Assessment of reading, spelling and learning differences.', href: '/assessments/dyslexia', accent: 'orange' },
        ]}
      />

      <PromptBand
        title="Not sure which assessment is right for you?"
        body="Book a free consultation with our team and we'll help you find the right pathway."
        background="white"
      />

      <AudienceCards
        items={[
          {
            title: 'For Adults',
            desc: 'Assessment and support built around adult life — work, study, relationships and everyday wellbeing.',
            href: '/adults',
            image: img.tileAdults,
            tone: 'teal',
          },
          {
            title: 'For Children & Young People',
            desc: 'Child-centred assessment with practical guidance for families, schools and everyday routines.',
            href: '/children',
            image: img.tileChildren,
            tone: 'coral',
          },
        ]}
      />

      <JourneySteps
        title="What to expect from your assessment"
        steps={journey}
        background="ivory"
      />

      <SplitFeatureBand
        title="Included in every assessment"
        body="We follow robust clinical standards to ensure you receive a thorough, accurate and meaningful assessment experience."
        cta={{ label: 'Our Standards →', href: '/why-fairneuro/our-standards' }}
        items={[
          { icon: ShieldCheck, title: 'Qualified professionals', desc: 'Carefully selected and highly experienced.', accent: 'teal' },
          { icon: Document, title: 'Comprehensive report', desc: 'Clear findings and personalised recommendations.', accent: 'coral' },
          { icon: Lock, title: 'Confidential and secure', desc: 'Your information is always protected.', accent: 'orange' },
          { icon: Heart, title: 'Support beyond diagnosis', desc: 'Guidance, coaching and resources every step of the way.', accent: 'navy' },
        ]}
      />

      <FairStandard background="white" />

      <TestimonialGrid
        title="Trusted by thousands of adults, children and families"
        background="ivory"
        items={[
          {
            quote:
              'The whole process was calm and clear. I understood every step, and the report finally explained things I had wondered about for years.',
            name: 'Sarah, 34',
            role: 'Adult Dyslexia Assessment',
          },
          {
            quote:
              'Genuinely thorough. The assessor took time to understand me rather than tick boxes, and the recommendations were practical.',
            name: 'James, 29',
            role: 'Adult ADHD Assessment',
          },
          {
            quote:
              'As a student this changed how I approach study. I have adjustments in place now and my confidence has grown enormously.',
            name: 'Priya, 21',
            role: 'Dyslexia Assessment',
          },
        ]}
      />

      <CtaBand
        title="Ready to take the first step?"
        body="Book a free consultation and let our team guide you."
        background="white"
      />
    </>
  );
}
