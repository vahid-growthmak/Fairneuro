/**
 * The design cycles card icons through a fixed pastel accent set.
 * Each accent pairs a tinted circle with a saturated line-icon colour.
 */
export const accents = {
  teal: { bg: 'bg-soft-teal', fg: 'text-teal', link: 'text-teal', ring: 'ring-teal/20' },
  coral: { bg: 'bg-blush', fg: 'text-coral', link: 'text-coral', ring: 'ring-coral/20' },
  orange: { bg: 'bg-soft-orange', fg: 'text-orange', link: 'text-orange', ring: 'ring-orange/20' },
  purple: { bg: 'bg-soft-purple', fg: 'text-purple', link: 'text-purple', ring: 'ring-purple/20' },
  green: { bg: 'bg-soft-green', fg: 'text-green', link: 'text-green', ring: 'ring-green/20' },
  blue: { bg: 'bg-soft-blue', fg: 'text-blue', link: 'text-blue', ring: 'ring-blue/20' },
  navy: { bg: 'bg-navy/10', fg: 'text-navy', link: 'text-navy', ring: 'ring-navy/20' },
} as const;

export type Accent = keyof typeof accents;

/** Default rotation used across the mockups: teal → coral → orange → teal → coral → teal */
export const accentCycle: Accent[] = ['teal', 'coral', 'orange', 'teal', 'coral', 'teal'];

/** Solid-filled step circles (journey rows) use this rotation. */
export const stepCycle: Accent[] = ['teal', 'coral', 'orange', 'teal', 'coral', 'navy'];

export const solidStep: Record<Accent, string> = {
  teal: 'bg-teal text-white',
  coral: 'bg-coral text-white',
  orange: 'bg-orange text-white',
  purple: 'bg-purple text-white',
  green: 'bg-green text-white',
  blue: 'bg-blue text-white',
  navy: 'bg-navy text-white',
};

export function cycle<T>(list: T[], i: number): T {
  return list[i % list.length];
}
