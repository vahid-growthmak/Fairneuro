import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { adultTrust, includedSteps } from '@/lib/shared';
import { img } from '@/lib/images';
import {
  Battery,
  Briefcase,
  Calendar,
  Chats,
  Clipboard,
  GradCap,
  Head,
  People,
  Person,
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
      body="Many adults experience traits of both ADHD and autism. A combined assessment considers them together, so you get one coherent explanation rather than two partial ones."
      image={{ src: img.heroCombined, alt: 'An adult looking ahead confidently' }}
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
        steps: includedSteps({
          interviewDesc: 'A detailed conversation exploring your experiences, challenges and strengths.',
          second: {
            title: 'Developmental History',
            desc: 'Exploring your early development, learning, relationships and milestones.',
          },
          third: {
            title: 'Questionnaires & Information Gathering',
            desc: 'Standardised tools plus, where appropriate, input from others who know you well.',
          },
          fourth: {
            title: 'Combined Clinical Analysis',
            desc: 'Both profiles are considered together rather than in isolation.',
          },
          reportDesc: 'A single detailed report covering both profiles with personalised recommendations.',
          nextDesc: 'Guidance on supports, strategies and therapeutic options to help you thrive.',
        }),
      }}
      audience={{
        heading: 'Who this assessment is for',
        items: [
          { icon: Briefcase, title: 'Working professionals', desc: 'Balancing demanding roles alongside focus, energy and sensory needs.', href: '/support/workplace-support', accent: 'teal' },
          { icon: GradCap, title: 'University students', desc: 'Navigating independence, deadlines and social life at the same time.', href: '/support/education-support', accent: 'coral' },
          { icon: Person, title: 'Adults seeking answers later in life', desc: 'For those who have long suspected something but never had it explored properly.', href: '/adults', accent: 'orange' },
          { icon: People, title: 'Adults with overlapping experiences', desc: 'When a single-condition assessment has never quite explained the whole picture.', href: '/assessments/adhd-autism', accent: 'teal' },
        ],
      }}
      trust={adultTrust}
    />
  );
}
