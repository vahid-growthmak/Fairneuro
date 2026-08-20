/**
 * Adult ADHD Self-Report Scale (ASRS-v1.1) Symptom Checklist — the World
 * Health Organization / Harvard screening instrument used throughout adult
 * ADHD services.
 *
 * Scoring works two ways:
 *
 *  - Qualifying answers ("ticks"). Each item has a threshold; answering at or
 *    above it counts as one qualifying answer. Four or more qualifying answers
 *    in Part A (the six-item screener) indicates symptoms highly consistent
 *    with adult ADHD and means a full assessment is worth considering.
 *  - Intensity. Every answer scores 0–4, giving a picture of how strongly the
 *    traits are felt. Part A runs to 24, Part B to 48, and the whole scale
 *    to 72.
 *
 * It is a screening tool, not a diagnostic instrument.
 */

export const FREQUENCIES = ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'] as const;

export type Frequency = (typeof FREQUENCIES)[number];

/** Index into FREQUENCIES — also the intensity score for that answer. */
export type AnswerValue = 0 | 1 | 2 | 3 | 4;

export interface Question {
  /** 1–18, following the published ASRS order. */
  id: number;
  text: string;
  part: 'A' | 'B';
  /**
   * Lowest frequency that counts as a qualifying answer — the shaded boxes on
   * the paper checklist. 2 = "Sometimes", 3 = "Often".
   */
  threshold: 2 | 3;
}

export const questions: Question[] = [
  // Part A — the six-item screener.
  {
    id: 1,
    part: 'A',
    threshold: 2,
    text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
  },
  {
    id: 2,
    part: 'A',
    threshold: 2,
    text: 'How often do you have difficulty getting things in order when you have to do a task that requires organisation?',
  },
  {
    id: 3,
    part: 'A',
    threshold: 2,
    text: 'How often do you have problems remembering appointments or obligations?',
  },
  {
    id: 4,
    part: 'A',
    threshold: 3,
    text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
  },
  {
    id: 5,
    part: 'A',
    threshold: 3,
    text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
  },
  {
    id: 6,
    part: 'A',
    threshold: 3,
    text: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
  },

  // Part B — the remaining twelve items.
  {
    id: 7,
    part: 'B',
    threshold: 3,
    text: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
  },
  {
    id: 8,
    part: 'B',
    threshold: 3,
    text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
  },
  {
    id: 9,
    part: 'B',
    threshold: 2,
    text: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
  },
  {
    id: 10,
    part: 'B',
    threshold: 3,
    text: 'How often do you misplace or have difficulty finding things at home or at work?',
  },
  {
    id: 11,
    part: 'B',
    threshold: 2,
    text: 'How often are you distracted by activity or noise around you?',
  },
  {
    id: 12,
    part: 'B',
    threshold: 2,
    text: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
  },
  { id: 13, part: 'B', threshold: 3, text: 'How often do you feel restless or fidgety?' },
  {
    id: 14,
    part: 'B',
    threshold: 3,
    text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
  },
  {
    id: 15,
    part: 'B',
    threshold: 3,
    text: 'How often do you find yourself talking too much when you are in social situations?',
  },
  {
    id: 16,
    part: 'B',
    threshold: 2,
    text: 'When you are in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
  },
  {
    id: 17,
    part: 'B',
    threshold: 3,
    text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
  },
  {
    id: 18,
    part: 'B',
    threshold: 2,
    text: 'How often do you interrupt others when they are busy?',
  },
];

export const PART_A_COUNT = questions.filter((q) => q.part === 'A').length;
export const PART_B_COUNT = questions.filter((q) => q.part === 'B').length;

/** Four or more qualifying answers in Part A is the published screening cut-off. */
export const PART_A_CUTOFF = 4;

export interface PartScore {
  /** Answers at or above the item's threshold. */
  qualifying: number;
  questions: number;
  intensity: number;
  maxIntensity: number;
}

export interface Result {
  partA: PartScore;
  partB: PartScore;
  totalIntensity: number;
  maxTotalIntensity: number;
  /** Part A reached the screening cut-off. */
  aboveCutoff: boolean;
}

export function score(answers: Record<number, AnswerValue>): Result {
  const part = (letter: 'A' | 'B'): PartScore => {
    const items = questions.filter((q) => q.part === letter);
    let qualifying = 0;
    let intensity = 0;
    for (const q of items) {
      const answer = answers[q.id];
      if (answer === undefined) continue;
      intensity += answer;
      if (answer >= q.threshold) qualifying += 1;
    }
    return { qualifying, questions: items.length, intensity, maxIntensity: items.length * 4 };
  };

  const partA = part('A');
  const partB = part('B');

  return {
    partA,
    partB,
    totalIntensity: partA.intensity + partB.intensity,
    maxTotalIntensity: partA.maxIntensity + partB.maxIntensity,
    aboveCutoff: partA.qualifying >= PART_A_CUTOFF,
  };
}

/** Plain-English framing of the result — deliberately not a diagnosis. */
export function interpret(result: Result): { heading: string; body: string } {
  if (result.aboveCutoff) {
    return {
      heading: 'Your answers are consistent with adult ADHD',
      body: `You gave ${result.partA.qualifying} qualifying answers in Part A, at or above the screening cut-off of ${PART_A_CUTOFF}. On this widely used screening tool, that means your experiences are highly consistent with ADHD in adults and a full assessment would be worth considering. It is not a diagnosis — only a qualified clinician can make one.`,
    };
  }

  if (result.partA.qualifying > 0 || result.partB.qualifying >= 4) {
    return {
      heading: 'Some ADHD traits, below the screening cut-off',
      body: `You gave ${result.partA.qualifying} qualifying answers in Part A, below the cut-off of ${PART_A_CUTOFF}, and ${result.partB.qualifying} in Part B. Screening tools miss people — particularly those who mask well, or whose difficulties show up mainly at work, in study or at home. If these traits affect your daily life, it is still worth talking to someone.`,
    };
  }

  return {
    heading: 'Few ADHD traits reported',
    body: 'Your answers did not reach the screening cut-off on this tool. If you are still struggling with focus, organisation or restlessness, that is worth exploring — a screener only captures one part of the picture, and other things can look very similar to ADHD.',
  };
}
