'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Book, Calendar, Check, ChevronRight, Sparkle } from '@/components/icons';
import {
  FREQUENCIES,
  interpret,
  questions,
  score,
  strengthNote,
  type AnswerValue,
  type Result,
} from './dyslexia';
import { cn } from '@/lib/cn';

type Stage = 'intro' | 'quiz' | 'result';

/**
 * The dyslexia screener, one question per screen.
 *
 * Answers live in component state only — nothing is sent anywhere, which is
 * what the surrounding copy promises.
 */
export function DyslexiaQuiz() {
  const [stage, setStage] = useState<Stage>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const headingRef = useRef<HTMLParagraphElement>(null);

  const question = questions[index];
  const answered = Object.keys(answers).length;
  const current = answers[question.id];
  const isLast = index === questions.length - 1;

  // Move focus to the new question so screen-reader and keyboard users are not
  // stranded at the bottom of the card after each answer.
  useEffect(() => {
    if (stage === 'quiz') headingRef.current?.focus();
  }, [stage, index]);

  const choose = useCallback(
    (value: AnswerValue) => {
      setAnswers((a) => ({ ...a, [question.id]: value }));
      if (isLast) return;
      window.setTimeout(() => setIndex((i) => Math.min(i + 1, questions.length - 1)), 180);
    },
    [question.id, isLast],
  );

  function restart() {
    setAnswers({});
    setIndex(0);
    setStage('intro');
  }

  if (stage === 'intro') {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-navy/[0.07] bg-white p-8 text-center shadow-card lg:p-11">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-soft-teal text-teal">
          <Book className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-[25px] font-semibold text-navy">
          {questions.length} questions, about two minutes
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-navy/70">
          Answer for how things usually are for you, not how they were on one bad day. Go with your
          first instinct — there are no right answers, and you can go back at any point.
        </p>
        <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-navy/55">
          Your answers stay in your browser. Nothing is sent to us and nothing is stored.
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

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-navy/[0.07] bg-white p-7 shadow-card lg:p-10">
      {/* Progress */}
      <div className="flex items-center gap-4">
        <p className="shrink-0 font-heading text-[13.5px] font-semibold text-navy">
          <span className="text-teal">{index + 1}</span>
          <span className="text-navy/40"> / {questions.length}</span>
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
          {question.domain}
        </p>
      </div>

      <fieldset className="mt-7">
        <legend className="contents">
          <p
            ref={headingRef}
            tabIndex={-1}
            aria-live="polite"
            className="font-heading text-[20.5px] font-semibold leading-snug text-navy outline-none sm:text-[22.5px]"
          >
            {question.text}
          </p>
        </legend>

        <div className="mt-6 grid gap-2.5">
          {FREQUENCIES.map((label, value) => {
            const selected = current === value;
            return (
              <label
                key={label}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-[15.5px] transition-all duration-200',
                  'active:scale-[0.99] motion-reduce:transform-none',
                  selected
                    ? 'border-teal bg-soft-teal/50 text-navy'
                    : 'border-navy/10 text-navy/80 hover:border-teal/50 hover:bg-soft-teal/20',
                )}
              >
                <input
                  type="radio"
                  name={`dyslexia-${question.id}`}
                  value={value}
                  checked={selected}
                  onChange={() => choose(value as AnswerValue)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.6px] transition-colors',
                    selected ? 'border-teal bg-teal text-white' : 'border-navy/25',
                  )}
                >
                  {selected && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
                {label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-navy/[0.08] pt-6">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className="font-heading text-[14px] font-medium text-navy/60 transition-colors hover:text-navy disabled:cursor-not-allowed disabled:opacity-35"
        >
          Previous
        </button>

        {isLast ? (
          <button
            type="button"
            onClick={() => setStage('result')}
            disabled={answered < questions.length}
            className="inline-flex items-center gap-2 rounded-lg bg-coral px-7 py-3 font-heading text-[15px] font-medium text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            See my result
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(i + 1, questions.length - 1))}
            disabled={current === undefined}
            className="inline-flex items-center gap-2 rounded-lg bg-coral px-7 py-3 font-heading text-[15px] font-medium text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {isLast && answered < questions.length && (
        <p className="mt-4 text-right text-[13px] text-navy/55">
          {questions.length - answered} question{questions.length - answered === 1 ? '' : 's'} still
          to answer.
        </p>
      )}
    </div>
  );
}

/** Horizontal band meter, so the score reads as a position rather than a number. */
function ScoreMeter({ result }: { result: Result }) {
  const pct = Math.round((result.score / result.maxScore) * 100);

  return (
    <div className="rounded-xl border border-navy/[0.07] bg-white p-5 text-left">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-heading text-[14px] font-semibold text-navy">Your score</p>
        <p className="font-heading text-[16.5px] font-semibold text-teal">
          {result.score}
          <span className="text-[13px] font-medium text-navy/40"> / {result.maxScore}</span>
        </p>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy/[0.08]">
        <div
          className="h-full rounded-full bg-teal transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-2 flex justify-between text-[11.5px] font-medium text-navy/45">
        <span>Few traits</span>
        <span>Some signs</span>
        <span>Strong possibility</span>
      </div>

      <p className="mt-4 text-[13.5px] leading-relaxed text-navy/62">
        {result.frequent} of the {result.traitCount} difficulties happen often or very often for you.
      </p>
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
  const result = score(answers);
  const { heading, body } = interpret(result);
  const strength = strengthNote(result);

  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={cn(
          'rounded-2xl border p-8 text-center lg:p-10',
          result.band === 'many'
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
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-navy/72">{body}</p>

        <div className="mt-7">
          <ScoreMeter result={result} />
        </div>

        {strength && (
          <div className="mt-3 flex items-start gap-3.5 rounded-xl bg-blush/55 p-5 text-left">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-coral">
              <Sparkle className="h-4 w-4" />
            </span>
            <p className="text-[13.5px] leading-relaxed text-navy/72">{strength}</p>
          </div>
        )}

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/book-consultation" icon={<Calendar />}>
            Book a Free Consultation
          </Button>
          <Button href="/assessments/dyslexia" variant="secondary">
            About Dyslexia Assessment
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
        It is designed to flag whether a full assessment is worth having. It cannot confirm or rule
        out dyslexia, and other things — including uncorrected vision problems, attention
        difficulties, anxiety and interrupted schooling — can produce very similar answers. A
        diagnosis of dyslexia can only be made by a suitably qualified specialist following a full
        assessment.
      </p>
    </div>
  );
}
