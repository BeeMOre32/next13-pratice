/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "djf7qc4xvps5h.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
