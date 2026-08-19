import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { img } from '@/lib/images';
import {
  Book,
  Calendar,
  Chat,
  ClipboardCheck,
  Document,
  Heart,
  HeartHand,
  Laptop,
  Lock,
  People,
  Person,
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
        lede="A little preparation makes a big difference."
        body="Knowing what to expect helps you feel calmer and get more from your appointment. Here is everything worth doing before the day."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroConsultation, alt: 'A person preparing notes' }}
      />

      <SplitBand
        title="It's completely normal to feel nervous."
        body="Most people do. There are no right or wrong answers, nothing to revise for, and nothing you can fail."
        cta={{ label: 'Talk to Our Team', href: '/contact' }}
        icon={Heart}
        background="white"
      />

      <CardGrid
        title="How to prepare"
        columns={3}
        background="white"
        cardAlign="left"
        items={[
          { icon: Document, title: 'Gather any past reports', desc: 'School reports, previous assessments, occupational health letters or GP correspondence — anything relevant helps build the picture.', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Complete your questionnaires early', desc: 'Give yourself unhurried time. Answer as you actually are day to day, not how you think you should be.', accent: 'coral' },
          { icon: Chat, title: 'Write down your examples', desc: 'Specific, everyday examples are far more useful than general statements. Jot them down as they occur to you.', accent: 'orange' },
          { icon: People, title: 'Ask someone who knows you well', desc: 'A partner, parent or close friend can often add detail you have normalised over the years.', accent: 'teal' },
          { icon: Laptop, title: 'Check your setup', desc: 'For online appointments, test your camera, microphone and connection, and find a quiet, private space.', accent: 'purple' },
          { icon: Calendar, title: 'Allow more time than you need', desc: 'Avoid scheduling anything immediately afterwards. Assessments can be tiring and you may want time to decompress.', accent: 'coral' },
        ]}
      />

      <IconColumns
        title="What to expect on the day"
        columns={4}
        background="ivory"
        items={[
          { icon: Chat, title: 'A conversation, not a test', desc: 'Your assessor will guide you through, at your pace.', accent: 'teal' },
          { icon: Book, title: 'Some structured tasks', desc: 'Depending on the assessment, there may be short activities.', accent: 'coral' },
          { icon: Person, title: 'Breaks whenever you need', desc: 'Just say — breaks are expected and encouraged.', accent: 'orange' },
          { icon: Lock, title: 'Complete confidentiality', desc: 'Nothing is shared without your explicit consent.', accent: 'teal' },
        ]}
      />

      <IconColumns
        boxed
        compact
        columns={4}
        background="white"
        items={[
          { icon: Star, title: 'Be yourself', desc: 'Masking makes results less useful.', accent: 'teal' },
          { icon: HeartHand, title: 'Ask questions', desc: 'Any time, about anything.', accent: 'coral' },
          { icon: Heart, title: 'Go easy on yourself', desc: 'This is a supportive process.', accent: 'orange' },
          { icon: Document, title: 'Keep your notes', desc: 'They help at the feedback session too.', accent: 'teal' },
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
