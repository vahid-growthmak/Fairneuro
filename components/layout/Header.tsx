'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { IconBadge } from '@/components/ui/IconBadge';
import {
  Brain,
  Book,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Close,
  Menu,
  Person,
  ShieldCheck,
  TwoHeads,
} from '@/components/icons';
import { assessmentsMega, otherAssessments, primaryNav } from '@/lib/site';
import { cn } from '@/lib/cn';

const megaIcons = { brain: Brain, person: Person, twoHeads: TwoHeads, book: Book } as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Portals need a DOM target, so only render the drawer after hydration.
  useEffect(() => setMounted(true), []);

  // The header lifts off the page once you scroll away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close every menu on navigation.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const isActive = (href: string) => {
    const path = pathname ?? '/';
    return href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-[box-shadow,border-color] duration-300',
        scrolled ? 'border-navy/[0.10] shadow-card' : 'border-navy/[0.07]',
      )}
    >
      <div className="shell flex h-[84px] items-center justify-between gap-3">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const hasPanel = Boolean(item.mega || item.children);
            const active = isActive(item.href);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasPanel && (cancelClose(), setOpen(item.label))}
                onMouseLeave={() => hasPanel && scheduleClose()}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 font-heading text-[14px] font-medium transition-colors 2xl:px-3.5 2xl:text-[15px]',
                    // underline grows from the centre on hover and stays put when active
                    'after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-coral after:transition-[width] after:duration-200 hover:after:w-[calc(100%-1.25rem)]',
                    (active || open === item.label) && 'after:w-[calc(100%-1.25rem)]',
                    active || open === item.label ? 'text-teal' : 'text-navy hover:text-teal',
                  )}
                  aria-expanded={hasPanel ? open === item.label : undefined}
                >
                  {item.label}
                  {hasPanel && (
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        open === item.label && 'rotate-180',
                      )}
                    />
                  )}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full bg-teal" />
                  )}
                </Link>

                {/* Simple dropdown */}
                {item.children && open === item.label && (
                  <div className="absolute left-0 top-full w-[268px] pt-2">
                    <ul className="animate-fade-in-up overflow-hidden rounded-xl border border-navy/[0.07] bg-white p-2 shadow-mega">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] text-navy/80 transition-colors hover:bg-soft-teal/60 hover:text-navy"
                          >
                            {child.label}
                            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-teal opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/book-consultation"
            variant="primary"
            size="lg"
            className="hidden md:inline-flex"
          >
            Book a Free Consultation
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-navy xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Assessments mega-menu */}
      {open === 'Assessments' && (
        <div
          className="absolute inset-x-0 top-full hidden xl:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="shell pb-6 pt-1">
            <div className="animate-fade-in-up overflow-hidden rounded-2xl border border-navy/[0.07] bg-white shadow-mega">
              <div className="grid grid-cols-[300px_1fr]">
                {/* Left rail */}
                <div className="relative overflow-hidden bg-soft-teal/70 p-8">
                  <h2 className="font-heading text-[28px] font-semibold text-navy">Assessments</h2>
                  <p className="mt-2 font-heading text-[15.5px] font-medium text-teal">
                    Assessment is only the beginning.
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-navy/70">
                    Comprehensive, personalised neurodevelopmental assessments for adults and
                    children, followed by clear insights and ongoing support that helps you thrive.
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {['Global experience', 'Carefully matched professionals', 'Support beyond diagnosis'].map(
                      (t) => (
                        <li key={t} className="flex items-center gap-2.5 text-[14px] text-navy/75">
                          <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.4px] border-teal">
                            <Check className="h-2.5 w-2.5 text-teal" strokeWidth={3} />
                          </span>
                          {t}
                        </li>
                      ),
                    )}
                  </ul>
                  <div className="relative z-10 mt-7 space-y-2.5">
                    <Button href="/book-consultation" icon={<Calendar />} className="w-full">
                      Book a Free Consultation
                    </Button>
                    <Button href="/contact" variant="tertiary" className="w-full">
                      Not sure which assessment?
                    </Button>
                    <p className="text-center text-[12.5px] text-navy/55">
                      Get guidance from our team.
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="blob-mask absolute -bottom-14 -left-10 h-44 w-52 bg-white/45"
                  />
                </div>

                {/* Columns */}
                <div className="p-8">
                  <div className="grid grid-cols-4 gap-x-7">
                    {assessmentsMega.map((col, i) => {
                      const Icon = megaIcons[col.icon];
                      return (
                        <div
                          key={col.title}
                          className={cn(
                            'flex flex-col',
                            i > 0 && 'border-l border-navy/[0.07] pl-7',
                          )}
                        >
                          <IconBadge icon={Icon} accent={col.accent} size="md" className="mb-3" />
                          <h3 className="font-heading text-[16.5px] font-semibold text-navy">
                            {col.title}
                          </h3>
                          <p className="mt-2 text-[13.5px] leading-relaxed text-navy/65">
                            {col.desc}
                          </p>
                          <ul className="mt-4 space-y-0.5 border-t border-navy/[0.07] pt-3">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  className="group flex items-start justify-between gap-2 rounded-md py-1.5 pr-1 text-[13.5px] text-navy/75 transition-colors hover:text-navy"
                                >
                                  <span>{l.label}</span>
                                  <ChevronRight
                                    className={cn(
                                      'mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5',
                                      col.accent === 'teal' && 'text-teal',
                                      col.accent === 'coral' && 'text-coral',
                                      col.accent === 'purple' && 'text-purple',
                                      col.accent === 'orange' && 'text-orange',
                                    )}
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  {/* Other assessments */}
                  <div className="mt-7 border-t border-navy/[0.07] pt-6">
                    <h3 className="font-heading text-[16.5px] font-semibold text-navy">
                      Other Assessments
                    </h3>
                    <div className="mt-4 grid grid-cols-5 gap-3">
                      {otherAssessments.map((a, i) => (
                        <Link
                          key={a.label}
                          href={a.href}
                          className="flex items-center gap-2.5 rounded-xl border border-navy/[0.08] px-3 py-3 text-[13.5px] font-medium text-navy transition-colors hover:border-teal/40 hover:bg-soft-teal/40"
                        >
                          <IconBadge
                            icon={[Brain, Person, Book, ShieldCheck][i % 4]}
                            accent={(['teal', 'coral', 'orange', 'purple'] as const)[i % 4]}
                            size="sm"
                          />
                          {a.label}
                        </Link>
                      ))}
                      <Link
                        href="/assessments"
                        className="flex items-center justify-between gap-2 rounded-xl border border-teal/45 px-4 py-3 transition-colors hover:bg-soft-teal/40"
                      >
                        <span>
                          <span className="block text-[13.5px] font-semibold text-teal">
                            View All Assessments
                          </span>
                          <span className="block text-[12.5px] text-navy/60">
                            Explore our full range
                          </span>
                        </span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-teal" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer strip */}
              <div className="flex items-center justify-between gap-6 border-t border-navy/[0.07] bg-soft-teal/50 px-8 py-5">
                <div className="flex items-center gap-4">
                  <IconBadge icon={ShieldCheck} accent="teal" size="md" />
                  <p className="max-w-3xl text-[14px] leading-relaxed text-navy/75">
                    Every assessment includes a comprehensive report, personalised recommendations
                    and access to ongoing support.
                    <br />
                    Unsure where to start? Book a free consultation and we&apos;ll guide you.
                  </p>
                </div>
                <Button
                  href="/how-it-works"
                  variant="tertiary"
                  iconAfter={<ChevronRight />}
                  className="shrink-0"
                >
                  Learn How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*
        Mobile drawer.

        Portalled to <body> deliberately: this header sets `backdrop-blur`, and an
        element with a backdrop-filter becomes the containing block for its
        fixed-position descendants. Rendered in place, the drawer would resolve
        `fixed inset-0` against the 84px header box instead of the viewport.
      */}
      {mounted &&
        mobileOpen &&
        createPortal(
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-mega">
            <div className="flex h-[84px] shrink-0 items-center justify-between border-b border-navy/[0.07] px-5">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-navy"
                aria-label="Close menu"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
              <ul className="space-y-1">
                {primaryNav.map((item) => {
                  const children =
                    item.mega === 'assessments'
                      ? assessmentsMega.flatMap((c) => c.links).concat(otherAssessments)
                      : item.children;
                  const expanded = mobileSection === item.label;
                  return (
                    <li key={item.label} className="border-b border-navy/[0.06] last:border-0">
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className="flex-1 py-3.5 font-heading text-[16.5px] font-medium text-navy"
                        >
                          {item.label}
                        </Link>
                        {children && (
                          <button
                            type="button"
                            onClick={() => setMobileSection(expanded ? null : item.label)}
                            className="p-2 text-navy/60"
                            aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.label}`}
                            aria-expanded={expanded}
                          >
                            <ChevronDown
                              className={cn(
                                'h-4 w-4 transition-transform',
                                expanded && 'rotate-180',
                              )}
                            />
                          </button>
                        )}
                      </div>
                      {children && expanded && (
                        <ul className="mb-3 space-y-0.5 border-l-2 border-soft-teal pl-4">
                          {children.map((c) => (
                            <li key={c.href + c.label}>
                              <Link
                                href={c.href}
                                className="block py-2 text-[15px] text-navy/70"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-navy/[0.07] p-5">
              <Button href="/book-consultation" icon={<Calendar />} className="w-full" size="lg">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </header>
  );
}
