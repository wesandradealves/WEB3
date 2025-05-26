import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/wp-content/uploads/:path*',
        destination: 'https://dev-bdm.dourado.cash:8000/wp-content/uploads/:path*',
      },
    ];
  },
};

export default nextConfig;
