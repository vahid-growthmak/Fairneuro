'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { Check } from '@/components/icons';
import {
  declarations,
  sections,
  type Field,
  type Section,
  type ShowIf,
} from './assessorApplication';

const fieldClass =
  'w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25';

type Choices = Record<string, string[]>;

function visible(showIf: ShowIf | undefined, choices: Choices): boolean {
  if (!showIf) return true;
  const selected = choices[showIf.field] ?? [];
  if (showIf.anyOf.some((v) => selected.includes(v))) return true;
  if (showIf.allOf && showIf.allOf.every((v) => selected.includes(v))) return true;
  return false;
}

function Required() {
  return <span className="text-coral"> *</span>;
}

/**
 * The assessor application. Long, conditional and file-heavy, so it is
 * rendered from `assessorApplication.ts` rather than hand-written markup.
 *
 * On submit the whole form is posted to /api/assessor-application, which
 * validates it against the same schema and emails it to the recruitment inbox
 * with any uploaded documents attached.
 */
export function AssessorApplicationForm() {
  const [choices, setChoices] = useState<Choices>({});
  const [missing, setMissing] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  /** Documents the server could not attach; the applicant must send them on. */
  const [tooLarge, setTooLarge] = useState<string[]>([]);

  const visibleSections = useMemo(
    () => sections.filter((s) => visible(s.showIf, choices)),
    [choices],
  );

  function setRadio(name: string, value: string) {
    setChoices((c) => ({ ...c, [name]: [value] }));
    setMissing((m) => m.filter((n) => n !== name));
  }

  function toggleCheck(name: string, value: string) {
    setChoices((c) => {
      const current = c[name] ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...c, [name]: next };
    });
    setMissing((m) => m.filter((n) => n !== name));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    // Native validation covers text inputs and radios; required checkbox
    // groups need checking by hand.
    const unanswered: string[] = [];
    for (const section of visibleSections) {
      for (const field of section.fields) {
        if (field.kind !== 'checkboxes' || !field.required || !field.name) continue;
        if (!visible(field.showIf, choices)) continue;
        if ((choices[field.name] ?? []).length === 0) unanswered.push(field.name);
      }
    }

    if (unanswered.length > 0) {
      setMissing(unanswered);
      document
        .getElementById(`field-${unanswered[0]}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setMissing([]);
    setError(null);
    setSending(true);

    try {
      const response = await fetch('/api/assessor-application', {
        method: 'POST',
        body: new FormData(e.currentTarget),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        oversized?: string[];
      };

      if (!response.ok) {
        setError(result.error ?? 'Something went wrong. Please try again.');
        setSending(false);
        return;
      }

      setTooLarge(result.oversized ?? []);
      setSent(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError(
        'We could not reach the server. Check your connection and try again, or email your application to management@fairneurodiagnostics.com.',
      );
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div
        id="application"
        className="scroll-mt-24 rounded-2xl border border-teal/30 bg-soft-teal/50 p-10 text-center"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
          <Check className="h-7 w-7" strokeWidth={2.6} />
        </span>
        <h3 className="mt-5 font-heading text-[26px] font-semibold text-navy">
          Thank you for applying to FairNeuro.
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-navy/70">
          Your application has been received. Our team will review your professional
          qualifications, assessment experience and availability.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-navy/70">
          If your experience matches our current requirements, we will contact you regarding the
          next stage.
        </p>

        {tooLarge.length > 0 && (
          <p className="mx-auto mt-5 max-w-lg rounded-lg bg-blush px-5 py-4 text-[13.5px] leading-relaxed text-navy/80">
            <strong className="font-semibold text-navy">One thing to finish.</strong> These files
            were too large to send with the form — please email them to{' '}
            <a
              href="mailto:management@fairneurodiagnostics.com"
              className="text-teal underline underline-offset-2"
            >
              management@fairneurodiagnostics.com
            </a>
            : {tooLarge.join(', ')}.
          </p>
        )}
      </div>
    );
  }

  return (
    <form id="application" onSubmit={onSubmit} noValidate={false} className="scroll-mt-24 space-y-6">
      {visibleSections.map((section) => (
        <SectionCard
          key={section.number}
          section={section}
          choices={choices}
          missing={missing}
          setRadio={setRadio}
          toggleCheck={toggleCheck}
        />
      ))}

      {/* SECTION 17 — Declaration */}
      <section className="rounded-2xl border border-navy/[0.07] bg-white p-7 shadow-card lg:p-9">
        <SectionTitle number={17} title="Declaration" />
        <p className="mt-5 font-heading text-[14px] font-medium text-navy">Please confirm:</p>
        <ul className="mt-3 space-y-3">
          {declarations.map((text, i) => (
            <li key={text}>
              <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-navy/80">
                <input
                  type="checkbox"
                  name={`declaration_${i + 1}`}
                  required
                  className="mt-[3px] h-4 w-4 shrink-0 rounded border-navy/30 text-teal accent-teal focus:ring-teal/30"
                />
                <span>{text}</span>
              </label>
            </li>
          ))}
        </ul>

        {missing.length > 0 && (
          <p className="mt-5 rounded-lg bg-blush px-4 py-3 text-[13.5px] text-coral">
            Some required questions above still need an answer. We have highlighted them for you.
          </p>
        )}

        {error && (
          <p
            role="alert"
            className="mt-5 rounded-lg border border-coral/30 bg-blush px-4 py-3 text-[13.5px] leading-relaxed text-coral"
          >
            {error}
          </p>
        )}

        {/* Honeypot — hidden from people, irresistible to bots. */}
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label>
            Company website
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-coral px-7 py-3.5 font-heading text-[15.5px] font-medium text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? 'Sending your application…' : 'Submit Application'}
        </button>

        <p className="mt-4 text-[12.5px] leading-relaxed text-navy/55">
          We use the information in this application for recruitment and onboarding only. Read our{' '}
          <a href="/privacy-policy" className="text-teal underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
      </section>
    </form>
  );
}

function SectionTitle({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-navy/[0.08] pb-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft-teal font-heading text-[14px] font-semibold text-teal">
        {number}
      </span>
      <div>
        <p className="font-heading text-[11.5px] font-semibold uppercase tracking-[0.18em] text-navy/45">
          Section {number}
        </p>
        <h2 className="font-heading text-[18.5px] font-semibold text-navy">{title}</h2>
      </div>
    </div>
  );
}

function SectionCard({
  section,
  choices,
  missing,
  setRadio,
  toggleCheck,
}: {
  section: Section;
  choices: Choices;
  missing: string[];
  setRadio: (name: string, value: string) => void;
  toggleCheck: (name: string, value: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-navy/[0.07] bg-white p-7 shadow-card lg:p-9">
      <SectionTitle number={section.number} title={section.title} />
      {section.intro && (
        <p className="mt-4 text-[14px] leading-relaxed text-navy/65">{section.intro}</p>
      )}

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {section.fields.map((field, i) => {
          if (!visible(field.showIf, choices)) return null;
          return (
            <FieldRow
              key={field.name ?? `${section.number}-${i}`}
              field={field}
              choices={choices}
              missing={missing}
              setRadio={setRadio}
              toggleCheck={toggleCheck}
            />
          );
        })}
      </div>
    </section>
  );
}

function FieldRow({
  field,
  choices,
  missing,
  setRadio,
  toggleCheck,
}: {
  field: Field;
  choices: Choices;
  missing: string[];
  setRadio: (name: string, value: string) => void;
  toggleCheck: (name: string, value: string) => void;
}) {
  const span = field.half ? '' : 'sm:col-span-2';

  if (field.kind === 'subheading') {
    return (
      <h3 className={`${span} mt-2 font-heading text-[15.5px] font-semibold text-navy`}>
        {field.text}
      </h3>
    );
  }

  if (field.kind === 'note') {
    return (
      <p className={`${span} rounded-lg bg-ivory px-4 py-3 text-[13.5px] leading-relaxed text-navy/70`}>
        {field.lead && <strong className="font-semibold text-navy">{field.lead} </strong>}
        {field.text}
      </p>
    );
  }

  const name = field.name as string;
  const id = `field-${name}`;
  const flagged = missing.includes(name);

  const label = (
    <>
      <span className="mb-2 block font-heading text-[13.5px] font-medium leading-snug text-navy">
        {field.label}
        {field.required && <Required />}
      </span>
      {field.help && <p className="-mt-1 mb-2 text-[13px] text-navy/55">{field.help}</p>}
      {field.helpList && (
        <ul className="-mt-1 mb-2.5 list-disc space-y-0.5 pl-5 text-[13px] text-navy/55">
          {field.helpList.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </>
  );

  if (field.kind === 'radio' || field.kind === 'checkboxes') {
    const isRadio = field.kind === 'radio';
    const selected = choices[name] ?? [];
    return (
      <fieldset
        id={id}
        className={`${span} scroll-mt-28 rounded-lg ${flagged ? 'ring-2 ring-coral/40' : ''}`}
      >
        <legend className="contents">{label}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {field.options?.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-start gap-2.5 rounded-lg border border-navy/10 px-3.5 py-2.5 text-[14px] leading-snug text-navy/80 transition-all duration-200 hover:border-teal/50 hover:bg-soft-teal/20 active:scale-[0.99] motion-reduce:transform-none has-[:checked]:border-teal has-[:checked]:bg-soft-teal/40"
            >
              <input
                type={isRadio ? 'radio' : 'checkbox'}
                name={isRadio ? name : `${name}[]`}
                value={option}
                required={isRadio && field.required}
                checked={selected.includes(option)}
                onChange={() => (isRadio ? setRadio(name, option) : toggleCheck(name, option))}
                className={`mt-[2px] h-4 w-4 shrink-0 border-navy/30 accent-teal focus:ring-teal/30 ${
                  isRadio ? 'rounded-full' : 'rounded'
                }`}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {flagged && (
          <p className="mt-2 text-[13px] text-coral">Please select at least one option.</p>
        )}
      </fieldset>
    );
  }

  if (field.kind === 'textarea') {
    return (
      <div className={span}>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          name={name}
          rows={field.rows ?? 5}
          required={field.required}
          placeholder={field.placeholder}
          className={`${fieldClass} resize-y`}
        />
      </div>
    );
  }

  if (field.kind === 'file') {
    return (
      <div className={span}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type="file"
          multiple={field.multiple}
          accept={field.accept}
          required={field.required}
          className="w-full cursor-pointer rounded-lg border border-dashed border-navy/20 bg-ivory px-4 py-3 text-[13.5px] text-navy/70 file:mr-4 file:rounded-md file:border-0 file:bg-navy file:px-4 file:py-2 file:font-heading file:text-[13.5px] file:text-white hover:file:bg-navy/90"
        />
      </div>
    );
  }

  return (
    <div className={span}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={field.kind}
        required={field.required}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        className={fieldClass}
      />
    </div>
  );
}
