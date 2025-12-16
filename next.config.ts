import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // REQUIRED: Tells Next.js the site is at /JiyathPortfolio/
  basePath: "/JiyathPortfolio",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
