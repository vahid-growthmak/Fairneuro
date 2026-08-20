import type { ComponentType, SVGProps } from 'react';
import { accents, type Accent } from '@/lib/accents';
import { cn } from '@/lib/cn';

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const sizes = {
  sm: { box: 'h-12 w-12', icon: 'h-6 w-6' },
  md: { box: 'h-16 w-16', icon: 'h-8 w-8' },
  lg: { box: 'h-[72px] w-[72px]', icon: 'h-9 w-9' },
} as const;

/** Pastel circle with a line icon — the recurring card/feature motif. */
export function IconBadge({
  icon: Icon,
  accent = 'teal',
  size = 'md',
  className,
}: {
  icon: IconType;
  accent?: Accent;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const a = accents[accent];
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-[1.07] motion-reduce:transform-none',
        a.bg,
        sizes[size].box,
        className,
      )}
    >
      <Icon className={cn(sizes[size].icon, a.fg)} />
    </span>
  );
}
