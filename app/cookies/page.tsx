import { LegalPage } from '@/components/templates/LegalPage';

export const metadata = { title: 'Cookies Policy' };

export default function Page() {
  return (
    <LegalPage
      title="Cookies Policy"
      lede="How this website uses cookies and similar technologies, and how you can control them."
      updated="1 August 2026"
      sections={[
        {
          heading: 'What cookies are',
          body: [
            'Cookies are small text files placed on your device when you visit a website. They are widely used to make sites work, and to provide information to site owners.',
          ],
        },
        {
          heading: 'Cookies we use',
          body: [
            'Strictly necessary cookies enable core functionality such as page navigation and security. The site cannot function properly without them.',
            'Analytics cookies help us understand how visitors use the site so we can improve it. These are only set with your consent.',
          ],
        },
        {
          heading: 'Managing cookies',
          body: [
            'You can control and delete cookies through your browser settings. Blocking all cookies may affect how parts of this site function.',
          ],
        },
      ]}
    />
  );
}
