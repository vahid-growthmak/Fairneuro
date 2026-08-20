import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Chats,
  ClipboardCheck,
  Document,
  GradCap,
  Headset,
  Heart,
  Infinity as InfinityIcon,
  Lock,
  People,
  Question,
  ShieldLock,
} from '@/components/icons';

export const metadata = {
  title: 'Support',
  description:
    'Guidance, resources and a caring team at every step of your neurodevelopmental journey — from understanding conditions to parent, wellbeing and education support.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Support' }]}
        title="Support"
        lede="Guidance. Resources. You're not alone."
        body="We're here to support you at every step of your neurodevelopmental journey with trusted information, practical resources and a caring team."
        secondaryCta={{ label: 'Talk to Our Team', href: '/contact' }}
        ticks={['Compassionate team', 'Confidential', 'Expert guidance', 'Tailored support']}
        image={{ src: img.heroSupport, alt: 'A person relaxing with a warm drink' }}
      />

      <CardGrid
        title="How we can support you"
        columns={6}
        background="white"
        cardAlign="left"
        items={[
          {
            icon: Brain,
            title: 'Understanding Conditions',
            desc: 'Learn more about ADHD, autism, dyslexia and other neurodevelopmental conditions.',
            href: '/assessments',
            accent: 'teal',
          },
          {
            icon: Book,
            title: 'Guides & Resources',
            desc: 'Practical guides, fact sheets and expert articles for individuals, parents and professionals.',
            href: '/resources',
            accent: 'coral',
          },
          {
            icon: Chats,
            title: 'FAQs',
            desc: 'Find answers to common questions about assessments, diagnosis, reports and next steps.',
            href: '/faqs',
            accent: 'orange',
          },
          {
            icon: People,
            title: 'Parent & Carer Support',
            desc: 'Support, strategies and advice to help you support your child with confidence.',
            href: '/support/parent-family',
            accent: 'teal',
          },
          {
            icon: Heart,
            title: 'Emotional Wellbeing',
            desc: 'Wellbeing resources and signposting for emotional wellbeing and mental health support.',
            href: '/support/therapy-wellbeing',
            accent: 'coral',
          },
          {
            icon: GradCap,
            title: 'School & Education Support',
            desc: 'Information and resources to support learning at school, including reasonable adjustments.',
            href: '/support/education-support',
            accent: 'purple',
          },
        ]}
      />

      <PromptBand
        title="Need more help?"
        body="Our friendly team is here to answer your questions and guide you to the right support."
        cta={{ label: 'Talk to Our Team', href: '/contact' }}
        icon={Headset}
        variant="filled"
        background="white"
      />

      <IconColumns
        title="Helpful quick links"
        compact
        background="white"
        items={[
          { icon: Brain, title: 'About ADHD', href: '/assessments/adhd', accent: 'teal' },
          { icon: InfinityIcon, title: 'About Autism', href: '/assessments/autism', accent: 'coral' },
          { icon: Book, title: 'About Dyslexia', href: '/assessments/dyslexia', accent: 'orange' },
          { icon: Document, title: 'Reports Explained', href: '/resources/your-report-explained', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Assessment Process', href: '/how-it-works', accent: 'coral' },
          { icon: ShieldLock, title: 'Privacy & Confidentiality', href: '/privacy-policy', accent: 'purple' },
        ]}
      />

      <PromptBand
        title="Still not sure where to start?"
        body="Book a free consultation and we'll help point you in the right direction."
        icon={Question}
        background="white"
      />

      <CtaBand
        title="We're here to support you"
        body="You don't have to navigate this journey alone."
        cta={{ label: 'Talk to Our Team', href: '/contact' }}
        background="white"
      />
    </>
  );
}
