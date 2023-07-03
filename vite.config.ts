/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    /* use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      auth: `${path.resolve(__dirname, './src/auth/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      config: `${path.resolve(__dirname, './src/config/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      types: `${path.resolve(__dirname, './src/types.ts')}`,
      utility: `${path.resolve(__dirname, './src/utility/')}`,
    },
  },
});
