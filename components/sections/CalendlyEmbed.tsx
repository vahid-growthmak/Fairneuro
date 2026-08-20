'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/management-fairneurodiagnostics/30min';

/**
 * Calendly's inline scheduler.
 *
 * The widget is third-party JavaScript, so it can be blocked by an extension or
 * fail to load. `loaded` tracks whether it actually rendered and a direct link
 * is shown if it did not, rather than leaving an empty box on the one page
 * whose whole purpose is booking.
 *
 * Brand colours are passed through Calendly's own parameters so the scheduler
 * does not arrive in its default blue.
 */
export function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.host);
    // The widget replaces the container's contents once it initialises.
    const el = document.querySelector('.calendly-inline-widget');
    if (!el) return;
    const observer = new MutationObserver(() => {
      if (el.querySelector('iframe')) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const params = new URLSearchParams({
    hide_landing_page_details: '1',
    primary_color: 'E8447E',
    text_color: '113A61',
    background_color: 'ffffff',
    ...(origin ? { embed_domain: origin, embed_type: 'Inline' } : {}),
  });

  return (
    <>
      <div
        className="calendly-inline-widget mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-navy/[0.07] bg-white shadow-card"
        data-url={`${CALENDLY_URL}?${params.toString()}`}
        style={{ minWidth: 320, height: 700 }}
      />

      {!loaded && (
        <p className="mt-5 text-center text-[14px] text-navy/60">
          If the scheduler does not appear,{' '}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-coral underline underline-offset-2"
          >
            open it in a new tab
          </a>{' '}
          or call us on{' '}
          <a href="tel:+447395335182" className="text-coral underline underline-offset-2">
            +44 7395335182
          </a>
          .
        </p>
      )}

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
