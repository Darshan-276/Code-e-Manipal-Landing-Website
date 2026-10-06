import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.CODE_E_NEXT_DIST_DIR || ".next",
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(projectDirectory, "src"),
    };

    return config;
  },
};

export default nextConfig;
