import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

/** Leave preview and return to published content. */
export async function GET(request: Request) {
  (await draftMode()).disable();
  const url = new URL(request.url);
  return NextResponse.redirect(new URL('/', url.origin));
}
