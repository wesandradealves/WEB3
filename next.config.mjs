import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",

  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
