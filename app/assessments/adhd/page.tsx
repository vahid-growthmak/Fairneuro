import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { allAgesAudience, generalTrust, includedSteps } from '@/lib/shared';
import { Brain, Chats, Clipboard, Clock, Star, TrendUp } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'ADHD Assessment',
  description:
    'Comprehensive ADHD assessments for adults, teenagers and children. Understand your mind and unlock your potential.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'ADHD Assessment' },
      ]}
      title="ADHD Assessment"
      lede="Understand your mind. Unlock your potential."
      body="Our comprehensive ADHD assessments help identify your strengths and challenges, providing clarity and personalised recommendations so you can move forward with confidence."
      image={{ src: img.heroAdhd, alt: 'A person reflecting thoughtfully' }}
      signals={{
        heading: 'Is an ADHD assessment right for you?',
        sub: 'ADHD looks different for everyone. You might benefit from an assessment if you:',
        items: [
          { icon: Brain, title: 'Struggle to focus or stay concentrated', accent: 'teal' },
          { icon: Clipboard, title: 'Find it hard to organise or manage time', accent: 'coral' },
          { icon: Clock, title: 'Feel restless, impulsive or easily distracted', accent: 'orange' },
          { icon: TrendUp, title: 'Find it hard to finish tasks or meet deadlines', accent: 'teal' },
          { icon: Chats, title: 'Experience emotional overwhelm or frustration', accent: 'coral' },
          { icon: Star, title: 'Want to better understand yourself', accent: 'teal' },
        ],
      }}
      includes={{
        heading: "What's included in an ADHD assessment?",
        steps: includedSteps({
          second: {
            title: 'Standardised Assessments',
            desc: 'Evidence-based tools to assess ADHD traits and related areas.',
          },
          third: {
            title: 'Collateral Information',
            desc: 'Optional input from family, partner or others who know you well.',
          },
        }),
      }}
      audience={{
        heading: 'Who is this assessment for?',
        items: allAgesAudience('focus, attention, organisation and impulsivity'),
      }}
      trust={generalTrust}
    />
  );
}
