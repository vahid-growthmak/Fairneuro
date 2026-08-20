import { Hero, HeroFeatureCards } from '@/components/sections/Hero';
import { Accordion } from '@/components/sections/Accordion';
import { CtaBand } from '@/components/sections/Bands';
import { ProcessRow } from '@/components/sections/Steps';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TickList } from '@/components/ui/TickList';
import { AdhdQuiz } from '@/components/quiz/AdhdQuiz';
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
  title: 'Free Online ADHD Quiz',
  description:
    'A free, confidential 18-question ADHD quiz based on the ASRS-v1.1 screening tool used in adult ADHD services. Get your result instantly — no sign-up, nothing stored.',
};

const faqs = [
  {
    q: 'Who is this quiz for?',
    a: 'Adults who recognise something of themselves in descriptions of ADHD and want a structured way to check whether it is worth exploring. It asks about the past six months of adult life, so it is not designed for children — if you are a parent wondering about your child, our child ADHD assessment page is the better starting point.',
  },
  {
    q: 'How accurate is it?',
    a: 'It uses the ASRS-v1.1, the screening checklist developed with the World Health Organization and used widely in adult ADHD services. Six of the eighteen questions form the screener itself: four or more qualifying answers there indicates symptoms highly consistent with adult ADHD and means a full assessment is worth considering. It is a good filter, not a verdict — it will flag some people who turn out not to have ADHD, and miss some who do.',
  },
  {
    q: 'How is it scored?',
    a: 'Each question has a threshold — for some, answering "Sometimes" already counts; for others it takes "Often". Answers at or above that threshold are counted as qualifying answers. Separately, every answer scores from 0 for "Never" to 4 for "Very Often", giving an intensity score that reflects how strongly you experience these traits rather than simply whether you do.',
  },
  {
    q: 'What are the main symptoms of ADHD in adults?',
    a: 'Inattention and hyperactivity-impulsivity are the two recognised clusters, but adults often notice the knock-on effects more: difficulty starting or finishing tasks, losing track of time, forgetfulness, disorganisation, restlessness, interrupting, emotional intensity and rapid mood shifts, difficulty switching off, and patterns of leaving jobs, courses or projects unfinished.',
  },
  {
    q: 'Can ADHD be self-diagnosed?',
    a: 'No. NICE guidance (NG87) is clear that a diagnosis of ADHD can only be made by a specialist psychiatrist, paediatrician or other appropriately qualified healthcare professional with training and expertise in diagnosing ADHD, following a full clinical and psychosocial assessment. A quiz can tell you whether that assessment is worth booking — nothing more.',
  },
  {
    q: 'How is ADHD actually diagnosed?',
    a: 'Through a full diagnostic assessment with a qualified clinician: a detailed history of your life from childhood onwards, a structured diagnostic interview such as the DIVA-5, information from someone who knows you well where that is possible, and consideration of other explanations and co-occurring conditions. Symptoms are then mapped against the DSM-5 criteria.',
  },
  {
    q: 'What happens if I score highly?',
    a: 'Nothing automatically — the result is yours and stays in your browser. If you would like to talk it through, you can book a free, no-obligation consultation with our team, and we will help you decide whether a full ADHD assessment makes sense for you.',
  },
];

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'ADHD Quiz' }]}
        title="Free Online ADHD Quiz"
        lede="A few minutes now for a clearer sense of what is going on."
        body="Eighteen questions, drawn from the ASRS-v1.1 screening checklist used in adult ADHD services. You will get your result immediately — no sign-up, no email address, nothing stored."
        primaryCta={{ label: 'Take the Quiz', href: '#quiz' }}
        secondaryCta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        image={{ src: img.heroAdhd, alt: 'A person taking an online ADHD quiz' }}
      />

      <HeroFeatureCards
        items={[
          { icon: Clock, title: 'About 3 Minutes', desc: '18 short questions, one at a time.', accent: 'teal' },
          { icon: Lock, title: 'Private', desc: 'Answers never leave your browser.', accent: 'coral' },
          { icon: Laptop, title: 'Free & Instant', desc: 'Your score appears the moment you finish.', accent: 'orange' },
          { icon: Signpost, title: 'Clear Next Steps', desc: 'We explain what the result does and does not mean.', accent: 'teal' },
        ]}
      />

      {/* What a quiz can and cannot do */}
      <section className="bg-white">
        <div className="shell py-16 lg:py-20">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-soft-teal/60 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">
                What this quiz can do
              </h2>
              <TickList
                className="mt-5"
                items={[
                  'Put language to experiences you may have carried for years',
                  'Show you which traits are recognised ADHD symptoms',
                  'Give you a score you can weigh up, rather than a vague feeling',
                  'Help you decide whether a full assessment is worth booking',
                  'Give you something concrete to bring to a GP or clinician',
                ]}
              />
            </div>
            <div className="rounded-2xl bg-blush/55 p-8 lg:p-10">
              <h2 className="font-heading text-[24px] font-semibold text-navy">
                What it cannot do
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/72">
                A quiz cannot diagnose ADHD, and a high score does not mean you have it. Anxiety,
                depression, trauma, sleep problems, thyroid conditions and simple exhaustion can all
                produce very similar answers — telling them apart is exactly what a proper assessment
                is for.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/72">
                Equally, a low score does not close the question. People who have spent a lifetime
                masking, or whose difficulties surface mainly at work or in study, can screen below
                the cut-off and still be autistic or have ADHD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The quiz */}
      <section id="quiz" className="scroll-mt-24 bg-ivory">
        <div className="shell py-16 lg:py-20">
          <SectionHeading
            title="Take the ADHD quiz"
            subtitle="Answer honestly, based on how things have been for you over the past six months."
          />
          <AdhdQuiz />
        </div>
      </section>

      <ProcessRow
        title="What happens after the quiz"
        background="white"
        steps={[
          {
            icon: ClipboardCheck,
            title: 'Get your score',
            desc: 'Your qualifying answers and intensity score, explained in plain English.',
          },
          {
            icon: Chat,
            title: 'Talk it through',
            desc: 'Book a free consultation if you would like help making sense of it.',
          },
          {
            icon: Document,
            title: 'Full assessment',
            desc: 'If it is the right step, a qualified clinician carries out a complete ADHD assessment.',
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
        <div className="shell py-16 lg:py-20">
          <SectionHeading title="ADHD quiz questions, answered" />
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Wondering whether ADHD explains what you experience?"
        body="Book a free, no-obligation consultation and we will help you decide what to do next."
        background="white"
      />
    </>
  );
}
