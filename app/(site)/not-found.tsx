import { NotFoundContent } from '@/components/sections/NotFoundContent';

export const metadata = { title: 'Page not found' };

/** 404s raised inside the site group; the group layout supplies the chrome. */
export default function NotFound() {
  return <NotFoundContent />;
}
