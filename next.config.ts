import type { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/wp-json/:path*',
        destination: 'http://18.231.174.187/wp-json/:path*',
      },
    ];
  },
};

export default nextConfig;
