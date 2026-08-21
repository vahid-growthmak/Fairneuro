import type { Metadata } from 'next';
import { Fraunces, Inter, Poppins } from 'next/font/google';
import { MotionProvider } from '@/components/ui/MotionProvider';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fairneuro.com'),
  title: {
    default: 'Fairneuro Diagnostics — Understand. Support. Thrive.',
    template: '%s | Fairneuro Diagnostics',
  },
  description:
    'Expert neurodiversity assessment with personalised support for everything that comes next. ADHD, autism, dyslexia and combined assessments for adults and children.',
  openGraph: {
    type: 'website',
    siteName: 'Fairneuro Diagnostics',
    title: 'Fairneuro Diagnostics — Understand. Support. Thrive.',
    description:
      'Expert neurodiversity assessment with personalised support for everything that comes next.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      // The inline script below marks this element before React hydrates, which
      // React would otherwise report as a server/client mismatch.
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} ${fraunces.variable}`}
    >
      <body>
        {/* Flags the document for the motion runtime before the first paint, so
            elements that animate in are never briefly visible first. Inline and
            blocking on purpose — if scripting is off the class is never set and
            every section renders plainly, exactly as authored. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('motion-ready')",
          }}
        />
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
