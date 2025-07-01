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
        // Use simple file names for cPanel compatibility
        entryFileNames: 'assets/main-[hash].js',
        chunkFileNames: 'assets/chunk-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/css/i.test(extType)) {
            return `assets/css/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
          animation: ['framer-motion']
        }
      }
    },
    // Use terser for better compatibility
    minify: 'terser',
    target: 'es2015',
    
    // Ensure all assets are properly bundled
    assetsInlineLimit: 0,
    
    // Generate manifest for debugging
    manifest: false
  },
  
  // Use absolute base for cPanel
  base: '/',
  
  // Development server
  server: {
    port: 5173,
    host: true
  },
  
  // Preview server
  preview: {
    port: 4173,
    host: true
  }
})