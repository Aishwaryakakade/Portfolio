import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.jsx",
    }),
  ],
  assetsInclude: ["**/*.docx"], // Include .docx files as assets
  server: {
    watch: {
      usePolling: true,
    },
  },
});
