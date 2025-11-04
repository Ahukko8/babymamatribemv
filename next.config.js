/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/babymamatribemv',
  images: {
    unoptimized: true, // Disable Next.js image optimization
    domains: ["images.unsplash.com"], // Allow external image sources
  },
  assetPrefix: '/babymamatribemv/', // Important for GitHub Pages
};

export default nextConfig;
