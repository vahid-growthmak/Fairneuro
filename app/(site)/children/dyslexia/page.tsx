import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { childTrust } from '@/lib/shared';
import {
  Book,
  Brain,
  Clipboard,
  Document,
  GradCap,
  HeartHand,
  Leaf,
  Pencil,
  People,
  Person,
  Star,
} from '@/components/icons';
import { journey } from '@/lib/journey';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Child Dyslexia Assessment',
  description:
    "Child dyslexia assessments with a child-friendly approach, a comprehensive report and practical support for families and schools.",
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Children', href: '/children' },
        { label: 'Child Dyslexia Assessment' },
      ]}
      title="Child Dyslexia Assessment"
      lede="Expert assessment for brighter futures."
      body="Fairneuro provides comprehensive child dyslexia assessments to help families better understand reading, writing, spelling and information-processing differences, with clear recommendations for school, home and everyday life."
      ticks={['Clinician-led assessment', 'Child-friendly approach', 'Evidence-based', 'Support for families']}
      image={{ src: img.heroChildAutism, alt: 'A child reading at a desk' }}
      highlights={[
        { icon: Brain, title: 'Comprehensive assessment', desc: 'A detailed look at reading, spelling, writing and cognitive skills.', accent: 'teal' },
        { icon: Document, title: 'Detailed written report', desc: 'Clear, easy-to-understand results with practical explanations.', accent: 'orange' },
        { icon: Star, title: 'Personalised recommendations', desc: 'Tailored strategies for school, home and everyday learning.', accent: 'coral' },
        { icon: HeartHand, title: 'Support beyond diagnosis', desc: 'Guidance and resources for families and educators at every step.', accent: 'teal' },
      ]}
      signals={{
        heading: 'Could a child dyslexia assessment be right for your child?',
        items: [
          { icon: Book, title: 'Reading takes more time or effort', accent: 'teal' },
          { icon: Pencil, title: 'Spelling is inconsistent or unpredictable', accent: 'coral' },
          { icon: Document, title: 'Written work feels difficult or frustrating', accent: 'orange' },
          { icon: Clipboard, title: 'Remembering sequences or instructions is hard', accent: 'teal' },
          { icon: Star, title: 'Confidence at school is affected', accent: 'coral' },
          { icon: GradCap, title: "You want clarity about your child's learning needs", accent: 'teal' },
        ],
      }}
      includes={{
        heading: 'What the assessment includes',
        steps: [
          { icon: People, title: 'Background discussion', desc: "We learn about your child's history, strengths and current concerns." },
          { icon: Pencil, title: 'Reading & spelling measures', desc: 'We assess key literacy skills in a supportive, child-friendly way.' },
          { icon: Brain, title: 'Cognitive & processing profile', desc: 'We explore attention, memory, processing and learning skills.' },
          { icon: Clipboard, title: 'Professional interpretation', desc: 'Our clinicians analyse the results with care and expertise.' },
          { icon: Document, title: 'Comprehensive report', desc: 'You receive a clear report explaining strengths, challenges and insights.' },
          { icon: Leaf, title: 'Recommendations & next steps', desc: 'Practical strategies and support for school and home.' },
        ],
      }}
      audience={{
        heading: 'Who this assessment is for',
        items: [
          { icon: People, title: 'Parents seeking clarity', desc: "For parents who want to better understand their child's learning and get the right support in place.", href: '/children', accent: 'teal' },
          { icon: Person, title: 'Primary school children', desc: 'For children in early and middle primary who are finding literacy more challenging.', href: '/children', accent: 'coral' },
          { icon: GradCap, title: 'Secondary school students', desc: 'For older students who need clarity and strategies to thrive with confidence.', href: '/support/education-support', accent: 'orange' },
        ],
      }}
      trust={childTrust}
      promptTitle="Not sure whether this is the right assessment for your child?"
      promptBody="Book a free consultation and we'll help you choose the best pathway forward."
      journey={{ heading: 'The Fairneuro Assessment Journey', steps: journey }}
      receive={{
        heading: 'What you receive',
        items: [
          { icon: Brain, title: 'Clear understanding', desc: "Clarity about your child's strengths and challenges.", accent: 'teal' },
          { icon: Document, title: 'Detailed written report', desc: 'Easy-to-read report with explanations and insights.', accent: 'orange' },
          { icon: GradCap, title: 'School & home relevance', desc: 'Support that can be used where your child learns and grows.', accent: 'coral' },
          { icon: HeartHand, title: 'Support beyond assessment', desc: 'Guidance and resources for families and educators.', accent: 'teal' },
        ],
      }}
      fair={{ title: 'Why choose Fairneuro?' }}
      ctaTitle="You don't have to figure this out alone."
      ctaBody="Book a free consultation and we'll help you find the right assessment pathway for your child."
    />
  );
}
