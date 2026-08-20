import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

/**
 * Brand mark: the Fairneuro brain glyph (extracted from the master artwork,
 * background removed) beside the "Fairneuro / DIAGNOSTICS" wordmark.
 */
const MARK = { src: '/images/logo-mark.png', width: 397, height: 347 };

export function Logo({
  tone = 'dark',
  className,
  size = 'md',
}: {
  tone?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md';
}) {
  const markHeight = size === 'md' ? 44 : 36;
  const markWidth = Math.round((MARK.width / MARK.height) * markHeight);
  const word = size === 'md' ? 'text-[25px]' : 'text-[20.5px]';
  const sub = size === 'md' ? 'text-[11.5px]' : 'text-[10px]';

  return (
    <Link
      href="/"
      className={cn('inline-flex shrink-0 items-center gap-2.5', className)}
      aria-label="Fairneuro Diagnostics — home"
    >
      <Image
        src={MARK.src}
        alt=""
        width={markWidth}
        height={markHeight}
        priority
        aria-hidden="true"
        className="shrink-0"
        style={{ height: markHeight, width: 'auto' }}
      />

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
