import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid, IconColumns } from '@/components/sections/CardGrid';
import { TrustSplit } from '@/components/sections/Panels';
import { img } from '@/lib/images';
import {
  Document,
  Globe,
  Handshake,
  Heart,
  Lock,
  Network,
  People,
  Person,
  Rosette,
  ShieldCheck,
  ShieldLock,
  Brain,
  Target,
} from '@/components/icons';

export const metadata = {
  title: 'Why Fairneuro',
  description:
    'Experts in neurodiversity, focused on you. Clinical excellence combined with a compassionate, personalised approach.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Why Fairneuro' }]}
        title="Why Fairneuro?"
        lede="Experts in neurodiversity. Focused on you."
        body="At Fairneuro, we believe everyone deserves clarity, understanding and the right support to thrive. We combine clinical excellence with a compassionate, personalised approach to help you or your loved one navigate the neurodiversity journey with confidence."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroWhy, alt: 'A person sitting comfortably, smiling' }}
        features={[
          { icon: Person, title: 'Person-Centred', desc: 'We listen, we care and we tailor everything to you.', accent: 'teal' },
          { icon: Rosette, title: 'Clinical Excellence', desc: 'Our multidisciplinary team follows best practice standards.', accent: 'teal' },
          { icon: ShieldLock, title: 'Trusted & Confidential', desc: "Your privacy is our priority. You're in safe hands.", accent: 'teal' },
          { icon: Heart, title: 'Here for You', desc: "From assessment to ongoing support, we're with you.", accent: 'teal' },
        ]}
      />

      <CardGrid
        title="What makes us different"
        columns={6}
        background="soft-teal"
        items={[
          { icon: People, title: 'Specialist Expertise', desc: 'Our team have extensive experience in ADHD, autism, dyslexia and other neurodivergent conditions.', accent: 'teal' },
          { icon: Brain, title: 'Comprehensive Assessments', desc: 'In-depth, evidence-based assessments that look beyond the checklist.', accent: 'coral' },
          { icon: Target, title: 'Clear, Actionable Reports', desc: 'Straightforward reports with practical recommendations that make a real difference.', accent: 'orange' },
          { icon: Network, title: 'Integrated Support', desc: 'Access to coaching, education support, therapy and post-diagnostic services all in one place.', accent: 'purple' },
          { icon: Globe, title: 'Global Accessibility', desc: 'Fully online services available wherever you are, with flexible appointment times.', accent: 'teal' },
          { icon: Handshake, title: 'Long-Term Partnership', desc: "We're not just here for the assessment. We're here for your journey.", accent: 'coral' },
        ]}
      />

      <TrustSplit
        boxed={false}
        background="white"
        title="Built on trust. Driven by purpose."
        body="Fairneuro was founded with a simple mission: to raise the standard of neurodiversity assessments and support."
        ticks={[
          'Evidence-based assessments',
          'Compassionate, human approach',
          'Clear communication every step of the way',
          'Commitment to continuous improvement',
          'Making a positive impact on individuals, families and communities',
        ]}
        testimonial={{
          quote:
            'The team at Fairneuro truly understand. From the first conversation, I felt heard and supported. The assessment was thorough and the recommendations have been life-changing for my son.',
          name: 'Parent of an assessment client',
          role: 'Parent of an assessment client',
        }}
      />

      <CtaBand
        title="Experience the Fairneuro difference."
        body="Book your free consultation today and take the first step towards clarity and support."
        ticks={null}
        background="white"
      />

      <IconColumns
        boxed
        compact
        columns={4}
        background="white"
        items={[
          { icon: Lock, title: 'Confidential & Secure', desc: 'Your information is always protected and never shared.', accent: 'teal' },
          { icon: Rosette, title: 'Regulated & Compliant', desc: 'We adhere to strict clinical and data protection standards.', accent: 'coral' },
          { icon: People, title: 'Professional Memberships', desc: 'Our clinicians are members of leading professional bodies.', accent: 'purple' },
          { icon: Document, title: 'Transparency', desc: 'Clear processes, honest information, no hidden costs.', accent: 'orange' },
        ]}
      />
    </>
  );
}
