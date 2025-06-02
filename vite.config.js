import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'build'
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: [
      'punyabrata-jana.onrender.com',
      'localhost',
      '127.0.0.1'
    ]
  }
})
