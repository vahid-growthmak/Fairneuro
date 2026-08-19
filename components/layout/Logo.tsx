import Link from 'next/link';
import { cn } from '@/lib/cn';

/** Brain-with-dots mark + "Fairneuro / DIAGNOSTICS" wordmark. */
export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-2.5', className)} aria-label="Fairneuro Diagnostics — home">
      <svg viewBox="0 0 40 36" className="h-9 w-10 shrink-0" aria-hidden="true">
        <g
          fill="none"
          stroke={tone === 'light' ? '#FFFFFF' : '#113A61'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 7c-2.2-2.6-6.2-2.4-8 .4-2.6-.2-4.6 2-4.2 4.5-2.3 1.3-2.6 4.5-.6 6.2-.7 2.6 1.3 5.1 4 5 1 2.4 4 3.2 6 1.6l2.8 2.2" />
          <path d="M21 7c2.2-2.6 6.2-2.4 8 .4 2.6-.2 4.6 2 4.2 4.5 2.3 1.3 2.6 4.5.6 6.2.7 2.6-1.3 5.1-4 5-1 2.4-4 3.2-6 1.6" />
          <path d="M20 6.4v20.8" />
          <path d="M14 13.4c1.6.4 2.6 1.6 2.8 3.2M26 12.6c-1.6.6-2.6 1.8-2.6 3.4" />
        </g>
        <circle cx="12.4" cy="10.4" r="1.7" fill="#53ABB3" />
        <circle cx="27.6" cy="10.2" r="1.7" fill="#E9728A" />
        <circle cx="9.6" cy="17.6" r="1.5" fill="#F5A623" />
        <circle cx="30.4" cy="17.4" r="1.5" fill="#8B7DD8" />
        <circle cx="15.2" cy="23.4" r="1.4" fill="#5CB89A" />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            'block font-heading text-[19px] font-semibold tracking-tight',
            tone === 'light' ? 'text-white' : 'text-navy',
          )}
        >
          Fairneuro
        </span>
        <span className="mt-[3px] block font-heading text-[9.5px] font-semibold tracking-[0.22em] text-coral">
          DIAGNOSTICS
        </span>
      </span>
    </Link>
  );
}
