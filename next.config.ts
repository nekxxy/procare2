import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/procare2",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.eezix.site",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
