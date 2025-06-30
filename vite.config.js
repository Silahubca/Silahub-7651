import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // Fix for client-side routing in development
  server: {
    port: 5173,
    host: true,
    historyApiFallback: true
  },
  // Fix for client-side routing in preview
  preview: {
    port: 4173,
    host: true,
    // This is the key fix for BrowserRouter in preview
    historyApiFallback: true
  }
});