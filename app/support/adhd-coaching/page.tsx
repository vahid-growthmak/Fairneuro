import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { coachingTrust, supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import { Alarm, Briefcase, Calendar, Cloud, GradCap, Head, Person, Target } from '@/components/icons';

export const metadata = {
  title: 'ADHD Coaching',
  description:
    'Practical ADHD coaching to help you understand ADHD, build strategies, improve organisation, confidence and follow-through.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'ADHD Coaching' },
      ]}
      layout="coaching"
      title="ADHD Coaching"
      lede="Practical support to help you understand, organise and thrive."
      body="Fairneuro ADHD coaching helps you better understand ADHD, build practical strategies, improve organisation, confidence and follow-through, and move forward with personalised support."
      image={{ src: img.heroCoaching, alt: 'A person working with focus at a desk' }}
      benefits={{
        heading: 'How could ADHD coaching help?',
        items: [
          { icon: Calendar, title: 'Improve organisation and planning', accent: 'teal' },
          { icon: Alarm, title: 'Build routines that work for you', accent: 'coral' },
          { icon: Cloud, title: 'Reduce overwhelm and procrastination', accent: 'orange' },
          { icon: Target, title: 'Strengthen focus and follow-through', accent: 'teal' },
          { icon: Briefcase, title: 'Support work, study and daily life', accent: 'coral' },
          { icon: Head, title: 'Better understand your ADHD profile', accent: 'teal' },
        ],
      }}
      audience={{
        heading: 'Who is ADHD coaching for?',
        items: [
          { icon: Person, title: 'Adults', desc: "If you're navigating work, relationships or day-to-day life, coaching can help you build strategies that fit your goals.", href: '/adults', accent: 'teal' },
          { icon: GradCap, title: 'Students & Young Adults', desc: 'Support for studying, time management, organisation and building confidence during education and beyond.', href: '/support/education-support', accent: 'coral' },
          { icon: Briefcase, title: 'Professionals', desc: 'Enhance productivity, manage workload and create sustainable routines that support your career.', href: '/support/workplace-support', accent: 'orange' },
        ],
      }}
      includes={{
        heading: "What's included in ADHD coaching?",
        steps: supportSteps({
          consultTitle: 'Initial goals conversation',
          trackingTitle: 'Regular 1-to-1 sessions',
          toolsTitle: 'Progress and accountability',
          ongoingTitle: 'Ongoing support and next steps',
          consultDesc: "We get to know you, your goals and what you'd like support with.",
          planTitle: 'Personal strengths and challenges review',
          planDesc: 'We explore your strengths, challenges and current strategies.',
          sessionTitle: 'Strategy building',
          sessionDesc: 'Together we create practical strategies and action steps.',
          trackingDesc: 'Focused sessions tailored to your goals and real life.',
          toolsDesc: 'Track progress, adjust strategies and stay on track.',
          ongoingDesc: 'Sustainable habits and support as you keep moving forward.',
        }),
      }}
      trust={coachingTrust}
      promptTitle="Not sure whether coaching is right for you?"
      promptBody="Book a free consultation with our team to talk through your goals and see how we can help."
      ctaTitle="Ready to take the first step?"
      ctaBody="Book a free consultation and discover how ADHD coaching can support you to thrive."
    />
  );
}
