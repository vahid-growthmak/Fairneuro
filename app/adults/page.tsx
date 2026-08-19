import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { BenefitsPanel } from '@/components/sections/Panels';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Briefcase,
  Calendar,
  Chart,
  Chat,
  Document,
  Globe,
  HeartHand,
  Lock,
  Numbers,
  People,
  Person,
  ShieldCheck,
  Target,
  TwoHeads,
} from '@/components/icons';

export const metadata = {
  title: 'Assessment and Support for Adults',
  description:
    'Adult ADHD, autism, dyslexia and dyscalculia assessments, plus coaching, workplace support and therapy tailored to adult life.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Adults' }]}
        eyebrow="Adults"
        title="Assessment and Support for Adults"
        lede="Understand yourself. Unlock your potential."
        body="Comprehensive, evidence-based assessments designed around adult life — followed by practical support for work, study, relationships and everyday wellbeing."
        secondaryCta={{ label: 'Explore Assessments', href: '/assessments' }}
        ticks={['Comprehensive', 'Personalised', 'Evidence-based', 'Empowering']}
        image={{ src: img.heroAdults, alt: 'An adult smiling confidently' }}
      />

      <CardGrid
        title="Our adult assessment services"
        columns={5}
        background="white"
        items={[
          { icon: Brain, title: 'Adult ADHD', desc: 'Assessment of attention, focus, organisation and impulsivity.', href: '/adults/adhd', accent: 'teal' },
          { icon: Person, title: 'Adult Autism', desc: 'Assessment of communication, sensory experiences and social connection.', href: '/adults/autism', accent: 'coral' },
          { icon: Book, title: 'Adult Dyslexia', desc: 'Assessment of reading, writing, spelling and processing.', href: '/adults/dyslexia', accent: 'orange' },
          { icon: Numbers, title: 'Dyscalculia', desc: 'Assessment of number sense and maths processing.', href: '/assessments/dyscalculia', accent: 'teal' },
          { icon: TwoHeads, title: 'ADHD + Autism', desc: 'A combined assessment for overlapping experiences.', href: '/adults/adhd-autism', accent: 'purple' },
        ]}
      />

      <BenefitsPanel
        title="Support tailored for adult life"
        columns={4}
        items={[
          { title: 'Workplace Support', desc: 'Practical adjustments and strategies that work at work.' },
          { title: 'Coaching & Executive Function Support', desc: 'Build systems for focus, planning and follow-through.' },
          { title: 'Therapy & Wellbeing', desc: 'Emotional support tailored to your experiences.' },
          { title: 'Post-Diagnostic Support', desc: 'Guidance and resources for the months after your report.' },
        ]}
      />

      <ProcessRow
        title="How it works"
        background="white"
        steps={[
          { icon: Calendar, title: 'Book a free consultation', desc: 'Tell us about your needs and what you are looking for.' },
          { icon: Chat, title: 'We understand your goals', desc: "We'll listen, ask questions and recommend the right pathway." },
          { icon: Document, title: 'Get your assessment', desc: 'A comprehensive assessment with an experienced clinician.' },
          { icon: Chart, title: 'Receive your results', desc: 'A detailed report and a feedback session to talk it through.' },
          { icon: Target, title: 'Ongoing support', desc: "We're with you every step of the way afterwards." },
        ]}
      />

      <IconColumns
        boxed
        compact
        background="white"
        items={[
          { icon: Lock, title: 'Confidential & Secure', desc: 'Your information is always protected.', accent: 'teal' },
          { icon: People, title: 'Expert Team', desc: 'Carefully selected, highly experienced clinicians.', accent: 'coral' },
          { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Gold-standard tools and frameworks.', accent: 'orange' },
          { icon: Globe, title: 'Global Access', desc: 'Supporting adults in 40+ countries.', accent: 'teal' },
          { icon: HeartHand, title: 'Support That Lasts', desc: 'Assessment is only the beginning.', accent: 'coral' },
        ]}
      />

      <CtaBand
        title="Take the first step towards clarity and confidence."
        body="Book a free consultation and let our team guide you."
        background="white"
      />
    </>
  );
}
