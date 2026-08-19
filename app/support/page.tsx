import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { img } from '@/lib/images';
import {
  Brain,
  Briefcase,
  Calendar,
  Chart,
  Chats,
  GradCap,
  Heart,
  HeartHand,
  Infinity as InfinityIcon,
  Leaf,
  People,
  Person,
  ShieldCheck,
  Clipboard,
  Target,
} from '@/components/icons';

export const metadata = {
  title: 'Support',
  description:
    'Personalised support for every part of your neurodiversity journey — coaching, workplace, education, therapy and post-diagnostic support.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Support' }]}
        title="Support That Works For You."
        lede="Personalised support for every part of your neurodiversity journey."
        body="From targeted strategies to ongoing guidance, our comprehensive support services are here to help you thrive—at home, at school, at work and in life."
        secondaryCta={{ label: 'Talk to Our Team', href: '/contact' }}
        image={{ src: img.heroSupport, alt: 'A person relaxing with a warm drink' }}
        features={[
          { icon: Person, title: 'Person-Centred', desc: 'Your goals, your needs, your journey.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Our support is built on research and best practice.', accent: 'teal' },
          { icon: People, title: 'Integrated', desc: 'Coordinated across all areas of life.', accent: 'teal' },
          { icon: Heart, title: 'Ongoing', desc: "We're here for you, every step of the way.", accent: 'teal' },
        ]}
      />

      <CardGrid
        title="Our support services"
        underline
        columns={4}
        background="white"
        cardAlign="left"
        items={[
          { icon: Briefcase, title: 'Workplace Support', desc: 'Practical strategies and adjustments to help you succeed and feel supported at work.', href: '/support/workplace-support', accent: 'teal' },
          { icon: GradCap, title: 'Education Support', desc: 'Support for learners of all ages to build confidence, reach their potential and thrive.', href: '/support/education-support', accent: 'purple' },
          { icon: Heart, title: 'Therapy & Wellbeing', desc: 'Access therapy and wellbeing support tailored to your emotional and mental health.', href: '/support/therapy-wellbeing', accent: 'orange' },
          { icon: Leaf, title: 'Post-Diagnostic Support', desc: 'Guidance and resources after diagnosis to help you take confident next steps.', href: '/support/post-diagnostic', accent: 'green' },
          { icon: Brain, title: 'ADHD Coaching', desc: 'Coaching to build focus, organisation and routines that work for your brain, not against it.', href: '/support/adhd-coaching', accent: 'orange' },
          { icon: InfinityIcon, title: 'Autism Coaching', desc: 'Strength-based coaching to support communication, confidence and daily life.', href: '/support/autism-coaching', accent: 'blue' },
          { icon: Clipboard, title: 'Executive Function Support', desc: 'Practical strategies to improve planning, organisation, time management and more.', href: '/support/executive-function', accent: 'coral' },
          { icon: People, title: 'Parent & Family Support', desc: 'Guidance and resources to help families understand, support and navigate together.', href: '/support/parent-family', accent: 'purple' },
        ]}
      />

      <CardGrid
        columns={3}
        background="ivory"
        cardAlign="left"
        items={[
          { icon: Chats, title: 'Learning Support', desc: 'Personalised strategies for reading, writing, memory and study skills.', href: '/support/learning-support', accent: 'teal' },
          { icon: HeartHand, title: 'Behaviour Support', desc: 'Compassionate strategies to understand behaviour and build positive change.', href: '/support/behaviour-support', accent: 'coral' },
          { icon: Target, title: 'Not sure what you need?', desc: 'Book a free consultation and we will help you find the right support.', href: '/book-consultation', accent: 'orange' },
        ]}
      />

      <ProcessRow
        title="How support works"
        background="white"
        steps={[
          { icon: Calendar, title: 'Book a free consultation', desc: "Tell us about your needs and what you're looking for.", accent: 'teal' },
          { icon: People, title: 'We understand your goals', desc: "We'll listen, ask questions and recommend the right support.", accent: 'purple' },
          { icon: Target, title: 'Get a personalised plan', desc: 'Receive a tailored plan with clear steps and recommendations.', accent: 'orange' },
          { icon: Chart, title: 'Ongoing support', desc: "We're with you every step of the way to help you thrive.", accent: 'green' },
        ]}
      />

      <CtaBand
        title="Not sure where to start?"
        body="Book a free consultation with our team and we'll help you find the support that's right for you."
        background="white"
      />
    </>
  );
}
