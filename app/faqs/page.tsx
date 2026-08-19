import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { Accordion } from '@/components/sections/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Calendar,
  Chats,
  Document,
  HeartHand,
  Leaf,
  Lock,
  People,
  Person,
  Question,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Clear answers about assessments, screeners, reports, support after diagnosis and children & young people.',
};

const faqs = [
  {
    q: 'How long does an assessment take?',
    a: 'Most assessments involve a clinical interview of 90 minutes to three hours, plus questionnaires you complete beforehand. Your written report usually follows within 10 to 15 working days.',
  },
  {
    q: 'Do I need a GP referral?',
    a: 'No. You can self-refer directly to Fairneuro. If you would like us to share your report with your GP afterwards, we can do so with your consent.',
  },
  {
    q: 'Are assessments carried out online or in person?',
    a: 'Both are available. Online assessments are conducted over secure video and are equally valid; in-person appointments are available in selected locations.',
  },
  {
    q: 'Is the free consultation really free?',
    a: 'Yes. It is a 15–20 minute conversation with no cost and no obligation. Its purpose is to help you understand your options — not to sell you an assessment.',
  },
  {
    q: 'What qualifications do your assessors hold?',
    a: 'All of our assessors are qualified clinical professionals registered with the relevant professional bodies, with specialist experience in neurodevelopmental assessment.',
  },
  {
    q: 'Will my diagnosis be recognised by my school, university or employer?',
    a: 'Yes. Our reports are written to the standards expected by educational institutions and employers, including for exam access arrangements and workplace adjustments.',
  },
  {
    q: 'What happens after I receive my report?',
    a: 'You have a feedback session to talk it through, and you can access our post-diagnostic support, coaching and workplace or education services whenever you are ready.',
  },
  {
    q: 'How is my information kept confidential?',
    a: 'All records are stored securely and handled in line with UK GDPR. Nothing is shared with anyone — including your GP — without your explicit consent.',
  },
];

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]}
        title="Frequently Asked Questions"
        lede="Clear answers. Straightforward guidance. Support when you need it."
        body="Everything you might want to know about assessments, screeners, reports and the support that follows. If your question is not here, just ask us."
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
        image={{ src: img.heroFaqs, alt: 'A person reading on a laptop' }}
      />

      <CardGrid
        title="Browse by topic"
        columns={6}
        background="white"
        items={[
          { icon: Calendar, title: 'Getting Started', desc: 'Booking, consultations and first steps.', accent: 'teal' },
          { icon: Brain, title: 'Assessments', desc: 'What happens, how long it takes, what it costs.', accent: 'coral' },
          { icon: Chats, title: 'Online Screeners', desc: 'How our free screeners work.', accent: 'orange' },
          { icon: Document, title: 'Reports & Outcomes', desc: 'What your report includes and who accepts it.', accent: 'teal' },
          { icon: Leaf, title: 'Support After Diagnosis', desc: 'Coaching, therapy and everyday strategies.', accent: 'coral' },
          { icon: People, title: 'Children & Young People', desc: 'Assessments and support for under-18s.', accent: 'teal' },
        ]}
      />

      <section className="bg-ivory">
        <div className="shell py-16 lg:py-20">
          <SectionHeading title="Popular questions" />
          <div className="mx-auto max-w-4xl">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <SplitBand
        title="Still can't find what you're looking for?"
        body="Our team is happy to answer any question — however small it might seem."
        cta={{ label: 'Contact Our Team', href: '/contact' }}
        icon={Question}
        background="white"
      />

      <IconColumns
        boxed
        compact
        columns={5}
        background="white"
        items={[
          { icon: Star, title: 'Clear guidance', accent: 'teal' },
          { icon: Lock, title: 'Confidential', accent: 'coral' },
          { icon: Person, title: 'Personalised support', accent: 'orange' },
          { icon: HeartHand, title: 'Compassionate team', accent: 'teal' },
          { icon: Book, title: 'Ongoing help', accent: 'coral' },
        ]}
      />

      <CtaBand
        title="Ready to take the first step?"
        body="Book a free consultation and let our team guide you."
        background="white"
      />
    </>
  );
}
