import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  /* config options here */
};

// This basically says: "If I run the command 'ANALYZE=true', turn on the X-Ray."
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);