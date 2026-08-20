import { Hero } from '@/components/sections/Hero';
import { CardGrid } from '@/components/sections/CardGrid';
import { FairStandard } from '@/components/sections/Panels';
import { NumberedSteps } from '@/components/sections/Steps';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AssessorApplicationForm } from '@/components/forms/AssessorApplicationForm';
import {
  ClipboardCheck,
  Chats,
  Clock,
  Folder,
  Handshake,
  Headset,
  Network,
  Rosette,
  ShieldCheck,
  Signpost,
  Steps as StepsIcon,
} from '@/components/icons';
import { img } from '@/lib/images';

export const metadata = {
  title: 'Apply to Become a FairNeuro Assessor',
  description:
    'FairNeuro Diagnostics is growing our network of experienced ADHD, autism and dyslexia assessors across the UK. Apply to join our assessor network.',
};

export default function Page() {
  return (
    <>
      <Hero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Become an Assessor' }]}
        title="Apply to Become a FairNeuro Assessor"
        lede="Help people find clarity. Join FairNeuro."
        body="FairNeuro Diagnostics is growing our network of experienced neurodevelopmental and specific learning difference assessors across the UK. We are interested in hearing from appropriately qualified professionals with experience in:"
        ticks={[
          'ADHD assessment',
          'Autism assessment',
          'Dyslexia assessment',
          'More than one of the above',
        ]}
        primaryCta={{ label: 'Apply Now', href: '#application' }}
        secondaryCta={{ label: 'Why work with FairNeuro?', href: '#why' }}
        image={{ src: img.heroClinical, alt: 'A FairNeuro assessor reviewing an assessment report' }}
      />

      {/* Who we are looking for */}
      <section className="bg-white">
        <div className="shell py-10 lg:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[16.5px] leading-relaxed text-navy/75">
              We are looking for professionals who combine strong clinical or specialist assessment
              expertise with excellent communication, high-quality report writing and a genuinely
              person-centred approach.
            </p>
            <p className="mt-4 text-[16.5px] leading-relaxed text-navy/75">
              Whether you work with adults, children and young people, or both, we would be pleased
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div id="why" className="scroll-mt-24" />
      <CardGrid
        title="Why work with FairNeuro?"
        columns={3}
        background="ivory"
        cardAlign="left"
        items={[
          {
            icon: Clock,
            title: 'Flexible opportunities',
            desc: 'Work around your existing professional commitments and availability.',
            accent: 'teal',
          },
          {
            icon: Signpost,
            title: 'Matched referrals',
            desc: 'Our team coordinates enquiries and matches suitable clients to the appropriate assessor.',
            accent: 'coral',
          },
          {
            icon: Headset,
            title: 'Administrative support',
            desc: 'FairNeuro manages the client journey and administrative communication so assessors can focus on assessment and reporting.',
            accent: 'orange',
          },
          {
            icon: Network,
            title: 'Ongoing referrals',
            desc: 'Join a growing national assessment and support service.',
            accent: 'purple',
          },
          {
            icon: Handshake,
            title: 'Integrated support',
            desc: 'Clients can access appropriate post-assessment support through FairNeuro, including coaching, education, workplace and wellbeing services.',
            accent: 'green',
          },
          {
            icon: Rosette,
            title: 'A quality-led service',
            desc: 'We are committed to reliable assessment, clear reporting and a professional client experience.',
            accent: 'teal',
          },
        ]}
      />

      {/* The application */}
      <section className="bg-white">
        <div className="shell py-11 lg:py-14">
          <SectionHeading
            title="Apply to Join FairNeuro"
            subtitle="Please complete the application below."
          />

          <div className="mx-auto max-w-3xl">
            <div className="mb-7 flex flex-col gap-3 rounded-2xl bg-soft-teal/55 px-6 py-5 sm:flex-row sm:items-center sm:gap-5">
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 font-heading text-[13.5px] font-medium text-navy">
                <Clock className="h-4 w-4 text-teal" />
                Estimated completion time: 10–15 minutes
              </span>
              <p className="text-[13.5px] leading-relaxed text-navy/70">
                Information supplied will be reviewed by the FairNeuro team. Submission of an
                application does not guarantee appointment or engagement.
              </p>
            </div>

            <AssessorApplicationForm />
          </div>
        </div>
      </section>

      <NumberedSteps
        title="What happens next?"
        background="ivory"
        steps={[
          {
            icon: Folder,
            title: 'Application Review',
            desc: 'Our team reviews your application and supporting documents.',
          },
          {
            icon: ShieldCheck,
            title: 'Professional Verification',
            desc: 'Relevant qualifications, professional registrations and accreditation may be verified.',
          },
          {
            icon: Chats,
            title: 'Interview',
            desc: 'Suitable applicants may be invited to a short online interview.',
          },
          {
            icon: ClipboardCheck,
            title: 'Assessment Quality Review',
            desc: 'Where appropriate, we may review an anonymised report or discuss your assessment approach.',
          },
          {
            icon: StepsIcon,
            title: 'Onboarding',
            desc: 'Successful applicants complete the relevant FairNeuro onboarding, policies and systems process before accepting referrals.',
          },
        ]}
      />

      <FairStandard background="white" />
    </>
  );
}
