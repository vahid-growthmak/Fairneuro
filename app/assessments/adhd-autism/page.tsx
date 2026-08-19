import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { allAgesAudience, generalTrust, includedSteps } from '@/lib/shared';
import { Bulb, Calendar, Clipboard, People, Question, Star, Target, Waves } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'ADHD + Autism Assessment',
  description:
    'A combined assessment exploring overlapping ADHD and autistic experiences, with clear understanding and personalised recommendations.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'ADHD + Autism Assessment' },
      ]}
      title="ADHD + Autism Assessment"
      lede="Understand the full picture. Move forward with clarity."
      body="A combined assessment helps you explore overlapping ADHD and autistic experiences. We provide clear understanding, personalised recommendations, and practical guidance on next steps—so you can move forward with confidence."
      image={{ src: img.heroCombined, alt: 'A person looking ahead with confidence' }}
      signals={{
        heading: 'Could a combined assessment be right for you?',
        sub: 'Overlapping experiences can look different for everyone. You might benefit from a combined assessment if you:',
        items: [
          { icon: Target, title: 'Experience attention and focus difficulties', accent: 'teal' },
          { icon: People, title: 'Feel different in social situations', accent: 'coral' },
          { icon: Waves, title: 'Notice sensory sensitivities', accent: 'orange' },
          { icon: Calendar, title: 'Struggle with organisation or routines', accent: 'teal' },
          { icon: Question, title: 'Feel misunderstood or mislabelled', accent: 'coral' },
          { icon: Bulb, title: 'Want a clearer overall understanding', accent: 'orange' },
        ],
      }}
      includes={{
        heading: "What's included in a combined assessment?",
        steps: includedSteps({
          interviewDesc: 'A detailed conversation exploring your experiences, challenges and strengths.',
          second: {
            title: 'Developmental History',
            desc: 'Exploring your early development, learning, relationships and milestones.',
          },
          third: {
            title: 'Questionnaires & Information Gathering',
            desc: 'Standardised tools and information from you and, where appropriate, others who know you well.',
          },
          fourth: {
            title: 'Combined Clinical Analysis',
            desc: 'Our clinicians carefully analyse all information to understand overlapping ADHD and autistic experiences.',
          },
          reportDesc: 'A detailed report with findings, insights and personalised recommendations.',
          nextDesc: 'Guidance on supports, strategies and therapeutic options to help you thrive.',
        }),
      }}
      audience={{
        heading: 'Who is this assessment for?',
        items: allAgesAudience('attention, identity, routine, focus and sensory differences'),
      }}
      trust={[
        ...generalTrust,
        {
          icon: Star,
          title: 'Personalised recommendations',
          desc: 'Practical strategies and support tailored to you.',
          accent: 'teal',
        },
      ]}
    />
  );
}
