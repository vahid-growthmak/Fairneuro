import { LegalPage } from '@/components/templates/LegalPage';

export const metadata = { title: 'Terms of Use' };

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      lede="The terms on which you may use the Fairneuro Diagnostics website and services."
      updated="1 August 2026"
      sections={[
        {
          heading: 'Acceptance of these terms',
          body: [
            'By accessing this website you agree to these terms. If you do not agree, please do not use the site.',
          ],
        },
        {
          heading: 'Not medical advice',
          body: [
            'The content on this website is provided for general information only. It is not a substitute for individual clinical advice, diagnosis or treatment.',
            'Our online screeners are indicative tools. They do not provide a diagnosis and should not be relied on as one.',
            'If you have an urgent health concern, contact your GP, NHS 111, or the emergency services.',
          ],
        },
        {
          heading: 'Bookings and cancellations',
          body: [
            'Appointment terms, fees and cancellation notice periods are set out in your booking confirmation.',
            'Cancellations made with less than the stated notice may be subject to a charge.',
          ],
        },
        {
          heading: 'Intellectual property',
          body: [
            'All content on this website, including the FAIR Standard™ framework, is owned by or licensed to Fairneuro Diagnostics and may not be reproduced without permission.',
          ],
        },
        {
          heading: 'Limitation of liability',
          body: [
            'Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.',
            'Subject to that, we are not liable for any indirect or consequential loss arising from use of this website.',
          ],
        },
      ]}
    />
  );
}
