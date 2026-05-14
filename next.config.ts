/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  reactStrictMode: true,

  trailingSlash: true,

  poweredByHeader: false,

  compress: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    scrollRestoration: true,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  output: "export",

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
});

module.exports = nextConfig;