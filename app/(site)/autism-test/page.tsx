import { Hero, HeroFeatureCards } from '@/components/sections/Hero';
import { Accordion } from '@/components/sections/Accordion';
import { CtaBand } from '@/components/sections/Bands';
import { ProcessRow } from '@/components/sections/Steps';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TickList } from '@/components/ui/TickList';
import { AutismQuiz } from '@/components/quiz/AutismQuiz';
import {
  Calendar,
  Chat,
  ClipboardCheck,
  Clock,
  Document,
  Laptop,
  Lock,
  Signpost,
} from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Free Online Autism Test',
  description:
    'A free, confidential autism test using the 50-question Autism Spectrum Quotient (AQ). Get your score and subscale breakdown instantly — no sign-up, nothing stored.',
};

const faqs = [
  {
    q: 'Who is this test for?',
    a: 'Adults and older teenagers — the AQ was written for people aged 16 and over — who recognise something of themselves in descriptions of autism and want a structured way to check whether it is worth exploring. If you are a parent wondering about a younger child, our child autism assessment page is the better starting point.',
  },
  {
    q: 'What is the AQ?',
    a: 'The Autism Spectrum Quotient, published by Simon Baron-Cohen and colleagues at the Cambridge Autism Research Centre in 2001. It is fifty statements you agree or disagree with, covering five areas: social skill, attention switching, attention to detail, communication and imagination. It is one of the most widely used autism screening questionnaires in adults.',
  },
  {
    q: 'How is it scored?',
    a: 'Each item scores 1 when your answer falls on the autistic-traits side, and 0 when it does not — so the range is 0 to 50. How strongly you agreed does not change the score: "definitely" and "slightly" count the same, and the four-point scale exists only to stop you sitting on the fence. You also get a breakdown across the five subscales, which often says more than the total on its own.',
  },
  {
    q: 'What score suggests autism?',
    a: 'In the original study, 32 was the point that separated the groups most clearly: about four in five autistic adults scored 32 or above, against roughly one in fifty of the comparison group. Later clinical work suggested 26 is a more useful threshold for deciding who to take forward for assessment, so we mark both on your result.',
  },
  {
    q: 'How accurate is it?',
    a: 'It is a good filter, not a verdict. A high score does not mean you are autistic — social anxiety, ADHD and past trauma can all push it up. A low score does not rule it out either: the AQ was developed largely on men, and autistic women and non-binary people who have masked for years frequently score lower than their experience would suggest.',
  },
  {
    q: 'Can autism be self-diagnosed?',
    a: 'Not formally. NICE guidance is clear that a diagnosis of autism follows a full assessment by a suitably trained clinician or multidisciplinary team — a detailed developmental history from early childhood, direct observation, and consideration of other explanations. A questionnaire can tell you whether that assessment is worth pursuing, and nothing more. Many autistic adults do identify themselves before seeking a formal diagnosis, and that self-understanding is valid — but it is not the same thing.',
  },
  {
    q: 'What happens if I score highly?',
    a: 'Nothing automatically — the result is yours and stays in your browser. If you would like to talk it through, you can book a free, no-obligation consultation and we will help you decide whether a full autism assessment makes sense for you.',
  },
];

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Autism Test' }]}
        title="Free Online Autism Test"
        lede="If you have been quietly wondering, this is a place to start."
        body="The Autism Spectrum Quotient — fifty questions, answered ten at a time. You will get your score and a breakdown across five areas immediately, with no sign-up and nothing stored."
        primaryCta={{ label: 'Take the Test', href: '#test' }}
        secondaryCta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        image={{ src: img.heroAutism, alt: 'A person taking an online autism test' }}
      />

      <HeroFeatureCards
        items={[
          { icon: Clock, title: 'About 10 Minutes', desc: '50 questions, ten per page.', accent: 'teal' },
          { icon: Lock, title: 'Private', desc: 'Answers never leave your browser.', accent: 'coral' },
          { icon: Laptop, title: 'Free & Instant', desc: 'Your score appears the moment you finish.', accent: 'orange' },
          { icon: Signpost, title: 'Clear Next Steps', desc: 'We explain what the result does and does not mean.', accent: 'teal' },
        ]}
      />

      {/* What a test can and cannot do */}
      <section className="bg-white">
        <div className="shell py-11 lg:py-14">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-soft-teal/60 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">
                What this test can do
              </h2>
              <TickList
                className="mt-5"
                items={[
                  'Put language to experiences you may have carried for years',
                  'Show you which traits are recognised autistic characteristics',
                  'Break your answers down across five distinct areas',
                  'Give you a score you can weigh up, rather than a vague feeling',
                  'Give you something concrete to bring to a GP or clinician',
                ]}
              />
            </div>
            <div className="rounded-2xl bg-blush/55 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">
                What it cannot do
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/72">
                The AQ measures how many autistic traits you report — not whether you are autistic.
                Social anxiety, ADHD and past trauma can all push the score up, and telling those
                apart is exactly what a full assessment is for.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/72">
                A low score does not close the question either. The AQ was developed largely on men,
                and autistic women and non-binary people who have spent a lifetime masking often
                score well below the cut-off and are still autistic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The test */}
      <section id="test" className="scroll-mt-24 bg-ivory">
        <div className="shell py-11 lg:py-14">
          <SectionHeading
            title="Take the autism test"
            subtitle="There is no middle option — pick the side you lean towards, even when neither fits perfectly."
          />
          <AutismQuiz />
        </div>
      </section>

      <ProcessRow
        title="What happens after the test"
        background="white"
        steps={[
          {
            icon: ClipboardCheck,
            title: 'Get your score',
            desc: 'Your AQ total and subscale breakdown, explained in plain English.',
          },
          {
            icon: Chat,
            title: 'Talk it through',
            desc: 'Book a free consultation if you would like help making sense of it.',
          },
          {
            icon: Document,
            title: 'Full assessment',
            desc: 'If it is the right step, a qualified clinician carries out a complete autism assessment.',
          },
          {
            icon: Calendar,
            title: 'Support that follows',
            desc: 'Coaching, workplace and education support are available whatever the outcome.',
          },
        ]}
      />

      {/* FAQs */}
      <section className="bg-ivory">
        <div className="shell py-11 lg:py-14">
          <SectionHeading title="Autism test questions, answered" />
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Wondering whether autism explains what you experience?"
        body="Book a free, no-obligation consultation and we will help you decide what to do next."
        background="white"
      />
    </>
  );
}
