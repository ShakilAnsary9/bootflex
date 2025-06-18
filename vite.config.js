import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "BootFlex",
      fileName: () => "bootflex.js",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        globals: {
          // Define any external libraries if needed
        },
      },
    },
    outDir: "dist",
  },
});
