import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignore TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Disable optimizer in development to avoid 500s from the dev image proxy
    unoptimized: process.env.NODE_ENV === "development",
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "upload.wikimedia.org",
      "api.dicebear.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;
