import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A stray package.json in the home directory makes Next infer the wrong
  // workspace root, which sends build tracing over the whole home folder.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Sanity's asset CDN — required for next/image to render CMS uploads.
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
    ],
  },
};

export default nextConfig;
