import Link from 'next/link';
import { Logo } from './Logo';
import { Facebook, Instagram, LinkedIn, Mail, Phone, Pin } from '@/components/icons';
import { footerColumns, legalLinks, site } from '@/lib/site';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedIn },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3.2fr)]">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-[220px] font-heading text-[12.5px] font-medium uppercase leading-relaxed tracking-wide text-teal">
              {site.tagline}
            </p>
            <ul className="mt-6 space-y-2.5 text-[13px] text-white/70">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-teal" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-teal" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>{site.location}</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-white/65 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/12">
        <div className="shell flex flex-col items-center justify-between gap-3 py-5 text-[12px] text-white/55 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Fairneuro Diagnostics. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
