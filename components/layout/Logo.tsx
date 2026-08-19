import Link from 'next/link';
import { cn } from '@/lib/cn';

/**
 * Brand mark: a looping brain outline dotted with the palette accents,
 * beside the "Fairneuro / DIAGNOSTICS" wordmark.
 */
export function Logo({
  tone = 'dark',
  className,
  size = 'md',
}: {
  tone?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md';
}) {
  const stroke = tone === 'light' ? '#FFFFFF' : '#113A61';
  const dims = size === 'md' ? 'h-11 w-12' : 'h-9 w-10';
  const word = size === 'md' ? 'text-[23px]' : 'text-[19px]';
  const sub = size === 'md' ? 'text-[10.5px]' : 'text-[9px]';

  return (
    <Link
      href="/"
      className={cn('inline-flex shrink-0 items-center gap-2.5', className)}
      aria-label="Fairneuro Diagnostics — home"
    >
      <svg viewBox="0 0 48 42" className={cn('shrink-0', dims)} aria-hidden="true">
        <g fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {/* left hemisphere */}
          <path d="M23 9.5c-2.4-3.2-7.3-3-9.4.6-3.1-.5-5.7 2.1-5.1 5.2-2.9 1.4-3.4 5.3-.9 7.4-1 3 1.4 6.1 4.5 5.9 1 2.9 4.6 4 7.1 2.2l3.8 2.8" />
          {/* right hemisphere */}
          <path d="M25 9.5c2.4-3.2 7.3-3 9.4.6 3.1-.5 5.7 2.1 5.1 5.2 2.9 1.4 3.4 5.3.9 7.4 1 3-1.4 6.1-4.5 5.9-1 2.9-4.6 4-7.1 2.2" />
          {/* spine + inner folds */}
          <path d="M24 8.6v25" />
          <path d="M16.6 16.4c1.9.4 3.1 1.7 3.4 3.6M13.8 23.2c1.4.3 2.3 1.1 2.6 2.4M31.4 15.6c-1.9.5-3.1 1.8-3.2 3.8M34.2 22.6c-1.4.4-2.3 1.2-2.5 2.5" />
        </g>
        {/* palette accents */}
        <circle cx="14.6" cy="12.6" r="2" fill="#53ABB3" />
        <circle cx="33.6" cy="12.4" r="2" fill="#E9728A" />
        <circle cx="10.4" cy="21.4" r="1.7" fill="#F5A623" />
        <circle cx="37.8" cy="21.2" r="1.7" fill="#8B7DD8" />
        <circle cx="17.8" cy="29" r="1.6" fill="#5CB89A" />
        <circle cx="30.4" cy="29.2" r="1.6" fill="#53ABB3" />
      </svg>

      <span className="leading-none">
        <span
          className={cn(
            'block font-heading font-semibold tracking-[-0.02em]',
            word,
            tone === 'light' ? 'text-white' : 'text-navy',
          )}
        >
          Fairneuro
        </span>
        <span
          className={cn(
            'mt-[3px] block font-heading font-semibold uppercase tracking-[0.3em] text-coral',
            sub,
          )}
        >
          Diagnostics
        </span>
      </span>
    </Link>
  );
}
