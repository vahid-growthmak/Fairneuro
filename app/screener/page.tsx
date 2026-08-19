import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { HeroFeatureCards } from '@/components/sections/Hero';
import { CardGrid } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Calendar,
  Chat,
  ClipboardCheck,
  Document,
  HeartHand,
  Lock,
  Person,
  Question,
  Signpost,
  Sparkle,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Free Online Screener',
  description:
    'A free, confidential online screener to help you understand your experiences and decide whether a full assessment might help.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Online Screener' },
        ]}
        title="Free Online Screener"
        lede="A helpful first step. Clarity before your next move."
        body="You don't need to know where to start. Our free, confidential screeners take around ten minutes and help you understand whether a full assessment might be useful."
        primaryCta={{ label: 'Start the Screener', href: '#choose' }}
        secondaryCta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        ticks={['Completely free', 'Around 10 minutes', 'Secure & confidential', 'No obligation']}
        image={{ src: img.heroScreener, alt: 'A person completing an online form' }}
      />

      <HeroFeatureCards
        items={[
          { icon: Sparkle, title: 'Fast and simple', desc: 'A short set of clear, plain-English questions.', accent: 'teal' },
          { icon: HeartHand, title: 'No pressure', desc: 'There is no obligation to book anything afterwards.', accent: 'coral' },
          { icon: Signpost, title: 'Clear guidance', desc: 'Your result explains what it does — and does not — mean.', accent: 'orange' },
          { icon: Chat, title: 'Friendly support', desc: 'A real person to talk to if you want to go further.', accent: 'teal' },
        ]}
      />

      <div id="choose" className="scroll-mt-24" />

      <CardGrid
        title="What can the screener help with?"
        columns={4}
        background="white"
        items={[
          { icon: Brain, title: 'ADHD', desc: 'Attention, focus, restlessness and organisation.', href: '/screener/adhd', linkLabel: 'Start screener', accent: 'teal' },
          { icon: Person, title: 'Autism', desc: 'Communication, sensory experiences and routines.', href: '/screener/autism', linkLabel: 'Start screener', accent: 'coral' },
          { icon: Book, title: 'Dyslexia', desc: 'Reading, spelling, writing and processing.', href: '/screener/dyslexia', linkLabel: 'Start screener', accent: 'orange' },
          { icon: Question, title: 'Not sure?', desc: 'A broader screener across several neurodivergent traits.', href: '/screener/general', linkLabel: 'Start screener', accent: 'purple' },
        ]}
      />

      <ProcessRow
        title="How the screener works"
        background="ivory"
        steps={[
          { icon: ClipboardCheck, title: 'Choose your screener', desc: 'Pick the area that best matches your experience.', accent: 'teal' },
          { icon: Chat, title: 'Answer simple questions', desc: 'Around ten minutes of clear, plain-English questions.', accent: 'coral' },
          { icon: Document, title: 'Get your result', desc: 'An immediate, easy-to-understand summary.', accent: 'orange' },
          { icon: Signpost, title: 'Understand your options', desc: 'We explain what your result does and does not mean.', accent: 'teal' },
          { icon: Calendar, title: 'Book if you want to', desc: 'A free consultation is available whenever you are ready.', accent: 'coral' },
          { icon: Star, title: 'Move forward with clarity', desc: 'Either way, you leave knowing more than you did.', accent: 'teal' },
        ]}
      />

      <SplitBand
        title="Not sure which screener is right for you?"
        body="The general neurodiversity screener is a good starting point if more than one area feels relevant."
        cta={{ label: 'General Screener', href: '/screener/general' }}
        icon={Lock}
        background="white"
      />

      <CtaBand
        title="You don't need to figure this out alone."
        body="Book a free consultation and our team will help you decide the right next step."
        background="white"
      />
    </>
  );
}
