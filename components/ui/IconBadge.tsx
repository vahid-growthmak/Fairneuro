import type { ComponentType, SVGProps } from 'react';
import { accents, type Accent } from '@/lib/accents';
import { cn } from '@/lib/cn';

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const sizes = {
  sm: { box: 'h-11 w-11', icon: 'h-[22px] w-[22px]' },
  md: { box: 'h-14 w-14', icon: 'h-7 w-7' },
  lg: { box: 'h-16 w-16', icon: 'h-8 w-8' },
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
        'inline-flex shrink-0 items-center justify-center rounded-full',
        a.bg,
        sizes[size].box,
        className,
      )}
    >
      <Icon className={cn(sizes[size].icon, a.fg)} />
    </span>
  );
}
