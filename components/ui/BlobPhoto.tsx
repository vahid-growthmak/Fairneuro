import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * Hero imagery: a photograph inside a rounded card, with a soft tinted plate
 * offset behind it and a couple of palette accents breaking the edge.
 *
 * Supply a landscape photograph — it is cropped to fill, so the subject should
 * sit near the centre. When it does not, `objectPosition` moves the crop
 * window; `overlay` washes the top-left corner in brand pink.
 */
export function BlobPhoto({
  src,
  alt,
  className,
  priority = false,
  objectPosition,
  overlay = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** CSS object-position, e.g. '82% 50%', when the subject is off-centre. */
  objectPosition?: string;
  /** Brand-pink wash across the top-left corner of the photograph. */
  overlay?: boolean;
}) {
  return (
    <div className={cn('relative isolate w-full', className)}>
      <div className="relative mx-auto w-full max-w-[640px]">
        {/* tinted plate, offset behind the card */}
        <span
          aria-hidden
          className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[26px] bg-soft-teal"
        />
        <span
          aria-hidden
          className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-[22px] bg-blush"
        />

        <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-card-hover">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 92vw, 640px"
            className="object-cover"
            style={objectPosition ? { objectPosition } : undefined}
          />

          {/* Brand pink — coral, #E8447E — washed across the top-left corner. */}
          {overlay && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_115%_at_0%_0%,rgba(232,68,126,0.82)_0%,rgba(232,68,126,0.55)_22%,rgba(232,68,126,0.18)_42%,rgba(232,68,126,0)_60%)]"
            />
          )}
        </div>

        {/* palette accents, half on the card and half off it */}
        <span
          aria-hidden
          className="absolute -left-2 top-8 h-4 w-4 rounded-full bg-coral"
        />
        <span
          aria-hidden
          className="absolute -right-1.5 bottom-10 h-[18px] w-[18px] rounded-full bg-teal"
        />
      </div>
    </div>
  );
}
