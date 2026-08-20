import { Button } from '@/components/ui/Button';
import { Calendar, Search } from '@/components/icons';

/**
 * Shared so the two not-found files stay identical: one inside the site group,
 * which inherits the header and footer from its layout, and one at the root for
 * URLs that match no segment at all, which has to bring its own chrome.
 */
export function NotFoundContent() {
  return (
    <section className="bg-ivory">
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-soft-teal">
          <Search className="h-8 w-8 text-teal" />
        </span>
        <h1 className="mt-7 font-heading text-[40px] font-semibold text-navy sm:text-[46px]">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-navy/70">
          The page you are looking for has moved or no longer exists. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/book-consultation" variant="tertiary" icon={<Calendar />} size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
