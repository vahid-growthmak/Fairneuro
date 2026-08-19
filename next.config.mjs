/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sanity Studio ships its own React usage; let it resolve the real react
  // from node_modules instead of Next's vendored copy.
  serverExternalPackages: ['sanity', '@sanity/vision'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Sanity's asset CDN — required for next/image to render CMS uploads.
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
    ],
  },
};

export default nextConfig;
