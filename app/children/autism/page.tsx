import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { childAudience, childTrust, includedSteps } from '@/lib/shared';
import { Calendar, Chats, Person, Puzzle, Star, Waves } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Child Autism Assessment',
  description:
    "Child autism assessments helping you understand your child's communication, sensory experiences, routines, strengths and support needs.",
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Children', href: '/children' },
        { label: 'Child Autism Assessment' },
      ]}
      title="Child Autism Assessment"
      lede="Understand your child. Support their needs. Help them thrive."
      body="Our autism assessments help you better understand your child's communication, sensory experiences, routines, strengths and support needs, with clear, personalised recommendations for the way forward."
      image={{ src: img.heroChildAutism, alt: 'A child smiling at a desk' }}
      signals={{
        heading: 'Is this assessment right for your child?',
        items: [
          { icon: Chats, title: 'Differences in social communication or interaction', accent: 'teal' },
          { icon: Calendar, title: 'Finds change or unpredictability difficult', accent: 'coral' },
          { icon: Waves, title: 'Sensory sensitivities or strong reactions', accent: 'orange' },
          { icon: Star, title: 'Intense interests or repetitive behaviours', accent: 'coral' },
          { icon: Person, title: 'Struggles to fit in or feels misunderstood', accent: 'coral' },
          { icon: Puzzle, title: "Parents want a better understanding of their child's profile", accent: 'teal' },
        ],
      }}
      includes={{
        heading: "What's included in a Child Autism assessment?",
        steps: includedSteps({
          interviewDesc: 'A conversation with you and your child to understand their experiences and needs.',
          second: {
            title: 'Developmental History',
            desc: "Exploring your child's development, routines and key milestones.",
          },
          third: {
            title: 'Questionnaires & Information Gathering',
            desc: 'Standardised tools and input from parents, teachers or others.',
          },
          fourth: {
            title: 'Clinical Analysis',
            desc: 'Our clinicians carefully review all information to build a clear understanding.',
          },
          reportDesc: 'A detailed report with findings, strengths and personalised recommendations.',
          nextDesc: 'Guidance and ongoing support for your child at home, in school and beyond.',
        }),
      }}
      audience={{ heading: 'Who is this assessment for?', items: childAudience }}
      trust={childTrust}
      promptTitle="Not sure if this is the right assessment for your child?"
    />
  );
}
