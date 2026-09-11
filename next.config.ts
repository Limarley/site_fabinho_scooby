import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async redirects() {
    return [
      { source: "/sobre", destination: "/#portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
