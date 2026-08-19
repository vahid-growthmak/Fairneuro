import { isSanityConfigured } from '@/sanity/env';
import { StudioSetupNotice } from './setup-notice';
import { Studio } from './studio';

export const dynamic = 'force-static';
export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  // Sanity throws if constructed without a projectId, which would surface as an
  // opaque crash. Show setup instructions instead until credentials are added.
  if (!isSanityConfigured) return <StudioSetupNotice />;
  return <Studio />;
}
