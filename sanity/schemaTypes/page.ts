import { defineArrayMember, defineField, defineType } from 'sanity';

const ACCENTS = [
  { title: 'Teal', value: 'teal' },
  { title: 'Coral', value: 'coral' },
  { title: 'Orange', value: 'orange' },
  { title: 'Purple', value: 'purple' },
  { title: 'Green', value: 'green' },
  { title: 'Blue', value: 'blue' },
  { title: 'Navy', value: 'navy' },
];

/** A card / column / step. Every section on the site is built from these. */
const itemFields = [
  defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
  defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
  defineField({ name: 'href', title: 'Link', type: 'string' }),
  defineField({ name: 'accent', type: 'string', options: { list: ACCENTS } }),
];

/**
 * A page of the website. `route` matches the Next.js path, so a page document
 * overrides the content the route renders; anything left empty falls back to
 * what is defined in code.
 */
export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'sections', title: 'Sections' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'route',
      title: 'Route',
      type: 'string',
      description: 'The path this page renders at, e.g. /assessments/adhd',
      validation: (r) => r.required().regex(/^\/[a-z0-9\-/]*$/, { name: 'path' }),
      group: 'hero',
    }),
    defineField({ name: 'eyebrow', type: 'string', group: 'hero' }),
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      validation: (r) => r.required(),
      group: 'hero',
    }),
    defineField({
      name: 'lede',
      title: 'Lede',
      type: 'string',
      description: 'The accent line directly under the heading.',
      group: 'hero',
    }),
    defineField({ name: 'body', title: 'Intro copy', type: 'text', rows: 4, group: 'hero' }),
    defineField({
      name: 'ticks',
      title: 'Reassurances',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'hero',
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary button',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'href', type: 'string' }),
      ],
      group: 'hero',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary button',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'href', type: 'string' }),
      ],
      group: 'hero',
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'sections',
      of: [
        defineArrayMember({
          name: 'section',
          title: 'Section',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'subtitle', type: 'string' }),
            defineField({
              name: 'layout',
              type: 'string',
              initialValue: 'cards',
              options: {
                list: [
                  { title: 'Cards', value: 'cards' },
                  { title: 'Icon columns', value: 'columns' },
                  { title: 'Numbered steps', value: 'steps' },
                  { title: 'Tick list', value: 'ticks' },
                  { title: 'Band', value: 'band' },
                ],
              },
            }),
            defineField({ name: 'body', type: 'text', rows: 3 }),
            defineField({
              name: 'items',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'item',
                  fields: itemFields,
                  preview: { select: { title: 'title', subtitle: 'desc' } },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'heading', subtitle: 'layout', items: 'items' },
            prepare: ({ title, subtitle, items }) => ({
              title: title || '(no heading)',
              subtitle: `${subtitle ?? 'cards'} · ${(items as unknown[] | undefined)?.length ?? 0} items`,
            }),
          },
        }),
      ],
    }),

    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo' }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'route' },
  },
});
