'use client';

import { useEffect } from 'react';

/**
 * Keeps in-page anchor links landing where they should.
 *
 * Scrolling is smooth site-wide, and sections reveal themselves as they enter
 * view — each starting a little offset and animating into place. Travelling to
 * an anchor therefore triggers reveals along the way, every one of which nudges
 * the layout, so the destination moves while the browser is still scrolling
 * toward it and the page settles short of the target.
 *
 * This re-aligns a few times after arrival, until the target stops moving.
 * Corrections are instant, so they read as the tail of the original scroll
 * rather than a second animation.
 */
const SETTLE_DELAYS = [120, 350, 700, 1100];
/** Ignore drift smaller than this; re-scrolling for a pixel or two is jitter. */
const TOLERANCE = 4;

function targetOf(hash: string): HTMLElement | null {
  if (!hash || hash === '#') return null;
  const id = decodeURIComponent(hash.slice(1));
  return document.getElementById(id);
}

export function HashScroll() {
  useEffect(() => {
    let timers: number[] = [];

    const clear = () => {
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
    };

    const align = (element: HTMLElement, behavior: ScrollBehavior) => {
      // scroll-margin on the target keeps it clear of the sticky header.
      element.scrollIntoView({ behavior, block: 'start' });
    };

    const settle = (element: HTMLElement) => {
      clear();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      align(element, reduce ? 'auto' : 'smooth');

      timers = SETTLE_DELAYS.map((delay) =>
        window.setTimeout(() => {
          const style = window.getComputedStyle(element);
          const margin = parseFloat(style.scrollMarginTop || '0') || 0;
          const drift = element.getBoundingClientRect().top - margin;
          if (Math.abs(drift) > TOLERANCE) align(element, 'auto');
        }, delay),
      );
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.('a');
      const href = anchor?.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const element = targetOf(href);
      if (!element) return;

      event.preventDefault();
      if (window.location.hash !== href) {
        window.history.pushState(null, '', href);
      }
      settle(element);
    };

    const onHashChange = () => {
      const element = targetOf(window.location.hash);
      if (element) settle(element);
    };

    // Arriving with a hash already in the URL has the same problem.
    if (window.location.hash) {
      const element = targetOf(window.location.hash);
      if (element) window.setTimeout(() => settle(element), 60);
    }

    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      clear();
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return null;
}
