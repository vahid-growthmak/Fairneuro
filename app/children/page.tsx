import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { BenefitsPanel } from '@/components/sections/Panels';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Calendar,
  Chart,
  Chat,
  ClipboardCheck,
  Document,
  Heart,
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
  title: 'Assessment and Support for Children',
  description:
    "Child-centred ADHD, autism and dyslexia assessments, with practical guidance for families, schools and everyday routines.",
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Children' }]}
        eyebrow="Children"
        title="Every Child is Unique. We're Here to Help."
        lede="Assessment and support that helps children shine."
        body="Our specialist assessments and personalised support help children overcome challenges, build confidence and reach their full potential."
        secondaryCta={{ label: 'Explore Assessments', href: '/assessments' }}
        features={[
          { icon: Heart, title: 'Child-Centred', desc: 'We create a safe, friendly space where every child is heard.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Assessments and strategies grounded in the latest research.', accent: 'purple' },
          { icon: People, title: 'Family Involved', desc: 'We work closely with parents and carers every step of the way.', accent: 'coral' },
          { icon: Leaf, title: 'Empowering', desc: 'Practical support to help your child grow, thrive and succeed.', accent: 'green' },
        ]}
        image={{ src: img.heroChildren, alt: 'A child smiling' }}
      />

      <CardGrid
        title="Our children's assessment services"
        columns={5}
        background="white"
        items={[
          { icon: Brain, title: 'Child ADHD Assessment', desc: 'Understand attention, behaviour and executive functioning challenges.', href: '/children/adhd', accent: 'teal' },
          { icon: InfinityIcon, title: 'Child Autism Assessment', desc: 'Comprehensive assessment to understand social communication and behaviour.', href: '/children/autism', accent: 'coral' },
          { icon: Book, title: 'Child Dyslexia Assessment', desc: 'Identify strengths and challenges with reading, spelling and learning.', href: '/children/dyslexia', accent: 'orange' },
          { icon: Numbers, title: 'Dyscalculia Assessment', desc: 'Assessment for difficulties with numbers, maths concepts and reasoning.', href: '/assessments/dyscalculia', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Other Assessments', desc: 'Dyspraxia (DCD), anxiety, specific learning differences and more.', href: '/assessments', accent: 'green' },
        ]}
      />

      <BenefitsPanel
        title="Support that grows with your child."
        columns={4}
        items={[
          { title: 'Personalised Support Plans', desc: 'Clear strategies matched to your child’s profile.' },
          { title: 'School & Learning Support', desc: 'Practical guidance for teachers and SENCOs.' },
          { title: 'Emotional Wellbeing', desc: 'Support for confidence, regulation and resilience.' },
          { title: 'Parent Guidance', desc: 'Advice and resources so families feel equipped.' },
        ]}
      />

      <ProcessRow
        title="How it works"
        background="white"
        steps={[
          { icon: Calendar, title: 'Book a free consultation', desc: 'Tell us about your child and what you are noticing.' },
          { icon: Chat, title: 'We understand your child', desc: 'We listen to you, your child and their school.' },
          { icon: Document, title: 'Assessment', desc: 'A friendly, age-appropriate assessment with a specialist.' },
          { icon: Chart, title: 'Receive results', desc: 'A detailed report plus a feedback session for parents.' },
          { icon: Target, title: 'Ongoing support', desc: 'Guidance and resources for home and school.' },
        ]}
      />

      <IconColumns
        boxed
        compact
        background="white"
        items={[
          { icon: Lock, title: 'Safe & Confidential', desc: 'Your family’s information is always protected.', accent: 'teal' },
          { icon: People, title: 'Expert Team', desc: 'Specialists in child neurodevelopment.', accent: 'coral' },
          { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Age-appropriate, gold-standard tools.', accent: 'orange' },
          { icon: HeartHand, title: 'Support That Lasts', desc: 'We stay with you after the report.', accent: 'teal' },
        ]}
      />

      <CtaBand
        title="Your child's future starts with understanding."
        body="Book a free consultation and let our team guide you."
        background="white"
      />
    </>
  );
}
