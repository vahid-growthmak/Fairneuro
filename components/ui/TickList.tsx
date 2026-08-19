import { Check } from '@/components/icons';
import { cn } from '@/lib/cn';

/** The small "Free consultation ✓ No obligation ✓ Here to help" row under hero CTAs. */
export function TickRow({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-x-8 gap-y-2', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-[13.5px] text-navy/72">
          <Check className="h-4 w-4 shrink-0 text-teal" strokeWidth={2.6} />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Stacked check list used in benefit panels. */
export function TickList({
  items,
  className,
  tone = 'teal',
}: {
  items: string[];
  className?: string;
  tone?: 'teal' | 'white';
}) {
  return (
    <ul className={cn('space-y-3.5', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            className={cn('mt-1 h-4 w-4 shrink-0', tone === 'white' ? 'text-white' : 'text-teal')}
            strokeWidth={2.4}
          />
          <span className={cn('text-[14px]', tone === 'white' ? 'text-white/85' : 'text-navy/75')}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
