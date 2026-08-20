import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { BenefitsPanel } from '@/components/sections/Panels';
import { FeaturedIn } from '@/components/sections/FeaturedIn';
import { img } from '@/lib/images';
import {
  Calendar,
  Chart,
  Chats,
  ClipboardCheck,
  Gear,
  GradCap,
  Lock,
  People,
  ShieldCheck,
  Sliders,
  Target,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Workplace Support',
  description:
    'We partner with employers to create inclusive, supportive environments where neurodivergent colleagues can thrive.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Support', href: '/support' },
          { label: 'Workplace Support' },
        ]}
        title="Workplace Support That Makes a Difference."
        lede="Empowering people. Strengthening workplaces."
        body="We partner with employers to create inclusive, supportive environments where neurodivergent colleagues can thrive and organisations can achieve their full potential."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroWorkplace, alt: 'A professional working at a desk' }}
        features={[
          { icon: People, title: 'Inclusive', desc: 'Build a culture where everyone feels valued and supported.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Practical', desc: 'Actionable strategies that create real, measurable change.', accent: 'teal' },
          { icon: Chart, title: 'Evidence-Based', desc: 'Solutions grounded in research and best practice.', accent: 'teal' },
          { icon: Lock, title: 'Confidential', desc: 'Discreet, professional support you can trust.', accent: 'teal' },
        ]}
      />

      <CardGrid
        title="How we support your organisation"
        columns={6}
        background="white"
        cardAlign="left"
        items={[
          { icon: People, title: 'Workplace Assessments', desc: 'Understand the needs of your team with expert neurodiversity assessments and recommendations.', href: '/contact', accent: 'teal' },
          { icon: GradCap, title: 'Training & Awareness', desc: 'Practical training for leaders and teams to build understanding and confidence.', href: '/contact', accent: 'purple' },
          { icon: Gear, title: 'Policy & Strategy Development', desc: 'We help you create inclusive policies, frameworks and neurodiversity strategies that work.', href: '/contact', accent: 'orange' },
          { icon: Sliders, title: 'Workplace Adjustments', desc: 'Guidance on reasonable adjustments that remove barriers and unlock potential.', href: '/contact', accent: 'teal' },
          { icon: Chats, title: 'Ongoing Consultancy', desc: 'Long-term support to embed inclusion and sustain positive change.', href: '/contact', accent: 'coral' },
          { icon: TrendUp, title: 'Wellbeing & Support', desc: 'Access to wellbeing resources and 1:1 support when your team needs it most.', href: '/contact', accent: 'blue' },
        ]}
      />

      <BenefitsPanel
        title="The benefits of workplace support"
        items={[
          { title: 'Stronger Performance', desc: 'Empower employees to perform at their best.' },
          { title: 'Increased Retention', desc: 'Support your people to stay, grow and thrive.' },
          { title: 'Enhanced Wellbeing', desc: 'Improve mental health and reduce stress.' },
          { title: 'Greater Innovation', desc: 'Diverse teams drive diverse thinking.' },
          { title: 'Positive Reputation', desc: 'Show your commitment to inclusion and social impact.' },
        ]}
      />

      <ProcessRow
        title="How it works"
        background="white"
        steps={[
          { icon: Calendar, title: 'Initial Consultation', desc: 'We discuss your goals, challenges and how we can support.', accent: 'teal' },
          { icon: People, title: 'Understand & Assess', desc: 'We gather insights and identify opportunities for improvement.', accent: 'purple' },
          { icon: Target, title: 'Create a Plan', desc: 'We develop a tailored plan with clear actions and timelines.', accent: 'orange' },
          { icon: Sliders, title: 'Implement', desc: 'We work with you to implement strategies and adjustments.', accent: 'teal' },
          { icon: Chart, title: 'Review & Grow', desc: 'We measure impact and refine to ensure long-term success.', accent: 'blue' },
        ]}
      />

      <CtaBand
        title="Let's build a more inclusive workplace—together."
        body="Book a free consultation to explore how we can support your organisation and your people."
        ticks={null}
        background="white"
      />

      <FeaturedIn />
    </>
  );
}
