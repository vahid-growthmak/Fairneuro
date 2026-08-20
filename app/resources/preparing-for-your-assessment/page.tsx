import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { img } from '@/lib/images';
import {
  Book,
  Calendar,
  Chat,
  ClipboardCheck,
  Heart,
  HeartHand,
  Laptop,
  Lock,
  People,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Preparing for Your Assessment',
  description:
    'What to bring, what to expect and how to feel ready on the day of your neurodiversity assessment.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Preparing for Your Assessment' },
        ]}
        title="Preparing for Your Assessment"
        lede="A little preparation can make a big difference."
        body="Being prepared helps us get to know you (or your child) better and ensures your assessment is as accurate and helpful as possible."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        ticks={[
          'Feel confident and informed',
          'Help us understand your experiences',
          'Make the assessment process smoother',
        ]}
        image={{ src: img.heroConsultation, alt: 'A person preparing notes' }}
      />

      <SplitBand
        title="It's okay to feel nervous."
        body="Our team is here to support you in a safe, understanding and respectful environment."
        cta={{ label: 'Talk to Our Team', href: '/contact' }}
        icon={Heart}
        background="white"
      />

      <CardGrid
        title="How to prepare"
        subtitle="These simple steps can help you feel more prepared for your assessment."
        columns={3}
        background="white"
        cardAlign="left"
        items={[
          { icon: Calendar, title: 'Check your appointment details', desc: 'Make sure you know the date, time and whether your assessment is online or in-person.', accent: 'coral' },
          { icon: ClipboardCheck, title: 'Gather relevant information', desc: 'Think about your developmental history, previous reports, school or work feedback or any supporting documents.', accent: 'coral' },
          { icon: Chat, title: 'Reflect on key experiences', desc: 'Consider current challenges, strengths and how they impact daily life — this will help guide the conversation.', accent: 'coral' },
          { icon: People, title: 'Involve someone who knows you', desc: 'A parent, partner, teacher or carer may be asked for their perspective; their insight can be very valuable.', accent: 'coral' },
          { icon: Laptop, title: 'Plan for the day', desc: 'Choose a quiet space, limit distractions and give yourself plenty of time so you can relax and focus.', accent: 'coral' },
          { icon: Heart, title: 'Be yourself', desc: "There's no right or wrong way to be. Honesty helps us understand you better and provide the right support.", accent: 'coral' },
        ]}
      />

      <SplitBand
        title="Need help preparing?"
        body="If you have any questions before your assessment, our team is here to help."
        cta={{ label: 'Book Free Consultation', href: '/book-consultation' }}
        icon={HeartHand}
        background="white"
      />

      <IconColumns
        compact
        background="white"
        items={[
          { icon: HeartHand, title: 'Compassionate Support', desc: 'We understand that every journey is unique.', accent: 'coral' },
          { icon: Lock, title: 'Safe & Confidential', desc: 'Your information is always protected and private.', accent: 'teal' },
          { icon: People, title: 'Expert Guidance', desc: 'Our specialists are here to support you every step.', accent: 'orange' },
          { icon: Star, title: 'Personalised Care', desc: 'We tailor the assessment and support to your needs.', accent: 'purple' },
        ]}
      />

      <CtaBand
        title="Have a question before your appointment?"
        body="Our team is happy to talk anything through beforehand."
        cta={{ label: 'Contact Our Team', href: '/contact' }}
        ticks={null}
        background="white"
      />
    </>
  );
}
