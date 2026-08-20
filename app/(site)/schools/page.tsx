import { PartnershipPage } from '@/components/templates/PartnershipPage';
import { img } from '@/lib/images';
import {
  Book,
  Brain,
  Calendar,
  Chart,
  Chats,
  ClipboardCheck,
  Document,
  GradCap,
  Handshake,
  Heart,
  HeartHand,
  People,
  Person,
  Phone,
  Puzzle,
  School,
  Search,
  Signpost,
  Sparkle,
  TwoHeads,
} from '@/components/icons';

export const metadata = {
  title: 'Schools & Education Partnerships',
  description:
    'Fairneuro partners with schools, colleges and education settings to support children and young people through assessment, guidance and onward support.',
};

export default function Page() {
  return (
    <PartnershipPage
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Schools & Education' }]}
      title="Schools & Education Partnerships"
      body="Fairneuro partners with schools, colleges and education settings to support children and young people through neurodiversity assessments, guidance and onward support."
      image={{ src: img.heroSchools, alt: 'A teacher meeting with a pupil and parent' }}
      primaryCta={{ label: 'Discuss a Partnership', href: '/contact' }}
      secondaryCta={{ label: 'Speak to Our Team', href: '/contact' }}
      features={[
        { icon: People, title: 'Tailored Support', desc: 'Solutions designed to meet the unique needs of your pupils and setting.', accent: 'teal' },
        { icon: School, title: 'School-Focused Pathways', desc: 'Clear, structured referral and assessment pathways for schools.', accent: 'coral' },
        { icon: Chats, title: 'Timely Communication', desc: 'Responsive updates and transparent communication at every stage.', accent: 'orange' },
        { icon: HeartHand, title: 'Ongoing Guidance', desc: 'Practical guidance and onward support for pupils, families and staff.', accent: 'teal' },
      ]}
      who={{
        heading: 'Who we work with',
        items: [
          { icon: School, title: 'Primary Schools', desc: 'Supporting early identification and referrals.', accent: 'teal' },
          { icon: Book, title: 'Secondary Schools', desc: 'Guidance and assessments for adolescents.', accent: 'coral' },
          { icon: GradCap, title: 'Colleges & Sixth Forms', desc: 'Supporting learners with their next steps.', accent: 'orange' },
          { icon: Person, title: 'SENCOs / Inclusion Teams', desc: 'Working alongside SENCOs and inclusion professionals.', accent: 'teal' },
          { icon: People, title: 'Local Authorities', desc: 'Collaborative partnerships and commissioned pathways.', accent: 'coral' },
          { icon: Handshake, title: 'Other Education Partners', desc: 'MATs, nurseries, therapists and specialist services.', accent: 'orange' },
        ],
      }}
      process={{
        heading: 'How our partnership process works',
        steps: [
          { icon: ClipboardCheck, title: 'Initial Enquiry', desc: 'You get in touch to share your needs and context.' },
          { icon: Phone, title: 'Discovery Call', desc: 'We discuss your setting and explore the right support.' },
          { icon: Search, title: 'Needs Review', desc: 'We review requirements and identify priorities.' },
          { icon: Signpost, title: 'Recommended Pathway', desc: 'We recommend the most suitable assessment route.' },
          { icon: Document, title: 'Assessment & Guidance', desc: 'Assessments are completed and guidance provided.' },
          { icon: People, title: 'Ongoing Support', desc: 'We provide ongoing guidance and additional support.' },
        ],
      }}
      services={{
        heading: 'How Fairneuro can support your setting',
        items: [
          { icon: Brain, title: 'ADHD Assessments', desc: 'Comprehensive assessments for ADHD.', accent: 'teal' },
          { icon: Puzzle, title: 'Autism Assessments', desc: 'Accurate assessments for children and young people.', accent: 'coral' },
          { icon: Book, title: 'Dyslexia Assessments', desc: 'Dyslexia assessments and specific learning difficulties.', accent: 'orange' },
          { icon: TwoHeads, title: 'Combined Assessments', desc: 'Combined assessments for co-occurring neurodivergence.', accent: 'teal' },
          { icon: Heart, title: 'Parent Guidance', desc: 'Guidance advice and feedback to support families.', accent: 'coral' },
          { icon: GradCap, title: 'Education Support', desc: 'Practical strategies and support for learning.', accent: 'orange' },
          { icon: Signpost, title: 'Referral Advice', desc: 'Advice on wider referrals and specialist services.', accent: 'teal' },
        ],
        columns: 4,
      }}
      why={{
        heading: 'Why schools choose Fairneuro',
        items: [
          { icon: Chats, title: 'Clear Communication', desc: 'We keep you informed at every step.', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Practical Recommendations', desc: 'Actionable guidance you can use in school.', accent: 'coral' },
          { icon: People, title: 'Child & Young Person Pathways', desc: "Support tailored to each child's strengths and needs.", accent: 'orange' },
          { icon: HeartHand, title: 'Support Beyond Diagnosis', desc: 'Ongoing advice and guidance after assessments.', accent: 'teal' },
          { icon: Heart, title: 'Person-Centred Approach', desc: 'We focus on the whole child and their wellbeing.', accent: 'coral' },
          { icon: Handshake, title: 'Partnership-Led Support', desc: 'Working together for the best outcomes.', accent: 'orange' },
        ],
      }}
      softBand={{
        title: "Let's work together to support your pupils",
        body: "Our Partnerships Team is here to understand your setting's needs and create the right pathway for your community.",
        cta: { label: 'Speak to Our Partnerships Team', href: '/contact' },
        icon: People,
      }}
      ctaTitle="Ready to partner with Fairneuro?"
      ctaBody="Discover how we can support your setting with expert assessments, guidance and ongoing support."
      ctaLabel="Discuss a Partnership"
    />
  );
}
