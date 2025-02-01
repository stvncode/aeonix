import react from "@vitejs/plugin-react"
import path, { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { dependencies, peerDependencies } from "./package.json"

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    dts({
      include: ["src/**/*"],
      rollupTypes: false,
      insertTypesEntry: true,
      compilerOptions: {
        baseUrl: ".",
        paths: {
          "@/*": ["./src/*"],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      name: "aenoix",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "es" : "cjs"}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        exports: "named",
        assetFileNames: "style.css",
      },
    },
    target: "esnext",
    sourcemap: true,
    cssCodeSplit: false,
    cssMinify: true,
  },
})
