import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  allowedDevOrigins: ["localhost:3000", "192.168.29.232:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
