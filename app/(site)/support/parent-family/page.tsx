import { SupportServicePage } from '@/components/templates/SupportServicePage';
import { supportSteps } from '@/lib/support';
import { img } from '@/lib/images';
import {
  Book,
  Chats,
  GradCap,
  Heart,
  HeartHand,
  People,
  Person,
  School,
  Target,
  TrendUp,
} from '@/components/icons';

export const metadata = {
  title: 'Parent & Family Support',
  description:
    'Guidance and resources to help families understand, support and navigate neurodiversity together.',
};

export default function Page() {
  return (
    <SupportServicePage
      crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Support', href: '/support' },
        { label: 'Parent & Family Support' },
      ]}
      title="Parent & Family Support"
      lede="Guidance and resources to navigate together."
      body="When one person in a family is assessed, the whole family adjusts. We provide practical guidance, resources and coaching so parents and carers feel confident and equipped."
      image={{ src: img.heroSupport, alt: 'A parent in a supportive conversation' }}
      audience={{
        heading: 'Who is parent & family support for?',
        items: [
          { icon: Person, title: 'Parents & Carers', desc: 'For parents seeking practical strategies and reassurance.', accent: 'teal' },
          { icon: People, title: 'Whole Families', desc: 'For families adjusting to a new diagnosis together.', accent: 'coral' },
          { icon: HeartHand, title: 'Siblings', desc: 'Support and age-appropriate explanations for brothers and sisters.', accent: 'orange' },
          { icon: School, title: 'Kinship & Foster Carers', desc: 'Guidance for carers supporting neurodivergent children.', accent: 'teal' },
          { icon: GradCap, title: 'Families Working with Schools', desc: 'Help preparing for meetings and advocating effectively.', accent: 'coral' },
        ],
      }}
      helps={{
        heading: 'How parent & family support can help',
        items: [
          { icon: Target, title: 'Practical everyday strategies', accent: 'teal' },
          { icon: Chats, title: 'Clearer family communication', accent: 'coral' },
          { icon: Book, title: 'Understanding the diagnosis', accent: 'orange' },
          { icon: Heart, title: 'Reduced stress at home', accent: 'teal' },
          { icon: TrendUp, title: 'Confidence advocating for your child', accent: 'coral' },
        ],
      }}
      includes={{
        heading: "What's included in parent & family support?",
        steps: supportSteps({
          consultDesc: 'We listen to what your family is experiencing and what you need.',
          planDesc: 'A tailored plan of strategies matched to your child and your household.',
          sessionDesc: 'Regular sessions with a specialist who understands neurodiversity.',
          trackingDesc: 'We review what is working and adapt as your child grows.',
          toolsDesc: 'Guides, visual tools and templates you can use straight away.',
          ongoingDesc: 'Ongoing guidance through transitions and new challenges.',
        }),
      }}
      promptTitle="Not sure where to begin as a family?"
      ctaTitle="You don't have to navigate this alone."
    />
  );
}
