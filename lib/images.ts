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
  avatarAlex: '/images/avatar-alex.svg',
  avatarParent: '/images/avatar-parent.svg',
  avatarPriya: '/images/avatar-priya.svg',
  avatarSarah: '/images/avatar-sarah.svg',
  heroAbout: '/images/hero-about.svg',
  heroAdhd: '/images/hero-adhd.svg',
  heroAdultAdhd: '/images/hero-adult-adhd.svg',
  heroAdultAutism: '/images/hero-adult-autism.svg',
  heroAdults: '/images/hero-adults.svg',
  heroAssessments: '/images/hero-assessments.svg',
  heroAutism: '/images/hero-autism.svg',
  heroChildAdhd: '/images/hero-child-adhd.svg',
  heroChildAutism: '/images/hero-child-autism.svg',
  heroChildren: '/images/hero-children.svg',
  heroClinical: '/images/hero-clinical.svg',
  heroCoaching: '/images/hero-coaching.svg',
  heroCombined: '/images/hero-combined.svg',
  heroConsultation: '/images/hero-consultation.svg',
  heroContact: '/images/hero-contact.svg',
  heroDyscalculia: '/images/hero-dyscalculia.svg',
  heroDyslexia: '/images/hero-dyslexia.svg',
  heroDyspraxia: '/images/hero-dyspraxia.svg',
  heroEmployers: '/images/hero-employers.svg',
  heroFaqs: '/images/hero-faqs.svg',
  heroHome: '/images/hero-home.svg',
  heroHowItWorks: '/images/hero-how-it-works.svg',
  heroReferrals: '/images/hero-referrals.svg',
  heroResources: '/images/hero-resources.svg',
  heroSchools: '/images/hero-schools.svg',
  heroScreener: '/images/hero-screener.svg',
  heroStandards: '/images/hero-standards.svg',
  heroSupport: '/images/hero-support.svg',
  heroWhy: '/images/hero-why.svg',
  heroWorkplace: '/images/hero-workplace.svg',
  tileAdults: '/images/tile-adults.svg',
  tileChildren: '/images/tile-children.svg',
} as const;

export type ImageKey = keyof typeof img;
