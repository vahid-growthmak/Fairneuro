import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Bulb,
  Chat,
  ClipboardCheck,
  Document,
  GradCap,
  HeartHand,
  Lock,
  People,
  Person,
  Search,
  ShieldCheck,
  Signpost,
  Star,
  Target,
} from '@/components/icons';

export const metadata = {
  title: 'Your Report Explained',
  description:
    'A plain-English walkthrough of what each section of your assessment report means and how to use it.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Your Report Explained' },
        ]}
        title="Your Report Explained"
        lede="Understand what your report includes and what happens next."
        body="Your report is designed to give you clarity, explain our findings in a way that's easy to understand, and guide you towards the right next steps."
        secondaryCta={{ label: 'Start Your Assessment', href: '/assessments' }}
        image={{ src: img.heroResources, alt: 'A person reading their assessment report' }}
      />

      <SplitBand
        title="Your report is designed to be clear, practical and helpful."
        body="We use plain language and focus on what matters most to you."
        cta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        icon={ShieldCheck}
        background="white"
      />

      <CardGrid
        title="What your report may include"
        columns={3}
        background="white"
        cardAlign="left"
        items={[
          { icon: ClipboardCheck, title: 'Assessment summary', desc: 'An overview of the assessment process and information considered.', accent: 'coral' },
          { icon: Target, title: 'Diagnostic outcome', desc: 'Our conclusion, including whether diagnostic criteria are met.', accent: 'coral' },
          { icon: Search, title: 'Key findings', desc: 'Detailed information about the areas we assessed and what we found.', accent: 'coral' },
          { icon: Brain, title: 'Strengths and challenges', desc: 'A balanced view of your strengths and the challenges you may experience.', accent: 'coral' },
          { icon: Star, title: 'Recommendations', desc: 'Personalised suggestions to support you in daily life and goals.', accent: 'coral' },
          { icon: Signpost, title: 'Next steps', desc: 'Practical guidance on support options and what to do next.', accent: 'coral' },
        ]}
      />

      <CardGrid
        title="How your report can help"
        columns={4}
        background="ivory"
        cardAlign="left"
        items={[
          { icon: Person, title: 'Understand your profile', desc: 'Gain clarity about how you think, learn, communicate and navigate the world.', accent: 'teal' },
          { icon: GradCap, title: 'Access the right support', desc: 'Use your report to help at work, university or in other areas of your life.', accent: 'teal' },
          { icon: Bulb, title: 'Practical recommendations', desc: 'Actionable strategies tailored to you, to help build on strengths and reduce challenges.', accent: 'teal' },
          { icon: People, title: 'Share with professionals (where appropriate)', desc: 'Share your report with those supporting you, to ensure better understanding.', accent: 'teal' },
        ]}
      />

      <ProcessRow
        title="What happens after your report"
        background="white"
        steps={[
          { icon: Document, title: 'Receive your report', desc: "We'll send your report securely when it's ready.", accent: 'coral' },
          { icon: Book, title: 'Review your outcome', desc: 'Read through at your own pace and take time to reflect.', accent: 'coral' },
          { icon: Chat, title: 'Ask questions', desc: "Book a free consultation to discuss anything you'd like clarity on.", accent: 'coral' },
          { icon: HeartHand, title: 'Explore support', desc: "We'll help you explore strategies, adjustments and support options.", accent: 'coral' },
          { icon: Signpost, title: 'Move forward with confidence', desc: 'Use your report to make informed decisions and take positive action.', accent: 'coral' },
        ]}
      />

      <SplitBand
        title="We're here to help you make sense of your report."
        body="If you'd like support understanding your findings or deciding on next steps, our compassionate team is here for you."
        cta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        icon={HeartHand}
        background="white"
      />

      <IconColumns
        compact
        background="white"
        items={[
          { icon: Chat, title: 'Clear language', desc: 'We use plain, jargon-free language you can understand.', accent: 'coral' },
          { icon: Lock, title: 'Confidential', desc: 'Your information is handled securely and privately.', accent: 'teal' },
          { icon: Person, title: 'Personalised recommendations', desc: 'Guidance tailored to your unique profile and goals.', accent: 'orange' },
          { icon: HeartHand, title: 'Ongoing support', desc: "We're with you beyond your report, every step of the way.", accent: 'purple' },
        ]}
      />

      <CtaBand
        title="Ready to take the next step?"
        body="Explore the support available now that you have your answers."
        cta={{ label: 'Explore Support Services', href: '/support' }}
        ticks={null}
        background="white"
      />
    </>
  );
}
