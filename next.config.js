/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = withImages({
  reactStrictMode: false,
  swcMinify: true,
  esModule: true,
  images: {
    disableStaticImages: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    newNextLinkBehavior: false,
  },
});

module.exports = nextConfig;
