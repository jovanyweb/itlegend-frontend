import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactCompiler: true,
  images: {
    remotePatterns: [{
      hostname:"itlegend.net"
    },{
      hostname:"pixabay.com"
    }]
  }
};

export default nextConfig;
