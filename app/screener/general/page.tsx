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
  title: 'General Neurodiversity Screener',
  description:
    "You don't need to know where to start. This broader screener looks across several neurodivergent traits and helps point you towards the right pathway.",
};

export default function Page() {
  return (
    <ScreenerPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Online Screener', href: '/screener' },
        { label: 'General Neurodiversity Screener' },
      ]}
      title="General Neurodiversity Screener"
      lede="A helpful first step. Clarity before your next move."
      body="You don't need to know where to start. This broader screener looks across several neurodivergent traits and helps point you towards the right pathway."
      image={{ src: img.heroScreener, alt: 'A person completing an online questionnaire' }}
      features={[
        { icon: Laptop, title: 'Online & Convenient', desc: 'Complete it whenever and wherever suits you.', accent: 'teal' },
        { icon: Lock, title: 'Secure & Confidential', desc: 'Your answers are private and never shared.', accent: 'coral' },
        { icon: Sparkle, title: 'Around 10 Minutes', desc: 'Short, clear questions in plain English.', accent: 'orange' },
        { icon: Signpost, title: 'Supportive Next Steps', desc: 'Clear guidance on what your result means.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is the General Neurodiversity Screener?',
        body: 'A broader screener designed for people who are not sure which area fits. It looks across attention, sensory experience, communication, learning and executive function, then suggests where a fuller conversation might be most useful.',
        checksHeading: 'What can this screener help explore?',
        checks: [
          'Attention, focus and follow-through',
          'Sensory sensitivities and overwhelm',
          'Social communication and connection',
          'Reading, writing and learning differences',
          'Organisation, planning and time management',
          'Emotional regulation and burnout',
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
      ctaTitle="Not sure where to start? This is a good place."
    />
  );
}
