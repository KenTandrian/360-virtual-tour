/// <reference types="vitest" />
import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === "true",
  },
  plugins: [
    pwa({
      filename: "serviceWorker.ts",
      srcDir: "src",
      strategies: "injectManifest",
      manifest: false,
    }),
    react(),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
