import type { StructureResolver } from 'sanity/structure';

/**
 * Studio sidebar. Site Settings is a singleton, so it opens the one document
 * directly rather than showing a list the editor could add duplicates to.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),
      S.documentTypeListItem('post').title('Articles'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('faq').title('FAQs'),
    ]);
