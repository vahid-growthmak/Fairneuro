import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'answer',
      type: 'text',
      rows: 5,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'topic',
      type: 'string',
      options: {
        list: [
          { title: 'Getting Started', value: 'getting-started' },
          { title: 'Assessments', value: 'assessments' },
          { title: 'Online Screeners', value: 'screeners' },
          { title: 'Reports & Outcomes', value: 'reports' },
          { title: 'Support After Diagnosis', value: 'support' },
          { title: 'Children & Young People', value: 'children' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'popular',
      type: 'boolean',
      description: 'Show in the Popular questions list.',
      initialValue: true,
    }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
  ],
  orderings: [
    { title: 'Manual order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'question', subtitle: 'topic' } },
});
