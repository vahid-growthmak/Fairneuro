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
  CalendarCheck,
  Chart,
  ClipboardCheck,
  GradCap,
  HeartHand,
  Lock,
  People,
  Person,
  Rosette,
  Target,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Post-Diagnostic Support',
  description:
    'Turn understanding into action with practical strategies, tools and ongoing guidance after your diagnosis.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Support', href: '/support' },
          { label: 'Post-Diagnostic Support' },
        ]}
        title="Post-Diagnostic Support That Empowers."
        lede="Guidance today. Confidence for tomorrow."
        body="A diagnosis is an important step, but it's just the beginning. Our post-diagnostic support helps you turn understanding into action with practical strategies, tools and ongoing guidance tailored to you."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroSupport, alt: 'A person writing in a notebook' }}
        features={[
          { icon: Person, title: 'Personalised', desc: 'Support tailored to your strengths, challenges and goals.', accent: 'teal' },
          { icon: Target, title: 'Practical', desc: 'Actionable strategies you can use in daily life.', accent: 'teal' },
          { icon: People, title: 'Ongoing', desc: 'Continued support whenever you need it.', accent: 'teal' },
          { icon: TrendUp, title: 'Empowering', desc: 'Build confidence, independence and long-term success.', accent: 'teal' },
        ]}
      />

      <CardGrid
        title="How we support you after your diagnosis"
        columns={6}
        background="white"
        cardAlign="left"
        items={[
          { icon: Person, title: 'Understanding Your Diagnosis', desc: 'We help you make sense of your results and what they mean for you.', href: '/book-consultation', accent: 'teal' },
          { icon: Brain, title: 'Personalised Action Plan', desc: 'A tailored plan with practical strategies and clear goals.', href: '/book-consultation', accent: 'purple' },
          { icon: GradCap, title: 'Education & Resources', desc: 'Access to expert resources to help you learn, adapt and grow.', href: '/resources', accent: 'orange' },
          { icon: People, title: 'Coaching & Skills Development', desc: 'Build skills in organisation, focus, communication and more.', href: '/support/adhd-coaching', accent: 'green' },
          { icon: HeartHand, title: 'Emotional Wellbeing', desc: 'Support for your mental health, self-esteem and overall wellbeing.', href: '/support/therapy-wellbeing', accent: 'coral' },
          { icon: CalendarCheck, title: 'Review & Progress', desc: 'Regular check-ins to review progress and adjust your plan.', href: '/book-consultation', accent: 'blue' },
        ]}
      />

      <BenefitsPanel
        title="The benefits of ongoing support"
        items={[
          { title: 'Greater Confidence', desc: 'Feel more confident in your abilities and decisions.' },
          { title: 'Better Daily Functioning', desc: 'Practical tools to improve focus, routines and productivity.' },
          { title: 'Stronger Relationships', desc: 'Improve communication and understanding with others.' },
          { title: 'Reduced Stress', desc: 'Develop coping strategies to manage challenges more effectively.' },
          { title: 'Long-Term Growth', desc: 'Build resilience and create a future you feel positive about.' },
        ]}
      />

      <ProcessRow
        title="How it works"
        background="white"
        steps={[
          { icon: ClipboardCheck, title: 'Review Your Results', desc: 'We go through your diagnosis and answer your questions.', accent: 'teal' },
          { icon: Book, title: 'Create Your Plan', desc: 'We create a personalised plan based on your needs and goals.', accent: 'purple' },
          { icon: People, title: 'Access Support', desc: 'Connect with the right support, coaching and resources.', accent: 'orange' },
          { icon: Target, title: 'Take Action', desc: 'Use practical strategies in your daily life.', accent: 'green' },
          { icon: Chart, title: 'Review & Thrive', desc: 'We review progress and celebrate your growth.', accent: 'blue' },
        ]}
      />

      <CtaBand
        title="You don't have to navigate this journey alone."
        body="Book a free consultation today and let us help you take the next step with confidence."
        ticks={null}
        background="white"
      />

      <IconColumns
        boxed
        compact
        background="ivory"
        items={[
          { icon: Lock, title: 'Your privacy is our priority', desc: 'All information is confidential and handled with care.', accent: 'teal' },
          { icon: Rosette, title: 'Expert Support', desc: 'Our team has extensive experience in neurodiversity care and support.', accent: 'purple' },
          { icon: Book, title: 'Evidence-Based', desc: 'Our support is built on the latest research and best clinical practice.', accent: 'coral' },
          { icon: People, title: 'Trusted by Thousands', desc: "We're proud to support individuals and families every day.", accent: 'blue' },
        ]}
      />
    </>
  );
}
