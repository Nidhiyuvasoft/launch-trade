import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [], // clear any existing patterns
    unoptimized: true,

  },
  reactStrictMode: false,
};

export default nextConfig;
