import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Briefcase,
  GradCap,
  HeartHand,
  Laptop,
  Person,
  Rosette,
  Target,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Learning Support',
  description:
    'Personalised learning support for reading, writing, memory, comprehension and study skills — so you can learn in a way that works for you.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Learning Support' },
      ]}
      title="Learning Support"
      lede="Unlock potential. Build confidence. Achieve success."
      body="Our learning support provides personalised strategies and tools to help with reading, writing, memory, comprehension and study skills – so you can learn in a way that works for you."
      image={{ src: img.heroDyslexia, alt: 'A student studying with books' }}
      audience={{
        heading: 'Who is learning support for?',
        items: [
          { icon: Person, title: 'Children & Teens', desc: 'For young people who need extra help with reading, writing, spelling, studying and schoolwork.', accent: 'teal' },
          { icon: GradCap, title: 'University Students', desc: 'For students who want support with academic skills, essay writing, research, memory and exam preparation.', accent: 'coral' },
          { icon: Briefcase, title: 'Adults', desc: 'For adults who want to improve literacy, study skills or return to learning with confidence.', accent: 'orange' },
          { icon: Laptop, title: 'Working Professionals', desc: 'For professionals who want to develop skills, learn efficiently and progress in their careers.', accent: 'teal' },
          { icon: HeartHand, title: 'Anyone Seeking Support', desc: 'For anyone who learns differently and wants personalised strategies to reach their goals.', accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How learning support can help',
        items: [
          { icon: Target, title: 'Build confidence in learning', accent: 'teal' },
          { icon: Book, title: 'Improve reading, writing and comprehension', accent: 'coral' },
          { icon: Brain, title: 'Strengthen memory and concentration', accent: 'orange' },
          { icon: Rosette, title: 'Develop effective study skills', accent: 'teal' },
          { icon: TrendUp, title: 'Achieve academic and personal goals', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in learning support?",
        steps: supportSteps({
          consultDesc: 'We understand your learning challenges, goals and strengths.',
          planDesc: 'Your plan is tailored to your needs with clear strategies and targets.',
          sessionDesc: 'Regular sessions focused on skill-building, practice and real-life application.',
          trackingDesc: 'We track progress and adjust strategies to help you keep improving.',
          toolsDesc: 'Access helpful resources and techniques to support your learning.',
          ongoingDesc: 'Continued guidance and encouragement as you grow and succeed.',
        }),
      }}
      promptTitle="Not sure if learning support is right for you?"
      ctaTitle="Let's help you learn with confidence and reach your full potential."
    />
  );
}
