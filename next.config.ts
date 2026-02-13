import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["media.rawg.io",  "cdn.dummyjson.com"],
  },
};

export default nextConfig;
