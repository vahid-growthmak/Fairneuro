import { defineEnableDraftMode } from 'next-sanity/draft-mode';
import { NextResponse } from 'next/server';
import { draftClient } from '@/sanity/client';
import { isSanityConfigured, readToken } from '@/sanity/env';

/**
 * Entry point for Sanity's Presentation/preview tool. Validates the request
 * against the read token, then enables Next.js draft mode so subsequent
 * fetches read unpublished content.
 */
export async function GET(request: Request) {
  if (!isSanityConfigured || !readToken || !draftClient) {
    return new NextResponse(
      'Draft mode unavailable: set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_READ_TOKEN.',
      { status: 501 },
    );
  }

  const { GET: enable } = defineEnableDraftMode({ client: draftClient.withConfig({ token: readToken }) });
  return enable(request);
}
