/**
 * Central image manifest.
 *
 * Every page references its artwork through this map, so swapping the
 * placeholder illustrations for real photography is a single-file change:
 * drop the new files into /public/images and update the paths below.
 *
 * Hero images are rendered inside an organic blob mask at roughly 4:3.4.
 * Supply them at 1120x952 or larger. Cut-out subjects (transparent PNG)
 * match the reference design most closely.
 */
export const img = {
  avatarAlex: '/images/avatar-alex.webp',
  avatarParent: '/images/avatar-parent.webp',
  avatarPriya: '/images/avatar-priya.webp',
  avatarSarah: '/images/avatar-sarah.webp',
  heroAbout: '/images/hero-about.webp',
  heroAdhd: '/images/hero-adhd.webp',
  heroAdultAdhd: '/images/hero-adult-adhd.webp',
  heroAdultAutism: '/images/hero-adult-autism.webp',
  heroAdults: '/images/hero-adults.webp',
  heroAssessments: '/images/hero-assessments.webp',
  heroAutism: '/images/hero-autism.webp',
  heroChildAdhd: '/images/hero-child-adhd.webp',
  heroChildAutism: '/images/hero-child-autism.webp',
  heroChildren: '/images/hero-children.webp',
  heroClinical: '/images/hero-clinical.webp',
  heroCoaching: '/images/hero-coaching.webp',
  heroCombined: '/images/hero-combined.webp',
  heroConsultation: '/images/hero-consultation.webp',
  heroContact: '/images/hero-contact.webp',
  heroDyscalculia: '/images/hero-dyscalculia.webp',
  heroDyslexia: '/images/hero-dyslexia.webp',
  heroDyspraxia: '/images/hero-dyspraxia.webp',
  heroEmployers: '/images/hero-employers.webp',
  heroFaqs: '/images/hero-faqs.webp',
  heroHome: '/images/hero-home.webp',
  heroHowItWorks: '/images/hero-how-it-works.webp',
  heroReferrals: '/images/hero-referrals.webp',
  heroResources: '/images/hero-resources.webp',
  heroSchools: '/images/hero-schools.webp',
  heroScreener: '/images/hero-screener.webp',
  heroStandards: '/images/hero-standards.webp',
  heroSupport: '/images/hero-support.webp',
  heroWhy: '/images/hero-why.webp',
  heroWorkplace: '/images/hero-workplace.webp',
  tileAdults: '/images/tile-adults.webp',
  tileChildren: '/images/tile-children.webp',
} as const;

export type ImageKey = keyof typeof img;
