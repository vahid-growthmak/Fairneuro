import Link from 'next/link';
import { Logo } from './Logo';
import { Facebook, Instagram, LinkedIn } from '@/components/icons';
import { footerColumns, legalLinks } from '@/lib/site';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedIn },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="shell py-11">
        <div className="grid gap-9 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-start lg:gap-10">
          <Logo tone="light" size="sm" />

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:pl-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-[14px] font-semibold text-white">{col.title}</h3>
                <ul className="mt-3.5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[13.5px] text-white/65 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/85 transition-colors hover:border-white hover:text-white"
              >
                <Icon className="h-[19px] w-[19px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="shell flex flex-col items-center justify-center gap-x-4 gap-y-2 py-4 text-[12.5px] text-white/55 sm:flex-row">
          <p>&copy; 2024 Fairneuro Diagnostics. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {legalLinks.map((l) => (
              <li key={l.href} className="flex items-center gap-4">
                <span aria-hidden className="hidden text-white/25 sm:inline">
                  |
                </span>
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
