'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar, Check, ChevronRight, Puzzle } from '@/components/icons';
import {
  AGREEMENT,
  CUTOFF,
  PAGE_SIZE,
  PAGES,
  REFERRAL_THRESHOLD,
  interpret,
  questions,
  score,
  type AnswerValue,
  type Result,
} from './aq';
import { cn } from '@/lib/cn';

type Stage = 'intro' | 'quiz' | 'result';

/**
 * The AQ, ten questions per page.
 *
 * Fifty items one-at-a-time would be a slog, so this follows the way the
 * questionnaire is normally administered: a page of ten, with the next page
 * unlocked once every item on the current one is answered.
 *
 * Answers live in component state only — nothing is sent anywhere, which is
 * what the surrounding copy promises.
 */
export function AutismQuiz() {
  const [stage, setStage] = useState<Stage>('intro');
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [showMissing, setShowMissing] = useState(false);
  const headingRef = useRef<HTMLParagraphElement>(null);

  const pageQuestions = useMemo(
    () => questions.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page],
  );
  const answered = Object.keys(answers).length;
  const pageComplete = pageQuestions.every((q) => answers[q.id] !== undefined);
  const isLastPage = page === PAGES - 1;

  // Move focus to the top of the new page so keyboard and screen-reader users
  // are not stranded at the bottom of the card after each Next.
  useEffect(() => {
    if (stage === 'quiz') headingRef.current?.focus();
  }, [stage, page]);

  useEffect(() => {
    if (pageComplete) setShowMissing(false);
  }, [pageComplete]);

  const choose = useCallback((id: number, value: AnswerValue) => {
    setAnswers((a) => ({ ...a, [id]: value }));
  }, []);

  function advance() {
    if (!pageComplete) {
      setShowMissing(true);
      return;
    }
    if (isLastPage) setStage('result');
    else setPage((p) => p + 1);
  }

  function restart() {
    setAnswers({});
    setPage(0);
    setShowMissing(false);
    setStage('intro');
  }

  if (stage === 'intro') {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-navy/[0.07] bg-white p-8 text-center shadow-card lg:p-11">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-soft-teal text-teal">
          <Puzzle className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-[25px] font-semibold text-navy">
          {questions.length} questions, about ten minutes
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-navy/70">
          This is the Autism Spectrum Quotient, answered ten questions at a time. There is no
          middle option — pick the side you lean towards, even when neither fits perfectly, and go
          with your first instinct.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-[13.5px] leading-relaxed text-navy/55">
          Written for adults aged 16 and over. Your answers stay in your browser — nothing is sent
          to us and nothing is stored.
        </p>
        <button
          type="button"
          onClick={() => setStage('quiz')}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-8 py-3.5 font-heading text-[15.5px] font-medium text-white transition-colors hover:bg-coral/90"
        >
          Start the test
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (stage === 'result') {
    return <Results answers={answers} onRestart={restart} />;
  }

  const progress = Math.round((answered / questions.length) * 100);
  const missing = pageQuestions.filter((q) => answers[q.id] === undefined).length;

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-navy/[0.07] bg-white p-7 shadow-card lg:p-10">
      {/* Progress */}
      <div className="flex items-center gap-4">
        <p className="shrink-0 font-heading text-[13.5px] font-semibold text-navy">
          <span className="text-teal">Page {page + 1}</span>
          <span className="text-navy/40"> / {PAGES}</span>
        </p>
        <div
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy/[0.08]"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Test progress"
        >
          <div
            className="h-full rounded-full bg-teal transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="shrink-0 font-heading text-[12px] font-medium uppercase tracking-[0.14em] text-navy/40">
          {answered} / {questions.length}
        </p>
      </div>

      <p
        ref={headingRef}
        tabIndex={-1}
        aria-live="polite"
        className="mt-6 font-heading text-[17px] font-semibold text-navy outline-none"
      >
        Questions {page * PAGE_SIZE + 1}–{page * PAGE_SIZE + pageQuestions.length}
      </p>

      <div className="mt-5 divide-y divide-navy/[0.08]">
        {pageQuestions.map((question) => {
          const current = answers[question.id];
          const flagged = showMissing && current === undefined;
          return (
            <fieldset key={question.id} className={cn('py-6 first:pt-0', flagged && 'scroll-mt-24')}>
              <legend className="contents">
                <p
                  className={cn(
                    'text-[15.5px] font-medium leading-snug text-navy',
                    flagged && 'text-coral',
                  )}
                >
                  <span className="mr-2 font-heading text-navy/35">{question.id}.</span>
                  {question.text}
                </p>
              </legend>

              <div className="mt-3.5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {AGREEMENT.map((label, value) => {
                  const selected = current === value;
                  return (
                    <label
                      key={label}
                      className={cn(
                        'flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-[13.5px] transition-all duration-200',
                        'active:scale-[0.99] motion-reduce:transform-none',
                        selected
                          ? 'border-teal bg-soft-teal/50 text-navy'
                          : flagged
                            ? 'border-coral/35 text-navy/80 hover:border-teal/50 hover:bg-soft-teal/20'
                            : 'border-navy/10 text-navy/80 hover:border-teal/50 hover:bg-soft-teal/20',
                      )}
                    >
                      <input
                        type="radio"
                        name={`aq-${question.id}`}
                        value={value}
                        checked={selected}
                        onChange={() => choose(question.id, value as AnswerValue)}
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          'flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.6px] transition-colors',
                          selected ? 'border-teal bg-teal text-white' : 'border-navy/25',
                        )}
                      >
                        {selected && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                      </span>
                      {label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-navy/[0.08] pt-6">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="font-heading text-[14px] font-medium text-navy/60 transition-colors hover:text-navy disabled:cursor-not-allowed disabled:opacity-35"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={advance}
          className="inline-flex items-center gap-2 rounded-lg bg-coral px-7 py-3 font-heading text-[15px] font-medium text-white transition-colors hover:bg-coral/90"
        >
          {isLastPage ? 'See my result' : 'Next'}
          {isLastPage ? <ArrowRight className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </div>

      {showMissing && missing > 0 && (
        <p aria-live="polite" className="mt-4 text-right text-[13px] font-medium text-coral">
          {missing} question{missing === 1 ? '' : 's'} on this page still to answer.
        </p>
      )}
    </div>
  );
}

function SubscaleBar({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div className="text-left">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[13px] text-navy/70">{label}</p>
        <p className="font-heading text-[13.5px] font-semibold text-navy">
          {value}
          <span className="text-[12px] font-medium text-navy/40"> / {max}</span>
        </p>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-navy/[0.08]">
        <div
          className="h-full rounded-full bg-teal transition-[width] duration-500"
          style={{ width: `${Math.round((value / max) * 100)}%` }}
        />
      </div>
    </div>
  );
}

function Results({
  answers,
  onRestart,
}: {
  answers: Record<number, AnswerValue>;
  onRestart: () => void;
}) {
  const result: Result = score(answers);
  const { heading, body } = interpret(result);

  return (
    <div className="mx-auto max-w-3xl">
      <div
        className={cn(
          'rounded-2xl border p-8 text-center lg:p-10',
          result.aboveCutoff
            ? 'border-teal/35 bg-soft-teal/45'
            : 'border-navy/[0.07] bg-white shadow-card',
        )}
      >
        <p className="font-heading text-[12px] font-semibold uppercase tracking-[0.2em] text-teal">
          Your result
        </p>
        <h3 className="mt-3 font-heading text-[26px] font-semibold leading-snug text-navy">
          {heading}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-navy/72">{body}</p>

        <div className="mt-7 rounded-xl border border-navy/[0.07] bg-white p-6">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-heading text-[14px] font-semibold text-navy">Your AQ score</p>
            <p className="font-heading text-[22px] font-semibold text-teal">
              {result.total}
              <span className="text-[14px] font-medium text-navy/40"> / {result.max}</span>
            </p>
          </div>

          {/* Scale with both thresholds marked in place. */}
          <div className="relative mt-4 h-2 rounded-full bg-navy/[0.08]">
            <div
              className="h-full rounded-full bg-teal transition-[width] duration-500"
              style={{ width: `${Math.round((result.total / result.max) * 100)}%` }}
            />
            {[REFERRAL_THRESHOLD, CUTOFF].map((mark) => (
              <span
                key={mark}
                className="absolute top-1/2 h-3.5 w-[2px] -translate-y-1/2 rounded-full bg-navy/30"
                style={{ left: `${(mark / result.max) * 100}%` }}
                aria-hidden
              />
            ))}
          </div>
          <p className="mt-2.5 text-[12px] text-navy/50">
            Marks show {REFERRAL_THRESHOLD} (clinical referral threshold) and {CUTOFF} (published
            cut-off).
          </p>

          <div className="mt-6 grid gap-4 border-t border-navy/[0.07] pt-5 sm:grid-cols-2">
            {result.subscales.map((s) => (
              <SubscaleBar key={s.subscale} label={s.label} value={s.score} max={s.max} />
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/book-consultation" icon={<Calendar />}>
            Book a Free Consultation
          </Button>
          <Button href="/assessments/autism" variant="secondary">
            About Autism Assessment
          </Button>
        </div>

        <button
          type="button"
          onClick={onRestart}
          className="mt-5 font-heading text-[13.5px] font-medium text-navy/55 underline underline-offset-4 transition-colors hover:text-navy"
        >
          Start again
        </button>
      </div>

      <p className="mt-5 rounded-xl bg-ivory px-6 py-5 text-[13px] leading-relaxed text-navy/62">
        <strong className="font-semibold text-navy">This is a screening tool, not a diagnosis.</strong>{' '}
        The AQ measures how many autistic traits you report, not whether you are autistic. Anxiety,
        social anxiety, ADHD and past trauma can all raise the score, and people who have masked for
        years can score low and still be autistic. A diagnosis can only be made by a suitably
        qualified clinician following a full assessment.
      </p>
    </div>
  );
}
