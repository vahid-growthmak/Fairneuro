import { ScreenerPage } from '@/components/templates/ScreenerPage';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
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
  ShieldCheck,
  ShieldLock,
  Signpost,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Dyslexia Screener',
  description:
    'A brief online tool to help individuals, parents and carers understand whether reading, spelling and written-language difficulties may be present.',
};

export default function Page() {
  return (
    <ScreenerPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Online Screeners', href: '/screener' },
        { label: 'Dyslexia Screener' },
      ]}
      title="Dyslexia Screener"
      lede="Clarity. Confidence. A helpful first step."
      body="Our Dyslexia Screener is a brief online tool designed to help individuals, parents and carers understand whether reading, spelling and written-language difficulties may be present and whether a fuller assessment could be helpful."
      ticks={[
        'Gain early insight into possible dyslexia traits',
        'Understand possible next steps',
        'Confidential and secure online screening',
      ]}
      quizHref="/dyslexia-test"
      startLabel="Start Dyslexia Screener"
      secondaryCta={{ label: 'Learn More', href: '/assessments/dyslexia' }}
      image={{ src: img.heroDyslexia, alt: 'A person reading at a desk' }}
      features={[
        { icon: Laptop, title: 'Online & Convenient', desc: 'Complete from anywhere in just a few minutes.', accent: 'teal' },
        { icon: Lock, title: 'Secure & Confidential', desc: 'Your information is protected and never shared.', accent: 'coral' },
        { icon: Brain, title: 'Evidence-Based', desc: 'Built on trusted screening methods and best practice.', accent: 'orange' },
        { icon: HeartHand, title: 'Supportive Next Steps', desc: 'Expert guidance to help you move forward.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is the Dyslexia Screener?',
        body: [
          'The Dyslexia Screener is a brief online tool designed to identify traits commonly associated with dyslexia in children, young people and adults.',
          'It is not a diagnosis, but it can help you understand whether further assessment may be helpful.',
          'Early insight can support better understanding, appropriate support, and informed next steps.',
        ],
        checksHeading: 'Common difficulties this screener may explore:',
        checks: [
          'Reading accuracy and fluency',
          'Spelling difficulties',
          'Written expression and composition',
          'Processing written information',
          'Sequencing or working memory',
          'Feeling that reading or writing takes more effort than expected',
        ],
      }}
      who={{
        heading: 'Who can use the Dyslexia Screener?',
        items: [
          { icon: People, title: 'Children & Young People', desc: 'A helpful first step for children and young people showing signs of dyslexia traits.', accent: 'teal' },
          { icon: HeartHand, title: 'Parents & Carers', desc: 'Gain insight and understand whether further support or assessment may be helpful.', accent: 'coral' },
          { icon: Person, title: 'Adults', desc: 'Explore whether dyslexia traits may be impacting your daily life or wellbeing.', accent: 'orange' },
          { icon: GradCap, title: 'Students', desc: 'Support for students seeking clarity about their strengths and challenges.', accent: 'purple' },
        ],
      }}
      invite={{
        title: 'Take the Dyslexia Screener today',
        body: 'A small step today can lead to greater understanding and the right support.',
      }}
      how={{
        heading: 'How the Dyslexia Screener works',
        steps: [
          { icon: Laptop, title: 'Complete the screener', desc: 'Answer a series of simple, research-backed questions.', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Receive your insights', desc: 'Get an instant overview of possible dyslexia traits present.', accent: 'coral' },
          { icon: Signpost, title: 'Explore next steps', desc: 'Understand whether further assessment could be right for you or your child.', accent: 'orange' },
          { icon: Chat, title: 'Speak with our team', desc: 'Book a free consultation to discuss your results and options.', accent: 'teal' },
          { icon: Star, title: 'Move forward with clarity', desc: 'Get the right support to build confidence and achieve goals.', accent: 'coral' },
        ],
      }}
      trust={[
        { icon: ShieldLock, title: 'Trusted & Secure', desc: 'Your information is confidential and handled with care.', accent: 'coral' },
        { icon: People, title: 'For Children & Adults', desc: 'Suitable for all ages and life stages.', accent: 'teal' },
        { icon: Brain, title: 'Expert-Led', desc: 'Designed by neurodevelopmental specialists.', accent: 'orange' },
        { icon: Signpost, title: 'A Clear Next Step', desc: 'Gain insight and move forward with confidence.', accent: 'teal' },
      ]}
      ctaTitle="Wondering whether dyslexia explains how you learn?"
    />
  );
}
