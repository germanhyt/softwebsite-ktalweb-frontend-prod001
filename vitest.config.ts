import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    jsx: "automatic",
  },
  assetsInclude: ["**/*.webp", "**/*.png", "**/*.pdf"],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}", "api/**/*.{test,spec}.{ts,tsx}", "seoConfig.test.ts"],
    css: false,
  },
});
