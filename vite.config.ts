/// <reference types="vitest" />
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/360-virtual-tour/",
  build: {
    sourcemap: process.env.SOURCE_MAP === "true",
  },
  plugins: [
    react(),
    VitePWA({
      filename: "serviceWorker.ts",
      srcDir: "src",
      strategies: "injectManifest",
      manifestFilename: "manifest.json",
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
