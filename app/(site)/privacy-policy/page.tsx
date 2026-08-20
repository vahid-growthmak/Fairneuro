import { LegalPage } from '@/components/templates/LegalPage';

export const metadata = { title: 'Privacy Policy' };

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="How Fairneuro Diagnostics collects, uses and protects your personal and clinical information."
      updated="1 August 2026"
      sections={[
        {
          heading: 'Who we are',
          body: [
            'Fairneuro Diagnostics provides neurodiversity assessment and support services. We are the data controller for the personal information described in this policy.',
            'We are registered with the Information Commissioner’s Office and process all personal data in accordance with UK GDPR and the Data Protection Act 2018.',
          ],
        },
        {
          heading: 'Information we collect',
          body: [
            'Contact details you provide when enquiring or booking, including your name, email address and telephone number.',
            'Clinical information gathered during screening, assessment and any subsequent support, including questionnaires, interview notes and assessment results.',
            'Technical information such as your IP address and browser type, collected automatically when you use this website.',
          ],
        },
        {
          heading: 'How we use your information',
          body: [
            'To deliver the assessment and support services you have requested, and to communicate with you about them.',
            'To meet our clinical, legal and regulatory obligations, including record-keeping requirements.',
            'To improve our services. Where we use information for analysis, it is aggregated and anonymised.',
          ],
        },
        {
          heading: 'Sharing your information',
          body: [
            'We do not share your clinical information with anyone — including your GP, school or employer — without your explicit consent.',
            'We use carefully selected processors for secure record storage and communication. All are bound by contract to protect your data.',
            'We may disclose information without consent only where there is a safeguarding concern or a legal obligation to do so.',
          ],
        },
        {
          heading: 'How long we keep it',
          body: [
            'Clinical records are retained in line with professional guidance: normally eight years for adults, and until a child’s 25th birthday for records relating to under-18s.',
            'Enquiry records that do not lead to an assessment are deleted after two years.',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            'You have the right to access, correct, or request deletion of your personal data, to restrict or object to processing, and to data portability.',
            'To exercise any of these rights, contact us using the details on our contact page. You also have the right to complain to the Information Commissioner’s Office.',
          ],
        },
      ]}
    />
  );
}
