'use client';

import { useEffect } from 'react';

/**
 * One IntersectionObserver for the whole document, revealing anything marked
 * `data-reveal` as it scrolls into view.
 *
 * A single shared observer rather than a wrapper component per element: the
 * sections stay server-rendered, and adding motion to a new section is a plain
 * attribute rather than another client boundary.
 *
 * Nothing is hidden until this mounts (`html.reveal-ready`), so the content is
 * always visible if JavaScript never runs. Readers who ask for reduced motion
 * get everything revealed immediately — relevant on a site whose visitors are
 * more likely than most to find movement uncomfortable.
 */
export function RevealProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      root.classList.add('reveal-ready');
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const attach = () => {
      document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
        // anything already on screen at load reveals without waiting for a scroll
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
      document.querySelectorAll('[data-reveal-stagger]').forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty('--reveal-index', String(Math.min(i, 8)));
        });
      });
    };

    attach();

    // App Router swaps the tree without remounting; re-scan when it changes.
    const mutations = new MutationObserver(() => attach());
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
