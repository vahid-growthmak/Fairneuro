import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { allAgesAudience, generalTrust, includedSteps } from '@/lib/shared';
import { Calendar, Chats, Person, Star, Waves } from '@/components/icons';
import { Head } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Autism Assessment',
  description:
    'Comprehensive autism assessments for adults, teenagers and children. Understand your profile and move forward with clarity.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'Autism Assessment' },
      ]}
      title="Autism Assessment"
      lede="Understand your profile. Move forward with clarity."
      body="Our comprehensive autism assessments for adults and children are designed to provide clear understanding, identify your unique strengths and challenges, and offer personalised recommendations to support your wellbeing and growth."
      image={{ src: img.heroAutism, alt: 'A person smiling warmly' }}
      signals={{
        heading: 'Is an autism assessment right for you?',
        sub: 'Autism looks different for everyone. You might benefit from an assessment if you:',
        items: [
          { icon: Chats, title: 'Notice differences in social communication or connection', accent: 'teal' },
          { icon: Waves, title: 'Experience sensory sensitivities or sensory seeking', accent: 'orange' },
          { icon: Calendar, title: 'Prefer routine and structure or find change challenging', accent: 'teal' },
          { icon: Person, title: 'Have often felt different or out of step', accent: 'coral' },
          { icon: Head, title: 'Mask or camouflage in social situations, leading to exhaustion', accent: 'teal' },
          { icon: Star, title: 'Want greater self-understanding and acceptance', accent: 'orange' },
        ],
      }}
      includes={{
        heading: "What's included in an autism assessment?",
        steps: includedSteps({
          interviewDesc: 'A detailed conversation exploring your experiences, strengths and challenges.',
          second: {
            title: 'Developmental History',
            desc: 'Exploring your early development, learning, relationships and milestones.',
          },
          third: {
            title: 'Questionnaires & Information Gathering',
            desc: 'Standardised tools and, where appropriate, input from family or others who know you well.',
          },
          fourth: {
            title: 'Clinical Analysis',
            desc: 'Our clinicians carefully analyse all information to understand your unique profile.',
          },
          reportDesc:
            'A detailed report with findings, diagnosis (if applicable) and practical, personalised recommendations.',
          nextDesc: 'Guidance on supports, strategies and therapeutic options to help you thrive.',
        }),
      }}
      audience={{
        heading: 'Who is this assessment for?',
        items: allAgesAudience('communication, sensory experiences and social connection'),
      }}
      trust={generalTrust}
    />
  );
}
