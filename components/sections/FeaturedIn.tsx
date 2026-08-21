'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Press logos are third-party trademarks shown nominatively, in their own
 * colours. `width`/`height` are the asset's intrinsic size (for aspect ratio
 * only) — `className` sets the rendered height so marks of very different
 * proportions sit on one optical baseline. SVGs are served unoptimized because
 * Next refuses to run SVG through the image optimizer unless
 * `dangerouslyAllowSVG` is on, which we don't want enabled for the remote
 * Sanity CDN.
 */
const outlets = [
  { name: 'BMJ', src: '/images/press/bmj.png', width: 284, height: 166, className: 'h-7 lg:h-8' },
  {
    name: 'BBC News',
    src: '/images/press/bbc-news.svg',
    width: 312,
    height: 200,
    className: 'h-9 lg:h-10',
  },
  {
    name: 'The Independent',
    src: '/images/press/the-independent.svg',
    width: 4909,
    height: 351,
    className: 'h-[15px] lg:h-[18px]',
  },
  {
    name: 'The Daily Telegraph',
    src: '/images/press/daily-telegraph.svg',
    width: 430,
    height: 70,
    className: 'h-[22px] lg:h-[26px]',
  },
  {
    name: 'The Royal Society of Medicine',
    src: '/images/press/rsm.svg',
    width: 619,
    height: 336,
    className: 'h-10 lg:h-11',
  },
  {
    name: 'Daily Mail',
    src: '/images/press/daily-mail.svg',
    width: 1000,
    height: 158,
    className: 'h-[22px] lg:h-[26px]',
  },
];

/** Gap between marks, matched by the track padding so the loop seam is even. */
const GAP = 'gap-x-12 lg:gap-x-16';
const SEAM = 'pr-12 lg:pr-16';

function Logo({ outlet, eager }: { outlet: (typeof outlets)[number]; eager: boolean }) {
  return (
    <Image
      src={outlet.src}
      alt={outlet.name}
      width={outlet.width}
      height={outlet.height}
      unoptimized={outlet.src.endsWith('.svg')}
      loading={eager ? 'eager' : 'lazy'}
      className={`w-auto max-w-none shrink-0 ${outlet.className}`}
    />
  );
}

/**
 * "Featured In" press strip that sits between the CTA band and the footer on
 * consultation, therapy and workplace pages, and mid-page on Our Standards.
 *
 * The logos scroll as an infinite marquee. It pauses on hover and on focus, and
 * readers who ask for reduced motion get a static row instead.
 */
export function FeaturedIn({
  title = 'Featured In',
  background = 'white',
  /** `tight` sits just above the footer; `roomy` matches a mid-page section. */
  spacing = 'tight',
}: {
  title?: string;
  background?: 'white' | 'ivory' | 'soft-teal';
  spacing?: 'tight' | 'roomy';
}) {
  const bg = { white: 'bg-white', ivory: 'bg-ivory', 'soft-teal': 'bg-soft-teal/45' }[background];
  const pad = spacing === 'roomy' ? 'pb-16 lg:pb-20' : 'pb-11';

  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <section className={bg}>
      <div className={`shell ${pad}`}>
        <div
          data-reveal
          className="rounded-2xl border border-navy/[0.07] bg-white px-7 py-7 shadow-card"
        >
          <h2 className="text-center font-heading text-[12.5px] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {title}
          </h2>

          {reducedMotion ? (
            <ul className={`mt-7 flex flex-wrap items-center justify-center gap-y-7 ${GAP}`}>
              {outlets.map((o) => (
                <li key={o.name} className="flex items-center">
                  <Logo outlet={o} eager={false} />
                </li>
              ))}
            </ul>
          ) : (
            <>
              <div
                className="mt-7 overflow-hidden"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)',
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocusCapture={() => setPaused(true)}
                onBlurCapture={() => setPaused(false)}
              >
                <div
                  className="flex w-max animate-marquee items-center"
                  style={{ animationPlayState: paused ? 'paused' : 'running' }}
                >
                  <ul className={`flex shrink-0 items-center ${GAP} ${SEAM}`}>
                    {outlets.map((o) => (
                      <li key={o.name} className="flex items-center">
                        <Logo outlet={o} eager />
                      </li>
                    ))}
                  </ul>
                  {/* Second copy makes the loop seamless; it is decorative. */}
                  <ul aria-hidden className={`flex shrink-0 items-center ${GAP} ${SEAM}`}>
                    {outlets.map((o) => (
                      <li key={o.name} className="flex items-center">
                        <Logo outlet={o} eager />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
