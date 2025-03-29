import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    // Change from esbuild to terser for more aggressive minification
    minify: 'terser',
    sourcemap: false,
    // Add terser-specific options for more aggressive minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2, // Multiple compression passes
      },
      mangle: {
        safari10: true, // Handle Safari 10 bugs
      },
      format: {
        comments: false, // Remove comments
      },
    },
    // Add rollup options for better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'react-icons'],
        },
        // Reduce chunk size and optimize module IDs
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable more aggressive tree-shaking
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    // Increase the warning limit to prevent noise
    chunkSizeWarningLimit: 800,
  },
  esbuild: {
    pure: ['console.log', 'debugger'],
    legalComments: 'none',
  },
});
