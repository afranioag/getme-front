/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["aag-s3.s3.sa-east-1.amazonaws.com"],
  },
};

export default nextConfig;
