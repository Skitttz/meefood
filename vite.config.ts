import path from "node:path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { UserConfig } from "vite";
import type { InlineConfig } from "vitest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, 
  test:{ globals: true, setupFiles: ['./src/_tests_/config/setup.ts'], environment:'happy-dom'}, 
  } as UserConfig & {
    test: InlineConfig
})
