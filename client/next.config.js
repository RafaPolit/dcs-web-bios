/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    socketURL: process.env.SOCKET_URL || "",
    socketPORT: process.env.SOCKET_PORT || "3001",
  },
};

module.exports = nextConfig;
