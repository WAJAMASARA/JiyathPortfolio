import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // This tells Next.js that your site lives in a subfolder
  basePath: "/JiyathPortfolio",

  // This forces the CSS/JS to load from that subfolder (Critical for GitHub Pages)
  assetPrefix: "/JiyathPortfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
