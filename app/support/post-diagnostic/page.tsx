import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Chart,
  Document,
  GradCap,
  Heart,
  HeartHand,
  People,
  Person,
  Signpost,
  Target,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Post-Diagnostic Support',
  description:
    'Guidance, resources and coaching after diagnosis — so you can take confident next steps and build practical everyday strategies.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Post-Diagnostic Support' },
      ]}
      title="Post-Diagnostic Support That Empowers"
      lede="Guidance today. Confidence for tomorrow."
      body="A diagnosis answers one question and opens several more. Our post-diagnostic support helps you understand what it means for you, and turn insight into practical everyday change."
      ticks={['Personalised', 'Practical', 'Ongoing', 'Empowering']}
      image={{ src: img.heroConsultation, alt: 'A person reading their report' }}
      benefits={{
        heading: 'How we support you after your diagnosis',
        items: [
          { icon: Document, title: 'Understanding Your Diagnosis', desc: 'We walk through your report and answer every question.', accent: 'teal' },
          { icon: Target, title: 'Personalised Action Plan', desc: 'Clear, prioritised next steps built around your life.', accent: 'coral' },
          { icon: Book, title: 'Education & Resources', desc: 'Trusted guides, tools and reading tailored to you.', accent: 'orange' },
          { icon: Brain, title: 'Coaching & Skills Development', desc: 'Build practical strategies with a specialist coach.', accent: 'teal' },
          { icon: Heart, title: 'Emotional Wellbeing', desc: 'Support for processing what your diagnosis means.', accent: 'coral' },
          { icon: Chart, title: 'Review & Progress', desc: 'Regular check-ins to keep momentum going.', accent: 'teal' },
        ],
      }}
      audience={{
        heading: 'Who is post-diagnostic support for?',
        items: [
          { icon: Person, title: 'Recently Diagnosed Adults', desc: 'For adults wanting to make sense of a new diagnosis.', accent: 'teal' },
          { icon: People, title: 'Parents & Families', desc: "For families supporting a child after their assessment.", accent: 'coral' },
          { icon: GradCap, title: 'Students', desc: 'For students accessing study support and adjustments.', accent: 'orange' },
          { icon: Signpost, title: 'Anyone Assessed Elsewhere', desc: 'Support is available even if you were assessed by another provider.', accent: 'teal' },
          { icon: HeartHand, title: 'Anyone Seeking Direction', desc: 'For anyone who has a report but is unsure what to do next.', accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How post-diagnostic support can help',
        items: [
          { icon: TrendUp, title: 'Greater confidence', accent: 'teal' },
          { icon: Target, title: 'Better daily functioning', accent: 'coral' },
          { icon: People, title: 'Stronger relationships', accent: 'orange' },
          { icon: Heart, title: 'Reduced stress', accent: 'teal' },
          { icon: Chart, title: 'Long-term growth', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in post-diagnostic support?",
        steps: supportSteps({
          consultDesc: 'We review your results together and answer your questions.',
          planTitle: 'Create Your Plan',
          planDesc: 'A prioritised plan of practical next steps built around your goals.',
          sessionTitle: 'Access Support',
          sessionDesc: 'Coaching, therapy, workplace or education support as needed.',
          trackingDesc: 'Take action with structured guidance and accountability.',
          toolsDesc: 'Resources, tools and templates for everyday life.',
          ongoingDesc: 'Regular reviews so your support evolves as you do.',
        }),
      }}
      promptTitle="Not sure what your next step should be?"
      ctaTitle="You don't have to navigate this journey alone."
    />
  );
}
