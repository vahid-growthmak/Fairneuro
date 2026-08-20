'use client';

import { useState } from 'react';
import { ChevronDown } from '@/components/icons';
import { cn } from '@/lib/cn';

export interface FaqItem {
  q: string;
  a: string;
}

export function Accordion({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-navy/[0.08] overflow-hidden rounded-2xl border border-navy/[0.07] bg-white shadow-card">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : i)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-soft-teal/25"
              >
                <span className="font-heading text-[15.5px] font-semibold text-navy">{item.q}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-teal transition-transform duration-200',
                    expanded && 'rotate-180',
                  )}
                />
              </button>
            </h3>
            <div
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
                expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pr-14 text-[15px] leading-relaxed text-navy/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
