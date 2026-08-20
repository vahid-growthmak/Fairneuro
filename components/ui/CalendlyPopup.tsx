'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/management-fairneurodiagnostics/30min';

const PARAMS = new URLSearchParams({
  hide_landing_page_details: '1',
  primary_color: 'E8447E',
  text_color: '113A61',
  background_color: 'ffffff',
}).toString();

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

/**
 * Opens the Calendly scheduler in a modal when any "Book a Free Consultation"
 * link is clicked, rather than sending people to a page first.
 *
 * A single delegated listener rather than a special button component: the site
 * has 30-odd booking CTAs in headers, bands and cards, and this keeps them all
 * ordinary links. That matters for degradation — if Calendly's script is
 * blocked, or the click is a middle-click or cmd-click, the link is left alone
 * and still navigates to /book-consultation, which hosts the same scheduler
 * inline.
 */
export function CalendlyPopup() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      // Let the browser handle new-tab, new-window and non-primary clicks.
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as HTMLElement | null)?.closest?.('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (href !== '/book-consultation') return;

      // No widget (blocked, offline, still loading) — let the link navigate.
      if (!window.Calendly?.initPopupWidget) return;

      // Stop Next's Link handler, which would otherwise navigate first.
      event.preventDefault();
      event.stopPropagation();
      window.Calendly.initPopupWidget({ url: `${CALENDLY_URL}?${PARAMS}` });
    }

    // Capture phase: React attaches its handlers at the root container, so a
    // bubble-phase listener here runs after the router has already navigated.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}
