import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,   // or '0.0.0.0'
    port: 5173    // optional (you can change it if 5173 is blocked)
  }
})
