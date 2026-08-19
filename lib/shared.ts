import {
  Brain,
  Briefcase,
  Chart,
  Chat,
  Chats,
  CheckCircle,
  Clipboard,
  ClipboardCheck,
  Document,
  GradCap,
  Globe,
  Heart,
  HeartHand,
  Leaf,
  Lock,
  People,
  Person,
  ShieldCheck,
  Star,
} from '@/components/icons';
import type { CardItem } from '@/components/sections/CardGrid';
import type { Step } from '@/components/sections/Steps';

/** Trust strip used at the foot of adult assessment pages. */
export const adultTrust: CardItem[] = [
  { icon: ShieldCheck, title: 'Evidence-based assessment', desc: 'Using gold-standard tools and frameworks.', accent: 'teal' },
  { icon: People, title: 'Carefully matched professionals', desc: 'We match you with the right assessor for your needs.', accent: 'coral' },
  { icon: Lock, title: 'Confidential and secure', desc: 'Your information is always protected.', accent: 'orange' },
  { icon: Heart, title: 'Support beyond diagnosis', desc: 'Access to coaching and support every step of the way.', accent: 'teal' },
  { icon: Globe, title: 'Global experience', desc: 'Supporting adults in 40+ countries worldwide.', accent: 'coral' },
  { icon: Star, title: 'Clear next steps', desc: 'Practical recommendations you can action.', accent: 'teal' },
];

/** Trust strip used at the foot of child assessment pages. */
export const childTrust: CardItem[] = [
  { icon: HeartHand, title: 'Child-friendly approach', desc: 'We ensure your child feels safe and supported.', accent: 'teal' },
  { icon: People, title: 'Experienced professionals', desc: 'Specialists in child neurodevelopment.', accent: 'coral' },
  { icon: ShieldCheck, title: 'Evidence-based assessments', desc: 'Using gold-standard tools and frameworks.', accent: 'orange' },
  { icon: Star, title: 'Practical recommendations', desc: 'Clear strategies for home, school and daily life.', accent: 'teal' },
  { icon: Chats, title: 'Collaborative support', desc: 'We work with you every step of the way.', accent: 'coral' },
  { icon: Globe, title: 'Global experience', desc: 'Supporting families in 40+ countries.', accent: 'teal' },
];

/** Generic trust strip for the top-level assessment pages. */
export const generalTrust: CardItem[] = [
  { icon: ShieldCheck, title: 'Evidence-based assessments', desc: 'Using gold-standard tools and frameworks.', accent: 'teal' },
  { icon: People, title: 'Carefully matched professionals', desc: 'Evidence-based with the right assessor for you.', accent: 'coral' },
  { icon: Lock, title: 'Confidential and secure', desc: 'Your information is always protected.', accent: 'orange' },
  { icon: Heart, title: 'Support beyond diagnosis', desc: 'Access to coaching and support every step of the way.', accent: 'teal' },
  { icon: Globe, title: 'Global experience', desc: 'Supporting individuals in 40+ countries.', accent: 'coral' },
];

/** The six standard "what's included" steps, parameterised per condition. */
export function includedSteps(opts: {
  second: { title: string; desc: string };
  third: { title: string; desc: string };
  fourth?: { title: string; desc: string };
  interviewDesc?: string;
  reportDesc?: string;
  nextDesc?: string;
}): Step[] {
  return [
    {
      icon: Chat,
      title: 'Clinical Interview',
      desc: opts.interviewDesc ?? 'A detailed conversation to understand your experiences and history.',
    },
    { icon: ClipboardCheck, title: opts.second.title, desc: opts.second.desc },
    { icon: Person, title: opts.third.title, desc: opts.third.desc },
    {
      icon: Chart,
      title: opts.fourth?.title ?? 'Clinical Analysis',
      desc: opts.fourth?.desc ?? 'Our clinicians carefully analyse all information to reach a clear understanding.',
    },
    {
      icon: Document,
      title: 'Comprehensive Report',
      desc: opts.reportDesc ?? 'A detailed report with findings, diagnosis (if applicable) and tailored recommendations.',
    },
    {
      icon: Leaf,
      title: 'Next Steps & Support',
      desc: opts.nextDesc ?? 'Guidance and ongoing support so you can thrive beyond the diagnosis.',
    },
  ];
}

/** "Who is this assessment for?" — adults / young adults / professionals. */
export const adultAudience = (condition: string): CardItem[] => [
  {
    icon: People,
    title: 'Adults',
    desc: `For adults seeking answers about ${condition} and how it shapes work, relationships and daily life.`,
    href: '/adults',
    accent: 'teal',
  },
  {
    icon: Person,
    title: 'Young Adults (18+)',
    desc: 'For university students or young adults navigating independence, focus and productivity.',
    href: '/adults',
    accent: 'coral',
  },
  {
    icon: Briefcase,
    title: 'Professionals',
    desc: `For professionals looking to understand ${condition}'s impact on work, performance and wellbeing.`,
    href: '/support/workplace-support',
    accent: 'orange',
  },
];

/** "Who is this assessment for?" — children / parents / schools. */
export const childAudience: CardItem[] = [
  {
    icon: People,
    title: 'Children (Ages 6–17)',
    desc: 'For children showing signs of difficulty with attention, learning, behaviour or development.',
    href: '/children',
    accent: 'teal',
  },
  {
    icon: Person,
    title: 'Parents & Guardians',
    desc: 'For parents seeking clarity and practical strategies to support their child.',
    href: '/support/parent-family',
    accent: 'coral',
  },
  {
    icon: GradCap,
    title: 'Schools & Educators',
    desc: 'For schools looking for a deeper understanding to support learning and behaviour.',
    href: '/schools',
    accent: 'orange',
  },
];

/** "Who is this assessment for?" — adults / children / teenagers. */
export const allAgesAudience = (topic: string): CardItem[] => [
  {
    icon: People,
    title: 'Adults',
    desc: `For adults seeking answers about ${topic}.`,
    href: '/adults',
    accent: 'teal',
  },
  {
    icon: Person,
    title: 'Children',
    desc: `For parents concerned about their child's ${topic}.`,
    href: '/children',
    accent: 'coral',
  },
  {
    icon: Brain,
    title: 'Teenagers',
    desc: `For teenagers navigating school, friendships, identity and ${topic}.`,
    href: '/children',
    accent: 'orange',
  },
];

export { CheckCircle, Clipboard };
