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
      port: 3000, // Default port for the development server
      proxy: {
        '/api': {
          target: 'http://103.198.165.140:5001/api/submit', // Proxy requests to this target
          changeOrigin: true,              // Change the origin of the request to match the target's origin
          secure: false,                   // If you're running over HTTP, set secure to false
        },
      },
    },
  });
