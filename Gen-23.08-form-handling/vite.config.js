import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Atur eksternal untuk modul-modul yang tidak kompatibel dengan ESM
      external: ["swr", "axios"],
    },
  },
})

