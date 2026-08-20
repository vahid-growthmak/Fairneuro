import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import {
  Briefcase,
  Brain,
  Clipboard,
  GradCap,
  HeartHand,
  Laptop,
  People,
  Person,
  Rosette,
  Target,
} from '@/components/icons';

export const metadata = {
  title: 'Executive Function Support',
  description:
    'Executive function support to develop planning, organisation and focus skills so you can manage daily tasks and reach your goals.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Executive Function Support' },
      ]}
      title="Executive Function Support"
      lede="Build skills. Create systems. Achieve more."
      body="Our executive function support helps you develop the planning, organisation and focus skills you need to manage daily tasks, reach your goals and feel more in control."
      image={{ src: img.heroConsultation, alt: 'A person planning at a desk' }}
      audience={{
        heading: 'Who is executive function support for?',
        items: [
          { icon: Person, title: 'Children & Teens', desc: 'For young people who struggle with organisation, focus, time management and following through.', accent: 'teal' },
          { icon: GradCap, title: 'University Students', desc: 'For students who need support managing workload, meetings, deadlines and daily routines.', accent: 'coral' },
          { icon: Briefcase, title: 'Adults', desc: 'For adults who find it hard to stay organised, meet goals or manage multiple responsibilities.', accent: 'orange' },
          { icon: Laptop, title: 'Working Professionals', desc: 'For professionals looking to improve productivity, time management and work-life balance.', accent: 'teal' },
          { icon: HeartHand, title: 'Anyone Seeking Support', desc: 'For anyone wanting practical strategies and support to strengthen executive functioning skills.', accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How executive function support can help',
        items: [
          { icon: Target, title: 'Improve focus and sustained attention', accent: 'teal' },
          { icon: Clipboard, title: 'Plan, prioritise and manage time better', accent: 'coral' },
          { icon: Rosette, title: 'Build routines and stay organised', accent: 'orange' },
          { icon: Brain, title: 'Reduce overwhelm and improve decision-making', accent: 'teal' },
          { icon: People, title: 'Increase independence and confidence', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in executive function support?",
        steps: supportSteps({
          consultDesc: 'We get to know you and understand your challenges, goals and current routines.',
          planDesc: 'Your coach creates a tailored plan with strategies and systems to suit your needs.',
          sessionTitle: '1-to-1 Coaching Sessions',
          sessionDesc: 'Regular sessions focused on skill-building, practical tools and real-life application.',
          trackingDesc: 'We monitor progress together and adjust strategies to help you keep moving forward.',
          toolsDesc: 'Access helpful templates, checklists and resources to support your journey.',
          ongoingDesc: 'Continued encouragement and guidance as you build stronger habits long-term.',
        }),
      }}
      promptTitle="Not sure if executive function support is right for you?"
      ctaTitle="Ready to build skills for a more organised, confident you?"
    />
  );
}
