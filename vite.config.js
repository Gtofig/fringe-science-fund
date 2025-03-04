import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
        open: true
    },
    build: {
        outDir: 'dist',
        minify: 'esbuild', // Using esbuild instead of terser (no additional installation needed)
        sourcemap: false,
    }
})