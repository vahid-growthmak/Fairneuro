import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { Accordion, type FaqItem } from '@/components/sections/Accordion';
import { faqs as fallbackFaqs } from '@/lib/fallbacks';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POPULAR_FAQS_QUERY } from '@/sanity/lib/queries';
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


export const revalidate = 60;

interface CmsFaq {
  _id: string;
  question: string;
  answer: string;
}

export default async function Page() {
  const cms = await sanityFetch<CmsFaq[]>({
    query: POPULAR_FAQS_QUERY,
    fallback: [],
    tags: ['faq'],
  });

  const faqs: FaqItem[] = cms.length
    ? cms.map((f) => ({ q: f.question, a: f.answer }))
    : fallbackFaqs;

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
