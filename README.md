# Fairneuro Diagnostics

Marketing site for Fairneuro Diagnostics, built from the design set in [`Pages/`](Pages/).

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Sanity CMS

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

> Do not run `npm run build` while `npm run dev` is running — both write to `.next`
> and the dev server will start returning 500s. Stop dev first, or build separately.

## Design system

Tokens live in [`tailwind.config.ts`](tailwind.config.ts) and come straight from the
design system sheet (`Pages/1.png`):

| Token | Hex | Usage |
| --- | --- | --- |
| `navy` | `#113A61` | Headings, primary buttons, footer |
| `teal` | `#53ABB3` | Accent, secondary buttons, links |
| `soft-teal` | `#E7F4F3` | Tinted section backgrounds |
| `ivory` | `#F9F5F2` | Page/hero backgrounds |
| `coral` | `#E9728A` | Accent (autism pathway) |
| `blush` | `#FCECEF` | Tinted backgrounds |
| `orange` | `#F5A623` | Accent (dyslexia pathway) |

Type: **Poppins SemiBold** for headings, **Inter Regular** for body, plus a
**Fraunces** display serif used for inner-page H1s and most section titles.
The homepage uses Poppins throughout, matching the reference.

Buttons follow the three variants on the sheet — primary (navy), secondary
(teal), tertiary (white with teal border).


## CMS (Sanity)

Content is managed in Sanity, with the Studio embedded at **`/studio`**.

### Setup

1. Create a free project at [sanity.io/manage](https://sanity.io/manage), or run:
   ```bash
   npx sanity@latest init
   ```
2. Copy `.env.example` to `.env.local` and fill in the values:

   | Variable | Where it comes from |
   | --- | --- |
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | sanity.io/manage → your project |
   | `NEXT_PUBLIC_SANITY_DATASET` | usually `production` |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | pin a date, e.g. `2024-10-01` |
   | `SANITY_API_READ_TOKEN` | API → Tokens → **Viewer** (for draft preview) |
   | `SANITY_REVALIDATE_SECRET` | any random string — `openssl rand -base64 32` |

3. Restart the dev server and open <http://localhost:3000/studio>.

> `.env.local` is gitignored. Set the same variables on your host for production.
> Only `NEXT_PUBLIC_*` values reach the browser — the token and webhook secret
> are server-only and must never take that prefix.

### Content types

| Type | Drives |
| --- | --- |
| **Resource Article** (`post`) | `/resources` cards and `/resources/[slug]` pages |
| **Category** | Resource topics and card accent colours |
| **Author** | Article bylines |
| **Testimonial** | Homepage and About quotes (filtered by placement) |
| **FAQ** | `/faqs` accordion |
| **Site Settings** | Global contact details and homepage stats (singleton) |

### Renders without a CMS

Every CMS-backed section keeps its original content in [`lib/fallbacks.ts`](lib/fallbacks.ts)
and falls back to it when Sanity is unconfigured, a query fails, or a query
returns nothing — see [`sanity/lib/fetch.ts`](sanity/lib/fetch.ts). The site
builds and looks correct before you connect a project, and a CMS outage
degrades to static content rather than an error page.

### Draft preview

With `SANITY_API_READ_TOKEN` set, `/api/draft-mode/enable` turns on Next.js
draft mode so unpublished changes render; `/api/draft-mode/disable` exits.
Draft reads bypass the cache and use a token-authenticated client, so drafts
never leak into the published site.

### Seeding the CMS

The dataset is populated from the site's own content, so the CMS mirrors what
the pages render rather than being filled in by hand:

```bash
# 1. with the dev server running, capture every route's content
node scripts/extract-content.js content.json <(node -e "…routes…")

# 2. write it to Sanity (needs SANITY_API_WRITE_TOKEN)
node scripts/seed-sanity.js content.json --dry-run   # inspect first
node scripts/seed-sanity.js content.json
```

`extract-content.js` reads the rendered DOM rather than parsing page source, so
anything a template composes is captured. `seed-sanity.js` writes with
deterministic ids via `createOrReplace`, so re-running updates documents rather
than duplicating them — and re-seeding is how you reset the dataset to match
the code.

Editable content lives in `scripts/seed-data/`.

### Revalidation

Published content is cached with ISR (`revalidate = 60`) and tagged `sanity`.
For instant updates, add a webhook in sanity.io/manage → API → Webhooks:

- **URL:** `https://your-site.com/api/revalidate`
- **Trigger on:** create, update, delete
- **Secret:** the same value as `SANITY_REVALIDATE_SECRET`

The handler revalidates the `sanity` tag plus the specific paths affected by
the changed document type.

### Backups

```bash
npx sanity dataset export production
```

## Structure

```
app/                    routes (one folder per page)
components/
  layout/               Header (with mega-menu), Footer, Logo
  sections/             Hero, CardGrid, Steps, Bands, Panels, Testimonials…
  templates/            Page templates shared by families of pages
  ui/                   Button, IconBadge, Breadcrumb, SectionHeading…
  icons/                The 2px line-icon set from the design system
lib/
  images.ts             ← central image manifest (see below)
  site.ts               navigation + footer data
  accents.ts            pastel accent rotation used by cards and steps
  fallbacks.ts          content used when the CMS is unavailable
sanity/
  env.ts                env vars + isSanityConfigured switch
  client.ts             published + draft read clients
  image.ts              image URL builder
  schemaTypes/          content models
  lib/queries.ts        GROQ queries
  lib/fetch.ts          fetch with fallback + draft handling
sanity.config.ts        Studio config
```

Most pages are thin data files rendered through a shared template:

| Template | Used by |
| --- | --- |
| `AssessmentPage` | ADHD / autism / dyslexia / combined, adult + child variants |
| `SupportServicePage` | coaching, learning, education, behaviour, therapy… |
| `LearningDifferencePage` | dyscalculia, dyspraxia / DCD |
| `PartnershipPage` | referrals, schools, employers, clinical care |
| `ScreenerPage` | the free online screeners |
| `LegalPage` | privacy, terms, cookies, complaints |

## Swapping in real photography

All artwork is referenced through a single manifest, [`lib/images.ts`](lib/images.ts).
The current files in `public/images/` are **placeholder illustrations**.

To swap them:

1. Drop the real files into `public/images/`.
2. Update the matching path in `lib/images.ts`.

No page files need to change.

**Hero images** render inside an organic blob mask at roughly a 4:3.4 ratio —
supply at 1120×952 or larger. Cut-out subjects on a transparent background match
the reference design most closely. Avatars are square (200×200+); the wide
audience tiles are square as well.

## Notes

- The contact form and screeners are front-end only; wire them to your form
  backend / screening platform when ready (`components/sections/ContactForm.tsx`
  and the `#screener` block in `components/templates/ScreenerPage.tsx`).
- `Pages/` holds the source design references and is not part of the build.
- Sanity is pinned to the 4.x line. Sanity 5+ imports `useEffectEvent` directly
  from React, which Next 15's vendored React copy does not export; 4.x uses a
  shim and builds cleanly. Revisit when Next vendors a newer React.
