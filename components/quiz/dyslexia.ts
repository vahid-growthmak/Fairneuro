/**
 * Fairneuro dyslexia screener — eleven frequency-rated statements covering the
 * trait domains that adult dyslexia checklists consistently ask about: reading
 * fluency and accuracy, visual tracking, phonological decoding, spelling and
 * written expression, reading aloud, working memory for spoken instructions,
 * and directional or sequencing confusion.
 *
 * Ten items describe difficulties and carry the score. The eleventh asks about
 * creative problem solving — a strength commonly reported alongside dyslexia
 * rather than a difficulty — so it is reported separately instead of being
 * counted as though it were a deficit.
 *
 * IMPORTANT: the bands below are indicative, chosen as proportions of the
 * available score to separate "few", "some" and "many" reported traits. They
 * are not published clinical cut-offs, because no validated cut-off exists for
 * this item set. Nothing here diagnoses dyslexia — only a full assessment with
 * a qualified specialist can do that.
 */

export const FREQUENCIES = ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'] as const;

export type Frequency = (typeof FREQUENCIES)[number];

/** Index into FREQUENCIES — also the score for that answer. */
export type AnswerValue = 0 | 1 | 2 | 3 | 4;

export interface Question {
  id: number;
  text: string;
  /** Short domain label shown above the question. */
  domain: string;
  /**
   * `trait` items count toward the score. `strength` items are reported on
   * their own and deliberately excluded from it.
   */
  kind: 'trait' | 'strength';
}

export const questions: Question[] = [
  {
    id: 1,
    kind: 'trait',
    domain: 'Reading',
    text: 'How often do you need to read a sentence more than once before it makes sense?',
  },
  {
    id: 2,
    kind: 'trait',
    domain: 'Reading',
    text: 'How often do you lose your place, skip a line or re-read the same line while reading?',
  },
  {
    id: 3,
    kind: 'trait',
    domain: 'Reading',
    text: 'How often do you confuse words that look alike, such as reading "was" as "saw"?',
  },
  {
    id: 4,
    kind: 'trait',
    domain: 'Decoding',
    text: 'How often do you find it hard to break an unfamiliar word into parts to work out how it sounds?',
  },
  {
    id: 5,
    kind: 'trait',
    domain: 'Reading aloud',
    text: 'How often do you avoid reading aloud, or find it uncomfortable when you have to?',
  },
  {
    id: 6,
    kind: 'trait',
    domain: 'Spelling',
    text: 'How often do you spell the same word differently in one piece of writing, or rely on autocorrect to get it right?',
  },
  {
    id: 7,
    kind: 'trait',
    domain: 'Writing',
    text: 'How often do you know what you want to say but struggle to get it down on paper?',
  },
  {
    id: 8,
    kind: 'trait',
    domain: 'Speaking',
    text: 'How often do you worry about presentations, reading out or speaking in front of other people?',
  },
  {
    id: 9,
    kind: 'trait',
    domain: 'Memory',
    text: 'How often do you lose track of spoken instructions when several are given at once?',
  },
  {
    id: 10,
    kind: 'trait',
    domain: 'Direction',
    text: 'How often do you mix up left and right, or have to stop and think about which is which?',
  },
  {
    id: 11,
    kind: 'strength',
    domain: 'Strengths',
    text: 'How often do you solve problems in a creative or visual way that others had not thought of?',
  },
];

export const traitQuestions = questions.filter((q) => q.kind === 'trait');

/** Ten scored items, four points each. */
export const MAX_SCORE = traitQuestions.length * 4;

export type Band = 'few' | 'some' | 'many';

export interface Result {
  /** Total across the ten trait items. */
  score: number;
  maxScore: number;
  /** Trait items answered "Often" or "Very Often". */
  frequent: number;
  traitCount: number;
  band: Band;
  /** The creative problem-solving answer, if given. */
  strength?: AnswerValue;
}

export function score(answers: Record<number, AnswerValue>): Result {
  let total = 0;
  let frequent = 0;

  for (const q of traitQuestions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    total += answer;
    if (answer >= 3) frequent += 1;
  }

  const share = total / MAX_SCORE;
  const band: Band = share > 0.65 ? 'many' : share >= 0.35 ? 'some' : 'few';

  const strengthQuestion = questions.find((q) => q.kind === 'strength');

  return {
    score: total,
    maxScore: MAX_SCORE,
    frequent,
    traitCount: traitQuestions.length,
    band,
    strength: strengthQuestion ? answers[strengthQuestion.id] : undefined,
  };
}

/** Plain-English framing of the result — deliberately not a diagnosis. */
export function interpret(result: Result): { heading: string; body: string } {
  if (result.band === 'many') {
    return {
      heading: 'A strong possibility of dyslexia traits',
      body: `You scored ${result.score} out of ${result.maxScore}, and reported ${result.frequent} of the ${result.traitCount} difficulties happening often or very often. That is a pattern worth taking seriously, and a full dyslexia assessment would be a reasonable next step. It is not a diagnosis — only a qualified specialist can give you that.`,
    };
  }

  if (result.band === 'some') {
    return {
      heading: 'Some signs of dyslexia',
      body: `You scored ${result.score} out of ${result.maxScore}, reporting ${result.frequent} of the ${result.traitCount} difficulties often or very often. Some traits are showing up but not across the board. If reading, spelling or writing take you noticeably more effort than they seem to take other people, that is still worth exploring.`,
    };
  }

  return {
    heading: 'Few dyslexia traits reported',
    body: `You scored ${result.score} out of ${result.maxScore}. Most of these difficulties are not ones you run into often. If you are still finding reading, writing or study harder than you would expect, a screener only captures part of the picture — other things can make written work feel like an uphill struggle.`,
  };
}

/** Optional note about the strengths item, shown alongside the result. */
export function strengthNote(result: Result): string | null {
  if (result.strength === undefined || result.strength < 3) return null;
  return 'You also reported solving problems creatively or visually. Strengths in visual reasoning, problem solving and big-picture thinking are frequently described alongside dyslexia, and they are worth naming as clearly as the difficulties.';
}
