import { Hero } from '@/components/sections/Hero';
import { CtaBand, PromptBand } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { ContactForm } from '@/components/sections/ContactForm';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBadge } from '@/components/ui/IconBadge';
import {
  Brain,
  Calendar,
  Chat,
  Chats,
  CheckCircle,
  HeartHand,
  Mail,
  Person,
  Phone,
  Signpost,
  Stethoscope,
} from '@/components/icons';
import { site } from '@/lib/site';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Fairneuro team — by phone, email or by booking a free consultation.',
};

const contactCards = [
  { icon: Phone, title: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}`, accent: 'teal' as const },
  { icon: Mail, title: 'Email', value: site.email, href: `mailto:${site.email}`, accent: 'coral' as const },
  { icon: Calendar, title: 'Free Consultation', value: 'Book a free, no-obligation conversation with our team.', href: '/book-consultation', accent: 'orange' as const },
  { icon: Chats, title: 'General Enquiries', value: "We're here to answer your questions and help.", href: '#enquiry', accent: 'teal' as const },
];

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        title="Contact Us"
        lede="We're here to help you take the next step with confidence."
        body="Whether you have a question about our assessments, want to book a free consultation, or need guidance on support pathways – our friendly team is here to help."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroContact, alt: 'A member of the Fairneuro team on a call' }}
      />

      {/* Contact cards */}
      <section className="bg-white">
        <div className="shell py-11 lg:py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group flex flex-col items-center rounded-xl border border-navy/[0.07] bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none"
              >
                <IconBadge icon={c.icon} accent={c.accent} size="md" />
                <h2 className="mt-4 font-heading text-[15.5px] font-semibold text-navy">{c.title}</h2>
                <p className="mt-2 text-[13.5px] text-navy/65">{c.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CardGrid
        title="How can we help?"
        columns={5}
        background="ivory"
        cardAlign="left"
        items={[
          { icon: Calendar, title: 'Free Consultation', desc: 'Chat with our team to explore your concerns and next steps.', href: '/book-consultation', linkLabel: 'Find out more', accent: 'coral' },
          { icon: Brain, title: 'Assessment Enquiries', desc: 'Questions about our assessments, processes and what to expect.', href: '/assessments', linkLabel: 'Find out more', accent: 'teal' },
          { icon: HeartHand, title: 'Support & Aftercare', desc: 'Information on support pathways and aftercare options.', href: '/support', linkLabel: 'Find out more', accent: 'orange' },
          { icon: Person, title: 'Existing Clients', desc: 'Get in touch if you need updates, reports or ongoing support.', href: '#enquiry', linkLabel: 'Find out more', accent: 'coral' },
          { icon: Stethoscope, title: 'Professional Referrals', desc: 'For GPs, therapists and other professionals.', href: '/professional-referrals', linkLabel: 'Find out more', accent: 'orange' },
          
        ]}
      />

      <ProcessRow
        title="What to expect when you contact us"
        background="white"
        steps={[
          { icon: Chat, title: 'Reach Out', desc: 'Send us a message, call, or book a free consultation.', accent: 'teal' },
          { icon: Person, title: 'Speak With Our Team', desc: 'A friendly specialist will listen and answer your questions.', accent: 'coral' },
          { icon: Signpost, title: 'Find the Right Pathway', desc: 'We recommend the most appropriate assessment or support.', accent: 'orange' },
          { icon: CheckCircle, title: 'Move Forward With Confidence', desc: 'We guide you through every next step.', accent: 'teal' },
        ]}
      />

      <PromptBand
        title="Assessment is only the beginning."
        body="Understand. Support. Thrive."
        cta={{ label: 'Book a Free Consultation', href: '/book-consultation' }}
        icon={Brain}
        variant="filled"
        background="white"
      />

      {/* Enquiry form */}
      <section id="enquiry" className="bg-ivory scroll-mt-24">
        <div className="shell py-11 lg:py-14">
          <SectionHeading
            title="Send us a message"
            subtitle="Complete the form and our team will get back to you as soon as possible."
          />
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to take the next step?"
        body="Book a free consultation with our team and find the right pathway for you or your loved one."
        ticks={null}
        background="white"
      />
    </>
  );
}
