import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Allow images from Unsplash
      "assets.aceternity.com", // Allow images from Aceternity
    ],
  },
};

export default nextConfig;
