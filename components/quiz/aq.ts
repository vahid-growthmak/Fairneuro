/**
 * Autism Spectrum Quotient (AQ) — the 50-item self-report questionnaire from
 * Baron-Cohen, Wheelwright, Skinner, Martin & Clubley (2001), "The
 * Autism-Spectrum Quotient (AQ): Evidence from Asperger Syndrome/High
 * Functioning Autism, Males and Females, Scientists and Mathematicians",
 * Journal of Autism and Developmental Disorders 31(1), 5-17.
 *
 * Scoring is binary per item, as published: an answer in the autistic-traits
 * direction scores 1, whichever side of the scale it falls on. So for an
 * `agree`-keyed item both "Definitely agree" and "Slightly agree" score 1, and
 * for a `disagree`-keyed item both disagree responses score 1. The strength of
 * the answer does not change the score — the four-point scale exists only to
 * force a choice. Total range 0-50.
 *
 * The items divide into five ten-item subscales: social skill, attention
 * switching, attention to detail, communication and imagination.
 *
 * It is a screening tool, not a diagnostic instrument.
 */

export const AGREEMENT = [
  'Definitely agree',
  'Slightly agree',
  'Slightly disagree',
  'Definitely disagree',
] as const;

export type Agreement = (typeof AGREEMENT)[number];

/** Index into AGREEMENT. 0-1 are the agree side, 2-3 the disagree side. */
export type AnswerValue = 0 | 1 | 2 | 3;

export type Subscale =
  | 'social'
  | 'switching'
  | 'detail'
  | 'communication'
  | 'imagination';

export const SUBSCALE_LABELS: Record<Subscale, string> = {
  social: 'Social skill',
  switching: 'Attention switching',
  detail: 'Attention to detail',
  communication: 'Communication',
  imagination: 'Imagination',
};

export interface Question {
  /** 1-50, following the published AQ order. */
  id: number;
  text: string;
  /** Which side of the scale scores a point for this item. */
  key: 'agree' | 'disagree';
  subscale: Subscale;
}

export const questions: Question[] = [
  { id: 1, key: 'disagree', subscale: 'social', text: 'I prefer to do things with others rather than on my own.' },
  { id: 2, key: 'agree', subscale: 'switching', text: 'I prefer to do things the same way over and over again.' },
  { id: 3, key: 'disagree', subscale: 'imagination', text: 'If I try to imagine something, I find it very easy to create a picture in my mind.' },
  { id: 4, key: 'agree', subscale: 'switching', text: 'I frequently get so strongly absorbed in one thing that I lose sight of other things.' },
  { id: 5, key: 'agree', subscale: 'detail', text: 'I often notice small sounds when others do not.' },
  { id: 6, key: 'agree', subscale: 'detail', text: 'I usually notice car number plates or similar strings of information.' },
  { id: 7, key: 'agree', subscale: 'communication', text: 'Other people frequently tell me that what I’ve said is impolite, even though I think it is polite.' },
  { id: 8, key: 'disagree', subscale: 'imagination', text: 'When I’m reading a story, I can easily imagine what the characters might look like.' },
  { id: 9, key: 'agree', subscale: 'detail', text: 'I am fascinated by dates.' },
  { id: 10, key: 'disagree', subscale: 'switching', text: 'In a social group, I can easily keep track of several different people’s conversations.' },
  { id: 11, key: 'disagree', subscale: 'social', text: 'I find social situations easy.' },
  { id: 12, key: 'agree', subscale: 'detail', text: 'I tend to notice details that others do not.' },
  { id: 13, key: 'agree', subscale: 'social', text: 'I would rather go to a library than a party.' },
  { id: 14, key: 'disagree', subscale: 'imagination', text: 'I find making up stories easy.' },
  { id: 15, key: 'disagree', subscale: 'social', text: 'I find myself drawn more strongly to people than to things.' },
  { id: 16, key: 'agree', subscale: 'switching', text: 'I tend to have very strong interests which I get upset about if I can’t pursue.' },
  { id: 17, key: 'disagree', subscale: 'communication', text: 'I enjoy social chit-chat.' },
  { id: 18, key: 'agree', subscale: 'communication', text: 'When I talk, it isn’t always easy for others to get a word in edgeways.' },
  { id: 19, key: 'agree', subscale: 'detail', text: 'I am fascinated by numbers.' },
  { id: 20, key: 'agree', subscale: 'imagination', text: 'When I’m reading a story, I find it difficult to work out the characters’ intentions.' },
  { id: 21, key: 'agree', subscale: 'imagination', text: 'I don’t particularly enjoy reading fiction.' },
  { id: 22, key: 'agree', subscale: 'social', text: 'I find it hard to make new friends.' },
  { id: 23, key: 'agree', subscale: 'detail', text: 'I notice patterns in things all the time.' },
  { id: 24, key: 'disagree', subscale: 'imagination', text: 'I would rather go to the theatre than a museum.' },
  { id: 25, key: 'disagree', subscale: 'switching', text: 'It does not upset me if my daily routine is disturbed.' },
  { id: 26, key: 'agree', subscale: 'communication', text: 'I frequently find that I don’t know how to keep a conversation going.' },
  { id: 27, key: 'disagree', subscale: 'communication', text: 'I find it easy to “read between the lines” when someone is talking to me.' },
  { id: 28, key: 'disagree', subscale: 'detail', text: 'I usually concentrate more on the whole picture, rather than the small details.' },
  { id: 29, key: 'disagree', subscale: 'detail', text: 'I am not very good at remembering phone numbers.' },
  { id: 30, key: 'disagree', subscale: 'detail', text: 'I don’t usually notice small changes in a situation, or a person’s appearance.' },
  { id: 31, key: 'disagree', subscale: 'communication', text: 'I know how to tell if someone listening to me is getting bored.' },
  { id: 32, key: 'disagree', subscale: 'switching', text: 'I find it easy to do more than one thing at once.' },
  { id: 33, key: 'agree', subscale: 'communication', text: 'When I talk on the phone, I’m not sure when it’s my turn to speak.' },
  { id: 34, key: 'disagree', subscale: 'switching', text: 'I enjoy doing things spontaneously.' },
  { id: 35, key: 'agree', subscale: 'communication', text: 'I am often the last to understand the point of a joke.' },
  { id: 36, key: 'disagree', subscale: 'social', text: 'I find it easy to work out what someone is thinking or feeling just by looking at their face.' },
  { id: 37, key: 'disagree', subscale: 'switching', text: 'If there is an interruption, I can switch back to what I was doing very quickly.' },
  { id: 38, key: 'disagree', subscale: 'communication', text: 'I am good at social chit-chat.' },
  { id: 39, key: 'agree', subscale: 'communication', text: 'People often tell me that I keep going on and on about the same thing.' },
  { id: 40, key: 'disagree', subscale: 'imagination', text: 'When I was young, I used to enjoy playing games involving pretending with other children.' },
  { id: 41, key: 'agree', subscale: 'imagination', text: 'I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant, etc.).' },
  { id: 42, key: 'agree', subscale: 'imagination', text: 'I find it difficult to imagine what it would be like to be someone else.' },
  { id: 43, key: 'agree', subscale: 'switching', text: 'I like to plan any activities I participate in carefully.' },
  { id: 44, key: 'disagree', subscale: 'social', text: 'I enjoy social occasions.' },
  { id: 45, key: 'agree', subscale: 'social', text: 'I find it difficult to work out people’s intentions.' },
  { id: 46, key: 'agree', subscale: 'switching', text: 'New situations make me anxious.' },
  { id: 47, key: 'disagree', subscale: 'social', text: 'I enjoy meeting new people.' },
  { id: 48, key: 'disagree', subscale: 'social', text: 'I am a good diplomat.' },
  { id: 49, key: 'disagree', subscale: 'detail', text: 'I am not very good at remembering people’s date of birth.' },
  { id: 50, key: 'disagree', subscale: 'imagination', text: 'I find it very easy to play games with children that involve pretending.' },];

/** Questions per page — the AQ is long, so it is answered ten at a time. */
export const PAGE_SIZE = 10;
export const PAGES = Math.ceil(questions.length / PAGE_SIZE);

/**
 * The threshold from the original paper: 79.3% of autistic adults scored 32 or
 * above, against 2% of controls.
 */
export const CUTOFF = 32;

/**
 * The lower threshold Woodbury-Smith et al. (2005) found more useful when
 * deciding who to take forward for assessment in a clinical setting.
 */
export const REFERRAL_THRESHOLD = 26;

export function scoreItem(question: Question, answer: AnswerValue | undefined): 0 | 1 {
  if (answer === undefined) return 0;
  const agreed = answer <= 1;
  return (question.key === 'agree') === agreed ? 1 : 0;
}

export interface Result {
  total: number;
  max: number;
  answered: number;
  subscales: { subscale: Subscale; label: string; score: number; max: number }[];
  /** At or above the published cut-off of 32. */
  aboveCutoff: boolean;
  /** At or above the lower clinical referral threshold of 26. */
  aboveReferral: boolean;
}

export function score(answers: Record<number, AnswerValue>): Result {
  let total = 0;
  const bySubscale = new Map<Subscale, number>();

  for (const question of questions) {
    const point = scoreItem(question, answers[question.id]);
    total += point;
    bySubscale.set(question.subscale, (bySubscale.get(question.subscale) ?? 0) + point);
  }

  const subscales = (Object.keys(SUBSCALE_LABELS) as Subscale[]).map((subscale) => ({
    subscale,
    label: SUBSCALE_LABELS[subscale],
    score: bySubscale.get(subscale) ?? 0,
    max: questions.filter((q) => q.subscale === subscale).length,
  }));

  return {
    total,
    max: questions.length,
    answered: Object.keys(answers).length,
    subscales,
    aboveCutoff: total >= CUTOFF,
    aboveReferral: total >= REFERRAL_THRESHOLD,
  };
}

/** Plain-English framing of the result — deliberately not a diagnosis. */
export function interpret(result: Result): { heading: string; body: string } {
  if (result.aboveCutoff) {
    return {
      heading: 'Your answers are consistent with autistic traits',
      body: `You scored ${result.total} out of ${result.max}, at or above the published cut-off of ${CUTOFF}. In the original study around four in five autistic adults scored in this range, against roughly one in fifty people in the comparison group. That makes a full assessment worth considering. It is not a diagnosis — only a qualified clinician can make one.`,
    };
  }

  if (result.aboveReferral) {
    return {
      heading: 'A moderate number of autistic traits',
      body: `You scored ${result.total} out of ${result.max}. That is below the cut-off of ${CUTOFF}, but at or above ${REFERRAL_THRESHOLD} — the lower threshold clinicians often use when deciding who to take forward for assessment. If these traits shape your daily life, it is still worth talking to someone.`,
    };
  }

  return {
    heading: 'Few autistic traits reported',
    body: `You scored ${result.total} out of ${result.max}, below the thresholds this questionnaire uses. Screening tools miss people, particularly those who have learned to mask well, and the AQ was developed largely on men — autistic women and non-binary people often score lower than their experience would suggest. If you still recognise yourself in descriptions of autism, that is worth exploring.`,
  };
}
