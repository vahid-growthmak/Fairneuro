import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { BenefitsPanel } from '@/components/sections/Panels';
import { FeaturedIn } from '@/components/sections/FeaturedIn';
import { img } from '@/lib/images';
import {
  Calendar,
  Chat,
  Chats,
  Cloud,
  Heart,
  HeartHand,
  Leaf,
  Lock,
  People,
  Person,
  ShieldCheck,
  Sparkle,
  Star,
  TwoHeads,
} from '@/components/icons';

export const metadata = {
  title: 'Therapy & Wellbeing',
  description:
    'Therapy and wellbeing support to help you manage life’s challenges, build resilience and improve your mental and emotional wellbeing.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Support', href: '/support' },
          { label: 'Therapy & Wellbeing' },
        ]}
        title="Therapy & Wellbeing Support for a Balanced Life."
        lede="Emotional support tailored to you."
        body="Our therapy and wellbeing services provide a safe, understanding space to help you manage life's challenges, build resilience and improve your mental and emotional wellbeing."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroSupport, alt: 'A person relaxing with a warm drink' }}
        features={[
          { icon: Heart, title: 'Understanding', desc: 'A compassionate space to be heard and understood.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Confidential', desc: 'A safe and private environment where you can feel secure.', accent: 'teal' },
          { icon: Person, title: 'Personalised', desc: 'Therapy tailored to your needs, goals and experiences.', accent: 'teal' },
          { icon: Leaf, title: 'Growth', desc: 'Support to help you build tools, resilience and confidence.', accent: 'teal' },
        ]}
      />

      <CardGrid
        title="Our therapy & wellbeing services"
        columns={6}
        background="white"
        cardAlign="left"
        items={[
          { icon: Chat, title: 'Individual Therapy', desc: 'One-to-one therapy to explore your thoughts, feelings and challenges.', href: '/book-consultation', accent: 'purple' },
          { icon: TwoHeads, title: 'Couples Therapy', desc: 'Strengthen relationships, improve communication and rebuild connection.', href: '/book-consultation', accent: 'coral' },
          { icon: Sparkle, title: 'Anxiety Support', desc: 'Evidence-based therapy to manage anxiety and reduce worry and stress.', href: '/book-consultation', accent: 'orange' },
          { icon: Cloud, title: 'Depression Support', desc: 'Compassionate support to help improve mood and wellbeing.', href: '/book-consultation', accent: 'green' },
          { icon: HeartHand, title: 'Trauma Support', desc: 'Specialist support to process experiences and promote healing.', href: '/book-consultation', accent: 'blue' },
          { icon: Star, title: 'Self-Esteem & Confidence', desc: 'Build self-worth, resilience and a positive sense of self.', href: '/book-consultation', accent: 'coral' },
        ]}
      />

      <BenefitsPanel
        title="The benefits of therapy & wellbeing support"
        items={[
          { title: 'Improved Mental Health', desc: 'Reduce stress, anxiety and overwhelm.' },
          { title: 'Better Relationships', desc: 'Build stronger connections and communication.' },
          { title: 'Increased Self-Awareness', desc: 'Gain clarity and understand yourself better.' },
          { title: 'Resilience & Coping Skills', desc: "Develop tools to navigate life's challenges." },
          { title: 'Greater Wellbeing', desc: 'Improve emotional balance and overall quality of life.' },
        ]}
      />

      <ProcessRow
        title="How it works"
        background="white"
        steps={[
          { icon: Calendar, title: 'Book a free consultation', desc: "Tell us about your needs and what you're looking for.", accent: 'teal' },
          { icon: People, title: 'We match you', desc: 'We connect you with the therapist best suited to you.', accent: 'purple' },
          { icon: Person, title: 'Start your sessions', desc: 'Attend sessions online in a safe, confidential space.', accent: 'orange' },
          { icon: Leaf, title: 'Work towards your goals', desc: 'Your therapist supports you with personalised strategies.', accent: 'green' },
          { icon: Chats, title: 'Feel the difference', desc: 'Build confidence, improve wellbeing and thrive.', accent: 'blue' },
        ]}
      />

      <CtaBand
        title="Take the first step towards feeling better."
        body="Book a free consultation today and let us help you on your journey to wellbeing."
        ticks={null}
        background="white"
      />

      <FeaturedIn />
    </>
  );
}
