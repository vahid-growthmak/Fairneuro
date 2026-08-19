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
  Document,
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
        body="Child-centred, evidence-based assessments with families involved at every stage — and clear, practical recommendations for home, school and everyday life."
        secondaryCta={{ label: 'Explore Assessments', href: '/assessments' }}
        ticks={['Child-centred', 'Evidence-based', 'Family involved', 'Empowering']}
        image={{ src: img.heroChildren, alt: 'A child smiling' }}
      />

      <CardGrid
        title="Our children's assessment services"
        columns={5}
        background="white"
        items={[
          { icon: Brain, title: 'Child ADHD', desc: 'Assessment of attention, behaviour and executive functioning.', href: '/children/adhd', accent: 'teal' },
          { icon: Person, title: 'Child Autism', desc: 'Assessment of communication, sensory needs and routines.', href: '/children/autism', accent: 'coral' },
          { icon: Book, title: 'Child Dyslexia', desc: 'Assessment of reading, spelling and related processing skills.', href: '/children/dyslexia', accent: 'orange' },
          { icon: Numbers, title: 'Dyscalculia', desc: 'Assessment of number sense and maths processing.', href: '/assessments/dyscalculia', accent: 'teal' },
          { icon: TwoHeads, title: 'ADHD + Autism', desc: 'A combined assessment for overlapping traits.', href: '/children/adhd-autism', accent: 'purple' },
        ]}
      />

      <BenefitsPanel
        title="Support that grows with your child"
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
