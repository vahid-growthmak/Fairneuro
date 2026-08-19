import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { childAudience, childTrust, includedSteps } from '@/lib/shared';
import { Calendar, Chats, Clipboard, Heart, ShieldCheck, Star, Target, Waves } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Child ADHD + Autism Combined Assessment',
  description:
    'A combined child assessment considering overlapping ADHD and autistic traits together, with practical support for families.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Children', href: '/children' },
        { label: 'Child ADHD + Autism Combined Assessment' },
      ]}
      title="Child ADHD + Autism Combined Assessment"
      lede="Clinician-led, child-centred and thorough."
      body="Many children show traits of both ADHD and autism. A combined assessment considers them together in one respectful, evidence-based process — so families get a single clear picture and practical next steps."
      ticks={['Clinician-led and child-centred', 'Compassionate and respectful', 'Evidence-based and thorough', 'Practical support for families']}
      image={{ src: img.heroChildAdhd, alt: 'A child working at a desk' }}
      signals={{
        heading: 'This assessment may be suitable for children who:',
        items: [
          { icon: Target, title: 'Find it hard to focus, sit still or wait their turn', accent: 'teal' },
          { icon: Chats, title: 'Experience differences in social communication', accent: 'coral' },
          { icon: Waves, title: 'Show sensory sensitivities or strong reactions', accent: 'orange' },
          { icon: Calendar, title: 'Struggle with change, transitions or routines', accent: 'teal' },
          { icon: Clipboard, title: 'Have difficulty with organisation and daily tasks', accent: 'coral' },
          { icon: Star, title: 'Have previously had an unclear or partial picture', accent: 'teal' },
        ],
      }}
      includes={{
        heading: 'What does the assessment include?',
        steps: includedSteps({
          interviewDesc: "A conversation with you and your child to understand their history and needs.",
          second: {
            title: 'Developmental History',
            desc: "Exploring your child's development, learning, routines and key milestones.",
          },
          third: {
            title: 'Questionnaires & Information Gathering',
            desc: 'Standardised tools plus input from parents, teachers and others who know your child.',
          },
          fourth: {
            title: 'Combined Clinical Analysis',
            desc: 'Both profiles are considered together rather than assessed in isolation.',
          },
          reportDesc: 'A single detailed report covering both profiles, with recommendations for home and school.',
          nextDesc: 'Guidance, resources and onward support for your child and your family.',
        }),
      }}
      audience={{ heading: 'Who is this assessment for?', items: childAudience }}
      trust={[
        { icon: Heart, title: 'Child-friendly approach', desc: 'We ensure your child feels safe and supported throughout.', accent: 'teal' },
        ...childTrust.slice(1, 5),
        { icon: ShieldCheck, title: 'One joined-up picture', desc: 'Both profiles considered together, in one report.', accent: 'coral' },
      ]}
      promptTitle="Not sure if this assessment is right for your child?"
    />
  );
}
