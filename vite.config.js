import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory for build files
    rollupOptions: {
      input: '/index.html', // Entry point for the application
    },
  },
  server: {
    port: 3000, // Default port for development server
  },
});

