import { PartnershipPage } from '@/components/templates/PartnershipPage';
import { img } from '@/lib/images';
import {
  Calendar,
  CalendarCheck,
  Chart,
  Chats,
  ClipboardCheck,
  GradCap,
  Heart,
  HeartHand,
  Lock,
  People,
  Person,
  Phone,
  Pills,
  Rx,
  Search,
  ShieldCheck,
  Signpost,
  Star,
  Stethoscope,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Clinical Care / Medication Pathway',
  description:
    'A structured, clinician-led pathway for people exploring whether ADHD medication may be an appropriate part of their wider support plan.',
};

export default function Page() {
  return (
    <PartnershipPage
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Clinical Care / Medication Pathway' }]}
      title={
        <>
          Clinical Care /{' '}
          <br />
          Medication Pathway
        </>
      }
      body="Fairneuro offers a structured, clinician-led pathway for people who wish to explore whether ADHD medication may be an appropriate part of their wider support plan. Our pathway includes careful assessment, titration, regular reviews and ongoing follow-up."
      image={{ src: img.heroClinical, alt: 'A clinician in consultation with a patient' }}
      primaryCta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
      secondaryCta={{ label: 'Speak to Our Team', href: '/contact' }}
      features={[
        { icon: Stethoscope, title: 'Clinician-Led Care', desc: 'Experienced clinicians providing individualised assessment, prescribing and ongoing clinical oversight.', accent: 'teal' },
        { icon: ShieldCheck, title: 'Safe & Structured', desc: 'A clear, evidence-informed pathway with gradual titration, monitoring and regular reviews.', accent: 'orange' },
        { icon: People, title: 'Integrated Support', desc: 'Medication is combined with practical guidance, coaching and workplace or study support where appropriate.', accent: 'coral' },
        { icon: CalendarCheck, title: 'Ongoing Reviews', desc: 'Regular follow-up appointments to ensure your treatment continues to meet your needs.', accent: 'teal' },
      ]}
      who={{
        heading: 'Who this pathway may be for',
        items: [
          { icon: Person, title: 'Recently Diagnosed Adults', desc: 'Those with a confirmed ADHD diagnosis exploring treatment options.', accent: 'teal' },
          { icon: Chats, title: 'People Considering Medication', desc: 'Unsure if medication is right for them and want expert guidance.', accent: 'coral' },
          { icon: Search, title: 'Individuals Seeking Reviews', desc: 'Looking to review their current medication or management plan.', accent: 'orange' },
          { icon: TrendUp, title: 'Existing Patients Needing Ongoing Care', desc: 'Continuity of care with regular reviews and prescription management.', accent: 'teal' },
          { icon: GradCap, title: 'Professionals & Students', desc: 'Balancing demanding roles or studies and seeking better focus and clarity.', accent: 'coral' },
          { icon: HeartHand, title: 'People Wanting Combined Support', desc: 'Seeking medication alongside coaching, guidance and workplace or study support.', accent: 'orange' },
        ],
      }}
      process={{
        heading: 'How the medication pathway works',
        steps: [
          { icon: ClipboardCheck, title: 'Initial Enquiry', desc: 'Tell us about your needs so we can guide you to the right support.' },
          { icon: Phone, title: 'Free Consultation', desc: 'A short conversation to understand your situation and answer your questions.' },
          { icon: Stethoscope, title: 'Clinical Review', desc: 'A comprehensive review of your history, symptoms and previous assessments.' },
          { icon: Pills, title: 'Medication Appointment', desc: 'Discuss suitability, options and create an individualised treatment plan if appropriate.' },
          { icon: Chart, title: 'Titration & Monitoring', desc: 'Gradual dose adjustments with close monitoring of benefits and side effects.' },
          { icon: Calendar, title: 'Ongoing Follow-Up', desc: 'Regular reviews to ensure your plan continues to be safe and effective.' },
        ],
      }}
      services={{
        heading: 'What the pathway can include',
        items: [
          { icon: Stethoscope, title: 'ADHD Medication Consultation', desc: 'Discuss your needs, goals and possible treatment approaches.', accent: 'teal' },
          { icon: ClipboardCheck, title: 'Medication Suitability Review', desc: 'Assessment of your medical history, lifestyle and previous treatments.', accent: 'coral' },
          { icon: Rx, title: 'Prescribing Pathway', desc: 'Prescription where appropriate with clear information and safety guidance.', accent: 'orange' },
          { icon: TrendUp, title: 'Titration Support', desc: 'Careful, gradual dose adjustments tailored to your response.', accent: 'teal' },
          { icon: Calendar, title: 'Ongoing Medication Reviews', desc: 'Regular check-ins to review effectiveness and make any adjustments.', accent: 'coral' },
          { icon: Heart, title: 'Side-Effect Monitoring', desc: 'Monitoring for side effects and managing any concerns promptly.', accent: 'orange' },
        ],
      }}
      why={{
        heading: 'Why choose Fairneuro for clinical care',
        items: [
          { icon: People, title: 'Joined-Up Care', desc: 'Seamless integration with assessment, coaching and workplace or study support.', accent: 'teal' },
          { icon: HeartHand, title: 'Support Beyond Medication', desc: 'Holistic support that looks at the whole person, not just symptoms.', accent: 'coral' },
          { icon: Chats, title: 'Clear Communication', desc: 'We listen, explain and keep things simple at every stage of your journey.', accent: 'orange' },
          { icon: Heart, title: 'Person-Centred Approach', desc: 'Your goals and preferences shape your treatment and support plan.', accent: 'teal' },
          { icon: ShieldCheck, title: 'Professional Oversight', desc: 'Care provided by experienced clinicians with robust clinical governance.', accent: 'coral' },
          { icon: Lock, title: 'Confidential & Secure', desc: 'Your data and conversations are handled with the utmost confidentiality.', accent: 'orange' },
        ],
      }}
      softBand={{
        title: 'Medication is one possible part of support.',
        body: 'Fairneuro also provides coaching, guidance and wider post-diagnostic care to help you thrive at work, study and in everyday life.',
        cta: { label: 'Explore Our Support Services', href: '/support' },
        icon: Signpost,
      }}
      ctaTitle="Thinking about whether medication may be right for you?"
      ctaBody="Speak with our team to explore your options and find the right pathway for you."
    />
  );
}
