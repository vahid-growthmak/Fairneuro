import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { IconColumns } from '@/components/sections/CardGrid';
import { FeaturedIn } from '@/components/sections/FeaturedIn';
import { Brain, Check, Leaf, Lock, People, Person, Rosette, ShieldCheck, ShieldLock } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Our Standards',
  description:
    'Clinical excellence, ethical care, always. The FAIR Standard™ guides every Fairneuro assessment: Fast, Accessible, Integrated, Reliable.',
};

const fair = [
  { word: 'Fast', desc: 'Efficient access without unnecessary barriers.' },
  { word: 'Accessible', desc: 'Straightforward, transparent and designed around real people.' },
  { word: 'Integrated', desc: 'Assessment connected to the support that can follow.' },
  { word: 'Reliable', desc: 'Professional assessment and care you can have confidence in.' },
];


export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Why Fairneuro', href: '/why-fairneuro' },
          { label: 'Our Standards' },
        ]}
        title="Our Standards. Your Confidence."
        lede="Clinical excellence. Ethical care. Always."
        body="At Fairneuro, we are committed to the highest standards in neurodiversity assessment and support. Our clinical practices are built on evidence, integrity and compassion."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroStandards, alt: 'A clinician at work' }}
      >
        <div className="mt-7 inline-flex items-start gap-3.5 rounded-xl bg-soft-teal/55 px-5 py-4">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
            <ShieldLock className="h-5 w-5 text-teal" />
          </span>
          <div>
            <p className="font-heading text-[15px] font-semibold text-navy">
              The FAIR Standard&trade;
            </p>
            <p className="mt-1 text-[13.5px] leading-snug text-navy/70">
              A framework that guides everything we do.
            </p>
            <p className="mt-1 font-heading text-[13.5px] font-medium text-teal">
              Fast. Accessible. Integrated. Reliable.
            </p>
          </div>
        </div>
      </Hero>

      <IconColumns
        title="Our commitment to high standards"
        columns={6}
        background="white"
        items={[
          { icon: Brain, title: 'Evidence-Based', desc: 'Our assessments are rooted in the latest research and best clinical practice.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Clinically Led', desc: 'All assessments are designed and reviewed by qualified, experienced clinical professionals.', accent: 'coral' },
          { icon: Person, title: 'Individualised', desc: 'We recognise that every individual is unique. Our approach is tailored to your needs.', accent: 'orange' },
          { icon: Lock, title: 'Confidential & Secure', desc: 'Your privacy is our priority. We follow strict data protection and confidentiality protocols.', accent: 'purple' },
          { icon: People, title: 'Ethical & Respectful', desc: 'We treat everyone with dignity, respect and understanding at every step of the journey.', accent: 'teal' },
          { icon: Rosette, title: 'Quality Assured', desc: 'Our processes are regularly audited to ensure consistent, high-quality care.', accent: 'coral' },
        ]}
      />

      {/* The FAIR Standard */}
      <section className="bg-white">
        <div className="shell pb-16 lg:pb-20">
          <div
            data-reveal
            className="grid items-center gap-9 rounded-2xl bg-soft-teal/55 p-8 lg:grid-cols-[190px_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12 lg:p-12"
          >
            <div className="mx-auto">
              {/*
                The shield spans y 6-169, so its centre is 87.5. The wordmark
                and leaf are placed to sit centred on that: "The" cap-height
                starts around 41 and the leaf ends at 132, putting the block's
                middle at ~87. The leaf clears the "Standard™" descenders by
                7px rather than running into them.
              */}
              <svg viewBox="0 0 150 175" className="h-[175px] w-[150px]" aria-hidden="true">
                <path
                  d="M75 6 12 30v66c0 44 30 63 63 73 33-10 63-29 63-73V30Z"
                  fill="none"
                  stroke="#53ABB3"
                  strokeWidth="2.4"
                />
                <text x="75" y="52" textAnchor="middle" className="fill-navy" style={{ font: '500 15px var(--font-fraunces), Georgia, serif' }}>
                  The
                </text>
                <text x="75" y="85" textAnchor="middle" className="fill-navy" style={{ font: '600 34px var(--font-fraunces), Georgia, serif' }}>
                  FAIR
                </text>
                <text x="75" y="106" textAnchor="middle" className="fill-navy" style={{ font: '500 14px var(--font-fraunces), Georgia, serif' }}>
                  Standard™
                </text>
                <path
                  d="M67 138c0-10 6-16 20-16 0 10-6 16-20 16Zm0 0c0-10-6-16-20-16 0 10 6 16 20 16Z"
                  transform="translate(8,-6)"
                  fill="none"
                  stroke="#53ABB3"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div>
              <h2 className="font-heading text-[26px] font-semibold text-teal sm:text-[29px]">
                The FAIR Standard™
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/70">
                Our proprietary framework ensures every assessment meets the highest standards of
                care.
              </p>
            </div>

            <ul className="space-y-4">
              {fair.map((f) => (
                <li key={f.word} className="flex items-start gap-3 border-b border-navy/[0.08] pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.6px] border-teal">
                    <Check className="h-2.5 w-2.5 text-teal" strokeWidth={3.2} />
                  </span>
                  <div>
                    <p className="font-heading text-[15px] font-semibold text-navy">{f.word}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-navy/65">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FeaturedIn spacing="roomy" />

      <CtaBand
        title="Experience care you can trust."
        body="Book a free consultation and take the first step with complete confidence."
        ticks={null}
        background="white"
      />
    </>
  );
}
