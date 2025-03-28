import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    assetsInlineLimit: 0 // Ensures all assets are emitted as files
  }
})