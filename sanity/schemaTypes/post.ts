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
      description:
        'Body copy: paragraphs, headings, bullet and numbered lists, quotes, links and images.',
      of: [
        // Declared explicitly rather than left to Sanity's defaults, which
        // offer H1/H5/H6 and code/strike marks the article layout does not
        // style — an editor could pick them and get unstyled output.
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Paragraph', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Subheading', value: 'h3' },
            { title: 'Small heading', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet list', value: 'bullet' },
            { title: 'Numbered list', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'string',
                    description: 'An external URL, or an internal path such as /assessments/adhd',
                    validation: (r) => r.required(),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Describes the image for screen readers. Not shown on the page.',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional. Shown beneath the image.',
            }),
          ],
          preview: { select: { title: 'caption', subtitle: 'alt', media: 'asset' } },
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
