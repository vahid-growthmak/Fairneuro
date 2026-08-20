import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * Hero imagery. Two irregular organic blobs (soft teal behind, blush to the
 * lower right) with the subject sitting *on top* of them rather than clipped
 * inside — the cut-out treatment used throughout the reference design.
 *
 * Supply cut-out subjects on a transparent background for the intended effect.
 */
export function BlobPhoto({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn('relative isolate w-full', className)}>
      <div className="relative mx-auto aspect-[5/4.15] w-full max-w-[640px]">
        {/* organic background masses */}
        <svg
          viewBox="0 0 500 415"
          className="absolute inset-0 -z-20 h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            fill="#E7F5F6"
            d="M188 14c78-22 158 6 196 62 33 49 22 108-6 156-27 46-70 79-127 84-62 6-124-19-152-71-27-49-16-113 17-158C142 48 160 22 188 14Z"
          />
          <path
            fill="#FDEFF4"
            d="M356 108c52-12 108 18 128 68 20 51 4 116-38 152-40 34-101 41-150 20-46-20-77-66-72-115 5-52 48-93 97-113 12-5 24-9 35-12Z"
          />
        </svg>

        {/* accent dots */}
        <span aria-hidden className="absolute left-[30%] top-[9%] -z-10 h-[18px] w-[18px] rounded-full bg-teal" />
        <span aria-hidden className="absolute left-[22%] top-[21%] -z-10 h-4 w-4 rounded-full bg-coral" />
        <span aria-hidden className="absolute right-[7%] top-[5%] -z-10 h-8 w-8 rounded-full bg-blush" />

        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 92vw, 640px"
          className="scale-[1.14] object-contain object-bottom"
        />
      </div>
    </div>
  );
}
