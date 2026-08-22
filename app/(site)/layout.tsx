import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CalendlyPopup } from '@/components/ui/CalendlyPopup';
import { HashScroll } from '@/components/ui/HashScroll';

/**
 * Chrome for the public site. It lives here rather than in the root layout so
 * /studio renders on its own — the Sanity Studio needs the full viewport, and
 * a marketing header on top of a CMS is just confusing.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <CalendlyPopup />
      <HashScroll />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
