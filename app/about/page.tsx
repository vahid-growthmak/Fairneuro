import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { FairStandard } from '@/components/sections/Panels';
import { TestimonialCarousel } from '@/components/sections/Testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TickList } from '@/components/ui/TickList';
import { img } from '@/lib/images';
import {
  Globe,
  Handshake,
  Heart,
  HeartHand,
  People,
  Person,
  Rosette,
  ShieldCheck,
  Sparkle,
  Star,
  Target,
} from '@/components/icons';

export const metadata = {
  title: 'About Fairneuro',
  description:
    'Modern neurodiversity assessment and support, built around you. Our mission, vision and the FAIR Standard™.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        title="About Fairneuro"
        lede="Modern neurodiversity assessment and support, built around you."
        body="Assessment is only the beginning. We exist to make neurodiversity assessment faster, clearer and genuinely useful — and to make sure nobody is left without support once they have their answers."
        secondaryCta={{ label: 'Why Fairneuro', href: '/why-fairneuro' }}
        image={{ src: img.heroAbout, alt: 'A member of the Fairneuro team' }}
      />

      <CardGrid
        title="Who we are"
        columns={3}
        background="white"
        cardAlign="left"
        items={[
          { icon: Globe, title: 'Global Neurodiversity Assessment & Care', desc: 'A distributed team of specialist clinicians supporting adults, children and families across more than 40 countries.', accent: 'teal' },
          { icon: HeartHand, title: 'Support Beyond Diagnosis', desc: 'Coaching, therapy, workplace and education support connected directly to your assessment — not left for you to find alone.', accent: 'coral' },
          { icon: People, title: 'Human Guidance at Every Step', desc: 'A real person to talk to from your first enquiry through to life after your report.', accent: 'orange' },
        ]}
      />

      {/* Mission & vision */}
      <section className="bg-white">
        <div className="shell pb-16 lg:pb-20">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-blush/60 p-8 lg:p-10">
              <Target className="h-8 w-8 text-coral" />
              <h2 className="mt-4 font-heading text-[24px] font-semibold text-navy">Our Mission</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/70">
                To raise the standard of neurodiversity assessment — making it fast, accessible,
                integrated and reliable — so that every person who needs answers can get them
                without unnecessary barriers.
              </p>
            </div>
            <div className="rounded-2xl bg-soft-teal/70 p-8 lg:p-10">
              <Sparkle className="h-8 w-8 text-teal" />
              <h2 className="mt-4 font-heading text-[24px] font-semibold text-navy">Our Vision</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/70">
                A world where being neurodivergent is understood rather than explained away, and
                where the right support is available to everyone the moment they need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FairStandard background="ivory" />

      {/* Why Fairneuro exists */}
      <section className="bg-white">
        <div className="shell py-11 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="Why Fairneuro exists" align="left" />
              <p className="text-[15px] leading-relaxed text-navy/70">
                Too many people wait years for an assessment, then receive a report and no clear
                idea what to do next. We were founded to close both gaps at once — shortening the
                route to a clear answer, and connecting that answer directly to practical support.
              </p>
              <TickList
                className="mt-6"
                items={[
                  'Shorter, clearer routes to assessment',
                  'Reports written to be understood, not decoded',
                  'Support connected to your results from day one',
                  'Consistent standards wherever you are in the world',
                ]}
              />
            </div>

            <div>
              <SectionHeading title="What makes Fairneuro different" align="left" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Rosette, title: 'Specialist expertise', accent: 'teal' as const },
                  { icon: ShieldCheck, title: 'Evidence-based practice', accent: 'coral' as const },
                  { icon: Person, title: 'Personalised approach', accent: 'orange' as const },
                  { icon: Star, title: 'Clear, actionable reports', accent: 'teal' as const },
                  { icon: Heart, title: 'Compassionate, human care', accent: 'coral' as const },
                  { icon: Handshake, title: 'Long-term partnership', accent: 'purple' as const },
                ].map((m) => (
                  <li
                    key={m.title}
                    className="flex items-center gap-3 rounded-xl border border-navy/[0.07] bg-white p-4 shadow-card"
                  >
                    <m.icon className="h-5 w-5 shrink-0 text-teal" />
                    <span className="font-heading text-[13.5px] font-semibold text-navy">
                      {m.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <IconColumns
        title="Global reach. Trusted support."
        columns={4}
        background="ivory"
        items={[
          { icon: Globe, title: '100+ Countries', desc: 'Clients supported worldwide.', accent: 'teal' },
          { icon: People, title: '50,000+ Lives Supported', desc: 'Adults, children and families.', accent: 'coral' },
          { icon: Rosette, title: '200+ Expert Assessors', desc: 'Carefully selected specialists.', accent: 'orange' },
          { icon: Star, title: '98% Client Satisfaction', desc: 'Would recommend Fairneuro.', accent: 'teal' },
        ]}
      />

      <TestimonialCarousel
        background="white"
        items={[
          {
            quote:
              'From the first conversation I felt heard. The assessment was thorough and the report finally made sense of things I had wondered about for years.',
            name: 'Alex, 28',
            role: 'ADHD Assessment',
            avatar: img.avatarAlex,
          },
          {
            quote:
              'What stood out was that the support did not stop when the report arrived. That made all the difference for our family.',
            name: 'Parent of a 9-year-old',
            role: 'Child Autism Assessment',
            avatar: img.avatarParent,
          },
        ]}
      />

      <CtaBand
        title="Ready to take the first step?"
        body="Book a free consultation and let our team guide you."
        background="ivory"
      />
    </>
  );
}
