/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: {
    unoptimized: true, // required for static export
  },
  basePath: '/babymamatribemv',
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
