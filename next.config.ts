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

module.exports = nextConfig;