import { type SchemaTypeDefinition } from 'sanity';
import { authorType } from './author';
import { categoryType } from './category';
import { faqType } from './faq';
import { pageType } from './page';
import { postType } from './post';
import { siteSettingsType } from './siteSettings';
import { testimonialType } from './testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, postType, authorType, categoryType, testimonialType, faqType, siteSettingsType],
};
