import { PartnershipPage } from '@/components/templates/PartnershipPage';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Briefcase,
  Chart,
  Chats,
  ClipboardCheck,
  Document,
  GradCap,
  Handshake,
  Heart,
  HeartHand,
  Network,
  People,
  Person,
  Phone,
  Puzzle,
  Search,
  Signpost,
  Sliders,
  TwoHeads,
} from '@/components/icons';

export const metadata = {
  title: 'Employer / Corporate Services',
  description:
    'We partner with organisations to build inclusive, supportive workplaces for neurodivergent employees through assessments, guidance and workplace support.',
};

export default function Page() {
  return (
    <PartnershipPage
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Employer / Corporate Services' }]}
      title="Employer / Corporate Services"
      body="Fairneuro partners with organisations to help build inclusive, supportive workplaces for neurodivergent employees through assessments, guidance, workplace support and partnership-led services."
      image={{ src: img.heroEmployers, alt: 'A team collaborating in a meeting' }}
      primaryCta={{ label: 'Discuss Your Needs', href: '/contact' }}
      secondaryCta={{ label: 'Speak to Our Team', href: '/contact' }}
      features={[
        { icon: People, title: 'Tailored Workplace Support', desc: 'Solutions designed around your people, culture and workplace needs.', accent: 'teal' },
        { icon: Network, title: 'Clear Referral Pathways', desc: 'Simple, structured pathways for assessments and workplace support.', accent: 'coral' },
        { icon: Chats, title: 'Practical Guidance', desc: 'Evidence-informed advice and resources to support managers and teams.', accent: 'orange' },
        { icon: HeartHand, title: 'Ongoing Partnership', desc: 'Long-term partnership to build inclusive cultures and lasting impact.', accent: 'teal' },
      ]}
      who={{
        heading: 'Who we work with',
        items: [
          { icon: Briefcase, title: 'Employers', desc: 'Organisations of all sizes across all sectors.', accent: 'teal' },
          { icon: People, title: 'HR Teams', desc: 'Supporting people strategies, inclusion and retention.', accent: 'coral' },
          { icon: Heart, title: 'Occupational Health', desc: 'Working together to support employee wellbeing.', accent: 'orange' },
          { icon: HeartHand, title: 'EAP / Wellbeing Teams', desc: 'Enhancing employee support with expert neurodiversity input.', accent: 'teal' },
          { icon: GradCap, title: 'Universities / Graduate Employers', desc: 'Supporting transitions into and within the workplace.', accent: 'coral' },
          { icon: Handshake, title: 'Corporate Partners', desc: 'Collaborating on inclusive and accessible workplace initiatives.', accent: 'orange' },
        ],
      }}
      process={{
        heading: 'How our partnership process works',
        steps: [
          { icon: ClipboardCheck, title: 'Initial Enquiry', desc: 'Get in touch to tell us about your organisation and needs.' },
          { icon: Phone, title: 'Discovery Call', desc: 'We discuss your goals, challenges and priorities.' },
          { icon: Search, title: 'Needs Review', desc: 'We review your workplace context and identify the right solutions.' },
          { icon: Signpost, title: 'Recommended Pathway', desc: 'We recommend the most suitable assessments, guidance and support.' },
          { icon: Document, title: 'Assessment & Guidance', desc: 'We deliver assessments and practical guidance for employees and managers.' },
          { icon: People, title: 'Ongoing Support', desc: 'We provide ongoing partnership and review to drive long-term impact.' },
        ],
      }}
      services={{
        heading: 'How Fairneuro can support your organisation',
        items: [
          { icon: Brain, title: 'ADHD Assessments', desc: 'Comprehensive assessments for ADHD.', accent: 'teal' },
          { icon: Puzzle, title: 'Autism Assessments', desc: 'Accurate assessments for autistic employees.', accent: 'coral' },
          { icon: Book, title: 'Dyslexia Assessments', desc: 'Identify strengths and support learning differences.', accent: 'orange' },
          { icon: TwoHeads, title: 'Combined Assessments', desc: 'Comprehensive assessments for multiple needs.', accent: 'teal' },
          { icon: Sliders, title: 'Workplace Support', desc: 'Practical adjustments and strategies for the workplace.', accent: 'coral' },
          { icon: Person, title: 'Manager Guidance', desc: 'Advice and tools to support managers and teams.', accent: 'orange' },
          { icon: Chats, title: 'Employee Support', desc: 'Guidance and resources for employees and self-advocacy.', accent: 'teal' },
          { icon: Signpost, title: 'Referral Advice', desc: 'Advice on wider referrals and specialist services.', accent: 'coral' },
        ],
        columns: 4,
      }}
      why={{
        heading: 'Why organisations choose Fairneuro',
        items: [
          { icon: Chats, title: 'Clear Communication', desc: 'We keep things simple and transparent at every stage.', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Practical Recommendations', desc: 'Actionable guidance you can use in your organisation.', accent: 'coral' },
          { icon: People, title: 'Employee-Focused Support', desc: 'Support that empowers employees to thrive at work.', accent: 'orange' },
          { icon: HeartHand, title: 'Support Beyond Diagnosis', desc: 'We provide advice and strategies that make a real difference.', accent: 'teal' },
          { icon: Heart, title: 'Person-Centred Approach', desc: 'We focus on the whole person and the workplace context.', accent: 'coral' },
          { icon: Handshake, title: 'Partnership-Led Support', desc: 'We work together for the best outcomes and lasting impact.', accent: 'orange' },
        ],
      }}
      softBand={{
        title: "Let's work together for an inclusive workplace",
        body: "Our Partnerships Team is here to understand your organisation's needs and create the right support plan for your people.",
        cta: { label: 'Speak to Our Partnerships Team', href: '/contact' },
        icon: People,
      }}
      ctaTitle="Ready to support your people with Fairneuro?"
      ctaBody="Let's build a workplace where neurodivergent employees can thrive."
      ctaLabel="Discuss a Partnership"
    />
  );
}
