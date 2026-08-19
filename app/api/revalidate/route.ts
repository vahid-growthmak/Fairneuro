import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';
import { parseBody } from 'next-sanity/webhook';
import { revalidateSecret } from '@/sanity/env';

type WebhookBody = {
  _type?: string;
  slug?: string;
};

/**
 * On-demand revalidation. Point a Sanity webhook at POST /api/revalidate with
 * the same secret as SANITY_REVALIDATE_SECRET so publishing updates the live
 * site immediately rather than waiting for the ISR window.
 */
export async function POST(req: NextRequest) {
  if (!revalidateSecret) {
    return new NextResponse('SANITY_REVALIDATE_SECRET is not set', { status: 501 });
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookBody>(req, revalidateSecret);

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 });
    }
    if (!body?._type) {
      return new NextResponse('Bad request: missing _type', { status: 400 });
    }

    // Everything reads through this tag, so one call covers shared content.
    revalidateTag('sanity');

    switch (body._type) {
      case 'post':
        revalidatePath('/resources');
        if (body.slug) revalidatePath(`/resources/${body.slug}`);
        break;
      case 'faq':
        revalidatePath('/faqs');
        break;
      case 'testimonial':
        revalidatePath('/');
        revalidatePath('/about');
        break;
      case 'siteSettings':
        revalidatePath('/', 'layout');
        break;
      default:
        revalidatePath('/', 'layout');
    }

    return NextResponse.json({ revalidated: true, type: body._type, now: Date.now() });
  } catch (error) {
    console.error('[revalidate] webhook failed:', error);
    return new NextResponse('Revalidation failed', { status: 500 });
  }
}
