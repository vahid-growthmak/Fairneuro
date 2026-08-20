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
  title: 'General Neurodiversity Screener',
  description:
    'A brief online tool to help you understand which areas may be worth exploring further — ADHD, autism, dyslexia and overlapping neurodivergent traits.',
};

export default function Page() {
  return (
    <ScreenerPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Online Screeners', href: '/screener' },
        { label: 'General Neurodiversity Screener' },
      ]}
      title="General Neurodiversity Screener"
      lede="A helpful first step. Clarity before your next move."
      body="Our General Neurodiversity Screener helps individuals, parents and carers understand which areas may be worth exploring further, such as ADHD, autism, dyslexia and overlapping neurodivergent traits."
      ticks={[
        'A simple and supportive starting point',
        'Understand possible next steps',
        'Confidential and secure online screening',
      ]}
      startLabel="Start Free Screener"
      secondaryCta={{ label: 'Learn More', href: '/assessments' }}
      image={{ src: img.heroScreener, alt: 'A person using a laptop at home' }}
      features={[
        { icon: Laptop, title: 'Online & Convenient', desc: 'Complete from the comfort of home, at your pace.', accent: 'teal' },
        { icon: Lock, title: 'Secure & Confidential', desc: 'Your privacy is our priority. 100% secure and private.', accent: 'coral' },
        { icon: Brain, title: 'Broad Neurodiversity Focus', desc: 'Looks at a range of traits across neurodivergence.', accent: 'orange' },
        { icon: HeartHand, title: 'Supportive Next Steps', desc: 'Clear guidance on what could be worth exploring.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is the General Neurodiversity Screener?',
        body: [
          'The General Neurodiversity Screener is a brief online tool designed to help you understand patterns of thought, behaviour and experience.',
          'It is not a diagnosis. Instead, it highlights areas that may be worth exploring further with a professional.',
          'Your results provide personalised insights and practical guidance on possible next steps.',
        ],
        checksHeading: 'What can this screener help explore?',
        checks: [
          'ADHD-related traits',
          'Autism-related traits',
          'Dyslexia or learning-difference traits',
          'Overlapping or mixed experiences',
          'Attention and organisation',
          'Communication and sensory differences',
        ],
      }}
      who={{
        heading: 'Who can use the General Neurodiversity Screener?',
        items: [
          { icon: Person, title: 'Adults', desc: 'For anyone seeking clarity about their experiences and next steps.', accent: 'teal' },
          { icon: HeartHand, title: 'Parents & Carers', desc: 'Gain insights to better understand and support your child or teen.', accent: 'coral' },
          { icon: People, title: 'Young People', desc: 'Explore your experiences and understand yourself a little better.', accent: 'orange' },
          { icon: GradCap, title: 'Students', desc: 'Identify strengths and challenges to support your learning journey.', accent: 'purple' },
        ],
      }}
      invite={{
        title: 'Take the General Neurodiversity Screener today',
        body: 'A few minutes today can bring you closer to clarity tomorrow.',
      }}
      how={{
        heading: 'How the screener works',
        steps: [
          { icon: ClipboardCheck, title: 'Answer the questions', desc: 'A short set of simple, research-backed questions.', accent: 'teal' },
          { icon: Laptop, title: 'Receive your insights', desc: 'Get an instant summary of your screening results.', accent: 'coral' },
          { icon: Star, title: 'Understand what stood out', desc: 'See which areas may be worth exploring further.', accent: 'orange' },
          { icon: Signpost, title: 'Explore next steps', desc: 'We explain what your results mean and what to do next.', accent: 'teal' },
          { icon: Chat, title: 'Speak with our team', desc: 'Book a free consultation to discuss your results and options.', accent: 'coral' },
        ],
      }}
      trust={[
        { icon: ShieldLock, title: 'Trusted & Secure', desc: 'Your data is protected and never shared.', accent: 'coral' },
        { icon: People, title: 'For Children & Adults', desc: 'Designed for every stage of life and every journey.', accent: 'teal' },
        { icon: HeartHand, title: 'Supportive Guidance', desc: 'Kind, expert guidance to help you move forward.', accent: 'orange' },
        { icon: Signpost, title: 'A Clear Next Step', desc: 'Actionable insights to help you take the next step.', accent: 'teal' },
      ]}
      ctaTitle="Not sure where to start? We can help."
    />
  );
}
