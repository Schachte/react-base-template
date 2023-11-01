import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {},
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
