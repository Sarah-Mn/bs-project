import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: "media.rawg.io",
    },
      {
      protocol: 'https',
      hostname: "cdn.dummyjson.com",
    },
      {
      protocol: 'https',
      hostname: "dummyjson.com",
    },
     ],
  },
};

export default nextConfig;
