import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { coachingTrust, supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import {
  Alarm,
  Briefcase,
  Chats,
  GradCap,
  Head,
  HeartHand,
  People,
  Person,
  Star,
  Target,
  Waves,
} from '@/components/icons';

export const metadata = {
  title: 'Autism Coaching',
  description:
    'Practical autism coaching to help you understand your autistic profile, build routines, manage sensory needs and grow confidence.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Autism Coaching' },
      ]}
      title="Autism Coaching"
      lede="Practical support to help you understand yourself and move forward with confidence."
      body="Autism coaching helps you better understand your autistic profile, build routines, support communication, manage sensory needs, and strengthen confidence in everyday life—through personalised support."
      image={{ src: img.heroSupport, alt: 'A person relaxing with a warm drink' }}
      benefits={{
        heading: 'How could autism coaching help?',
        items: [
          { icon: Head, title: 'Understand your autistic profile', accent: 'teal' },
          { icon: Alarm, title: 'Build routines that work for you', accent: 'coral' },
          { icon: Waves, title: 'Manage sensory overwhelm', accent: 'orange' },
          { icon: Chats, title: 'Support communication and relationships', accent: 'teal' },
          { icon: Star, title: 'Strengthen confidence and self-advocacy', accent: 'coral' },
          { icon: Briefcase, title: 'Support work, study and daily life', accent: 'teal' },
        ],
      }}
      audience={{
        heading: 'Who is autism coaching for?',
        items: [
          { icon: Person, title: 'Autistic Individuals', desc: 'For children, teens and adults seeking personalised support to thrive in daily life.', accent: 'teal' },
          { icon: People, title: 'Parents & Families', desc: 'For parents who want guidance, strategies and support to better understand and help their loved one.', accent: 'coral' },
          { icon: GradCap, title: 'Students', desc: 'For students who need support with organisation, study skills, transitions and independence.', accent: 'orange' },
          { icon: Briefcase, title: 'Working Professionals', desc: 'For adults seeking support with workplace challenges, routines and wellbeing.', accent: 'teal' },
          { icon: HeartHand, title: 'Anyone Seeking Support', desc: 'For anyone who would benefit from practical strategies and ongoing encouragement.', accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How autism coaching can help',
        items: [
          { icon: Target, title: 'Build confidence and self-awareness', accent: 'teal' },
          { icon: Head, title: 'Develop practical life skills', accent: 'coral' },
          { icon: Alarm, title: 'Improve organisation and routines', accent: 'orange' },
          { icon: Chats, title: 'Strengthen communication and relationships', accent: 'teal' },
          { icon: HeartHand, title: 'Manage stress and emotions more effectively', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in Autism Coaching?",
        steps: supportSteps({
          consultDesc: "We get to know you, your goals and what you'd like support with.",
          planTitle: 'Exploring strengths and challenges',
          planDesc: 'We explore your experiences, strengths and areas for support.',
          sessionTitle: 'Personalised strategy building',
          sessionDesc: 'Together we create practical strategies and action steps.',
          trackingDesc: 'Focused 1-to-1 sessions tailored to your goals and real life.',
          toolsDesc: 'We review progress, adjust strategies and celebrate wins.',
          ongoingDesc: 'Sustainable habits and support as you keep moving forward.',
        }),
      }}
      trust={coachingTrust}
      promptTitle="Not sure whether coaching is right for you?"
      promptBody="Book a free consultation with our team to talk through your goals and see how we can help."
      ctaTitle="Ready to take the first step?"
      ctaBody="Book a free consultation and discover how autism coaching can support you to thrive."
    />
  );
}
