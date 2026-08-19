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
  title: 'Autism Screener',
  description:
    'A free, confidential screener exploring communication, sensory experiences, routines and social connection — and whether a full autism assessment might be helpful.',
};

export default function Page() {
  return (
    <ScreenerPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Online Screener', href: '/screener' },
        { label: 'Autism Screener' },
      ]}
      title="Autism Screener"
      lede="A gentle first step towards understanding your profile."
      body="A free, confidential screener exploring communication, sensory experiences, routines and social connection — and whether a full autism assessment might be helpful."
      image={{ src: img.heroAutism, alt: 'A person in a calm, reflective moment' }}
      features={[
        { icon: Laptop, title: 'Online & Convenient', desc: 'Complete it whenever and wherever suits you.', accent: 'teal' },
        { icon: Lock, title: 'Secure & Confidential', desc: 'Your answers are private and never shared.', accent: 'coral' },
        { icon: Sparkle, title: 'Around 10 Minutes', desc: 'Short, clear questions in plain English.', accent: 'orange' },
        { icon: Signpost, title: 'Supportive Next Steps', desc: 'Clear guidance on what your result means.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is the autism screener?',
        body: 'A short, evidence-informed questionnaire based on recognised autism screening measures. It is not a diagnosis — it is a structured way of checking whether a full assessment is worth considering.',
        checksHeading: 'What can this screener help explore?',
        checks: [
          'Differences in social communication and connection',
          'Sensory sensitivities or sensory seeking',
          'A strong preference for routine and predictability',
          'Deep, focused interests',
          'Masking or camouflaging and the exhaustion that follows',
          'A long-standing sense of being different or out of step',
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
      ctaTitle="Wondering whether autism explains what you experience?"
    />
  );
}
