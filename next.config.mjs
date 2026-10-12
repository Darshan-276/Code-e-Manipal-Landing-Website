import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep development's hot-reload cache isolated from production build output.
  // This prevents `next build` from invalidating an already-running `next dev` server.
  distDir: process.env.NODE_ENV === "production" ? ".next-production" : ".next",
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(projectDirectory, "src"),
    };

    return config;
  },
};

export default nextConfig;
