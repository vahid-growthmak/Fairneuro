import { defineArrayMember, defineField, defineType } from 'sanity';

/** A resource article — the CMS-backed content behind /resources. */
export const postType = defineType({
  name: 'post',
  title: 'Resource Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Shown on resource cards and used as the meta description.',
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'category' }] })],
    }),
    defineField({
      name: 'stage',
      title: 'Journey stage',
      type: 'string',
      description: 'Where this sits in the assessment journey.',
      options: {
        list: [
          { title: 'Before Assessment', value: 'before' },
          { title: 'Preparing for Assessment', value: 'preparing' },
          { title: 'Understanding Your Report', value: 'report' },
          { title: 'Support & Next Steps', value: 'support' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      description: 'Show in the featured guides row on /resources.',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (r) => r.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              validation: (r) => r.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Published, newest first',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'excerpt', media: 'coverImage' },
  },
});
