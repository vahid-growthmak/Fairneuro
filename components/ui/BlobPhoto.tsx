import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * Hero imagery: an organic blob-masked photo sitting on soft-teal and blush
 * background blobs, with the small teal / coral / blush accent dots.
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
    <div className={cn('relative isolate mx-auto w-full max-w-[560px]', className)}>
      {/* background blobs */}
      <span
        aria-hidden
        className="blob-mask absolute -left-6 -top-8 -z-10 h-[85%] w-[80%] bg-soft-teal"
      />
      <span
        aria-hidden
        className="blob-mask-alt absolute -bottom-6 right-0 -z-10 h-[70%] w-[72%] bg-blush"
      />

      {/* accent dots */}
      <span aria-hidden className="absolute left-[8%] top-[6%] z-10 h-3.5 w-3.5 rounded-full bg-teal" />
      <span aria-hidden className="absolute -left-1 top-[22%] z-10 h-3 w-3 rounded-full bg-coral" />
      <span aria-hidden className="absolute right-[4%] top-[10%] z-10 h-4 w-4 rounded-full bg-blush" />

      <div className="blob-mask relative aspect-[4/3.4] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 90vw, 560px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
