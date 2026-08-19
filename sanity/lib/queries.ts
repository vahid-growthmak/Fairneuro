import { groq } from 'next-sanity';

const postCard = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  stage,
  featured,
  coverImage,
  "author": author->{name, role, image},
  "categories": categories[]->{title, "slug": slug.current, accent}
`;

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc){${postCard}}
`;

export const FEATURED_POSTS_QUERY = groq`
  *[_type == "post" && featured == true && defined(slug.current)]
    | order(publishedAt desc)[0...6]{${postCard}}
`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "post" && $slug in categories[]->slug.current]
    | order(publishedAt desc){${postCard}}
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ${postCard},
    body,
    "author": author->{name, role, bio, image}
  }
`;

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{"slug": slug.current}
`;

export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc){
    _id, title, "slug": slug.current, description, accent
  }
`;

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && ($placement == "any" || placement == $placement || placement == "any")]
    | order(order asc){ _id, quote, name, role, rating }
`;

export const FAQS_QUERY = groq`
  *[_type == "faq"] | order(order asc){ _id, question, answer, topic, popular }
`;

export const POPULAR_FAQS_QUERY = groq`
  *[_type == "faq" && popular == true] | order(order asc){ _id, question, answer, topic }
`;

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{ tagline, phone, email, hours, location, stats, social }
`;

/** Every URL the sitemap needs from the CMS. */
export const SITEMAP_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{"slug": slug.current, _updatedAt}
`;
