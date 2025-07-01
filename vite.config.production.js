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
    // Use esbuild for faster, more reliable builds
    minify: 'esbuild',
    target: 'esnext',
    // Optimize chunk size
    chunkSizeWarningLimit: 1600
  },
  // Base URL for assets
  base: '/',
  
  // Production server settings
  preview: {
    port: 4173,
    host: true,
    historyApiFallback: true
  }
})