import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { adultTrust, includedSteps } from '@/lib/shared';
import { Book, Briefcase, Clipboard, Document, GradCap, Pencil, People, Star } from '@/components/icons';
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
      body="A comprehensive assessment of reading, writing, spelling and cognitive processing — with a detailed written report, personalised recommendations and support that continues beyond diagnosis."
      ticks={['Free consultation', 'No obligation', 'Here to help']}
      image={{ src: img.heroDyslexia, alt: 'An adult reading at a desk' }}
      signals={{
        heading: 'Could an adult dyslexia assessment be right for you?',
        items: [
          { icon: Book, title: 'Reading takes more time or effort', accent: 'teal' },
          { icon: Pencil, title: 'Spelling and writing feel inconsistent', accent: 'coral' },
          { icon: Document, title: 'You reread information to retain it', accent: 'orange' },
          { icon: Clipboard, title: 'Organisation of written work feels difficult', accent: 'teal' },
          { icon: Star, title: 'You want clarity about your learning profile', accent: 'coral' },
          { icon: GradCap, title: 'Workplace or university tasks feel harder than they should', accent: 'teal' },
        ],
      }}
      includes={{
        heading: 'What the assessment includes',
        steps: includedSteps({
          interviewDesc: 'A background discussion covering your learning history, work and goals.',
          second: {
            title: 'Reading, Writing & Spelling Measures',
            desc: 'Standardised literacy measures administered by an experienced assessor.',
          },
          third: {
            title: 'Cognitive & Processing Profile',
            desc: 'Assessment of memory, processing speed and related cognitive skills.',
          },
          fourth: {
            title: 'Professional Interpretation',
            desc: 'Your assessor interprets the results within the context of your history.',
          },
          reportDesc: 'A comprehensive written report with findings, strengths and clear conclusions.',
          nextDesc: 'Recommendations and next steps for study, work and everyday life.',
        }),
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
    />
  );
}
