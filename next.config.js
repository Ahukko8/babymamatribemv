/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export
  basePath: '/babymamatribemv', // needed for subpath deployment
  images: {
    unoptimized: true, // required for static export
    domains: ["images.unsplash.com"], // allowed domains for images
  },
};

export default nextConfig;
