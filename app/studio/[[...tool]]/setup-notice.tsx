/**
 * Shown at /studio when Sanity credentials are missing, so the route explains
 * itself rather than crashing on a missing projectId.
 */
export function StudioSetupNotice() {
  const steps = [
    'Create a free project at sanity.io/manage (or run `npx sanity@latest init`).',
    'Copy the Project ID into NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local.',
    'Add a Viewer token as SANITY_API_READ_TOKEN to preview drafts.',
    'Restart the dev server, then reload /studio.',
  ];

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: '#F9F5F2',
        fontFamily: 'system-ui, sans-serif',
        color: '#113A61',
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <p
          style={{
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#53ABB3',
            fontWeight: 600,
          }}
        >
          Fairneuro CMS
        </p>
        <h1 style={{ fontSize: 30, margin: '12px 0 10px', fontWeight: 600 }}>
          Sanity is not configured yet
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(17,58,97,0.72)' }}>
          The site is running on its built-in content. Connect a Sanity project to start editing
          resources, FAQs, testimonials and site settings.
        </p>
        <ol style={{ marginTop: 22, paddingLeft: 20, lineHeight: 1.9, fontSize: 14 }}>
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p style={{ marginTop: 22, fontSize: 13, color: 'rgba(17,58,97,0.6)' }}>
          Full instructions are in <code>README.md</code> and <code>.env.example</code>.
        </p>
      </div>
    </main>
  );
}
