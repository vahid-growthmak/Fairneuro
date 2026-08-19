import { cn } from '@/lib/cn';

/**
 * Centred section title. Inner pages set the display serif; the homepage
 * uses the Poppins heading face.
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  serif = true,
  underline = false,
  className,
}: {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  serif?: boolean;
  underline?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mb-10',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <h2
        className={cn(
          'text-[26px] leading-tight sm:text-[30px]',
          serif ? 'font-display font-semibold' : 'font-heading',
        )}
      >
        {title}
      </h2>
      {underline && (
        <span
          className={cn(
            'mt-3 block h-[3px] w-12 rounded-full bg-teal',
            align === 'center' && 'mx-auto',
          )}
        />
      )}
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-[14.5px] text-navy/65',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
