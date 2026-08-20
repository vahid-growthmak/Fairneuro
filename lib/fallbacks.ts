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
    q: 'How do I know which assessment I need?',
    a: "Our team can help you choose the most appropriate assessment based on your needs and goals. During your free consultation, we'll ask a few questions about what you're looking for and guide you towards the right option.",
  },
  {
    q: 'What happens during a free consultation?',
    a: 'A friendly member of our team listens to your concerns, explains how our assessments work and answers your questions. There is no obligation and no pressure to book anything afterwards.',
  },
  {
    q: 'Are Fairneuro assessments completed online?',
    a: 'Most assessments are completed online using secure video consultation, which suits the majority of people. In-person appointments are available where they are clinically appropriate.',
  },
  {
    q: 'What does the online screener do?',
    a: 'Our online screeners are quick, research-based questionnaires designed to identify patterns and highlight whether a full assessment may be helpful. They are not diagnostic, but a valuable starting point.',
  },
  {
    q: 'Will I receive a report after my assessment?',
    a: 'Yes. You receive a detailed written report explaining the findings, whether diagnostic criteria are met, your strengths and challenges, and personalised recommendations for what comes next.',
  },
  {
    q: 'What happens if I receive a diagnosis?',
    a: 'We talk you through what the diagnosis means in practical terms, and help you decide which recommendations to act on first. A diagnosis is the beginning of support, not the end of the process.',
  },
  {
    q: 'Do you offer support after diagnosis?',
    a: 'We do. Coaching, education, workplace and wellbeing support are all available, and our post-diagnostic support helps you turn understanding into practical everyday strategies.',
  },
  {
    q: 'Can parents enquire about assessments for children?',
    a: 'Absolutely. Parents and carers are welcome to get in touch at any point. We will explain the process, what your child can expect, and how we involve families throughout.',
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
