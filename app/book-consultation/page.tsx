import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { ProcessRow } from '@/components/sections/Steps';
import { TrustSplit } from '@/components/sections/Panels';
import { AccreditationStrip } from '@/components/sections/Trust';
import { Bulb, Calendar, CheckCircle, Chat, Lock, People, Person } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Book Your Free Consultation',
  description:
    'A free, no-obligation consultation to understand your needs, answer your questions and recommend the right path forward.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Book a Free Consultation' }]}
        title="Book Your Free Consultation"
        lede="Your first step towards clarity and support."
        body="A free, no-obligation consultation to understand your needs, answer your questions and recommend the right path forward for you or your loved one."
        primaryCta={{ label: 'Book Your Free Consultation', href: '#book' }}
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroConsultation, alt: 'A person on a video consultation' }}
        features={[
          { icon: Calendar, title: '15–20 minutes', accent: 'teal' },
          { icon: CheckCircle, title: 'Completely free', accent: 'teal' },
          { icon: Lock, title: 'Confidential', accent: 'teal' },
          { icon: People, title: 'Here to help', accent: 'teal' },
        ]}
      />

      <ProcessRow
        title="What to expect"
        background="white"
        steps={[
          { icon: Chat, title: 'Tell us about you', desc: 'Share a few details about yourself or your loved one and your concerns.', accent: 'teal' },
          { icon: Person, title: 'Speak with our team', desc: 'A friendly specialist will listen, answer your questions and understand your needs.', accent: 'coral' },
          { icon: Bulb, title: 'Get personalised recommendations', desc: 'We recommend the most appropriate assessment or support for you.', accent: 'orange' },
          { icon: CheckCircle, title: 'Next steps', desc: 'We guide you through the next steps with clarity and confidence.', accent: 'teal' },
        ]}
      />

      <TrustSplit
        background="white"
        title="Why book a free consultation?"
        ticks={[
          'Understand which assessment or support is right for you',
          'Get answers to your questions',
          'Learn about our process and what to expect',
          'Guidance that is personalised to your needs',
          "No pressure, no obligation – we're here to help",
        ]}
        testimonial={{
          quote:
            'The consultation was so helpful and reassuring. They took the time to listen and explained everything clearly.',
          name: 'Parent of an assessment client',
          role: 'Parent of an assessment client',
        }}
      />

      <div id="book" />

      <CtaBand
        title="Ready to take the first step?"
        body="Book your free consultation today and let us help you find the right support."
        cta={{ label: 'Book Your Free Consultation', href: '/contact' }}
        ticks={null}
        background="white"
      />

      <AccreditationStrip />
    </>
  );
}
