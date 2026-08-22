'use client';

import { useEffect } from 'react';

/**
 * Last-resort error boundary.
 *
 * Without one, an uncaught client error shows Next's bare "Application error:
 * a client-side exception has occurred" on a blank page, which is a dead end.
 *
 * The most common cause here is a stale build. Chunk filenames are content
 * hashed and served `immutable`, while the HTML is revalidated — so a visitor
 * holding HTML from a previous deployment asks for chunk names that no longer
 * exist, and hydration dies. Reloading fetches the current HTML and fixes it,
 * so that specific case reloads itself once. The reload is recorded for the
 * session, because a genuinely broken build must not loop.
 */
const STALE_BUILD = /ChunkLoadError|Loading chunk|Loading CSS chunk|dynamically imported module|Importing a module script failed/i;
const RELOAD_KEY = 'fairneuro:reloaded-for-stale-build';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (!STALE_BUILD.test(`${error?.name} ${error?.message}`)) return;
    try {
      if (sessionStorage.getItem(RELOAD_KEY)) return;
      sessionStorage.setItem(RELOAD_KEY, '1');
    } catch {
      // Private browsing can refuse storage; better to not reload than to loop.
      return;
    }
    window.location.reload();
  }, [error]);

  return (
    <html lang="en-GB">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: '#FBF7F8',
          color: '#113A61',
          font: '400 16px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        }}
      >
        <main style={{ maxWidth: 520, textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 600 }}>Something went wrong</h1>
          <p style={{ margin: '12px 0 0', opacity: 0.75 }}>
            Sorry — this page did not load properly. Trying again usually fixes it.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                border: 0,
                cursor: 'pointer',
                borderRadius: 8,
                padding: '13px 26px',
                background: '#E8447E',
                color: '#fff',
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                borderRadius: 8,
                padding: '13px 26px',
                border: '1px solid rgba(17,58,97,0.18)',
                color: '#113A61',
                textDecoration: 'none',
                fontSize: 15,
              }}
            >
              Back to home
            </a>
          </div>
          <p style={{ margin: '26px 0 0', fontSize: 13, opacity: 0.55 }}>
            If it keeps happening, email{' '}
            <a href="mailto:management@fairneurodiagnostics.com" style={{ color: '#45AEB6' }}>
              management@fairneurodiagnostics.com
            </a>
            {error?.digest ? ` and quote reference ${error.digest}.` : '.'}
          </p>
        </main>
      </body>
    </html>
  );
}
