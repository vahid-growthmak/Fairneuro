import { PartnershipPage } from '@/components/templates/PartnershipPage';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Briefcase,
  Chats,
  ClipboardCheck,
  Document,
  Folder,
  GradCap,
  Handshake,
  Heart,
  HeartHand,
  Mail,
  People,
  Person,
  Puzzle,
  Question,
  School,
  Search,
  Signpost,
  Stethoscope,
} from '@/components/icons';

export const metadata = {
  title: 'Professional Referrals',
  description:
    'A clear, supportive referral pathway for professionals seeking neurodiversity assessment and onward support.',
};

export default function Page() {
  return (
    <PartnershipPage
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Professional Referrals' }]}
      title="Professional Referrals"
      body="A clear and supportive referral pathway for professionals seeking neurodiversity assessment and onward support for children, young people and adults. Fairneuro accepts referrals from GPs, schools, universities, therapists, employers and other professionals."
      image={{ src: img.heroReferrals, alt: 'A professional consultation in progress' }}
      primaryCta={{ label: 'Make a Referral', href: '/contact' }}
      secondaryCta={{ label: 'Speak to Our Team', href: '/contact' }}
      features={[
        { icon: ClipboardCheck, title: 'Straightforward Process', desc: 'A clear, step-by-step referral pathway that is simple to follow.', accent: 'teal' },
        { icon: Chats, title: 'Timely Communication', desc: 'We keep you informed at every stage of the process.', accent: 'coral' },
        { icon: People, title: 'Children & Adults', desc: 'Assessment pathways available for all ages and life stages.', accent: 'orange' },
        { icon: Brain, title: 'Assessment & Support Pathways', desc: 'From assessment to recommendations and onward support.', accent: 'teal' },
      ]}
      who={{
        heading: 'Who can refer?',
        items: [
          { icon: Stethoscope, title: 'GPs', desc: 'Refer for assessment and support for neurodevelopmental concerns.', accent: 'teal' },
          { icon: School, title: 'Schools', desc: 'Supporting students through appropriate assessment and recommendations.', accent: 'coral' },
          { icon: GradCap, title: 'Universities', desc: 'Supporting students to access the right assessments and reasonable adjustments.', accent: 'orange' },
          { icon: Person, title: 'Therapists', desc: 'Collaborate on a comprehensive understanding and support plan.', accent: 'teal' },
          { icon: Briefcase, title: 'Employers', desc: 'Support employees with assessments and workplace recommendations.', accent: 'coral' },
          { icon: People, title: 'Other Professionals', desc: 'We welcome referrals from all allied health professionals and support services.', accent: 'orange' },
        ],
      }}
      process={{
        heading: 'How the referral process works',
        steps: [
          { icon: Document, title: 'Submit Referral', desc: 'Complete our secure referral form with key information.' },
          { icon: Search, title: 'We Review', desc: 'Our team reviews the referral and confirms eligibility.' },
          { icon: People, title: 'We Contact the Individual or Family', desc: 'We reach out to discuss needs, answer questions and book an initial chat.' },
          { icon: Chats, title: 'Screening & Consultation', desc: 'A tailored screening conversation with one of our clinicians.' },
          { icon: ClipboardCheck, title: 'Assessment Pathway', desc: 'The appropriate assessment plan begins.' },
          { icon: Signpost, title: 'Report & Next Steps', desc: 'You receive the report and recommendations, plus ongoing support.' },
        ],
      }}
      services={{
        heading: 'What to include in a referral',
        items: [
          { icon: Question, title: 'Presenting Concerns', desc: 'Key concerns and reasons for referral.', accent: 'teal' },
          { icon: Person, title: 'Relevant Background & History', desc: 'Developmental, medical, psychological or social history.', accent: 'coral' },
          { icon: Folder, title: 'Previous Reports (if available)', desc: 'Any past assessments or reports that may be relevant.', accent: 'orange' },
          { icon: School, title: 'Educational or Workplace Context', desc: 'Current setting, supports in place, and any adjustments.', accent: 'teal' },
          { icon: Mail, title: 'Contact Details', desc: 'For the individual and (if applicable) parent or guardian.', accent: 'coral' },
          { icon: Chats, title: 'Any Specific Questions', desc: 'What you hope the assessment will help to clarify.', accent: 'orange' },
        ],
      }}
      why={{
        heading: 'Why professionals choose Fairneuro',
        items: [
          { icon: Brain, title: 'Comprehensive Assessments', desc: 'Evidence-based, multidisciplinary assessments.', accent: 'teal' },
          { icon: Document, title: 'Clear Reports', desc: 'Practical reports with actionable recommendations.', accent: 'coral' },
          { icon: Handshake, title: 'Support Beyond Diagnosis', desc: 'Guidance, resources and follow-up available.', accent: 'orange' },
          { icon: People, title: 'Adult & Child Pathways', desc: 'Specialist pathways for all ages and life stages.', accent: 'teal' },
          { icon: Heart, title: 'Sensitive & Person-Centred', desc: 'A respectful, inclusive approach tailored to each individual.', accent: 'coral' },
          { icon: Signpost, title: 'Onward Support Recommendations', desc: 'Help connecting individuals to the right support.', accent: 'orange' },
        ],
        columns: 6,
      }}
      pathways={{
        heading: 'Referral pathways we can support with',
        items: [
          { icon: Brain, title: 'ADHD Assessment', accent: 'teal' },
          { icon: Puzzle, title: 'Autism Assessment', accent: 'coral' },
          { icon: People, title: 'ADHD + Autism Combined Assessment', accent: 'orange' },
          { icon: Book, title: 'Dyslexia Assessment', accent: 'teal' },
          { icon: HeartHand, title: 'Support Services', accent: 'coral' },
          { icon: Heart, title: 'Guidance for Families', accent: 'orange' },
        ],
      }}
      softBand={{
        title: 'Need to discuss a referral?',
        body: 'Our referrals team is here to guide you through the process, answer any questions and ensure the right support pathway.',
        cta: { label: 'Contact the Referrals Team', href: '/contact' },
        icon: Chats,
      }}
      ctaTitle="Ready to make a referral?"
      ctaBody="Our team will guide you through every step of the process."
      ctaLabel="Make a Referral"
    />
  );
}
