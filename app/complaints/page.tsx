import { LegalPage } from '@/components/templates/LegalPage';

export const metadata = { title: 'Complaints Policy' };

export default function Page() {
  return (
    <LegalPage
      title="Complaints Policy"
      lede="How to raise a concern about any part of your experience with Fairneuro Diagnostics, and what happens next."
      updated="1 August 2026"
      sections={[
        {
          heading: 'Our commitment',
          body: [
            'We take all feedback seriously. Raising a concern will never affect the care you receive.',
            'Most concerns are resolved quickly and informally. If yours is not, our formal process is set out below.',
          ],
        },
        {
          heading: 'How to make a complaint',
          body: [
            'Contact us by email or telephone using the details on our contact page, setting out what happened and what outcome you are seeking.',
            'Please include your name, the date of the event, and the names of anyone involved if you know them.',
          ],
        },
        {
          heading: 'What happens next',
          body: [
            'We acknowledge every complaint within three working days.',
            'We aim to provide a full written response within twenty working days. If an investigation needs longer, we will explain why and keep you updated.',
          ],
        },
        {
          heading: 'If you remain dissatisfied',
          body: [
            'You may escalate your complaint to the relevant professional regulator, or to the Information Commissioner’s Office where your concern relates to how we handled your data.',
          ],
        },
      ]}
    />
  );
}
