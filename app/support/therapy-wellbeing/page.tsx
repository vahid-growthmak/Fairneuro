import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import {
  Brain,
  Chats,
  Cloud,
  GradCap,
  Heart,
  HeartHand,
  Leaf,
  People,
  Person,
  ShieldCheck,
  Star,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Therapy & Wellbeing',
  description:
    'Therapy and wellbeing support tailored to your emotional and mental health, delivered by experienced, compassionate practitioners.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Therapy & Wellbeing' },
      ]}
      title="Therapy & Wellbeing Support for a Balanced Life"
      lede="Emotional support tailored to you."
      body="Confidential, compassionate therapy delivered by experienced practitioners who understand neurodiversity — helping you build resilience, insight and a sense of balance."
      ticks={['Understanding', 'Confidential', 'Personalised', 'Growth']}
      image={{ src: img.heroSupport, alt: 'A person in a calm, reflective moment' }}
      benefits={{
        heading: 'Our therapy and wellbeing services',
        items: [
          { icon: Person, title: 'Individual Therapy', desc: 'One-to-one sessions focused on your goals and experiences.', accent: 'teal' },
          { icon: People, title: 'Couples Therapy', desc: 'Support for partners navigating neurodiversity together.', accent: 'coral' },
          { icon: Cloud, title: 'Anxiety Support', desc: 'Practical tools for managing worry and overwhelm.', accent: 'orange' },
          { icon: Heart, title: 'Depression Support', desc: 'Compassionate support for low mood and motivation.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Trauma Support', desc: 'A safe, paced approach to difficult experiences.', accent: 'coral' },
          { icon: Star, title: 'Self-Esteem & Confidence', desc: 'Rebuild self-worth and a kinder inner voice.', accent: 'teal' },
        ],
      }}
      audience={{
        heading: 'Who is therapy and wellbeing support for?',
        items: [
          { icon: Person, title: 'Adults', desc: 'For adults seeking emotional support alongside or after assessment.', accent: 'teal' },
          { icon: People, title: 'Parents & Families', desc: 'For families navigating diagnosis, change and everyday pressures together.', accent: 'coral' },
          { icon: GradCap, title: 'Students', desc: 'For students managing academic pressure, identity and independence.', accent: 'orange' },
          { icon: Brain, title: 'Neurodivergent Individuals', desc: 'Therapy delivered by practitioners who genuinely understand neurodiversity.', accent: 'teal' },
          { icon: HeartHand, title: 'Anyone Seeking Support', desc: 'Therapy is available with or without a formal diagnosis.', accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How therapy and wellbeing support can help',
        items: [
          { icon: Heart, title: 'Improved mental health', accent: 'teal' },
          { icon: Chats, title: 'Better relationships', accent: 'coral' },
          { icon: Brain, title: 'Increased self-awareness', accent: 'orange' },
          { icon: TrendUp, title: 'Resilience and coping skills', accent: 'teal' },
          { icon: Leaf, title: 'Greater wellbeing', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in therapy and wellbeing support?",
        steps: supportSteps({
          consultDesc: 'A free consultation to understand what you are looking for.',
          planTitle: 'We match you',
          planDesc: 'We pair you with a practitioner suited to your needs and preferences.',
          sessionTitle: 'Start your sessions',
          sessionDesc: 'Regular, confidential sessions online or in person.',
          trackingDesc: 'We review progress together and adjust the approach as needed.',
          toolsDesc: 'Practical tools and exercises to use between sessions.',
          ongoingDesc: 'Ongoing support for as long as it is useful to you.',
        }),
      }}
      promptTitle="Not sure whether therapy is right for you?"
      ctaTitle="Take the first step towards feeling better."
    />
  );
}
