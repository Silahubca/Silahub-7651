import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
          animation: ['framer-motion']
        }
      }
    },
    // Simplified minification - let Vite handle it automatically
    minify: 'esbuild', // Use esbuild instead of terser for faster builds
    target: 'esnext'
  },
  // Base URL for assets
  base: '/',
  
  // Development server
  server: {
    port: 5173,
    host: true,
    historyApiFallback: true
  },
  
  // Preview server
  preview: {
    port: 4173,
    host: true,
    historyApiFallback: true
  }
})