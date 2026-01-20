import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dynamic-step-form-poc/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000
  }
})
