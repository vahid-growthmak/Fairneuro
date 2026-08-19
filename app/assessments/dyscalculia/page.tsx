import { LearningDifferencePage } from '@/components/templates/LearningDifferencePage';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Briefcase,
  Bulb,
  Chart,
  Clipboard,
  ClipboardCheck,
  Clock,
  Document,
  GradCap,
  Heart,
  Numbers,
  People,
  Person,
  Search,
  ShieldCheck,
  Signpost,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Dyscalculia Assessment',
  description:
    'Comprehensive dyscalculia assessments identifying difficulties with number sense, maths processing and related learning differences.',
};

export default function Page() {
  return (
    <LearningDifferencePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'Dyscalculia Assessment' },
      ]}
      title="Dyscalculia Assessment"
      body="FairNeuro offers comprehensive assessments to help identify difficulties with number sense, maths processing and related learning differences, with clear, personalised recommendations to support learning, study, work and everyday life."
      image={{ src: img.heroDyscalculia, alt: 'A student working through maths problems' }}
      features={[
        { icon: ClipboardCheck, title: 'Comprehensive Assessment', desc: 'In-depth evaluation of number sense, maths processing and related cognitive skills.', accent: 'teal' },
        { icon: ShieldCheck, title: 'Clear Recommendations', desc: 'Detailed, practical strategies and adjustments tailored to your needs.', accent: 'orange' },
        { icon: People, title: 'Adult & Child Pathways', desc: 'Specialist assessments for adults and children & young people at every stage.', accent: 'coral' },
        { icon: Heart, title: 'Support Beyond Diagnosis', desc: 'Guidance, resources and ongoing support to help you move forward with confidence.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is dyscalculia?',
        icon: Numbers,
        lead: 'Dyscalculia is a learning difference that affects how the brain understands numbers and maths. It is not related to intelligence and can affect people across all ages.',
        points: [
          { icon: Clipboard, text: 'Affects number sense, calculations and maths reasoning.' },
          { icon: Chart, text: 'Can make everyday tasks involving numbers more challenging.' },
          { icon: Person, text: 'With the right support, individuals can build confidence and thrive.' },
        ],
      }}
      signs={{
        heading: 'Signs that may suggest dyscalculia',
        items: [
          { icon: Numbers, title: 'Difficulty understanding numbers, quantity and place value', accent: 'teal' },
          { icon: Clipboard, title: 'Challenges with mental arithmetic and recalling number facts', accent: 'coral' },
          { icon: Clock, title: 'Difficulty with time, sequencing and estimation', accent: 'orange' },
          { icon: Chart, title: 'Trouble managing money and calculating costs or change', accent: 'teal' },
          { icon: Brain, title: 'Maths anxiety and avoidance of number tasks', accent: 'coral' },
          { icon: Document, title: 'Difficulty retaining and applying numerical information', accent: 'orange' },
        ],
      }}
      includes={{
        heading: 'What the assessment includes',
        steps: [
          { icon: Star, title: 'Initial Consultation', desc: 'We discuss your concerns, goals and any relevant background information.' },
          { icon: Document, title: 'Background Information', desc: 'You complete questionnaires and provide information about your history.' },
          { icon: ClipboardCheck, title: 'Structured Assessment', desc: 'A range of standardised tasks to explore number and maths processing skills.' },
          { icon: Person, title: 'Clinical Review', desc: 'Our clinicians carefully review results and integrate all information.' },
          { icon: Document, title: 'Comprehensive Report', desc: 'A detailed report outlining findings, strengths, challenges and needs.' },
          { icon: Signpost, title: 'Personalised Next Steps', desc: 'Tailored recommendations and practical strategies for support and growth.' },
        ],
      }}
      audience={{
        heading: 'Who this assessment is for',
        items: [
          { icon: Person, title: 'Adults', desc: 'For adults experiencing ongoing maths difficulties in work, daily life or study.', accent: 'teal' },
          { icon: People, title: 'Children & Young People', desc: 'For children and young people struggling with number sense, maths and learning.', accent: 'coral' },
          { icon: GradCap, title: 'Students', desc: 'For students who need support to understand their learning differences.', accent: 'orange' },
          { icon: Briefcase, title: 'Workplace & Education Support', desc: 'For organisations seeking insights to support individuals effectively.', accent: 'teal' },
        ],
      }}
      report={{
        heading: 'What your report may include',
        items: [
          { icon: Search, title: 'Key Findings', desc: 'A clear summary of assessment results and identified areas of difficulty.', accent: 'teal' },
          { icon: Star, title: 'Strengths & Challenges', desc: 'An overview of strengths alongside areas that may impact learning or work.', accent: 'coral' },
          { icon: Bulb, title: 'Practical Recommendations', desc: 'Personalised strategies and adjustments for learning, study and daily life.', accent: 'orange' },
          { icon: Book, title: 'Education & Workplace Guidance', desc: 'Advice to support teachers, employers and support professionals.', accent: 'teal' },
          { icon: Signpost, title: 'Next Steps', desc: 'Suggested actions and resources to help you move forward with confidence.', accent: 'coral' },
        ],
      }}
      promptTitle="Not sure whether dyscalculia assessment is right for you?"
      promptBody="A free consultation is a great place to start. We'll listen to your concerns and help you explore the best pathway for your needs."
      ctaTitle="Ready to understand your relationship with numbers?"
      ctaBody="Book a free consultation with our team to explore how assessment and support can help."
    />
  );
}
