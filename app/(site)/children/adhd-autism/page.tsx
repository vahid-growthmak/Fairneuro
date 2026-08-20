import { AssessmentPage } from '@/components/templates/AssessmentPage';
import {
  Chats,
  Clipboard,
  Document,
  Heart,
  HeartHand,
  Lock,
  People,
  ShieldCheck,
  Star,
} from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Child ADHD + Autism Combined Assessment',
  description:
    'A combined child assessment considering overlapping ADHD and autistic traits together, with practical support for families.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Children', href: '/children' },
        { label: 'Child ADHD + Autism Combined Assessment' },
      ]}
      title="Child ADHD + Autism Combined Assessment"
      lede="Clinician-led, child-centred and thorough."
      body="A comprehensive assessment to understand how ADHD and autism characteristics may work together in your child or young person."
      ticks={[
        'Clarity on strengths, challenges and needs',
        'Tailored recommendations for home and school',
        'Evidence-based, child-friendly approach',
        'Compassionate support for the whole family',
      ]}
      image={{ src: img.heroChildAdhd, alt: 'A child working at a desk' }}
      highlights={[
        { icon: ShieldCheck, title: 'Clinical-led and child-centred', desc: 'Led by experienced clinicians who understand children.', accent: 'teal' },
        { icon: HeartHand, title: 'Compassionate and respectful', desc: 'A supportive approach that values every child.', accent: 'coral' },
        { icon: Lock, title: 'Evidence-based', desc: 'Using trusted tools and best-practice methods.', accent: 'orange' },
        { icon: People, title: 'Practical support for families', desc: 'Clear guidance for home, school and beyond.', accent: 'teal' },
      ]}
      explainer={{
        heading: 'What is a combined assessment?',
        body: [
          'ADHD and autism can share many overlapping traits in children and young people. A combined assessment explores attention, activity, emotions, social communication, sensory experiences and behaviours to build a complete picture of how your child thinks, feels and navigates the world.',
          'This helps us understand their unique strengths and challenges, so we can recommend practical strategies and supports that make everyday life easier—for them and your family.',
        ],
        checksHeading: 'This assessment may be suitable for children and young people who:',
        checks: [
          'Have attention, focus or activity challenges',
          'Find social communication or friendships tricky',
          'Experience sensory sensitivities or overwhelm',
          'Have big emotions or find changes hard',
          'May have been diagnosed with ADHD or autism already',
          "You're seeking clarity and support for your child's needs",
        ],
      }}
      includes={{
        heading: 'What does the assessment include?',
        steps: [
          { icon: People, title: 'Getting to know your child', desc: "We talk with you about your child's strengths, challenges and history." },
          { icon: Star, title: 'Child-focused activities', desc: 'Fun, engaging activities tailored to their age and development.' },
          { icon: Chats, title: 'Information from others', desc: 'Input from parents, teachers or other key people.' },
          { icon: Clipboard, title: 'Assessment and understanding', desc: 'We look at attention, social skills, behaviour, sensory needs and more.' },
          { icon: Document, title: 'Detailed report', desc: 'A clear report explaining findings and what they mean.' },
          { icon: Heart, title: 'Recommendations and next steps', desc: 'Practical strategies and support tailored to your child.' },
        ],
      }}
      audience={{
        heading: 'Why families choose Fairneuro',
        items: [
          { icon: HeartHand, title: 'Child-first approach', desc: 'We create a safe, supportive space where children feel heard and understood.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Expert clinicians', desc: 'Experienced professionals with specialist training in ADHD and autism.', accent: 'coral' },
          { icon: Star, title: 'Practical, meaningful recommendations', desc: 'Evidence-based strategies that work in real family and school settings.', accent: 'orange' },
          { icon: Heart, title: 'Ongoing support', desc: "We're here after the assessment with guidance, resources and referrals.", accent: 'teal' },
        ],
      }}
      promptTitle="Not sure if this assessment is right for your child?"
      promptBody="Book a free consultation and we'll help you choose the best path forward."
      testimonials={[
        {
          quote:
            "The assessment gave us so much clarity and relief. We finally understand our son's needs and how to support him in ways that really help.",
          name: 'Parent of a 9-year-old',
        },
      ]}
      ctaTitle="You don't have to figure this out alone."
      ctaBody="Book a free consultation and we'll help you find the answers and support that fit your child."
    />
  );
}
