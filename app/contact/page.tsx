import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/Bands';
import { CardGrid } from '@/components/sections/CardGrid';
import { ProcessRow } from '@/components/sections/Steps';
import { ContactForm } from '@/components/sections/ContactForm';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBadge } from '@/components/ui/IconBadge';
import {
  Brain,
  Briefcase,
  Calendar,
  Chat,
  Chats,
  CheckCircle,
  GradCap,
  Mail,
  People,
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
  { icon: Calendar, title: 'Free Consultation', value: 'Book online in minutes', href: '/book-consultation', accent: 'orange' as const },
  { icon: Chats, title: 'General Enquiries', value: site.hours, href: '#enquiry', accent: 'teal' as const },
];

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        title="Contact Us"
        lede="We're here to help you find the right pathway."
        body="Whether you have a question about assessment, want to explore support, or simply are not sure where to begin — our team is here to talk it through."
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
        image={{ src: img.heroContact, alt: 'A member of the Fairneuro team on a call' }}
      />

      {/* Contact cards */}
      <section className="bg-white">
        <div className="shell py-16 lg:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group flex flex-col items-center rounded-xl border border-navy/[0.07] bg-white p-6 text-center shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <IconBadge icon={c.icon} accent={c.accent} size="md" />
                <h2 className="mt-4 font-heading text-[14px] font-semibold text-navy">{c.title}</h2>
                <p className="mt-2 text-[12.5px] text-navy/65">{c.value}</p>
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
          { icon: Brain, title: 'Assessments', desc: 'Questions about ADHD, autism, dyslexia or combined assessments.', href: '/assessments', linkLabel: 'Find out more', accent: 'teal' },
          { icon: People, title: 'Support Services', desc: 'Coaching, therapy, education and workplace support.', href: '/support', linkLabel: 'Find out more', accent: 'coral' },
          { icon: Stethoscope, title: 'Professional Referrals', desc: 'For GPs, therapists and other professionals.', href: '/professional-referrals', linkLabel: 'Find out more', accent: 'orange' },
          { icon: GradCap, title: 'Schools & Education', desc: 'Partnership enquiries from schools and colleges.', href: '/schools', linkLabel: 'Find out more', accent: 'teal' },
          { icon: Briefcase, title: 'Employers', desc: 'Workplace assessments, training and consultancy.', href: '/employers', linkLabel: 'Find out more', accent: 'coral' },
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

      {/* Enquiry form */}
      <section id="enquiry" className="bg-ivory scroll-mt-24">
        <div className="shell py-16 lg:py-20">
          <SectionHeading
            title="Send us a message"
            subtitle="Fill in the form and a member of our team will be in touch within one working day."
          />
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to take the next step?"
        body="Book a free, no-obligation consultation with our team."
        ticks={null}
        background="white"
      />
    </>
  );
}
