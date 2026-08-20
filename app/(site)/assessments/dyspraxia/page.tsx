import { LearningDifferencePage } from '@/components/templates/LearningDifferencePage';
import { img } from '@/lib/images';
import {
  Balance,
  Battery,
  Book,
  Brain,
  Briefcase,
  Bulb,
  Clipboard,
  ClipboardCheck,
  Clock,
  Document,
  GradCap,
  Heart,
  Pencil,
  People,
  Person,
  Puzzle,
  Running,
  Search,
  ShieldCheck,
  Signpost,
  Star,
  Steps as StepsIcon,
} from '@/components/icons';

export const metadata = {
  title: 'Dyspraxia / DCD Assessment',
  description:
    'Comprehensive dyspraxia (Developmental Coordination Disorder) assessments for coordination, motor planning and organisation.',
};

export default function Page() {
  return (
    <LearningDifferencePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'Dyspraxia / DCD Assessment' },
      ]}
      title={
        <>
          Dyspraxia /{' '}
          <br />
          DCD Assessment
        </>
      }
      body="Fairneuro offers comprehensive assessments to help identify difficulties with coordination, motor planning, organisation and related developmental differences, with clear, personalised recommendations to support learning, daily life, work and confidence."
      image={{ src: img.heroDyspraxia, alt: 'A young person concentrating on written work' }}
      features={[
        { icon: ClipboardCheck, title: 'Comprehensive Assessment', desc: 'In-depth evaluation of motor coordination, planning, organisation and daily functioning.', accent: 'teal' },
        { icon: ShieldCheck, title: 'Clear Recommendations', desc: 'Detailed, practical strategies and adjustments tailored to your needs.', accent: 'orange' },
        { icon: People, title: 'Adult & Child Pathways', desc: 'Specialist assessments for adults and children & young people at every stage.', accent: 'coral' },
        { icon: Heart, title: 'Support Beyond Diagnosis', desc: 'Guidance, resources and ongoing support to help you thrive with confidence.', accent: 'teal' },
      ]}
      what={{
        heading: 'What is dyspraxia / DCD?',
        icon: Brain,
        lead: 'Dyspraxia, also known as Developmental Coordination Disorder (DCD), is a neurodevelopmental difference that affects the development of coordination, motor planning, sequencing and organisation.',
        points: [
          { icon: People, text: 'It can affect children, young people and adults, and can impact everyday tasks at home, school, work and in the community.' },
          { icon: Puzzle, text: 'With the right understanding and support, individuals can develop strategies, build confidence and reach their full potential.' },
          { icon: Star, text: 'Assessment brings clarity — and clarity opens the door to the right adjustments.' },
        ],
      }}
      signs={{
        heading: 'Signs that may suggest dyspraxia / DCD',
        items: [
          { icon: StepsIcon, title: 'Coordination Difficulties', desc: 'Struggles with physical skills, movement and motor coordination.', accent: 'teal' },
          { icon: Running, title: 'Poor Balance or Clumsiness', desc: 'Frequent tripping, bumping into things or appearing clumsy.', accent: 'coral' },
          { icon: Pencil, title: 'Difficulties with Handwriting', desc: 'Poor handwriting, letter formation or fatigue when writing.', accent: 'orange' },
          { icon: Clipboard, title: 'Organisation & Sequencing', desc: 'Challenges planning, organising tasks or following steps.', accent: 'teal' },
          { icon: Clock, title: 'Time Management Challenges', desc: 'Difficulty managing time, routines and meeting deadlines.', accent: 'coral' },
          { icon: Battery, title: 'Fatigue or Frustration', desc: 'Easily tired by practical tasks or frustrated by everyday activities.', accent: 'orange' },
        ],
      }}
      includes={{
        heading: 'What the assessment includes',
        steps: [
          { icon: Star, title: 'Initial Consultation', desc: 'We discuss your concerns, goals and any relevant background information.' },
          { icon: Document, title: 'Background Information', desc: 'You complete questionnaires and provide information about your history.' },
          { icon: ClipboardCheck, title: 'Structured Assessment', desc: 'A range of tasks explore coordination, motor planning and everyday functioning.' },
          { icon: Person, title: 'Clinical Review', desc: 'Our clinicians carefully review results and any relevant information.' },
          { icon: Document, title: 'Comprehensive Report', desc: 'A detailed report with findings, explanations and practical strategies.' },
          { icon: Signpost, title: 'Personalised Next Steps', desc: 'Tailored recommendations and practical strategies for support and growth.' },
        ],
      }}
      audience={{
        heading: 'Who this assessment is for',
        items: [
          { icon: Person, title: 'Adults', desc: 'For adults experiencing ongoing coordination, organisation or daily functioning challenges.', accent: 'teal' },
          { icon: People, title: 'Children & Young People', desc: 'For children and young people struggling with coordination at school, home or in activities.', accent: 'coral' },
          { icon: GradCap, title: 'Students', desc: 'For students who need support to manage study and everyday tasks.', accent: 'orange' },
          { icon: Briefcase, title: 'Education / Workplace Support', desc: 'For schools, colleges and employers seeking strategies and reasonable adjustments.', accent: 'teal' },
        ],
      }}
      report={{
        heading: 'What your report may include',
        items: [
          { icon: Search, title: 'Key Findings', desc: 'A clear summary of assessment results and areas of impact.', accent: 'teal' },
          { icon: Star, title: 'Strengths & Challenges', desc: 'An overview of strengths alongside areas that may present challenges.', accent: 'coral' },
          { icon: Bulb, title: 'Practical Recommendations', desc: 'Personalised strategies and adjustments for home, school, work and daily life.', accent: 'orange' },
          { icon: Book, title: 'Education & Workplace Guidance', desc: 'Advice to support teachers, employers and support teams to create the right environment.', accent: 'teal' },
          { icon: Signpost, title: 'Next Steps', desc: 'Suggested actions and resources to help you move forward with confidence.', accent: 'coral' },
        ],
      }}
      promptTitle="Not sure whether a dyspraxia / DCD assessment is right for you?"
      promptBody="A free consultation is a great place to start. We'll listen to your concerns and help you explore the best pathway for your needs."
      ctaTitle="Ready to better understand coordination, organisation and everyday functioning?"
      ctaBody="Book a free consultation with our team to explore how assessment and support can help."
    />
  );
}
