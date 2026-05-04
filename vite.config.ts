import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: './public/',
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router', 'react-router-dom', 'react-router-hash-link'],
          'mantine': ['@mantine/core', '@mantine/hooks', '@mantine/carousel'],
          'motion': ['framer-motion'],
          'i18n': ['i18next', 'react-i18next', 'i18next-http-backend'],
          'mobx': ['mobx', 'mobx-react-lite'],
          'carousel': ['embla-carousel', 'embla-carousel-react'],
        },
      },
    },
  },
})
