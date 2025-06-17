import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error accept that there is any type in this public
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    eslint(),
    svgr({
      svgrOptions: {
        svgo: true,
      },
      include: '**/*.svg',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
