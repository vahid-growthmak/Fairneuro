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
 * so that specific case reloads itself.
 *
 * A build can be one of many the same day, so a single "reloaded once, ever"
 * guard is not enough — a tab that already recovered from an earlier deploy
 * would sit on this page forever on the next one. Instead the guard is a
 * cooldown: a genuinely broken page re-throws again within a few seconds of
 * the reload it just did, so that case is left on this page; a stale build
 * fixes itself and does not throw again, so the guard is free for the *next*
 * deploy however soon it lands. A session cap stops a pathological loop.
 */
const STALE_BUILD =
  /ChunkLoadError|Loading chunk|Loading CSS chunk|dynamically imported module|Importing a module script failed|Unable to preload CSS|error loading dynamically imported module/i;
const RELOAD_AT_KEY = 'fairneuro:stale-build-reload-at';
const RELOAD_COUNT_KEY = 'fairneuro:stale-build-reload-count';
const COOLDOWN_MS = 8000;
const MAX_RELOADS_PER_SESSION = 5;

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
      const last = Number(sessionStorage.getItem(RELOAD_AT_KEY) ?? 0);
      if (Date.now() - last < COOLDOWN_MS) return;

      const count = Number(sessionStorage.getItem(RELOAD_COUNT_KEY) ?? 0);
      if (count >= MAX_RELOADS_PER_SESSION) return;

      sessionStorage.setItem(RELOAD_AT_KEY, String(Date.now()));
      sessionStorage.setItem(RELOAD_COUNT_KEY, String(count + 1));
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
              onClick={() => {
                reset();
                window.location.reload();
              }}
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
