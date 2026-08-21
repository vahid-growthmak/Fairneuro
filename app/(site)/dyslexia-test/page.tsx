import { Hero, HeroFeatureCards } from '@/components/sections/Hero';
import { Accordion } from '@/components/sections/Accordion';
import { CtaBand } from '@/components/sections/Bands';
import { ProcessRow } from '@/components/sections/Steps';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TickList } from '@/components/ui/TickList';
import { DyslexiaQuiz } from '@/components/quiz/DyslexiaQuiz';
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
  title: 'Free Online Dyslexia Test',
  description:
    'A free, confidential 11-question dyslexia test covering reading, spelling, writing and memory. Get your result instantly — no sign-up, nothing stored.',
};

const faqs = [
  {
    q: 'Who is this test for?',
    a: 'Adults and older teenagers who find reading, spelling or written work harder than it seems to be for people around them, and want a structured way to check whether it is worth exploring. If you are a parent wondering about a younger child, our child assessment pages are the better starting point, because the traits look different at primary school age.',
  },
  {
    q: 'How accurate is it?',
    a: 'It is a screener, so treat it as an indication rather than an answer. The questions cover the trait domains that adult dyslexia checklists consistently ask about — reading fluency, visual tracking, decoding unfamiliar words, spelling, written expression, reading aloud, verbal memory and directional confusion. A high score means those traits are worth investigating properly. It will flag some people who turn out not to be dyslexic, and miss some who are.',
  },
  {
    q: 'How is it scored?',
    a: 'Ten of the eleven questions describe difficulties, and each answer scores from 0 for "Never" to 4 for "Very Often" — so the scored range runs from 0 to 40. Your total places you in one of three bands: few traits reported, some signs, or a strong possibility. The eleventh question asks about creative problem solving, which is a strength often described alongside dyslexia rather than a difficulty, so it is reported separately and not counted in the score.',
  },
  {
    q: 'What is dyslexia?',
    a: 'Dyslexia is a specific learning difficulty that mainly affects the accuracy and fluency of reading and spelling. It is a difference in how written language is processed, not a measure of intelligence or effort, and it commonly sits alongside strengths in reasoning, problem solving and creative thinking. Around one in ten people are thought to be dyslexic to some degree.',
  },
  {
    q: 'Can dyslexia be self-diagnosed?',
    a: 'No. A formal identification of dyslexia comes from a full diagnostic assessment carried out by a specialist assessor — usually a specialist teacher holding an Assessment Practising Certificate, or an educational or occupational psychologist. A test like this one can tell you whether that assessment is worth booking, and nothing more.',
  },
  {
    q: 'How is dyslexia actually assessed?',
    a: 'Through a full diagnostic assessment: a background history covering your schooling and reading development, standardised tests of underlying ability, and measures of reading accuracy, reading speed, comprehension, spelling, writing, phonological processing, working memory and processing speed. The assessor then weighs the profile as a whole and produces a written report you can use to request support at work or in study.',
  },
  {
    q: 'What happens if I score highly?',
    a: 'Nothing automatically — the result is yours and stays in your browser. If you would like to talk it through, you can book a free, no-obligation consultation and we will help you decide whether a full dyslexia assessment makes sense for you.',
  },
];

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Dyslexia Test' }]}
        title="Free Online Dyslexia Test"
        lede="A couple of minutes now for a clearer sense of why reading and writing feel harder."
        body="Eleven questions covering reading, spelling, writing, memory and direction. You will get your result immediately — no sign-up, no email address, nothing stored."
        primaryCta={{ label: 'Take the Test', href: '#test' }}
        secondaryCta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        image={{ src: img.heroDyslexia, alt: 'A person taking an online dyslexia test' }}
      />

      <HeroFeatureCards
        items={[
          { icon: Clock, title: 'About 2 Minutes', desc: '11 short questions, one at a time.', accent: 'teal' },
          { icon: Lock, title: 'Private', desc: 'Answers never leave your browser.', accent: 'coral' },
          { icon: Laptop, title: 'Free & Instant', desc: 'Your result appears the moment you finish.', accent: 'orange' },
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
                  'Put language to difficulties you may have worked around for years',
                  'Show you which experiences are recognised dyslexia traits',
                  'Give you a score you can weigh up, rather than a vague feeling',
                  'Name the strengths that often sit alongside dyslexia',
                  'Help you decide whether a full assessment is worth booking',
                ]}
              />
            </div>
            <div className="rounded-2xl bg-blush/55 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">
                What it cannot do
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/72">
                A test cannot identify dyslexia, and a high score does not mean you are dyslexic.
                Uncorrected vision problems, attention difficulties, anxiety, tiredness and
                interrupted schooling can all produce very similar answers — telling them apart is
                exactly what a full assessment is for.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/72">
                Equally, a low score does not close the question. Adults who have built strong
                coping strategies, or who read well but slowly and at real cost in effort, can
                score below the band and still be dyslexic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The test */}
      <section id="test" className="scroll-mt-24 bg-ivory">
        <div className="shell py-11 lg:py-14">
          <SectionHeading
            title="Take the dyslexia test"
            subtitle="Answer for how things usually are for you, rather than how they were on one difficult day."
          />
          <DyslexiaQuiz />
        </div>
      </section>

      <ProcessRow
        title="What happens after the test"
        background="white"
        steps={[
          {
            icon: ClipboardCheck,
            title: 'Get your result',
            desc: 'Your score and the traits you reported, explained in plain English.',
          },
          {
            icon: Chat,
            title: 'Talk it through',
            desc: 'Book a free consultation if you would like help making sense of it.',
          },
          {
            icon: Document,
            title: 'Full assessment',
            desc: 'If it is the right step, a specialist assessor carries out a complete dyslexia assessment.',
          },
          {
            icon: Calendar,
            title: 'Support that follows',
            desc: 'Study, workplace and education support are available whatever the outcome.',
          },
        ]}
      />

      {/* FAQs */}
      <section className="bg-ivory">
        <div className="shell py-11 lg:py-14">
          <SectionHeading title="Dyslexia test questions, answered" />
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Wondering whether dyslexia explains how you read and write?"
        body="Book a free, no-obligation consultation and we will help you decide what to do next."
        background="white"
      />
    </>
  );
}
