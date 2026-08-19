import { defineField, defineType } from 'sanity';

/** Singleton: global contact details and stats shown across the site. */
export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'tagline', type: 'string', initialValue: 'Assessment is only the beginning.' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'email', type: 'string', validation: (r) => r.email() }),
    defineField({ name: 'hours', type: 'string', description: 'e.g. Mon–Fri 9am–6pm' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({
      name: 'stats',
      title: 'Homepage stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: 'social',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', type: 'url' }),
        defineField({ name: 'facebook', type: 'url' }),
        defineField({ name: 'linkedin', type: 'url' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});
