import { ShieldLock } from '@/components/icons';
import { cn } from '@/lib/cn';

const badges = [
  { name: 'hcpc', sub: 'HCPC Registered Professionals' },
  { name: 'QMS', sub: 'ISO 9001:2015 Registered' },
  { name: 'ico.', sub: "Information Commissioner's Office" },
  { name: 'UK GDPR', sub: 'Compliant' },
];

/**
 * Accreditation strip that sits between the CTA band and the footer on
 * consultation, standards and workplace pages.
 */
export function AccreditationStrip({
  title = 'Your privacy matters',
  body = 'All consultations are completely confidential. Your information is safe with us and will never be shared.',
  background = 'white',
}: {
  title?: string;
  body?: string;
  background?: 'white' | 'ivory' | 'soft-teal';
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];

  return (
    <section className={bg}>
      <div className="shell pb-16">
        <div className="grid items-center gap-6 rounded-2xl border border-navy/[0.07] bg-white px-7 py-6 shadow-card lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-soft-teal">
              <ShieldLock className="h-5 w-5 text-teal" />
            </span>
            <div>
              <h2 className="font-heading text-[15.5px] font-semibold text-navy">{title}</h2>
              <p className="mt-1 text-[13px] leading-relaxed text-navy/62">{body}</p>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-y-5 sm:grid-cols-4">
            {badges.map((b, i) => (
              <li
                key={b.name}
                className={cn('px-4 text-center', i > 0 && 'sm:border-l sm:border-navy/[0.08]')}
              >
                <p className="font-heading text-[18.5px] font-semibold lowercase tracking-tight text-navy">
                  {b.name}
                </p>
                <p className="mt-1 text-[11.5px] leading-snug text-navy/55">{b.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
