/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    dcsIP: process.env.DCS_IP,
    socketURL: process.env.SOCKET_URL || "",
    socketPORT: process.env.SOCKET_PORT || "3001",
  },
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;
