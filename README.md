# Fairneuro Diagnostics

Marketing site for Fairneuro Diagnostics, built from the design set in [`Pages/`](Pages/).

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS

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
