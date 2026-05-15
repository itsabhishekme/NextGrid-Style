const withPWA = require("next-pwa")({
  dest: "public",

  register: true,
  skipWaiting: true,

  disable: process.env.NODE_ENV === "development",

  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60
        }
      }
    }
  ],

  buildExcludes: [
    /middleware-manifest\.json$/,
    /app-build-manifest\.json$/,
    /build-manifest\.json$/,
    /react-loadable-manifest\.json$/,
    /\.map$/,
    /^chunks\/images\//,
    /_next\/static\/chunks\/pages\/.*\.js$/
  ]
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  reactStrictMode: true,

  images: {
    unoptimized: true
  },

  turbopack: {}
};

module.exports = withPWA(nextConfig);