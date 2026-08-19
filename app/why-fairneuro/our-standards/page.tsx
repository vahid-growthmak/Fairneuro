import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { IconColumns } from '@/components/sections/CardGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Brain, Check, Leaf, Lock, People, Person, Rosette, ShieldCheck } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Our Standards',
  description:
    'Clinical excellence, ethical care, always. The FAIR Standard™ guides every Fairneuro assessment: Fair, Accurate, Individualised, Respectful.',
};

const fair = [
  { word: 'Fair', desc: 'We provide unbiased, equitable and inclusive assessments.' },
  { word: 'Accurate', desc: 'We use validated tools and expert clinical judgement.' },
  { word: 'Individualised', desc: "We tailor our approach to each person's unique profile." },
  { word: 'Respectful', desc: 'We listen, we care and we treat every individual with respect.' },
];

const accreditations = [
  { name: 'hcpc', sub: 'HCPC Registered Professionals' },
  { name: 'QMS', sub: 'ISO 9001:2015 Quality Management' },
  { name: 'UK GDPR', sub: 'Compliant' },
  { name: 'ico.', sub: "Information Commissioner's Office" },
  { name: 'PSA', sub: 'Professional Standards Authority' },
  { name: 'Safeguarding', sub: 'Standards Adhered To' },
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
      />

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
          <div className="grid items-center gap-9 rounded-2xl bg-soft-teal/55 p-8 lg:grid-cols-[190px_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12 lg:p-12">
            <div className="mx-auto">
              <svg viewBox="0 0 150 175" className="h-[175px] w-[150px]" aria-hidden="true">
                <path
                  d="M75 6 12 30v66c0 44 30 63 63 73 33-10 63-29 63-73V30Z"
                  fill="none"
                  stroke="#53ABB3"
                  strokeWidth="2.4"
                />
                <text x="75" y="70" textAnchor="middle" className="fill-navy" style={{ font: '500 15px var(--font-fraunces), Georgia, serif' }}>
                  The
                </text>
                <text x="75" y="103" textAnchor="middle" className="fill-navy" style={{ font: '600 34px var(--font-fraunces), Georgia, serif' }}>
                  FAIR
                </text>
                <text x="75" y="124" textAnchor="middle" className="fill-navy" style={{ font: '500 14px var(--font-fraunces), Georgia, serif' }}>
                  Standard™
                </text>
                <path
                  d="M67 138c0-10 6-16 20-16 0 10-6 16-20 16Zm0 0c0-10-6-16-20-16 0 10 6 16 20 16Z"
                  transform="translate(8,0)"
                  fill="none"
                  stroke="#53ABB3"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div>
              <h2 className="font-display text-[24px] font-semibold text-teal sm:text-[27px]">
                The FAIR Standard™
              </h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70">
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
                    <p className="font-heading text-[13.5px] font-semibold text-navy">{f.word}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-navy/65">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white">
        <div className="shell pb-16 lg:pb-20">
          <SectionHeading title="Accreditations & Compliance" />
          <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {accreditations.map((a, i) => (
              <li
                key={a.name}
                className={`px-5 text-center ${i > 0 ? 'lg:border-l lg:border-navy/[0.08]' : ''}`}
              >
                <p className="font-heading text-[20px] font-semibold lowercase tracking-tight text-navy">
                  {a.name}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-navy/58">{a.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Experience care you can trust."
        body="Book a free consultation and take the first step with complete confidence."
        ticks={null}
        background="white"
      />
    </>
  );
}
