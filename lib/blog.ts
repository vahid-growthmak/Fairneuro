import type { PortableTextBlock } from '@portabletext/types';

/**
 * Blog posts come from Sanity (`post` documents). This sample ships with the
 * repo so /blog and /blog/<slug> render before the CMS has any content, and so
 * the article layout has something real to be checked against.
 *
 * The body is Portable Text, the same shape Sanity returns, so `PortableBody`
 * renders CMS posts and this one through the identical component map.
 */
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readingMinutes: number;
  author?: { name: string; role?: string };
  categories?: { title: string; slug: string; accent?: string }[];
  body?: PortableTextBlock[];
}

let key = 0;
const block = (
  style: 'normal' | 'h2' | 'h3' | 'blockquote',
  text: string,
): PortableTextBlock =>
  ({
    _type: 'block',
    _key: `b${key++}`,
    style,
    markDefs: [],
    children: [{ _type: 'span', _key: `s${key++}`, text, marks: [] }],
  }) as unknown as PortableTextBlock;

const bullet = (text: string): PortableTextBlock =>
  ({
    _type: 'block',
    _key: `b${key++}`,
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    markDefs: [],
    children: [{ _type: 'span', _key: `s${key++}`, text, marks: [] }],
  }) as unknown as PortableTextBlock;

export const samplePost: BlogPost = {
  _id: 'sample-adhd-in-adults',
  title: 'Signs of ADHD in adults: what it can actually look like',
  slug: 'signs-of-adhd-in-adults',
  excerpt:
    'ADHD in adults rarely looks like the classroom stereotype. Here is how it more often shows up at work, at home and in relationships — and when it is worth looking into properly.',
  publishedAt: '2026-08-20',
  readingMinutes: 6,
  author: { name: 'The Fairneuro Clinical Team', role: 'Neurodevelopmental specialists' },
  categories: [{ title: 'ADHD', slug: 'adhd', accent: 'teal' }],
  body: [
    block(
      'normal',
      'Most people picture ADHD as a restless child who cannot sit still. That picture is not wrong, but it is narrow, and it is one of the reasons so many adults reach their thirties, forties or later without ever being assessed. In adults, the same underlying differences tend to show up as patterns rather than moments — and often as exhaustion from managing them.',
    ),

    block('h2', 'It is usually about consistency, not capability'),
    block(
      'normal',
      'A common thread among adults who come to us is that they are perfectly capable of the thing they are struggling with. They can concentrate — sometimes for hours. They can organise — they have built elaborate systems. What is hard is doing it reliably, on demand, on a day that matters.',
    ),
    block(
      'normal',
      'That gap between capability and consistency is often misread as laziness or lack of effort, including by the person experiencing it.',
    ),

    block('h2', 'Where it tends to show up'),
    block(
      'normal',
      'These are patterns we hear about often. Any one of them on its own is simply being human — it is the combination, the persistence over years, and the impact on daily life that matters.',
    ),
    bullet('Starting well and stalling near the end, particularly on tasks that stopped being interesting'),
    bullet('Time working differently: a task feels like twenty minutes or an entire afternoon, with little in between'),
    bullet('Reading a page, or a paragraph, several times before it goes in'),
    bullet('An inbox, a house or a calendar that swings between meticulous and unmanageable'),
    bullet('Interrupting, or holding a thought so tightly you stop listening in order not to lose it'),
    bullet('Emotional intensity that arrives fast and passes fast, and feels disproportionate afterwards'),
    bullet('Being told you are doing fine while privately running on adrenaline and deadlines'),

    block('h2', 'Why it is often missed'),
    block(
      'normal',
      'Adults who were bright, well-behaved or well-supported as children often were not flagged, because coping strategies masked the difficulty. Those strategies tend to hold until demand rises — a promotion, a degree, a new baby, a bereavement — and then stop working. That is frequently when people start looking for answers.',
    ),
    block(
      'normal',
      'ADHD is also under-recognised in women and girls, where it more often presents as inattentiveness, internal restlessness and emotional overwhelm rather than visible hyperactivity.',
    ),

    block('h2', 'What ADHD is not'),
    block(
      'normal',
      'Plenty of things look like ADHD. Anxiety, depression, chronic poor sleep, thyroid conditions, burnout, grief and long-term stress can all produce difficulties with focus, memory and organisation. A good assessment does not just look for ADHD — it actively considers what else could explain the picture, and whether more than one thing is going on.',
    ),
    block(
      'blockquote',
      'The question a diagnostic assessment answers is not "do you sometimes struggle to focus?" — nearly everyone does. It is whether a consistent pattern has been present since childhood and is meaningfully affecting your life.',
    ),

    block('h2', 'If this sounds familiar'),
    block(
      'normal',
      'Recognising yourself in a list like this is not a diagnosis, and nothing on this page is intended as one. It is a reason to look into it properly rather than to conclude anything.',
    ),
    block(
      'normal',
      'Our free ADHD quiz uses the ASRS-v1.1 screening checklist and takes about three minutes. It cannot diagnose ADHD, but it will tell you whether a full assessment is worth considering. If you would rather talk it through with a person first, a free consultation is available with no obligation.',
    ),
  ],
};

export const blogPosts: BlogPost[] = [samplePost];
