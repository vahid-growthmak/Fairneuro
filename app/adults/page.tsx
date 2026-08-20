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
  ClipboardCheck,
  Document,
  Globe,
  HeartHand,
  Leaf,
  Lock,
  Numbers,
  People,
  Person,
  ShieldCheck,
  Target,
  TwoHeads,
  Infinity as InfinityIcon,
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
        title="Assessment and Support for Adults."
        lede="Understand yourself. Unlock your potential."
        body="Whether you're seeking answers, a diagnosis, or ongoing support, we're here to help you thrive. Our adult services are designed to provide clarity, strategies and support at every stage of your neurodiversity journey."
        secondaryCta={{ label: 'Explore Assessments', href: '/assessments' }}
        features={[
          { icon: Brain, title: 'Comprehensive', desc: 'Specialist assessments for ADHD, autism, dyslexia and more.', accent: 'teal' },
          { icon: People, title: 'Personalised', desc: 'Tailored support that fits your unique strengths and goals.', accent: 'coral' },
          { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Our services are grounded in the latest research and best practice.', accent: 'purple' },
          { icon: Leaf, title: 'Empowering', desc: 'Practical tools and strategies to help you succeed in life and work.', accent: 'green' },
        ]}
        image={{ src: img.heroAdults, alt: 'An adult smiling confidently' }}
      />

      <CardGrid
        title="Our adult assessment services"
        columns={5}
        background="white"
        items={[
          { icon: Brain, title: 'Adult ADHD Assessment', desc: 'A thorough assessment to help you understand your attention, focus and executive functioning.', href: '/adults/adhd', accent: 'teal' },
          { icon: InfinityIcon, title: 'Adult Autism Assessment', desc: 'Gain clarity and support with a comprehensive autism assessment for adults.', href: '/adults/autism', accent: 'coral' },
          { icon: Book, title: 'Adult Dyslexia Assessment', desc: 'Identify your strengths and challenges with a specialist dyslexia assessment.', href: '/adults/dyslexia', accent: 'orange' },
          { icon: Numbers, title: 'Dyscalculia Assessment', desc: 'Assessment and support for difficulties with numbers and maths processing.', href: '/assessments/dyscalculia', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Other Assessments', desc: 'Dyspraxia (DCD) and other specific learning differences assessments available.', href: '/assessments', accent: 'green' },
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
