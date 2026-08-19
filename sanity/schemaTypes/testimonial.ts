import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      rows: 4,
      validation: (r) => r.required().max(400),
    }),
    defineField({
      name: 'name',
      type: 'string',
      description: 'e.g. Alex, 28 — keep it non-identifying.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'e.g. ADHD Assessment, or Parent of an assessment client.',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      validation: (r) => r.required().min(1).max(5).integer(),
      initialValue: 5,
    }),
    defineField({
      name: 'placement',
      title: 'Where it appears',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage', value: 'home' },
          { title: 'Assessments', value: 'assessments' },
          { title: 'About', value: 'about' },
          { title: 'Anywhere', value: 'any' },
        ],
      },
      initialValue: 'any',
    }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
  ],
  orderings: [
    { title: 'Manual order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'name', subtitle: 'quote' } },
});
