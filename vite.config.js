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
        },
        // Ensure consistent file names for cPanel
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Use esbuild for better compatibility
    minify: 'esbuild',
    target: 'es2018', // Better browser compatibility for cPanel
    
    // Ensure relative paths work on cPanel
    assetsInlineLimit: 4096,
    
    // Generate manifest for debugging
    manifest: true
  },
  
  // Important: Set base to relative path for cPanel
  base: './',
  
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