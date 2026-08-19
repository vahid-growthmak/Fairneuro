'use client';

import { useState, type FormEvent } from 'react';
import { Check } from '@/components/icons';

const enquiryTypes = [
  'Booking a free consultation',
  'ADHD assessment',
  'Autism assessment',
  'Dyslexia assessment',
  'Support services',
  'Professional referral',
  'Schools & education',
  'Employer / corporate',
  'Something else',
];

const fieldClass =
  'w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-[13.5px] text-navy placeholder:text-navy/40 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25';

/**
 * Enquiry form. Submission is intentionally client-side only until a
 * form backend / CRM endpoint is wired up.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-teal/30 bg-soft-teal/50 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
          <Check className="h-7 w-7" strokeWidth={2.6} />
        </span>
        <h3 className="mt-5 font-display text-[22px] font-semibold text-navy">Thank you</h3>
        <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-navy/70">
          Your enquiry has been received. A member of our team will be in touch within one working
          day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-navy/[0.07] bg-white p-7 shadow-card lg:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-heading text-[12.5px] font-medium text-navy">
            Full Name <span className="text-coral">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-heading text-[12.5px] font-medium text-navy">
            Email Address <span className="text-coral">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block font-heading text-[12.5px] font-medium text-navy">
            Telephone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="topic" className="mb-2 block font-heading text-[12.5px] font-medium text-navy">
            How can we help? <span className="text-coral">*</span>
          </label>
          <select id="topic" name="topic" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Please choose…
            </option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block font-heading text-[12.5px] font-medium text-navy">
            Message <span className="text-coral">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us a little about what you're looking for…"
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      <p className="mt-5 text-[11.5px] leading-relaxed text-navy/55">
        We use your details only to respond to your enquiry. Read our{' '}
        <a href="/privacy-policy" className="text-teal underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>

      <button
        type="submit"
        className="mt-5 inline-flex items-center justify-center rounded-lg bg-navy px-7 py-3.5 font-heading text-[14px] font-medium text-white transition-colors hover:bg-navy/90"
      >
        Send Enquiry
      </button>
    </form>
  );
}
