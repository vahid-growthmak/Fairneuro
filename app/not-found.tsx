import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NotFoundContent } from '@/components/sections/NotFoundContent';

export const metadata = { title: 'Page not found' };

/**
 * URLs matching no route at all render against the root layout, which carries
 * no chrome now that the site lives in its own group — so bring it along.
 */
export default function RootNotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
