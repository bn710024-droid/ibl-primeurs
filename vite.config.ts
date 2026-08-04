import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'react-simple-maps': fileURLToPath(
        new URL('./node_modules/react-simple-maps/dist/index.es.js', import.meta.url),
      ),
    },
  },
})
