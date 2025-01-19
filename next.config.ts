import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    externalDir: false, // Disable App Router if incorrectly enabled
  },
};

export default nextConfig;
