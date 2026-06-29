/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build a self-contained server bundle (.next/standalone) for a small Docker image.
  output: "standalone",
  // Brand assets are already sized; skip the runtime optimizer so the container
  // needs no `sharp` and images always serve correctly behind nginx.
  images: { unoptimized: true },
};

export default nextConfig;
