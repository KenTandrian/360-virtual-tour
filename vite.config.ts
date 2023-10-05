import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/360-virtual-tour/",
  plugins: [react()],
});
