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
  title: 'Dyslexia Screener',
  description:
    'A free, confidential screener exploring reading, spelling, writing and processing — and whether a full dyslexia assessment might be helpful.',
};

export default function Page() {
  return (
    <ScreenerPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Online Screener', href: '/screener' },
        { label: 'Dyslexia Screener' },
      ]}
      title="Dyslexia Screener"
      lede="A quick first step towards understanding how you learn."
      body="A free, confidential screener exploring reading, spelling, writing and processing — and whether a full dyslexia assessment might be helpful."
      image={{ src: img.heroDyslexia, alt: 'A person reading at a desk' }}
      features={[
        { icon: Laptop, title: 'Online & Convenient', desc: 'Complete it whenever and wherever suits you.', accent: 'teal' },
        { icon: Lock, title: 'Secure & Confidential', desc: 'Your answers are private and never shared.', accent: 'coral' },
        { icon: Sparkle, title: 'Around 10 Minutes', desc: 'Short, clear questions in plain English.', accent: 'orange' },
        { icon: Signpost, title: 'Supportive Next Steps', desc: 'Clear guidance on what your result means.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is the dyslexia screener?',
        body: 'A short, evidence-informed questionnaire covering the everyday signs associated with dyslexia. It is not a diagnosis — a full diagnostic assessment is needed for that — but it is a useful indicator of whether one is worth pursuing.',
        checksHeading: 'What can this screener help explore?',
        checks: [
          'Reading that takes more time or effort than expected',
          'Inconsistent spelling despite knowing the words',
          'Losing your place or rereading to take information in',
          'Difficulty getting ideas down on paper',
          'Trouble with sequences, directions or remembering instructions',
          'A mismatch between your ability and your written work',
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
      ctaTitle="Wondering whether dyslexia explains how you learn?"
    />
  );
}
