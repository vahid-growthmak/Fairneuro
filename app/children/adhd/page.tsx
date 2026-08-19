import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { childAudience, childTrust, includedSteps } from '@/lib/shared';
import { Brain, Chats, Clipboard, Clock, Star, TrendUp } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Child ADHD Assessment',
  description:
    "Child ADHD assessments helping you understand your child's strengths, challenges and needs, with clear recommendations for home and school.",
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Children', href: '/children' },
        { label: 'Child ADHD Assessment' },
      ]}
      title="Child ADHD Assessment"
      lede="Understand. Support. Help them thrive."
      body="Our child ADHD assessments help you understand your child's strengths, challenges and needs, with clear recommendations to support their learning, behaviour and emotional wellbeing."
      image={{ src: img.heroChildAdhd, alt: 'A child concentrating on schoolwork' }}
      signals={{
        heading: 'Is this assessment right for your child?',
        sub: 'Your child might benefit from an ADHD assessment if they:',
        items: [
          { icon: Brain, title: 'Have difficulty focusing or staying on task', accent: 'teal' },
          { icon: Clipboard, title: 'Are easily distracted or forgetful in daily activities', accent: 'coral' },
          { icon: Clock, title: 'Act impulsively or struggle to wait their turn', accent: 'orange' },
          { icon: TrendUp, title: 'Find it hard to manage emotions or behaviour', accent: 'teal' },
          { icon: Chats, title: 'Struggle with organisation or completing tasks', accent: 'coral' },
          { icon: Star, title: 'Have strengths that are masked by challenges', accent: 'teal' },
        ],
      }}
      includes={{
        heading: "What's included in a Child ADHD assessment?",
        steps: includedSteps({
          interviewDesc: 'A conversation with you and your child to understand their history, behaviour and needs.',
          second: {
            title: 'Standardised Assessments',
            desc: 'Age-appropriate, evidence-based tools to assess attention, behaviour and executive functioning.',
          },
          third: {
            title: 'Collateral Information',
            desc: 'Input from parents, teachers or other people who know your child well.',
          },
          nextDesc: 'Guidance and ongoing support for your child at home, in school and beyond.',
        }),
      }}
      audience={{ heading: 'Who is this assessment for?', items: childAudience }}
      trust={childTrust}
      promptTitle="Not sure if this is the right assessment for your child?"
    />
  );
}
