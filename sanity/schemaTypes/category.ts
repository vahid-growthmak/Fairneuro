import { defineField, defineType } from 'sanity';

/** Resource topics — ADHD, Autism, Dyslexia, Parents & Families, Workplace… */
export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({
      name: 'accent',
      title: 'Accent colour',
      type: 'string',
      description: 'Controls the icon tint on resource cards.',
      options: {
        list: [
          { title: 'Teal', value: 'teal' },
          { title: 'Coral', value: 'coral' },
          { title: 'Orange', value: 'orange' },
          { title: 'Purple', value: 'purple' },
          { title: 'Green', value: 'green' },
          { title: 'Blue', value: 'blue' },
        ],
        layout: 'radio',
      },
      initialValue: 'teal',
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'accent' } },
});
