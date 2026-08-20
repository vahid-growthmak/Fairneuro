import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { adultTrust, withDescs } from '@/lib/shared';
import { journey } from '@/lib/journey';
import { img } from '@/lib/images';
import {
  Battery,
  Briefcase,
  Calendar,
  Chats,
  Clipboard,
  Document,
  GradCap,
  Head,
  People,
  Person,
  Signpost,
  Star,
  Target,
  Waves,
} from '@/components/icons';

export const metadata = {
  title: 'Adult ADHD + Autism Combined Assessment',
  description:
    'A combined adult assessment exploring overlapping ADHD and autistic experiences in a single, joined-up pathway.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Adults', href: '/adults' },
        { label: 'Adult ADHD + Autism Assessment' },
      ]}
      title="Adult ADHD + Autism Combined Assessment"
      lede="Expert assessment for clearer answers."
      body="Explore how ADHD and autism may work together in your life. Our combined assessment helps you understand overlapping experiences, strengths and challenges—so you can move forward with clarity and confidence."
      image={{ src: img.heroCombined, alt: 'An adult looking ahead confidently' }}
      ticks={[
        'Clinician-led assessment',
        'Compassionate & respectful',
        'Evidence based',
        'Support for your journey',
      ]}
      signals={{
        heading: 'Why a combined assessment may help',
        items: [
          { icon: Target, title: 'Attention & focus', accent: 'teal' },
          { icon: Waves, title: 'Sensory differences', accent: 'coral' },
          { icon: Clipboard, title: 'Organisation & planning', accent: 'orange' },
          { icon: Chats, title: 'Social communication', accent: 'teal' },
          { icon: Calendar, title: 'Routine & change', accent: 'coral' },
          { icon: Battery, title: 'Overwhelm & burnout', accent: 'orange' },
          { icon: Head, title: 'Masking & adapting', accent: 'teal' },
          { icon: Star, title: 'Day-to-day impact', accent: 'coral' },
        ],
      }}
      includes={{
        heading: 'What the combined assessment includes',
        steps: [
          { icon: People, title: 'Background discussion', desc: 'We hear about your history, experiences and current concerns.' },
          { icon: Target, title: 'ADHD exploration', desc: 'We explore attention, activity, impulsivity and executive functioning.' },
          { icon: Chats, title: 'Autism exploration', desc: 'We explore social communication, sensory processing and routines.' },
          { icon: Clipboard, title: 'Professional interpretation', desc: 'Our clinicians analyse the results with care and expertise.' },
          { icon: Document, title: 'Comprehensive report', desc: 'A detailed report explaining findings, strengths and needs.' },
          { icon: Signpost, title: 'Recommendations & next steps', desc: 'Practical strategies, supports and referrals tailored to you.' },
        ],
      }}
      audience={{
        heading: 'Who this assessment is for',
        items: [
          { icon: Briefcase, title: 'Working professionals', desc: 'Seeking clarity to improve focus, wellbeing and performance.', href: '/support/workplace-support', accent: 'teal' },
          { icon: GradCap, title: 'University students', desc: 'Wanting to understand your brain and access the right support.', href: '/support/education-support', accent: 'coral' },
          { icon: Person, title: 'Adults seeking answers later in life', desc: 'Finally making sense of lifelong patterns and experiences.', href: '/adults', accent: 'orange' },
          { icon: People, title: 'Adults with overlapping experiences', desc: 'When ADHD and autism traits both feel relevant.', href: '/assessments/adhd-autism', accent: 'teal' },
        ],
      }}
      trust={adultTrust}
      promptTitle="Not sure if a combined assessment is right for you?"
      promptBody="Book a free consultation and we'll help you choose the best path forward."
      journey={{
        heading: 'The Fairneuro Assessment Journey',
        steps: withDescs(journey, [
          'Share your concerns and ask questions with our team.',
          'A short screen helps us understand the best next step.',
          'We meet you with the right clinician for your needs.',
          'A collaborative, evidence-informed assessment.',
          'We explain findings and answer questions in simple terms.',
          'Practical strategies and support to help you move forward.',
        ]).map((step, i) => (i === 2 ? { ...step, title: 'Meet' } : step)),
      }}
      receive={{
        heading: 'What you receive',
        items: [
          { icon: Head, title: 'Clear understanding', desc: 'Clarity about your traits, strengths and challenges.', accent: 'teal' },
          { icon: Document, title: 'Detailed written report', desc: 'Easy-to-read report with explanations and insights.', accent: 'orange' },
          { icon: Signpost, title: 'Next steps & support', desc: 'Practical strategies, referrals and guidance tailored to you.', accent: 'coral' },
          { icon: Star, title: 'Support beyond assessment', desc: 'Guidance and resources for families and educators when needed.', accent: 'teal' },
        ],
      }}
      fair={{ title: 'Why choose Fairneuro?' }}
      ctaTitle="You don't have to figure this out alone."
      ctaBody="Book a free consultation and we'll help you find the answers and support that fit you."
    />
  );
}
