const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const isGithubPages = process.env.GITHUB_PAGES === "true";
// Published from a GitHub *user* site repo (nithinpolepaka.github.io), so the
// site is served from the domain root and needs no basePath.
const basePath = "";

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: isGithubPages
    ? "export"
    : process.env.BUILD_STANDALONE === "true"
      ? "standalone"
      : undefined,
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["https://flagcdn.com"],
    unoptimized: isGithubPages,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});

module.exports = nextConfig;
