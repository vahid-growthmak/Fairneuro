import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { adultAudience, adultTrust, includedSteps } from '@/lib/shared';
import { Brain, Calendar, Chats, People, Star, TrendUp, Waves } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Adult Autism Assessment',
  description:
    'Adult autism assessments providing clarity, validation and personalised recommendations so you can thrive in your own way.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'Autism Assessment', href: '/assessments/autism' },
        { label: 'Adult Autism Assessment' },
      ]}
      title="Adult Autism Assessment"
      lede="Understanding yourself is the first step forward."
      body="Our adult autism assessments provide clarity, validation and personalised recommendations so you can better understand your experiences and thrive in your own way."
      image={{ src: img.heroAdultAutism, alt: 'An adult reflecting at a desk' }}
      signals={{
        heading: 'Could this assessment be right for you?',
        sub: 'You might benefit from an adult autism assessment if you:',
        items: [
          { icon: Brain, title: 'Feel different or struggle to fit in', accent: 'teal' },
          { icon: People, title: 'Find social situations challenging or draining', accent: 'coral' },
          { icon: Calendar, title: 'Prefer routines, structure or predictability', accent: 'orange' },
          { icon: Waves, title: 'Experience sensory sensitivities or overwhelm', accent: 'teal' },
          { icon: Star, title: 'Have intense interests or deep focus on specific topics', accent: 'coral' },
          { icon: TrendUp, title: 'Want to better understand yourself', accent: 'teal' },
        ],
      }}
      includes={{
        heading: "What's included in an Adult Autism assessment?",
        steps: includedSteps({
          second: {
            title: 'Standardised Assessments',
            desc: 'Evidence-based tools to assess autistic traits and related areas.',
          },
          third: {
            title: 'Collateral Information',
            desc: 'Optional input from someone who knows you well.',
          },
          nextDesc: 'Guidance and ongoing support so you can thrive beyond the diagnosis.',
        }),
      }}
      audience={{ heading: 'Who is this assessment for?', items: adultAudience('autism') }}
      trust={adultTrust}
    />
  );
}
