import type { NextConfig } from "next";
import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true
});

export default nextConfig;
