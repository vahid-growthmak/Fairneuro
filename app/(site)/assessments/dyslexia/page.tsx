import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { allAgesAudience, includedSteps } from '@/lib/shared';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Briefcase,
  Clipboard,
  Document,
  Globe,
  Heart,
  Lock,
  Pencil,
  People,
  Person,
  ShieldCheck,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Dyslexia Assessment',
  description:
    'Dyslexia assessments providing clarity and practical recommendations to support learning, confidence and long-term success.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'Dyslexia Assessment' },
      ]}
      title="Dyslexia Assessment"
      lede="Identify. Understand. Empower."
      body="Our dyslexia assessments provide clarity and practical recommendations to support learning, confidence and long-term success."
      image={{ src: img.heroDyslexia, alt: 'A student working at a desk' }}
      signals={{
        heading: 'Could a dyslexia assessment help?',
        sub: 'You might benefit from a dyslexia assessment if you:',
        items: [
          { icon: Brain, title: 'Find reading, writing or spelling difficult', accent: 'teal' },
          { icon: Book, title: 'Read more slowly than others or lose your place often', accent: 'coral' },
          { icon: Pencil, title: 'Struggle with organisation, planning or memory', accent: 'orange' },
          { icon: Document, title: 'Avoid reading or writing tasks when you can', accent: 'teal' },
          { icon: Clipboard, title: 'Have been told you may be dyslexic', accent: 'coral' },
          { icon: Star, title: 'Want to understand your learning strengths better', accent: 'teal' },
        ],
      }}
      includes={{
        heading: "What's included in a Dyslexia assessment?",
        steps: includedSteps({
          interviewDesc: 'A detailed conversation to understand your experiences, learning history and goals.',
          second: {
            title: 'Standardised Assessments',
            desc: 'Evidence-based tools to assess reading, spelling, writing and cognitive skills.',
          },
          third: {
            title: 'Collateral Information',
            desc: 'Input from parents, teachers or others who know you well (if applicable).',
          },
          nextDesc: 'Guidance and practical strategies to support your learning, study or work.',
        }),
      }}
      audience={{
        heading: 'Who is this assessment for?',
        items: [
          {
            icon: People,
            title: 'Students',
            desc: 'Children, teens and adults who want to understand their learning differences and access support.',
            href: '/support/learning-support',
            accent: 'teal',
          },
          {
            icon: Person,
            title: 'Parents',
            desc: "For parents seeking clarity and practical strategies to support their child's learning.",
            href: '/support/parent-family',
            accent: 'coral',
          },
          {
            icon: Briefcase,
            title: 'Professionals',
            desc: 'For educators and employers looking for a deeper understanding to provide the right support.',
            href: '/support/workplace-support',
            accent: 'orange',
          },
        ],
      }}
      trust={[
        { icon: ShieldCheck, title: 'Evidence-based assessment', desc: 'Using gold-standard tools and frameworks.', accent: 'teal' },
        { icon: People, title: 'Experienced clinicians', desc: 'Specialists in dyslexia and neurodiversity assessments.', accent: 'coral' },
        { icon: Star, title: 'Clear, practical recommendations', desc: 'Actionable strategies for learning, study and daily life.', accent: 'orange' },
        { icon: Lock, title: 'Confidential and secure', desc: 'Your information is always protected.', accent: 'teal' },
        { icon: Heart, title: 'Support beyond diagnosis', desc: "We're with you every step of the way.", accent: 'coral' },
        { icon: Globe, title: 'Global experience', desc: 'Supporting individuals and families in 40+ countries.', accent: 'teal' },
      ]}
    />
  );
}
