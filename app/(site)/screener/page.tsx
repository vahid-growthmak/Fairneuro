import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { HeroFeatureCards } from '@/components/sections/Hero';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { TestimonialQuote } from '@/components/sections/Testimonials';
import { ProcessRow } from '@/components/sections/Steps';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Calendar,
  Chat,
  ClipboardCheck,
  Document,
  Headset,
  HeartHand,
  Lock,
  People,
  Person,
  Question,
  Signpost,
  Sparkle,
  Star,
  Target,
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
        lede="A simple way to explore whether ADHD, autism, dyslexia or another neurodiversity pathway may be worth exploring further."
        body="Our online screener helps you understand which pathway may be most suitable for you or your child. It does not provide a diagnosis, but offers clear guidance on your next step."
        primaryCta={{ label: 'Start the Screener', href: '#choose' }}
        secondaryCta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        ticks={[
          'Takes just a few minutes',
          'Suitable for adults and parents',
          'Helpful if you are unsure where to start',
          'No diagnosis, just guidance on your next step',
        ]}
        image={{ src: img.heroScreener, alt: 'A person completing an online form' }}
      />

      <HeroFeatureCards
        items={[
          { icon: Sparkle, title: 'Fast and simple', desc: 'Complete in just a few minutes online.', accent: 'teal' },
          { icon: HeartHand, title: 'No pressure', desc: 'A private, judgment-free experience.', accent: 'coral' },
          { icon: Signpost, title: 'Clear guidance', desc: 'Understand what your results mean.', accent: 'orange' },
          { icon: Chat, title: 'Friendly support', desc: "We're here if you have questions at any time.", accent: 'teal' },
        ]}
      />

      <div id="choose" className="scroll-mt-24" />

      <CardGrid
        title="What can the screener help with?"
        columns={4}
        background="white"
        items={[
          { icon: Brain, title: 'ADHD', desc: 'Explore signs of attention, impulsivity and activity challenges.', href: '/screener/adhd', linkLabel: 'Start screener', accent: 'teal' },
          { icon: Person, title: 'Autism', desc: 'Look at social communication, sensory differences and repetitive behaviours.', href: '/screener/autism', linkLabel: 'Start screener', accent: 'coral' },
          { icon: Book, title: 'Dyslexia', desc: 'Consider reading, spelling and written language differences.', href: '/screener/dyslexia', linkLabel: 'Start screener', accent: 'orange' },
          { icon: Question, title: 'Not Sure?', desc: "We'll help you figure out which pathway may be most relevant.", href: '/screener/general', linkLabel: 'Start screener', accent: 'purple' },
        ]}
      />

      <ProcessRow
        title="How the screener works"
        background="ivory"
        steps={[
          { icon: ClipboardCheck, title: 'Choose your screener', desc: 'Select the option that best fits you.', accent: 'teal' },
          { icon: Chat, title: 'Answer simple questions', desc: 'Quick, straightforward and private.', accent: 'coral' },
          { icon: Document, title: 'Get your result', desc: 'See which pathway may be relevant.', accent: 'orange' },
          { icon: Signpost, title: 'Understand your options', desc: 'We explain what your result means.', accent: 'teal' },
          { icon: Calendar, title: 'Book a consultation if needed', desc: 'Speak with our team for personalised advice.', accent: 'coral' },
          { icon: Star, title: 'Move forward with clarity', desc: 'Take the next step with confidence.', accent: 'teal' },
        ]}
      />

      <SplitBand
        title="Not sure which screener is right for you?"
        body="The general neurodiversity screener is a good starting point if more than one area feels relevant."
        cta={{ label: 'General Screener', href: '/screener/general' }}
        icon={Lock}
        background="white"
      />

      <IconColumns
        title="Why use the Fairneuro screener?"
        background="white"
        items={[
          { icon: Target, title: 'A helpful starting point', desc: "Great if you're unsure where to begin.", accent: 'teal' },
          { icon: People, title: 'Designed around real people', desc: 'Evidence-informed questions that reflect everyday experiences.', accent: 'coral' },
          { icon: ClipboardCheck, title: 'Clear next-step guidance', desc: 'Know what your results mean and what to do next.', accent: 'orange' },
          { icon: Headset, title: 'Connected to Fairneuro support', desc: 'Easy access to expert assessments and care.', accent: 'teal' },
        ]}
      />

      <TestimonialQuote
        background="ivory"
        items={[
          {
            quote:
              'The screener was quick and easy to complete, and the results gave us real clarity. It helped us understand what might be going on and feel more confident about booking an assessment for our daughter.',
            name: 'Parent of a 10-year-old',
          },
        ]}
      />

      <CtaBand
        title="You don't need to figure this out alone."
        body="Book a free consultation and our team will help you decide the right next step."
        background="white"
      />
    </>
  );
}
