export const site = {
  name: 'Fairneuro',
  suffix: 'Diagnostics',
  tagline: 'Assessment is only the beginning.',
  description:
    'Expert neurodiversity assessment with personalised support for everything that comes next.',
  phone: '+44 7395335182',
  email: 'management@fairneurodiagnostics.com',
  hours: 'Mon–Fri 9am–6pm',
  location: 'Locations & Online · UK-wide',
};

export interface NavLink {
  label: string;
  href: string;
  free?: boolean;
}

export interface MegaColumn {
  title: string;
  desc: string;
  icon: 'brain' | 'person' | 'twoHeads' | 'book';
  accent: 'teal' | 'coral' | 'purple' | 'orange';
  links: NavLink[];
}

/** The Assessments mega-menu (design page 4). */
export const assessmentsMega: MegaColumn[] = [
  {
    title: 'ADHD Assessments',
    desc: 'For adults and children experiencing attention, focus and impulsivity challenges.',
    icon: 'brain',
    accent: 'teal',
    links: [
      { label: 'Adult ADHD Assessment', href: '/adults/adhd' },
      { label: 'Child ADHD Assessment', href: '/children/adhd' },
      { label: 'Teen ADHD Assessment', href: '/children/adhd' },
      { label: 'ADHD Executive Function Assessment', href: '/support/executive-function' },
      { label: 'ADHD Screening (Free)', href: '/screener/adhd', free: true },
    ],
  },
  {
    title: 'Autism Assessments',
    desc: 'For adults and children exploring autism and understanding their neurotype.',
    icon: 'person',
    accent: 'coral',
    links: [
      { label: 'Adult Autism Assessment', href: '/adults/autism' },
      { label: 'Child Autism Assessment', href: '/children/autism' },
      { label: 'Teen Autism Assessment', href: '/children/autism' },
      { label: 'Autism in Women Assessment', href: '/adults/autism' },
      { label: 'Autism Screening (Free)', href: '/screener/autism', free: true },
    ],
  },
  {
    title: 'ADHD + Autism Assessments',
    desc: 'For those who experience both ADHD and autistic traits.',
    icon: 'twoHeads',
    accent: 'purple',
    links: [
      { label: 'Adult ADHD + Autism Assessment', href: '/adults/adhd-autism' },
      { label: 'Child ADHD + Autism Assessment', href: '/children/adhd-autism' },
      { label: 'Teen ADHD + Autism Assessment', href: '/children/adhd-autism' },
    ],
  },
  {
    title: 'Dyslexia Assessments',
    desc: 'For adults and children experiencing reading, spelling and learning differences.',
    icon: 'book',
    accent: 'orange',
    links: [
      { label: 'Adult Dyslexia Assessment', href: '/adults/dyslexia' },
      { label: 'Child Dyslexia Assessment', href: '/children/dyslexia' },
      { label: 'Teen Dyslexia Assessment', href: '/children/dyslexia' },
      { label: 'Dyslexia Screening (Free)', href: '/screener/dyslexia', free: true },
    ],
  },
];

export const otherAssessments: NavLink[] = [
  { label: 'Dyscalculia Assessment', href: '/assessments/dyscalculia' },
  { label: 'Dyspraxia Assessment', href: '/assessments/dyspraxia' },
  { label: 'Specific Learning Differences', href: '/assessments' },
  { label: 'Giftedness Assessment', href: '/assessments' },
];

export interface NavItem {
  label: string;
  href: string;
  mega?: 'assessments';
  children?: NavLink[];
}

export const primaryNav: NavItem[] = [
  { label: 'Assessments', href: '/assessments', mega: 'assessments' },
  {
    label: 'Support',
    href: '/support',
    children: [
      { label: 'ADHD Coaching', href: '/support/adhd-coaching' },
      { label: 'Autism Coaching', href: '/support/autism-coaching' },
      { label: 'Executive Function Support', href: '/support/executive-function' },
      { label: 'Learning Support', href: '/support/learning-support' },
      { label: 'Education Support', href: '/support/education-support' },
      { label: 'Behaviour Support', href: '/support/behaviour-support' },
      { label: 'Workplace Support', href: '/support/workplace-support' },
      { label: 'Therapy & Wellbeing', href: '/support/therapy-wellbeing' },
      { label: 'Post-Diagnostic Support', href: '/support/post-diagnostic' },
      { label: 'Parent & Family Support', href: '/support/parent-family' },
    ],
  },
  { label: 'How It Works', href: '/how-it-works' },
  {
    label: 'Why Fairneuro',
    href: '/why-fairneuro',
    children: [
      { label: 'Why Fairneuro', href: '/why-fairneuro' },
      { label: 'Our Standards', href: '/why-fairneuro/our-standards' },
      { label: 'About Us', href: '/about' },
      { label: 'Become an Assessor', href: '/become-an-assessor' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'All Resources', href: '/resources' },
      { label: 'Blog', href: '/blog' },
      { label: 'Free Online Screener', href: '/screener' },
      { label: 'Free ADHD Quiz', href: '/adhd-quiz' },
      { label: 'Preparing for Your Assessment', href: '/resources/preparing-for-your-assessment' },
      { label: 'Your Report Explained', href: '/resources/your-report-explained' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Professional Referrals', href: '/professional-referrals' },
      { label: 'Schools & Education', href: '/schools' },
      { label: 'Employer / Corporate', href: '/employers' },
      { label: 'Clinical Care Pathway', href: '/clinical-care' },
    ],
  },
];

export const footerColumns = [
  {
    title: 'Assessments',
    links: [
      { label: 'ADHD', href: '/assessments/adhd' },
      { label: 'Autism', href: '/assessments/autism' },
      { label: 'Dyslexia', href: '/assessments/dyslexia' },
      { label: 'ADHD + Autism', href: '/assessments/adhd-autism' },
    ],
  },
  {
    title: 'Adults',
    links: [
      { label: 'Assessments for Adults', href: '/adults' },
      { label: 'Adult ADHD', href: '/adults/adhd' },
      { label: 'Adult Autism', href: '/adults/autism' },
      { label: 'Adult Dyslexia', href: '/adults/dyslexia' },
    ],
  },
  {
    title: 'Children',
    links: [
      { label: 'Assessments for Children', href: '/children' },
      { label: 'Child ADHD', href: '/children/adhd' },
      { label: 'Child Autism', href: '/children/autism' },
      { label: 'Child Dyslexia', href: '/children/dyslexia' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Coaching', href: '/support/adhd-coaching' },
      { label: 'Parent Support', href: '/support/parent-family' },
      { label: 'Workplace Support', href: '/support/workplace-support' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Why Fairneuro', href: '/why-fairneuro' },
      { label: 'Our Standards', href: '/why-fairneuro/our-standards' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Become an Assessor', href: '/become-an-assessor' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Free ADHD Quiz', href: '/adhd-quiz' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Cookies Policy', href: '/cookies' },
  { label: 'Complaints Policy', href: '/complaints' },
];
