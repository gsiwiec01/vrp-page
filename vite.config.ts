import { defineConfig } from "vite";
import path from "path";

import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
  plugins: [react(), ssr()],
  server: { port: 8080 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
