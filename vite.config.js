import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',              // <-- IMPORTANT for Netlify root deploy
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // keep assets under /assets
  },
  plugins: [react(), tailwindcss()],
})