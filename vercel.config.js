import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  server: {
    historyApiFallback: true // This ensures proper SPA routing in development
  }
});