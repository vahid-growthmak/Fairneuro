import { Hero } from '@/components/sections/Hero';
import { CtaBand, SplitBand } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { img } from '@/lib/images';
import {
  Book,
  Briefcase,
  Bulb,
  Chart,
  Chat,
  Document,
  GradCap,
  HeartHand,
  Leaf,
  Search,
  Signpost,
  Star,
} from '@/components/icons';

export const metadata = {
  title: 'Your Report Explained',
  description:
    'A plain-English walkthrough of what each section of your assessment report means and how to use it.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Your Report Explained' },
        ]}
        title="Your Report Explained"
        lede="Written to be understood, not decoded."
        body="Your report is the document that unlocks support at work, in education and in healthcare. Here is what each section means and how to make the most of it."
        secondaryCta={{ label: 'Explore Support', href: '/support' }}
        image={{ src: img.heroResources, alt: 'A person reading their assessment report' }}
      />

      <CardGrid
        title="What your report may include"
        columns={3}
        background="white"
        cardAlign="left"
        items={[
          { icon: Search, title: 'Background & Referral Information', desc: 'A summary of your history, the reason for assessment and the information you provided.', accent: 'teal' },
          { icon: Chart, title: 'Assessment Results', desc: 'The measures used, your scores where relevant, and what those scores actually indicate.', accent: 'coral' },
          { icon: Document, title: 'Clinical Formulation', desc: 'Your assessor drawing everything together into one coherent explanation.', accent: 'orange' },
          { icon: Star, title: 'Strengths & Challenges', desc: 'A balanced picture — what comes easily as well as what does not.', accent: 'teal' },
          { icon: Bulb, title: 'Recommendations', desc: 'Practical, prioritised suggestions for home, study, work and healthcare.', accent: 'purple' },
          { icon: Signpost, title: 'Next Steps', desc: 'What to do with your report and who to share it with.', accent: 'coral' },
        ]}
      />

      <CardGrid
        title="How your report can help"
        columns={4}
        background="ivory"
        cardAlign="left"
        items={[
          { icon: Briefcase, title: 'At work', desc: 'Evidence for reasonable adjustments and occupational health conversations.', accent: 'teal' },
          { icon: GradCap, title: 'In education', desc: 'Supporting exam access arrangements and study support applications.', accent: 'coral' },
          { icon: Book, title: 'In healthcare', desc: 'A clear record to share with your GP or other clinicians, with your consent.', accent: 'orange' },
          { icon: HeartHand, title: 'For yourself', desc: 'Language and framing that helps you explain your needs to others.', accent: 'teal' },
        ]}
      />

      <ProcessRow
        title="What happens after your report"
        background="white"
        steps={[
          { icon: Document, title: 'You receive your report', desc: 'Delivered securely, usually within 10–15 working days.', accent: 'teal' },
          { icon: Chat, title: 'Feedback session', desc: 'We walk through it together and answer every question.', accent: 'coral' },
          { icon: Bulb, title: 'Agree your priorities', desc: 'We help you decide which recommendations to act on first.', accent: 'orange' },
          { icon: Leaf, title: 'Access support', desc: 'Coaching, therapy, workplace or education support as needed.', accent: 'teal' },
          { icon: Chart, title: 'Review progress', desc: 'Check back in as circumstances change over time.', accent: 'coral' },
        ]}
      />

      <SplitBand
        title="We're here to help you make sense of your report."
        body="If anything in your report is unclear, just ask. That is exactly what your feedback session is for."
        cta={{ label: 'Talk to Our Team', href: '/contact' }}
        icon={HeartHand}
        background="white"
      />

      <CtaBand
        title="Ready to take the next step?"
        body="Explore the support available now that you have your answers."
        cta={{ label: 'Explore Support Services', href: '/support' }}
        ticks={null}
        background="white"
      />
    </>
  );
}
