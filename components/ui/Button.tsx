import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost-light';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  // Primary — pink fill, white text
  primary: 'bg-coral text-white hover:bg-coral/90 shadow-card',
  // Secondary — teal fill, white text
  secondary: 'bg-teal text-white hover:bg-teal/90 shadow-card',
  // Tertiary — white fill, teal border + teal text
  tertiary: 'bg-white text-teal border border-teal/45 hover:border-teal hover:bg-soft-teal/50',
  // On navy bands
  'ghost-light': 'bg-transparent text-white border border-white/45 hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-6 py-3.5 text-[16px]',
};

export interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconAfter?: ReactNode;
  className?: string;
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-heading font-medium',
        'transition-[background-color,border-color,color,box-shadow,transform] duration-200',
        'hover:-translate-y-px active:translate-y-0 active:scale-[0.985] motion-reduce:transform-none',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {icon ? <span className="shrink-0 [&>svg]:h-[18px] [&>svg]:w-[18px]">{icon}</span> : null}
      <span>{children}</span>
      {iconAfter ? (
        <span className="shrink-0 [&>svg]:h-[16px] [&>svg]:w-[16px]">{iconAfter}</span>
      ) : null}
    </Link>
  );
}
