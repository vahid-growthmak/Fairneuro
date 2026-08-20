import {
  Briefcase,
  Chart,
  Chat,
  Document,
  Globe,
  GradCap,
  HeartHand,
  Leaf,
  Lock,
  People,
  Person,
  Star,
  Target,
  TrendUp,
} from '@/components/icons';
import type { CardItem } from '@/components/sections/CardGrid';
import type { Step } from '@/components/sections/Steps';

/** Shared trust strip for coaching pages (design 15–16). */
export const coachingTrust: CardItem[] = [
  { icon: HeartHand, title: 'Personalised support', desc: 'Tailored to you and your goals.', accent: 'teal' },
  { icon: Target, title: 'Practical strategies', desc: 'Actionable tools you can use right away.', accent: 'coral' },
  { icon: People, title: 'Experienced professionals', desc: 'Coaches with training and real-world insight.', accent: 'orange' },
  { icon: Lock, title: 'Flexible and confidential', desc: 'Online sessions that fit your life.', accent: 'teal' },
  { icon: Star, title: 'Support beyond diagnosis', desc: 'Coaching available with or without assessment.', accent: 'coral' },
  { icon: Globe, title: 'Global experience', desc: 'Supporting clients around the world.', accent: 'teal' },
];

/** The standard six-step support programme (design 17–25). */
export function supportSteps(opts: {
  consultTitle?: string;
  trackingTitle?: string;
  toolsTitle?: string;
  ongoingTitle?: string;
  planTitle?: string;
  planDesc?: string;
  sessionTitle?: string;
  sessionDesc?: string;
  consultDesc?: string;
  trackingDesc?: string;
  toolsDesc?: string;
  ongoingDesc?: string;
}): Step[] {
  return [
    {
      icon: Chat,
      title: opts.consultTitle ?? 'Initial Consultation',
      desc: opts.consultDesc ?? 'We get to know you and understand your goals, challenges and strengths.',
    },
    {
      icon: Document,
      title: opts.planTitle ?? 'Personalised Plan',
      desc: opts.planDesc ?? 'Your coach creates a tailored plan with strategies and goals that suit your needs.',
    },
    {
      icon: Person,
      title: opts.sessionTitle ?? '1-to-1 Support Sessions',
      desc: opts.sessionDesc ?? 'Regular sessions focused on skill-building, practice and real-life application.',
    },
    {
      icon: TrendUp,
      title: opts.trackingTitle ?? 'Progress Tracking',
      desc: opts.trackingDesc ?? 'We review progress together and adjust strategies to keep you moving forward.',
    },
    {
      icon: Chart,
      title: opts.toolsTitle ?? 'Tools & Resources',
      desc: opts.toolsDesc ?? 'Access helpful tools, resources and exercises to support your journey.',
    },
    {
      icon: Leaf,
      title: opts.ongoingTitle ?? 'Ongoing Support',
      desc: opts.ongoingDesc ?? 'Continued encouragement and guidance as you grow and achieve your goals.',
    },
  ];
}

/** "Who is X for?" — the recurring five-audience row. */
export const fiveAudience = (
  first: { title: string; desc: string },
  second: { title: string; desc: string },
  third: { title: string; desc: string },
  fourth: { title: string; desc: string },
  fifth: { title: string; desc: string },
): CardItem[] => [
  { icon: Person, title: first.title, desc: first.desc, accent: 'teal' },
  { icon: People, title: second.title, desc: second.desc, accent: 'coral' },
  { icon: Briefcase, title: third.title, desc: third.desc, accent: 'orange' },
  { icon: GradCap, title: fourth.title, desc: fourth.desc, accent: 'teal' },
  { icon: HeartHand, title: fifth.title, desc: fifth.desc, accent: 'coral' },
];
