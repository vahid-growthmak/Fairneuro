import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { adultAudience, adultTrust, includedSteps, withDescs } from '@/lib/shared';
import { Brain, Chats, Clipboard, Clock, Star, TrendUp } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Adult ADHD Assessment',
  description:
    'Adult ADHD assessments providing clear answers and personalised recommendations so you can build strategies that work for your life.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'ADHD Assessment', href: '/assessments/adhd' },
        { label: 'Adult ADHD Assessment' },
      ]}
      title="Adult ADHD Assessment"
      lede="Clarity. Understanding. A way forward."
      body="Our adult ADHD assessments provide clear answers and personalised recommendations so you can better understand yourself and build strategies that work for your life."
      image={{ src: img.heroAdultAdhd, alt: 'An adult working thoughtfully at a desk' }}
      signals={{
        heading: 'Could this assessment be right for you?',
        sub: 'You might benefit from an adult ADHD assessment if you:',
        items: [
          { icon: Brain, title: 'Struggle to focus or stay on task', accent: 'teal' },
          { icon: Clipboard, title: 'Find it hard to organise or manage time', accent: 'coral' },
          { icon: Clock, title: 'Feel restless, impulsive or easily distracted', accent: 'orange' },
          { icon: TrendUp, title: 'Find it hard to finish tasks or meet deadlines', accent: 'teal' },
          { icon: Chats, title: 'Experience emotional overwhelm or frustration', accent: 'coral' },
          { icon: Star, title: 'Want to better understand yourself', accent: 'teal' },
        ],
      }}
      includes={{
        heading: "What's included in an Adult ADHD assessment?",
        steps: includedSteps({
          second: {
            title: 'Standardised Assessments',
            desc: 'Evidence-based tools to assess ADHD traits and related areas.',
          },
          third: {
            title: 'Collateral Information',
            desc: 'Optional input from someone who knows you well.',
          },
          nextDesc: 'Guidance and ongoing support so you can thrive beyond the diagnosis.',
        }),
      }}
      audience={{ heading: 'Who is this assessment for?', items: withDescs(adultAudience('ADHD'), [
        'For adults seeking answers about concentration, motivation, organisation, impulsivity and more.',
        'For university students or young adults navigating focus, productivity and daily life.',
        null,
      ]) }}
      trust={adultTrust}
    />
  );
}
