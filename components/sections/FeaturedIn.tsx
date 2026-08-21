import Image from 'next/image';

/**
 * Press logos are third-party trademarks shown nominatively. `width`/`height`
 * are the asset's intrinsic size (for aspect ratio only) — `className` sets the
 * rendered height so marks of very different proportions sit on one optical
 * baseline. SVGs are served unoptimized because Next refuses to run SVG through
 * the image optimizer unless `dangerouslyAllowSVG` is on, which we don't want
 * enabled for the remote Sanity CDN.
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

/**
 * "Featured In" press strip that sits between the CTA band and the footer on
 * consultation, therapy and workplace pages.
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

  return (
    <section className={bg}>
      <div className={`shell ${pad}`}>
        <div className="rounded-2xl border border-navy/[0.07] bg-white px-7 py-7 shadow-card">
          <h2 className="text-center font-heading text-[12.5px] font-semibold uppercase tracking-[0.2em] text-navy/55">
            {title}
          </h2>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 lg:gap-x-14">
            {outlets.map((o) => (
              <li key={o.name} className="flex items-center">
                <Image
                  src={o.src}
                  alt={o.name}
                  width={o.width}
                  height={o.height}
                  unoptimized={o.src.endsWith('.svg')}
                  className={`w-auto grayscale opacity-60 transition duration-300 ease-out hover:opacity-100 hover:grayscale-0 motion-reduce:transition-none ${o.className}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
