import { ScreenerPage } from '@/components/templates/ScreenerPage';
import { img } from '@/lib/images';
import {
  Brain,
  Chat,
  ClipboardCheck,
  GradCap,
  HeartHand,
  Laptop,
  Lock,
  People,
  Person,
  ShieldLock,
  Signpost,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Autism Screener',
  description:
    'A short online tool to help individuals, parents and carers understand whether autistic traits may be present and whether a full assessment could be helpful.',
};

export default function Page() {
  return (
    <ScreenerPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Online Screeners', href: '/screener' },
        { label: 'Autism Screener' },
      ]}
      title="Autism Screener"
      lede="Calm. Clear. A helpful first step."
      body="Our Autism Screener is a short, trusted online tool designed to help individuals, parents and carers understand whether autistic traits may be present and whether a full assessment could be helpful."
      ticks={[
        'Gain early insight into autistic traits',
        'Understand possible next steps',
        'Confidential and secure online screening',
      ]}
      startLabel="Start Autism Screener"
      secondaryCta={{ label: 'Learn More', href: '/assessments/autism' }}
      image={{ src: img.heroAutism, alt: 'A young person deep in thought' }}
      features={[
        { icon: Laptop, title: 'Online & Convenient', desc: 'Complete from anywhere in just a few minutes.', accent: 'teal' },
        { icon: Lock, title: 'Secure & Confidential', desc: 'Your information is protected and never shared.', accent: 'coral' },
        { icon: Brain, title: 'Evidence-Based', desc: 'Built on trusted screening methods and best practice.', accent: 'orange' },
        { icon: HeartHand, title: 'Supportive Next Steps', desc: 'Expert guidance to help you move forward.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is the Autism Screener?',
        body: [
          'The Autism Screener is a brief online tool designed to identify traits commonly associated with autism in children, young people and adults.',
          'It is not a diagnosis, but it can help you understand whether further assessment may be helpful.',
          'Early insight can support better understanding, appropriate supports, and informed next steps.',
        ],
        checksHeading: 'Common traits this screener may explore:',
        checks: [
          'Differences in social communication',
          'Sensitivity to sensory input',
          'Preference for routine and predictability',
          'Focused interests',
          'Feeling overwhelmed in social situations',
          'Masking or trying hard to fit in',
        ],
      }}
      who={{
        heading: 'Who can use the Autism Screener?',
        items: [
          { icon: People, title: 'Children & Young People', desc: 'A helpful first step for children and young people showing signs of autistic traits.', accent: 'teal' },
          { icon: HeartHand, title: 'Parents & Carers', desc: 'Gain insight and understand whether further support or assessment may be helpful.', accent: 'coral' },
          { icon: Person, title: 'Adults', desc: 'Explore whether autistic traits may be impacting your daily life or wellbeing.', accent: 'orange' },
          { icon: GradCap, title: 'Students', desc: 'Support for students seeking clarity about their strengths and challenges.', accent: 'purple' },
        ],
      }}
      invite={{
        title: 'Take the Autism Screener today',
        body: 'A small step today can lead to greater understanding and the right support.',
      }}
      how={{
        heading: 'How the Autism Screener works',
        steps: [
          { icon: Laptop, title: 'Complete the screener', desc: 'Answer a series of simple, research-backed questions.', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Receive your insights', desc: 'Get an instant summary of your screening results.', accent: 'coral' },
          { icon: Signpost, title: 'Explore next steps', desc: 'Understand whether further assessment or support may be helpful for you or your child.', accent: 'orange' },
          { icon: Chat, title: 'Speak with our team', desc: 'Book a free consultation to discuss your results and options.', accent: 'teal' },
          { icon: Star, title: 'Move forward with clarity', desc: 'Get guidance and support to take confident next steps.', accent: 'coral' },
        ],
      }}
      trust={[
        { icon: ShieldLock, title: 'Trusted & Secure', desc: 'Your information is confidential and handled with care.', accent: 'coral' },
        { icon: People, title: 'For Children & Adults', desc: 'Suitable for all ages and life stages.', accent: 'teal' },
        { icon: Brain, title: 'Expert-Led', desc: 'Designed by neurodevelopmental specialists.', accent: 'orange' },
        { icon: Signpost, title: 'A Clear Next Step', desc: 'Gain insight and move forward with confidence.', accent: 'teal' },
      ]}
      ctaTitle="Wondering whether autism explains what you experience?"
    />
  );
}
