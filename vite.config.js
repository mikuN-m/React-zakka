import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES 
        ? "React-zakka"
        : "./", 
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        dir: 'docs'
      }
    }
  },
  plugins: [react()],
})
