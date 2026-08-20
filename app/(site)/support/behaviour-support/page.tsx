import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import {
  Brain,
  Briefcase,
  Chart,
  Chats,
  Clipboard,
  HeartHand,
  Laptop,
  People,
  Person,
  Target,
} from '@/components/icons';

export const metadata = {
  title: 'Behaviour Support',
  description:
    'Behaviour support helping individuals and families understand challenging behaviours and build compassionate, practical strategies.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Behaviour Support' },
      ]}
      title="Behaviour Support"
      lede="Understand behaviour. Build positive change."
      body="Our behaviour support helps individuals and families understand challenging behaviours and develop practical, compassionate strategies that create calmer, more positive everyday experiences."
      image={{ src: img.heroSupport, alt: 'A person reflecting calmly' }}
      audience={{
        heading: 'Who is behaviour support for?',
        items: [
          { icon: Person, title: 'Children & Teens', desc: 'For young people who experience challenging behaviours at home, school or in the community.', accent: 'teal' },
          { icon: People, title: 'Parents & Families', desc: 'For families seeking guidance and strategies to support positive behaviour and build stronger relationships.', accent: 'coral' },
          { icon: Briefcase, title: 'Adults', desc: 'For adults who want support in understanding behaviour and developing more helpful coping strategies.', accent: 'orange' },
          { icon: Laptop, title: 'Professionals', desc: 'For teachers, support workers and professionals looking for practical behaviour support strategies.', accent: 'teal' },
          { icon: HeartHand, title: 'Anyone Seeking Support', desc: 'For anyone who would benefit from understanding behaviour and creating positive, supportive environments.', accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How behaviour support can help',
        items: [
          { icon: Target, title: 'Understand the reasons behind behaviours', accent: 'teal' },
          { icon: Clipboard, title: 'Develop practical strategies that really work', accent: 'coral' },
          { icon: Chats, title: 'Improve relationships and communication', accent: 'orange' },
          { icon: Brain, title: 'Reduce stress and challenging situations', accent: 'teal' },
          { icon: Chart, title: 'Build confidence and long-term positive change', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in behaviour support?",
        steps: supportSteps({
          consultDesc: "We get to know you and understand the behaviours and challenges you're experiencing.",
          planDesc: 'Your support plan is tailored to your needs, goals and the specific behaviours you want to address.',
          sessionDesc: 'Regular sessions focused on understanding behaviour and practical, evidence-based strategies.',
          trackingDesc: 'We monitor progress together and adapt strategies to ensure positive, lasting change.',
          toolsDesc: 'Access useful resources, guides and templates to support you every step of the way.',
          ongoingDesc: 'Continued guidance and encouragement to maintain progress and build skills.',
        }),
      }}
      promptTitle="Not sure if behaviour support is right for you?"
      ctaTitle="Ready to create positive change?"
    />
  );
}
