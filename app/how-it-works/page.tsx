import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { IconColumns } from '@/components/sections/CardGrid';
import { StepCards } from '@/components/sections/Steps';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBadge } from '@/components/ui/IconBadge';
import { Check, Chat, Globe, Heart, Lock, People, ShieldCheck } from '@/components/icons';
import { journey } from '@/lib/journey';
import { withDescs } from '@/lib/shared';
import { cycle, solidStep, stepCycle } from '@/lib/accents';
import { cn } from '@/lib/cn';
import { img } from '@/lib/images';

export const metadata = {
  title: 'How It Works',
  description:
    'A clear, supportive journey from first step to lasting support. Six simple stages: talk, screen, match, assess, understand and thrive.',
};

/** The journey row on this page states each stage more fully than the shared set. */
const journeySteps = withDescs(journey, [
  'Free consultation with our team to understand your needs and answer your questions.',
  'Complete our online screener to help us understand your experiences better.',
  'We match you with the most appropriate assessor for your needs.',
  'Your comprehensive assessment is completed in a supportive environment.',
  'Receive a detailed report and feedback explaining your results.',
  'Access personalised support and recommendations to help you thrive.',
]);

const detailedJourney = [
  {
    ...journey[0],
    desc: 'Book a free consultation with our friendly team. We listen, answer your questions and understand your needs.',
    bullets: ['15–30 minute call', 'Discuss your needs', 'Ask questions', 'No obligation'],
  },
  {
    ...journey[1],
    desc: 'Complete our online screener to provide us with a clearer understanding of your experiences.',
    bullets: ['Easy online screener', 'Takes 10–15 minutes', 'Secure & confidential', 'Helps us match you'],
  },
  {
    ...journey[2],
    desc: 'We match you with the most suitable assessor for your individual needs.',
    bullets: ['Carefully matched', 'Right expertise', 'Best fit for you', 'We handle the rest'],
  },
  {
    ...journey[3],
    desc: 'Your assessment takes place with a carefully selected professional, online or in person.',
    bullets: ['Thorough assessment', 'Experienced assessor', 'Online or in-person', 'Supportive process'],
  },
  {
    ...journey[4],
    desc: "You'll receive a detailed report and feedback explaining the findings and recommendations.",
    bullets: ['Clear report', 'Detailed feedback', 'Recommendations', 'Time for questions'],
  },
  {
    ...journey[5],
    desc: 'Access ongoing support, coaching and resources to help you thrive beyond the diagnosis.',
    bullets: ['Personalised plan', 'Ongoing support', 'Coaching options', 'Resources & tools'],
  },
];

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'How It Works' }]}
        title="How It Works"
        lede="A clear, supportive journey from first step to lasting support."
        body="Our proven process ensures you receive the right assessment, clear answers and the support you need to thrive."
        secondaryCta={{ label: 'Watch Overview', href: '#journey' }}
        ticks={['Free consultation', 'No obligation', 'Confidential', 'Here to help']}
        image={{ src: img.heroHowItWorks, alt: 'A person smiling thoughtfully' }}
      />

      <StepCards
        id="journey"
        title="Your journey with Fairneuro"
        subtitle="We guide you every step of the way."
        steps={journeySteps}
        background="white"
      />

      {/* What you can expect at each stage */}
      <section className="bg-ivory">
        <div className="shell py-11 lg:py-14">
          <SectionHeading title="What you can expect at each stage" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {detailedJourney.map((step, i) => {
              const accent = cycle(stepCycle, i);
              return (
                <div
                  key={step.title}
                  className="flex flex-col rounded-xl border border-navy/[0.07] bg-white p-5 shadow-card"
                >
                  <IconBadge icon={step.icon} accent={accent} size="sm" />
                  <h3 className="mt-3 font-heading text-[15px] font-semibold text-navy">
                    {i + 1}. {step.title}
                  </h3>
                  <ul className="mt-3 flex-1 space-y-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[12.5px] text-navy/68">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-teal" strokeWidth={3} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={cn('mt-4 h-[3px] w-10 rounded-full', solidStep[accent])}
                    aria-hidden
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <IconColumns
        title="Why our process works"
        columns={5}
        background="white"
        items={[
          { icon: ShieldCheck, title: 'Evidence-based', desc: 'Our assessments follow internationally recognised standards and frameworks.', accent: 'teal' },
          { icon: People, title: 'Expertly matched', desc: 'We match you with the right assessor for your unique needs.', accent: 'coral' },
          { icon: Lock, title: 'Confidential & secure', desc: 'Your information is protected at every step of the journey.', accent: 'orange' },
          { icon: Heart, title: 'Support beyond diagnosis', desc: 'We provide guidance and support long after your assessment.', accent: 'teal' },
          { icon: Globe, title: 'Global experience', desc: 'Supporting individuals in 40+ countries worldwide.', accent: 'coral' },
        ]}
      />

      <PromptBand
        title="Not sure where to start?"
        body="Book a free consultation and we'll guide you to the most suitable pathway for your needs."
        icon={Chat}
        variant="filled"
        background="white"
      />

      <CtaBand
        title="Ready to take the first step?"
        body="Book a free consultation and let our team guide you."
        background="white"
      />
    </>
  );
}
