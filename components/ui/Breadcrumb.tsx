import Link from 'next/link';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13.5px] text-navy/55">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-navy">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? 'text-teal' : undefined} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <span className="text-navy/30">&gt;</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
