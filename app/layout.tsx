import type { Metadata } from 'next';
import { Fraunces, Inter, Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
    <html lang="en-GB" className={`${poppins.variable} ${inter.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
