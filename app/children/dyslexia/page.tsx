import { AssessmentPage } from '@/components/templates/AssessmentPage';
import { childTrust, includedSteps } from '@/lib/shared';
import { Book, Clipboard, Document, GradCap, Pencil, People, Person, Star } from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Child Dyslexia Assessment',
  description:
    "Child dyslexia assessments with a child-friendly approach, a comprehensive report and practical support for families and schools.",
};

export default function Page() {
  return (
    <AssessmentPage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Children', href: '/children' },
        { label: 'Child Dyslexia Assessment' },
      ]}
      title="Child Dyslexia Assessment"
      lede="Expert assessment for brighter futures."
      body="A clinician-led, child-friendly assessment of reading, spelling and related processing skills — with a clear report and practical recommendations for home and school."
      ticks={['Clinician-led assessment', 'Child-friendly approach', 'Evidence-based', 'Support for families']}
      image={{ src: img.heroChildAutism, alt: 'A child reading at a desk' }}
      signals={{
        heading: 'Could a child dyslexia assessment be right for your child?',
        items: [
          { icon: Book, title: 'Reading is slower or more effortful than expected', accent: 'teal' },
          { icon: Pencil, title: 'Spelling is inconsistent despite practice', accent: 'coral' },
          { icon: Document, title: 'They avoid reading or writing tasks', accent: 'orange' },
          { icon: Clipboard, title: 'Written work does not reflect their understanding', accent: 'teal' },
          { icon: Star, title: 'Confidence at school has started to drop', accent: 'coral' },
          { icon: GradCap, title: 'School has raised concerns about literacy progress', accent: 'teal' },
        ],
      }}
      includes={{
        heading: 'What the assessment includes',
        steps: includedSteps({
          interviewDesc: "A background discussion covering your child's development, schooling and your concerns.",
          second: {
            title: 'Reading, Writing & Spelling Measures',
            desc: 'Age-appropriate standardised literacy measures delivered in a friendly, low-pressure way.',
          },
          third: {
            title: 'Cognitive & Processing Profile',
            desc: 'Assessment of memory, processing speed and related underlying skills.',
          },
          fourth: {
            title: 'Professional Interpretation',
            desc: "Your assessor interprets results in the context of your child's history and school reports.",
          },
          reportDesc: 'A comprehensive written report with clear findings, strengths and conclusions.',
          nextDesc: 'Practical recommendations for home, classroom and any exam access arrangements.',
        }),
      }}
      audience={{
        heading: 'Who this assessment is for',
        items: [
          { icon: Person, title: 'Parents seeking clarity', desc: 'For parents who want a definitive, professional answer and a clear plan.', href: '/support/parent-family', accent: 'teal' },
          { icon: People, title: 'Primary school children', desc: 'For younger children where early identification makes the biggest difference.', href: '/children', accent: 'coral' },
          { icon: GradCap, title: 'Secondary school students', desc: 'For students who need evidence to access support and exam arrangements.', href: '/support/education-support', accent: 'orange' },
        ],
      }}
      trust={childTrust}
      promptTitle="Not sure if this is the right assessment for your child?"
    />
  );
}
