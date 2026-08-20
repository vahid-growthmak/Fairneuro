import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { coachingTrust, supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import { Alarm, Briefcase, Chats, GradCap, Head, Person, Star, Waves } from '@/components/icons';

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
      layout="coaching"
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
        heading: 'Who is Autism Coaching for?',
        items: [
          { icon: Person, title: 'Adults', desc: "If you're navigating work, relationships or day-to-day life, coaching can help you build strategies that fit your goals.", href: '/adults', accent: 'teal' },
          { icon: GradCap, title: 'Students & Young Adults', desc: 'Support for studying, time management, organisation and building confidence during education and beyond.', href: '/support/education-support', accent: 'coral' },
          { icon: Briefcase, title: 'Professionals', desc: 'Enhance productivity, manage workload and create sustainable routines that support your career.', href: '/support/workplace-support', accent: 'orange' },
        ],
      }}
      includes={{
        heading: "What's included in Autism Coaching?",
        steps: supportSteps({
          consultTitle: 'Initial goals conversation',
          trackingTitle: 'Regular 1-to-1 sessions',
          toolsTitle: 'Reflection and progress',
          ongoingTitle: 'Ongoing support and next steps',
          consultDesc: "We get to know you, your goals and what you'd like support with.",
          planTitle: 'Exploring strengths and challenges',
          planDesc: 'We explore your experiences, strengths and areas for support.',
          sessionTitle: 'Personalised strategy building',
          sessionDesc: 'Together we create practical strategies and action steps.',
          trackingDesc: 'Focused sessions tailored to your goals and real life.',
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
