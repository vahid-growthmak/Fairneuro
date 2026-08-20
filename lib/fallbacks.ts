import type { Testimonial } from '@/components/sections/Testimonials';
import type { FaqItem } from '@/components/sections/Accordion';
import { img } from '@/lib/images';

/**
 * Built-in content used when Sanity is not configured, or when a query
 * returns nothing. Keeping these here means the site is never blank and
 * `npm run build` succeeds before the CMS is connected.
 */

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      'Fairneuro changed everything for me. The assessment was thorough, the report was so clear and the coaching has helped me more than I ever expected.',
    name: 'Alex, 28',
  },
  {
    quote:
      'The whole process was calm and clear. I understood every step, and the report finally explained things I had wondered about for years.',
    name: 'Sarah, 34',
  },
  {
    quote:
      'From the first conversation I felt heard and supported. The recommendations have been life-changing for my son.',
    name: 'Priya',
  },
];

export const aboutTestimonials: Testimonial[] = [
  {
    quote:
      'From the first conversation I felt heard. The assessment was thorough and the report finally made sense of things I had wondered about for years.',
    name: 'Alex, 28',
    role: 'ADHD Assessment',
    avatar: img.avatarAlex,
  },
  {
    quote:
      'What stood out was that the support did not stop when the report arrived. That made all the difference for our family.',
    name: 'Parent of a 9-year-old',
    role: 'Child Autism Assessment',
    avatar: img.avatarParent,
  },
];

export const faqs: FaqItem[] = [
  {
    q: 'How long does an assessment take?',
    a: 'Most assessments involve a clinical interview of 90 minutes to three hours, plus questionnaires you complete beforehand. Your written report usually follows within 10 to 15 working days.',
  },
  {
    q: 'Do I need a GP referral?',
    a: 'No. You can self-refer directly to Fairneuro. If you would like us to share your report with your GP afterwards, we can do so with your consent.',
  },
  {
    q: 'Are assessments carried out online or in person?',
    a: 'Both are available. Online assessments are conducted over secure video and are equally valid; in-person appointments are available in selected locations.',
  },
  {
    q: 'Is the free consultation really free?',
    a: 'Yes. It is a 15–20 minute conversation with no cost and no obligation. Its purpose is to help you understand your options — not to sell you an assessment.',
  },
  {
    q: 'What qualifications do your assessors hold?',
    a: 'All of our assessors are qualified clinical professionals registered with the relevant professional bodies, with specialist experience in neurodevelopmental assessment.',
  },
  {
    q: 'Will my diagnosis be recognised by my school, university or employer?',
    a: 'Yes. Our reports are written to the standards expected by educational institutions and employers, including for exam access arrangements and workplace adjustments.',
  },
  {
    q: 'What happens after I receive my report?',
    a: 'You have a feedback session to talk it through, and you can access our post-diagnostic support, coaching and workplace or education services whenever you are ready.',
  },
  {
    q: 'How is my information kept confidential?',
    a: 'All records are stored securely and handled in line with UK GDPR. Nothing is shared with anyone — including your GP — without your explicit consent.',
  },
];

export interface ResourceCard {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  href?: string;
  categories?: { title: string; slug: string; accent?: string }[];
}

export const featuredResources: ResourceCard[] = [
  {
    _id: 'fallback-preparing',
    title: 'Preparing for Your Assessment',
    slug: 'preparing-for-your-assessment',
    excerpt: 'What to bring, what to expect and how to feel ready on the day.',
    href: '/resources/preparing-for-your-assessment',
  },
  {
    _id: 'fallback-report',
    title: 'Your Report Explained',
    slug: 'your-report-explained',
    excerpt: 'A plain-English walkthrough of what each section of your report means.',
    href: '/resources/your-report-explained',
  },
  {
    _id: 'fallback-screener',
    title: 'Free Online Screener',
    slug: 'screener',
    excerpt: 'A quick, confidential first step if you are unsure where to begin.',
    href: '/screener',
  },
];
