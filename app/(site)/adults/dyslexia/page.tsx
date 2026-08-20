import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { adultTrust } from '@/lib/shared';
import {
  Book,
  Brain,
  Briefcase,
  Chat,
  Clipboard,
  Document,
  GradCap,
  HeartHand,
  Leaf,
  Pencil,
  People,
  Star,
} from '@/components/icons';
import { journey } from '@/lib/journey';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Adult Dyslexia Assessment',
  description:
    'Adult dyslexia assessments with a comprehensive written report, personalised recommendations and support beyond diagnosis.',
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Assessments', href: '/assessments' },
        { label: 'Dyslexia Assessment', href: '/assessments/dyslexia' },
        { label: 'Adult Dyslexia Assessment' },
      ]}
      title="Adult Dyslexia Assessment"
      lede="Assessment is only the beginning."
      body="We provide comprehensive adult dyslexia assessments to help you better understand reading, writing, spelling and information-processing differences, with clear recommendations for work, study and everyday life."
      ticks={['Free consultation', 'No obligation', 'Here to help']}
      image={{ src: img.heroDyslexia, alt: 'An adult reading at a desk' }}
      highlights={[
        { icon: Brain, title: 'Comprehensive assessment', desc: 'In-depth evaluation of reading, writing, spelling and cognition.', accent: 'teal' },
        { icon: Document, title: 'Detailed written report', desc: 'Clear insights and analysis tailored to your strengths.', accent: 'orange' },
        { icon: Star, title: 'Personalised recommendations', desc: 'Practical strategies for study, work and daily living.', accent: 'coral' },
        { icon: Chat, title: 'Support beyond diagnosis', desc: 'Guidance and resources to help you thrive with confidence.', accent: 'teal' },
      ]}
      signals={{
        heading: 'Could an adult dyslexia assessment be right for you?',
        items: [
          { icon: Book, title: 'Reading takes more time or effort', accent: 'teal' },
          { icon: Pencil, title: 'Spelling and writing feel inconsistent', accent: 'coral' },
          { icon: Document, title: 'You reread information to retain it', accent: 'orange' },
          { icon: Clipboard, title: 'Organisation of written material feels difficult', accent: 'teal' },
          { icon: Star, title: 'You want clarity about your learning profile', accent: 'coral' },
          { icon: GradCap, title: 'Workplace or university tasks feel harder than they should', accent: 'teal' },
        ],
      }}
      includes={{
        heading: 'What the assessment includes',
        steps: [
          { icon: People, title: 'Background discussion', desc: 'We learn about your history, experiences and current concerns.' },
          { icon: Pencil, title: 'Reading, writing and spelling measures', desc: 'Standardised tasks to understand key academic skills.' },
          { icon: Brain, title: 'Cognitive and processing profile', desc: 'Assessment of attention, memory, speed and executive functions.' },
          { icon: Clipboard, title: 'Professional interpretation', desc: 'We bring the results together to build a clear understanding.' },
          { icon: Document, title: 'Comprehensive report', desc: 'Detailed findings, strengths and differences explained.' },
          { icon: Leaf, title: 'Recommendations and next steps', desc: 'Practical strategies and guidance for what comes next.' },
        ],
      }}
      audience={{
        heading: 'Who this assessment is for',
        items: [
          {
            icon: People,
            title: 'Adults seeking clarity',
            desc: 'For adults who have wondered for years and want a definitive, professional answer.',
            href: '/adults',
            accent: 'teal',
          },
          {
            icon: GradCap,
            title: 'University students',
            desc: 'For students who need evidence to access study support and exam adjustments.',
            href: '/support/education-support',
            accent: 'coral',
          },
          {
            icon: Briefcase,
            title: 'Working professionals',
            desc: 'For professionals seeking workplace adjustments and practical strategies.',
            href: '/support/workplace-support',
            accent: 'orange',
          },
        ],
      }}
      trust={adultTrust}
      journey={{ heading: 'The Fairneuro Assessment Journey', steps: journey }}
      receive={{
        heading: 'What you receive',
        items: [
          { icon: Brain, title: 'Clear diagnostic understanding', desc: 'An accurate explanation of your learning profile.', accent: 'teal' },
          { icon: Document, title: 'Detailed written report', desc: 'Easy-to-understand results and insights.', accent: 'orange' },
          { icon: Star, title: 'Practical recommendations', desc: 'Strategies to support study, work and daily life.', accent: 'coral' },
          { icon: Briefcase, title: 'Workplace and university relevance', desc: 'Tailored guidance for real-world environments.', accent: 'teal' },
          { icon: HeartHand, title: 'Support beyond assessment', desc: 'Ongoing resources and support when you need it.', accent: 'coral' },
        ],
      }}
      fair={{ title: 'Why choose Fairneuro?' }}
      testimonials={[
        {
          quote:
            'Finally understanding why reading and writing have always felt so hard has been life-changing.',
          name: 'Sarah, 34',
          role: 'Marketing Manager',
        },
        {
          quote:
            'The assessment was thorough and respectful. I now have strategies that actually make sense for me.',
          name: 'James, 29',
          role: 'Software Developer',
        },
        {
          quote:
            'As a university student, this gave me clarity and support I wish I had years ago.',
          name: 'Priya, 21',
          role: 'University Student',
        },
      ]}
      ctaTitle="You don't have to figure this out alone."
      ctaBody="Book a free consultation and our team will guide you to the right assessment pathway."
    />
  );
}
