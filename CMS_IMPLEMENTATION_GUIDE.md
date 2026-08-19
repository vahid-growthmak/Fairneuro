# CMS Implementation Guide for Next.js — From Scratch to Finish

A complete, reusable guide for adding a CMS to a Next.js (App Router) project **without missing anything** — from choosing the right approach, to schema design, to live preview, to deployment.

> This guide covers **three approaches**. Read [Part 0](#part-0-choose-your-approach) first to pick the one that fits your project, then jump to that part.
>
> - **Part A — Headless CMS (Sanity)** ← recommended for most marketing/business/blog sites
> - **Part B — Self-Hosted Headless CMS (Strapi)** ← when you need to own the backend/data
> - **Part C — Custom CMS (build your own)** ← full control, learning, or special requirements

---

## Table of Contents

- [Part 0 — Choose Your Approach](#part-0-choose-your-approach)
- [Core CMS Concepts (read once)](#core-cms-concepts)
- [Part A — Sanity (Headless, recommended)](#part-a--sanity-headless-recommended)
- [Part B — Strapi (Self-hosted headless)](#part-b--strapi-self-hosted-headless)
- [Part C — Custom CMS (build your own)](#part-c--custom-cms-build-your-own)
- [Cross-Cutting Concerns (all approaches)](#cross-cutting-concerns)
- [Final Checklist](#final-checklist)
- [Common Errors & Fixes](#common-errors--fixes)

---

## Part 0 — Choose Your Approach

| Need | Best choice |
|---|---|
| Marketing site / blog / business site, fast setup, hosted, free tier | **A — Sanity** |
| Want a polished editor UI, real-time, image CDN, no server to maintain | **A — Sanity** |
| Must self-host, own the database, on-prem/compliance, REST/GraphQL out of the box | **B — Strapi** |
| Full control, custom admin, tight DB integration, or a learning project | **C — Custom** |
| E-commerce | Shopify/Medusa (out of scope — but the data-layer patterns here still apply) |

Other popular headless CMSs that follow the same pattern as Part A: **Contentful**, **Payload** (great if you want self-hosted + code-first schemas inside Next.js), **Storyblok**, **Hygraph**, **Prismic**. If you pick one of those, Part A's *structure* still applies — swap the SDK calls.

### Decision shortcuts
- **"I just want my client to edit text/images and I want it done today"** → Part A (Sanity).
- **"I need users, roles, and the data in my own Postgres"** → Part B (Strapi) or Part C.
- **"I want the CMS to live inside my Next.js repo as code"** → **Payload** (similar to Part A) or Part C.

---

## Core CMS Concepts

Every CMS — hosted or custom — has the same moving parts. Know these and any CMS makes sense:

1. **Schema / Content Model** — the *shape* of your content (e.g. a `Post` has `title`, `slug`, `body`, `coverImage`, `author`, `publishedAt`).
2. **Content Store** — where the data lives (Sanity's dataset, Strapi's DB, your own Postgres).
3. **Admin / Studio** — the UI where editors create & edit content.
4. **Content API** — how your site reads content (GROQ, REST, GraphQL, or direct DB query).
5. **Frontend rendering** — Next.js pages that fetch and display content.
6. **Rich text** — body content is usually structured (Portable Text / Markdown / HTML), not a plain string — needs a renderer.
7. **Media/assets** — image uploads, optimization, CDN.
8. **Draft vs Published** — editors preview drafts before going live.
9. **Revalidation** — how the live site updates when content changes (webhooks / ISR / on-demand revalidation).
10. **Auth & roles** — who can edit what.

Keep this list handy — the "without missing anything" promise is just *making sure every one of these 10 is handled.*

---

## Part A — Sanity (Headless, recommended)

Sanity gives you a hosted content store + a customizable Studio (the admin UI) that you can embed **inside your Next.js app** at `/studio`. Generous free tier.

### A.1 — Prerequisites
- An existing Next.js (App Router) project.
- A free account at [sanity.io](https://sanity.io).

### A.2 — Install & initialize

```bash
npm install sanity next-sanity @sanity/vision @sanity/image-url
npm install @portabletext/react   # to render rich text
```

Initialize Sanity config (creates a project + dataset on your account):

```bash
npx sanity@latest init --env
```
- Choose **"Use the Next.js app"** / embedded option.
- Pick dataset name `production`.
- It writes your `projectId` and `dataset` into `.env.local` as:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=   # create in sanity.io → API → Tokens (Viewer) — for drafts/preview
```

### A.3 — Project structure you'll create

```
src/
├─ sanity/
│  ├─ env.ts            # reads & validates env vars
│  ├─ client.ts         # the read client
│  ├─ image.ts          # image URL builder
│  ├─ schemaTypes/
│  │  ├─ index.ts       # registers all schemas
│  │  ├─ post.ts
│  │  ├─ author.ts
│  │  └─ category.ts
│  └─ lib/
│     └─ queries.ts     # GROQ queries
├─ app/
│  ├─ studio/[[...tool]]/page.tsx   # embedded Studio at /studio
│  └─ blog/
│     ├─ page.tsx                    # list
│     └─ [slug]/page.tsx             # single
sanity.config.ts        # Studio config (project root)
```

### A.4 — Define the schema (content model)

`src/sanity/schemaTypes/post.ts`:

```ts
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage" },
  },
});
```

`src/sanity/schemaTypes/author.ts`:

```ts
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", type: "text" }),
  ],
});
```

`src/sanity/schemaTypes/category.ts`:

```ts
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
  ],
});
```

Register them — `src/sanity/schemaTypes/index.ts`:

```ts
import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./post";
import { authorType } from "./author";
import { categoryType } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, authorType, categoryType],
};
```

> **Schema design tips:** Use `slug` for anything with its own URL. Use `reference` to link documents (author, category) instead of duplicating data. Always add `alt` to images. Add `validation: (r) => r.required()` to mandatory fields. Add a `preview` so the Studio list looks good.

### A.5 — Studio config & embed

`sanity.config.ts` (project root):

```ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "My Site CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",
  schema,
  plugins: [structureTool(), visionTool()],
});
```

Embed it — `src/app/studio/[[...tool]]/page.tsx`:

```tsx
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

Now `npm run dev` → visit **`http://localhost:3000/studio`** → log in → create content. ✅ (Concept #3 done.)

### A.6 — The read client & image helper

`src/sanity/client.ts`:

```ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true, // fast, cached reads for published content
});
```

`src/sanity/image.ts`:

```ts
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);
export const urlForImage = (source: any) => builder.image(source);
```

### A.7 — GROQ queries

`src/sanity/lib/queries.ts`:

```ts
import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, publishedAt, coverImage,
    "author": author->{name, image}
  }
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, excerpt, publishedAt, coverImage, body,
    "author": author->{name, image, bio},
    "categories": categories[]->{title, "slug": slug.current}
  }
`;

export const POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`;
```

### A.8 — Render the pages

List — `src/app/blog/page.tsx`:

```tsx
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60; // ISR: refresh at most every 60s

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((p: any) => (
          <li key={p._id}>
            <Link href={`/blog/${p.slug}`}>
              {p.coverImage && (
                <Image src={urlForImage(p.coverImage).width(600).height(400).url()}
                  alt={p.coverImage.alt ?? p.title} width={600} height={400} />
              )}
              <h2>{p.title}</h2>
              <p>{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

Single — `src/app/blog/[slug]/page.tsx`:

```tsx
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const revalidate = 60;

// Pre-build all post pages at build time
export async function generateStaticParams() {
  const slugs = await client.fetch(POST_SLUGS_QUERY);
  return slugs.map((s: any) => ({ slug: s.slug }));
}

// SEO metadata from CMS content
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  return { title: post?.title, description: post?.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      {post.author && <p>By {post.author.name}</p>}
      <PortableText value={post.body} />
    </article>
  );
}
```

(Concepts #4, #5, #6 done.)

### A.9 — Live/draft preview (optional but recommended)

So editors see drafts before publishing:

1. Create a **Viewer token** in sanity.io → API → Tokens, put it in `SANITY_API_READ_TOKEN`.
2. Use Next.js **Draft Mode** + `next-sanity`'s `defineLive` / `sanityFetch` to switch between published (CDN) and draft (token) reads. Follow the official "Visual Editing / Live Preview" guide for `next-sanity` — it wires up `app/api/draft-mode/enable/route.ts` and a `<VisualEditing>` component.

### A.10 — Revalidation on publish (keep the live site fresh)

Two options:
- **Time-based (simplest):** `export const revalidate = 60` (already added above).
- **On-demand (instant):** add a webhook so publishing updates the site immediately.

`src/app/api/revalidate/route.ts`:

```ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  const { isValidSignature, body } = await parseBody<{ slug?: string }>(
    req, process.env.SANITY_REVALIDATE_SECRET
  );
  if (!isValidSignature) return new Response("Invalid signature", { status: 401 });

  revalidatePath("/blog");
  if (body?.slug) revalidatePath(`/blog/${body.slug}`);
  return NextResponse.json({ revalidated: true });
}
```

Then in sanity.io → API → Webhooks, add a webhook pointing to `https://your-site.com/api/revalidate` with the same secret. (Concept #9 done.)

---

## Part B — Strapi (Self-hosted headless)

Use Strapi when you must own the backend & database. Strapi is a separate Node app with its own admin UI; Next.js consumes its REST/GraphQL API.

### B.1 — Create the Strapi backend

```bash
npx create-strapi-app@latest my-cms --quickstart
```
- `--quickstart` uses SQLite for local dev. For production use Postgres/MySQL (run without `--quickstart` and configure the DB).
- It opens `http://localhost:1337/admin` → create the admin user.

### B.2 — Model your content (Content-Type Builder)

In the admin: **Content-Type Builder → Create new collection type** → e.g. `Article` with fields:
- `title` (Text)
- `slug` (UID, attached to title)
- `excerpt` (Text)
- `body` (Rich text / Blocks)
- `cover` (Media, single)
- `author` (Relation → Author)
- `publishedAt` is built-in (draft/publish system).

Enable **Draft & Publish** for the type (Settings on the type). (Concepts #1, #8.)

### B.3 — Permissions (make content readable)

**Settings → Users & Permissions → Roles → Public** → enable `find` and `findOne` for `Article` (and `Author`). Without this, the API returns 403. (Concept #10.)

Create an **API token** (Settings → API Tokens) for server-side reads if you keep content private.

### B.4 — Consume from Next.js

`.env.local`:
```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_readonly_token   # optional, for private content
```

`src/lib/strapi.ts`:

```ts
const URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export async function fetchAPI(path: string, params = "") {
  const res = await fetch(`${URL}/api/${path}${params}`, {
    headers: process.env.STRAPI_API_TOKEN
      ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
      : {},
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Strapi ${res.status}`);
  return res.json();
}
```

List page:

```tsx
import { fetchAPI } from "@/lib/strapi";

export default async function Blog() {
  const { data } = await fetchAPI("articles", "?populate=cover&sort=publishedAt:desc");
  return (
    <ul>
      {data.map((a: any) => (
        <li key={a.id}>{a.attributes.title}</li>
      ))}
    </ul>
  );
}
```

Single page (filter by slug):

```tsx
const { data } = await fetchAPI(
  "articles",
  `?filters[slug][$eq]=${slug}&populate=*`
);
const article = data[0];
```

### B.5 — Rich text rendering
- If you used Strapi's **Blocks** field, render with `@strapi/blocks-react-renderer`.
- If Markdown, render with `react-markdown`.

### B.6 — Revalidation
Add a **webhook** in Strapi (Settings → Webhooks) firing on entry publish → hit a Next.js `/api/revalidate` route that calls `revalidatePath()` (same pattern as A.10).

### B.7 — Deploy
- **Strapi backend:** Railway, Render, Fly.io, or a VPS. Use a managed Postgres. Configure media uploads to S3/Cloudinary (local disk doesn't persist on most hosts).
- **Next.js frontend:** Vercel, pointing `NEXT_PUBLIC_STRAPI_URL` at the deployed Strapi.

---

## Part C — Custom CMS (build your own)

Build this when you want full control or it's a learning goal. You'll build all 10 concepts yourself. Stack used here: **Next.js + Postgres + Prisma + NextAuth + a protected `/admin` route + an upload provider.**

### C.1 — Database & ORM

```bash
npm install prisma @prisma/client
npx prisma init
```

`prisma/schema.prisma`:

```prisma
datasource db { provider = "postgresql"; url = env("DATABASE_URL") }
generator client { provider = "prisma-client-js" }

model User {
  id    String @id @default(cuid())
  email String @unique
  name  String?
  role  Role   @default(EDITOR)
  posts Post[]
}

enum Role { ADMIN EDITOR }

model Post {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  excerpt     String?
  body        String              // store HTML or JSON from the editor
  coverImage  String?             // URL from your upload provider
  published   Boolean  @default(false)
  publishedAt DateTime?
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

```bash
npx prisma migrate dev --name init
```

`src/lib/db.ts` (singleton to avoid hot-reload connection leaks):

```ts
import { PrismaClient } from "@prisma/client";
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
export const db = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

(Concepts #1, #2 done.)

### C.2 — Authentication & roles

```bash
npm install next-auth
```
Set up NextAuth (e.g. credentials or an OAuth provider) at `src/app/api/auth/[...nextauth]/route.ts`, store users in the DB, and put `role` in the session. Protect the admin area with middleware:

`middleware.ts`:

```ts
export { default } from "next-auth/middleware";
export const config = { matcher: ["/admin/:path*"] };
```

(Concept #10 done.)

### C.3 — Admin UI

Build pages under `src/app/admin/`:
- `admin/page.tsx` — dashboard / list of posts (table with edit/delete).
- `admin/posts/new/page.tsx` — create form.
- `admin/posts/[id]/edit/page.tsx` — edit form.

Use **Server Actions** for create/update/delete (no separate API needed):

`src/app/admin/posts/actions.ts`:

```ts
"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import auth check here — verify session + role before writing

export async function createPost(formData: FormData) {
  // 1. authorize (throw if not ADMIN/EDITOR)
  const title = String(formData.get("title"));
  const slug = String(formData.get("slug"));
  await db.post.create({
    data: {
      title, slug,
      body: String(formData.get("body")),
      excerpt: String(formData.get("excerpt") ?? ""),
      published: formData.get("published") === "on",
      publishedAt: formData.get("published") === "on" ? new Date() : null,
      authorId: "current-user-id", // from session
    },
  });
  revalidatePath("/blog");
  redirect("/admin");
}
```

(Concepts #3, #8, #9 done.)

### C.4 — Rich text editor

Pick one and integrate in the admin forms (client components):
- **Tiptap** (recommended, headless, stores HTML or JSON) — `npm install @tiptap/react @tiptap/starter-kit`.
- **Lexical** (Meta's editor).
- **react-markdown** + a textarea (simplest — author Markdown, render with `react-markdown`).

Store the output (HTML/JSON/Markdown) in `Post.body`. (Concept #6.)

### C.5 — Media uploads

Don't store images in your DB or local disk (won't persist on serverless). Use a provider:
- **UploadThing** (`npm install uploadthing @uploadthing/react`) — easiest with Next.js.
- **Cloudinary** or **AWS S3** — more control.
- **Vercel Blob** — if deploying on Vercel.

Upload returns a URL → save it to `Post.coverImage`. (Concept #7.)

### C.6 — Public frontend

Same as any data fetch — query published posts in Server Components:

```tsx
import { db } from "@/lib/db";
export const revalidate = 60;

export default async function Blog() {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });
  return <ul>{posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

Single post by slug:

```tsx
const post = await db.post.findUnique({ where: { slug } });
if (!post || !post.published) notFound();
// render post.body with your chosen renderer
```

(Concepts #4, #5, #8 done — `published` filter is your draft/publish gate.)

### C.7 — Deploy
- **DB:** Neon, Supabase, Railway, or RDS (managed Postgres). Set `DATABASE_URL`.
- **App:** Vercel. Run `prisma migrate deploy` in the build step (add `"postinstall": "prisma generate"` and a migrate step).
- Set all env vars (`DATABASE_URL`, `NEXTAUTH_SECRET`, upload provider keys) on the host.

---

## Cross-Cutting Concerns

These apply to **all three approaches** — don't skip them.

### SEO & metadata
Always drive `generateMetadata` from CMS fields (title, excerpt, OG image). Add a CMS-driven `sitemap.ts` and `robots.ts`:

```ts
// src/app/sitemap.ts
import { client } from "@/sanity/client"; // or db / strapi
export default async function sitemap() {
  const posts = await client.fetch(`*[_type=="post"]{ "slug": slug.current, _updatedAt }`);
  return posts.map((p: any) => ({
    url: `https://your-site.com/blog/${p.slug}`,
    lastModified: p._updatedAt,
  }));
}
```

### Images
Use `next/image` everywhere. For remote CMS images, add the host to `next.config.js` → `images.remotePatterns`. Always store & render `alt` text.

### Caching / revalidation strategy
- **Static-ish content:** ISR (`export const revalidate = N`).
- **Instant updates:** on-demand revalidation via CMS webhook → `revalidatePath`/`revalidateTag`.
- **Always-fresh:** `cache: "no-store"` (slower; use sparingly).

### Environment variables
- Public, browser-visible config → `NEXT_PUBLIC_*`.
- Secrets (tokens, DB URLs, webhook secrets) → **no prefix**, server-only.
- Never commit `.env.local`. Set the same vars on your host.

### Content validation
Validate required fields **in the schema** (Sanity validation rules / Strapi required flags / Zod in custom server actions) so editors can't publish broken content.

### Backups & migrations
- **Sanity:** `sanity dataset export`.
- **Strapi / custom:** regular DB backups; version your migrations in git.

### Accessibility & i18n (if needed)
- Alt text on all media (already covered).
- For multi-language: Sanity & Strapi both have i18n plugins; for custom, add a `locale` field and filter by it.

---

## Final Checklist

Verify every core concept is handled before calling it done:

- [ ] **Schema** defined for every content type (with required-field validation)
- [ ] **Content store** set up (dataset / DB) and connected
- [ ] **Admin/Studio** reachable and editors can create content
- [ ] **Content API** queries written (GROQ / REST / GraphQL / Prisma)
- [ ] **Frontend** list + detail pages render real CMS content
- [ ] **Rich text** renders correctly (Portable Text / Blocks / Markdown / HTML)
- [ ] **Images** upload, optimize (`next/image`), and have alt text
- [ ] **Draft vs Published** works; drafts don't leak to production
- [ ] **Revalidation** updates the live site on publish (ISR or webhook)
- [ ] **Auth & roles** protect the admin (custom) / configured (Strapi)
- [ ] **SEO**: per-page metadata + sitemap + robots from CMS data
- [ ] **Env vars** set locally and on the host; secrets are server-only
- [ ] **Remote image domains** whitelisted in `next.config.js`
- [ ] **Backups** / export strategy in place
- [ ] `npm run build` passes and the deployed site shows live content

---

## Common Errors & Fixes

| Symptom | Cause | Fix |
|---|---|---|
| Studio at `/studio` is blank/crashes | Wrong relative path to `sanity.config.ts` or missing env | Fix the import path; ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set |
| Strapi API returns **403/404** | Public role lacks `find`/`findOne` | Enable permissions in Settings → Roles → Public |
| Strapi response missing relations/images | Forgot `populate` | Add `?populate=*` (or specific fields) |
| Content updates don't show on site | Over-caching | Lower `revalidate`, or wire up on-demand webhook revalidation |
| `Invalid src prop ... hostname not configured` | Remote CMS image domain not allowed | Add host to `images.remotePatterns` in `next.config.js` |
| Drafts visible in production | Reading drafts without gating | Use Draft Mode (Sanity), publish state (Strapi), or `published: true` filter (custom) |
| Rich text renders as `[object Object]` | Rendering structured content as a string | Use the proper renderer (PortableText / Blocks / react-markdown) |
| `PrismaClient` connection errors in dev | New client per hot-reload | Use the singleton pattern (C.1) |
| Webhook revalidation 401 | Secret mismatch | Ensure the same secret in CMS webhook and the route handler |
| Token/secret exposed in browser | Used `NEXT_PUBLIC_` for a secret | Remove the prefix; only read it in server code |

---

*Guide version 1.0 — targets Next.js 14/15 (App Router). Primary path: Sanity. Alternatives: Strapi (self-hosted) and a custom Prisma/Postgres CMS.*
