/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    // Does NOT block the build on eslint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Pre-existing framer-motion type incompatibility
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
