import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        has: [
          {
            type: 'host',
            value: 'dev-bdm.dourado.cash',
          },
        ],
        destination: 'https://177.71.161.215:8000/images/:path*',
      },
    ];
  },
};

export default nextConfig;
