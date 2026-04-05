import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      // Cache static assets (images, fonts) for 1 year
      source: "/:path*\\.(webp|jpg|jpeg|png|gif|svg|woff2|woff|ico)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      // HTML pages — always revalidate
      source: "/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
      ],
    },
  ],
};

export default nextConfig;
