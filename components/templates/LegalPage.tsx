import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CtaBand } from '@/components/sections/Bands';

export interface LegalSection {
  heading: string;
  body: string[];
}

/**
 * Simple prose layout for the policy pages linked from the footer.
 */
export function LegalPage({
  title,
  lede,
  updated,
  sections,
}: {
  title: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-ivory">
        <div className="shell pb-14 pt-8 lg:pb-16">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: title }]} />
          <h1 className="max-w-3xl font-display text-[36px] font-semibold leading-tight text-navy sm:text-[42px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-navy/70">{lede}</p>
          <p className="mt-5 text-[12.5px] text-navy/55">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-16 lg:py-20">
          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-heading text-[19px] font-semibold text-navy">{s.heading}</h2>
                <div className="mt-3 space-y-3.5">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-[14px] leading-relaxed text-navy/72">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about this policy?"
        body="Our team is happy to explain anything in plain English."
        cta={{ label: 'Contact Us', href: '/contact' }}
        ticks={null}
        background="white"
      />
    </>
  );
}
