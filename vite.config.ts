// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For local dev, use mkcert or self-signed certs if you can.
// As a quick start, plain http often works in dev, but switch to https if Crowdin blocks it.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    // https: true, // uncomment when you have certs
  },
});
