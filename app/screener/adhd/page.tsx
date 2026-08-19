import { ScreenerPage } from '@/components/templates/ScreenerPage';
import { img } from '@/lib/images';
import {
  Calendar,
  Chat,
  ClipboardCheck,
  Document,
  GradCap,
  HeartHand,
  Laptop,
  Lock,
  People,
  Person,
  Signpost,
  Sparkle,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'ADHD Screener',
  description:
    'A free, confidential screener exploring attention, focus, restlessness and organisation — and whether a full ADHD assessment might be helpful.',
};

export default function Page() {
  return (
    <ScreenerPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Online Screener', href: '/screener' },
        { label: 'ADHD Screener' },
      ]}
      title="ADHD Screener"
      lede="A quick first step towards understanding your focus and attention."
      body="A free, confidential screener exploring attention, focus, restlessness and organisation — and whether a full ADHD assessment might be helpful."
      image={{ src: img.heroAdhd, alt: 'A person concentrating at a desk' }}
      features={[
        { icon: Laptop, title: 'Online & Convenient', desc: 'Complete it whenever and wherever suits you.', accent: 'teal' },
        { icon: Lock, title: 'Secure & Confidential', desc: 'Your answers are private and never shared.', accent: 'coral' },
        { icon: Sparkle, title: 'Around 10 Minutes', desc: 'Short, clear questions in plain English.', accent: 'orange' },
        { icon: Signpost, title: 'Supportive Next Steps', desc: 'Clear guidance on what your result means.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is the ADHD screener?',
        body: 'A short, evidence-informed questionnaire based on recognised ADHD screening measures. It is not a diagnosis — it is a structured way of checking whether the traits you notice are worth exploring properly.',
        checksHeading: 'What can this screener help explore?',
        checks: [
          'Difficulty sustaining focus or staying on task',
          'Restlessness, impulsivity or feeling driven by a motor',
          'Challenges with organisation, planning and time',
          'Forgetfulness and losing track of everyday things',
          'Emotional intensity and difficulty regulating frustration',
          'Whether these traits have been present since childhood',
        ],
      }}
      who={{
        heading: 'Who can use this screener?',
        items: [
          { icon: Person, title: 'Adults', desc: 'For adults exploring their own experiences, at any age.', accent: 'teal' },
          { icon: People, title: 'Parents & Carers', desc: 'For parents wondering whether to explore an assessment for their child.', accent: 'coral' },
          { icon: HeartHand, title: 'Young People', desc: 'For teenagers, with a parent or carer alongside them.', accent: 'orange' },
          { icon: GradCap, title: 'Students', desc: 'For students considering study support or exam adjustments.', accent: 'teal' },
        ],
      }}
      how={{
        heading: 'How the screener works',
        steps: [
          { icon: ClipboardCheck, title: 'Answer the questions', desc: 'Around ten minutes of clear, plain-English questions.', accent: 'teal' },
          { icon: Document, title: 'Get your result', desc: 'An immediate, easy-to-understand summary.', accent: 'coral' },
          { icon: Chat, title: 'Understand what it means', desc: 'We explain clearly what a screener can and cannot tell you.', accent: 'orange' },
          { icon: Calendar, title: 'Book if you want to', desc: 'A free consultation is available whenever you are ready.', accent: 'teal' },
          { icon: Star, title: 'Move forward with clarity', desc: 'Either way, you leave knowing more than you did.', accent: 'coral' },
        ],
      }}
      ctaTitle="Wondering whether ADHD explains what you experience?"
    />
  );
}
