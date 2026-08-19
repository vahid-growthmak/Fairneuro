import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand, StatsBar } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { JourneySteps } from '@/components/sections/Steps';
import { TestimonialQuote } from '@/components/sections/Testimonials';
import { journey } from '@/lib/journey';
import { Button } from '@/components/ui/Button';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Briefcase,
  Calendar,
  Chat,
  ClipboardCheck,
  Document,
  Globe,
  GradCap,
  HeartHand,
  Head,
  Leaf,
  People,
  Person,
  ShieldCheck,
  Star,
  TwoHeads,
} from '@/components/icons';

export const metadata = {
  title: 'Fairneuro Diagnostics — Understand. Support. Thrive.',
  description:
    'Expert neurodiversity assessment with personalised support for everything that comes next.',
};

const helpCards = [
  {
    icon: Brain,
    title: 'ADHD',
    desc: 'Assessment for adults and children.',
    href: '/assessments/adhd',
    accent: 'teal' as const,
  },
  {
    icon: Person,
    title: 'Autism',
    desc: 'Assessment for adults and children.',
    href: '/assessments/autism',
    accent: 'coral' as const,
  },
  {
    icon: TwoHeads,
    title: 'ADHD + Autism',
    desc: 'Combined assessments for overlapping experiences.',
    href: '/assessments/adhd-autism',
    accent: 'purple' as const,
  },
  {
    icon: Book,
    title: 'Dyslexia',
    desc: 'Assessment of reading, spelling and learning differences.',
    href: '/assessments/dyslexia',
    accent: 'orange' as const,
  },
];

const supportServices = [
  { icon: Brain, title: 'ADHD Coaching', href: '/support/adhd-coaching', accent: 'teal' as const },
  { icon: Head, title: 'Autism Coaching', href: '/support/autism-coaching', accent: 'coral' as const },
  { icon: People, title: 'Parent & Family Support', href: '/support/parent-family', accent: 'orange' as const },
  { icon: GradCap, title: 'Education Support', href: '/support/education-support', accent: 'teal' as const },
  { icon: Briefcase, title: 'Workplace Support', href: '/support/workplace-support', accent: 'coral' as const },
  { icon: HeartHand, title: 'Therapy & Wellbeing', href: '/support/therapy-wellbeing', accent: 'teal' as const },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Assessment is only the beginning"
        title={
          <>
            Understand.
            <br />
            Support.
            <br />
            <span className="text-teal">Thrive.</span>
          </>
        }
        body="Expert neurodiversity assessment with personalised support for everything that comes next."
        secondaryCta={{ label: 'Explore Assessments', href: '/assessments' }}
        ticks={['Free consultation', 'No obligation', 'Here to help']}
        titleFont="sans"
        image={{ src: img.heroHome, alt: 'Someone smiling, looking ahead with confidence' }}
      />

      <StatsBar
        items={[
          { icon: People, value: '10,000+', label: 'Assessments Completed', accent: 'teal' },
          { icon: Globe, value: '40+', label: 'Countries Supported', accent: 'coral' },
          { icon: Star, value: '4.9/5', label: 'Average Client Rating', accent: 'orange' },
          { icon: ShieldCheck, value: 'Trusted Globally', label: 'Professional. Ethical. Confidential.', accent: 'teal' },
        ]}
      />

      <CardGrid
        title="What can we help you with?"
        items={helpCards}
        columns={4}
        background="white"
        serif={false}
        iconStyle="bare"
      />

      <PromptBand
        title="Not sure where to start?"
        body="Book a free consultation with our team and we'll help you find the right pathway for you."
        icon={Chat}
        variant="filled"
      />

      <JourneySteps
        title="Your journey with Fairneuro"
        steps={journey}
        background="white"
        serif={false}
      />

      {/* Support that goes beyond the diagnosis */}
      <section className="bg-ivory">
        <div className="shell py-16 lg:py-20">
          <div className="grid gap-10 rounded-2xl bg-white/60 p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:gap-12 lg:p-10">
            <div>
              <h2 className="font-heading text-[24px] font-semibold leading-snug text-navy sm:text-[27px]">
                Support that goes beyond the diagnosis
              </h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-navy/68">
                We offer a range of support services to help you understand your diagnosis and build
                practical strategies for everyday life.
              </p>
              <Button href="/support" className="mt-6">
                Explore Support Services
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {supportServices.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="flex flex-col items-center justify-start rounded-xl border border-navy/[0.07] bg-white px-3 py-5 text-center shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <IconBadge icon={s.icon} accent={s.accent} size="md" />
                  <p className="mt-3 font-heading text-[12px] font-semibold leading-snug text-navy">
                    {s.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialQuote
        background="white"
        items={[
          {
            quote:
              'Fairneuro changed everything for me. The assessment was thorough, the report was so clear and the coaching has helped me more than I ever expected.',
            name: 'Alex, 28',
          },
          {
            quote:
              'The whole process was calm and clear. I understood every step, and the report finally explained things I had wondered about for years.',
            name: 'Sarah, 34',
          },
          {
            quote:
              'From the first conversation I felt heard and supported. The recommendations have been life-changing for my son.',
            name: 'Priya',
          },
        ]}
      />

      <CtaBand
        title="Ready for answers?"
        body="Book a free consultation and take the first step today."
        cta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        ticks={['Free consultation', 'No obligation', 'A conversation, not a commitment']}
        layout="split"
        medallion={false}
        background="white"
      />

    </>
  );
}
