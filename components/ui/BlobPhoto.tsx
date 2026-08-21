import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * Hero imagery: a photograph inside a rounded card, with a soft tinted plate
 * offset behind it and a couple of palette accents breaking the edge.
 *
 * Supply a landscape photograph — it is cropped to fill, so the subject should
 * sit near the centre. When it does not, `objectPosition` moves the crop
 * window; `overlay` washes the top-left corner in brand pink.
 *
 * The plates and the photograph itself drift at different rates as the page
 * scrolls, which is what gives the group its depth. Every offset is zero while
 * the composition sits in the middle of the viewport, so the arrangement you
 * see at rest is the arrangement as drawn.
 *
 * The two round accents are the exception: they travel the card's border on a
 * slow continuous lap rather than drifting with the scroll. Readers who ask for
 * reduced motion get no tweens at all, and the dots stay parked at the corners
 * their classes place them at.
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
          data-parallax="18"
          className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[26px] bg-soft-teal"
        />
        <span
          aria-hidden
          data-parallax="-14"
          data-float="7"
          className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-[22px] bg-blush"
        />

        <div
          data-tilt="4"
          data-orbit-track
          className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-card-hover"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 92vw, 640px"
            data-parallax-zoom="1.05"
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

        {/* Palette accents, riding the card's edge. The starting offsets put
            them where they used to sit — coral high on the left, teal low on
            the right — and the mismatched lap times keep them from travelling
            as a fixed pair. Orbit owns their transform, so neither carries
            parallax or float.

            The inset classes are what they fall back to: with reduced motion,
            or before the runtime binds, nothing drives them and these are the
            positions they rest at. bindOrbit clears them as it takes over. */}
        <span
          aria-hidden
          data-orbit="0.98"
          data-orbit-duration="32"
          className="absolute -left-2 top-8 h-4 w-4 rounded-full bg-coral"
        />
        <span
          aria-hidden
          data-orbit="0.48"
          data-orbit-duration="38"
          className="absolute -right-1.5 bottom-10 h-[18px] w-[18px] rounded-full bg-teal"
        />
      </div>
    </div>
  );
}
