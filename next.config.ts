import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:"export",
  reactCompiler: true,
  images: {
    remotePatterns: [{
      hostname:"itlegend.net"
    }]
  }
};

export default nextConfig;
