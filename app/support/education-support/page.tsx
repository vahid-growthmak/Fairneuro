import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { img } from '@/lib/images';
import {
  Book,
  Briefcase,
  Chart,
  Chat,
  ClipboardCheck,
  Document,
  Folder,
  GradCap,
  HeartHand,
  Leaf,
  People,
  Person,
  Rosette,
  Target,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Education Support',
  description:
    'Education support helping learners of all ages overcome challenges, build confidence and reach their academic potential.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Education Support' },
      ]}
      title="Education Support"
      lede="Personalised support. Better learning. Brighter futures."
      body="Our education support helps learners of all ages overcome challenges, build confidence and reach their academic potential with the right strategies and guidance."
      ticks={['Personalised', 'Evidence based', 'Confidential', 'Here to help']}
      image={{ src: img.heroResources, alt: 'A student working through coursework' }}
      audience={{
        heading: 'Who is education support for?',
        items: [
          { icon: Person, title: 'Children', desc: 'For younger learners needing extra support with literacy, numeracy, attention and learning skills.', accent: 'teal' },
          { icon: People, title: 'Teenagers', desc: 'For teens managing school workloads, exams, organisation and study skills.', accent: 'coral' },
          { icon: GradCap, title: 'University Students', desc: 'For students needing academic support, time management and help with assignments and deadlines.', accent: 'orange' },
          { icon: Briefcase, title: 'Students with Additional Needs', desc: 'For learners with ADHD, autism, dyslexia or other needs requiring tailored educational strategies and adjustments.', accent: 'teal' },
          { icon: HeartHand, title: 'Parents & Families', desc: "For parents seeking guidance and practical strategies to support their child's learning journey.", accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How education support can help',
        items: [
          { icon: Target, title: 'Improve focus and concentration', accent: 'teal' },
          { icon: Rosette, title: 'Develop study and organisation skills', accent: 'coral' },
          { icon: Book, title: 'Strengthen understanding and confidence', accent: 'orange' },
          { icon: Chart, title: 'Boost academic performance', accent: 'teal' },
          { icon: TrendUp, title: 'Support independence and motivation', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in our education support?",
        steps: [
          { icon: Chat, title: 'Initial Consultation', desc: 'We get to know the learner, understand challenges and academic goals.' },
          { icon: ClipboardCheck, title: 'Learning Assessment', desc: 'We assess strengths, challenges and learning needs to inform support.' },
          { icon: Document, title: 'Personalised Plan', desc: 'A tailored support plan with strategies, tools and clear goals.' },
          { icon: Person, title: '1-to-1 Support Sessions', desc: 'Regular sessions focused on skill-building, study strategies and academic progress.' },
          { icon: TrendUp, title: 'Progress Tracking', desc: 'We monitor progress and adjust strategies to ensure continued improvement.' },
          { icon: Folder, title: 'School Collaboration', desc: 'With consent, we work with schools and teachers to ensure consistent support.' },
          { icon: Leaf, title: 'Ongoing Support', desc: 'Continued guidance and resources as needs evolve over time.' },
        ],
      }}
      promptTitle="Not sure if education support is right for you?"
      ctaTitle="Let's unlock your learning potential."
      ctaBody="Book a free consultation and take the first step today."
    />
  );
}
