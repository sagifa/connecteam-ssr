/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "connecteam.com",
        pathname: "/static/frontend-home-task/**",
      },
    ],
  },
};

module.exports = nextConfig;
