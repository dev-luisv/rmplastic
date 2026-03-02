import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  //  base: '/rmplastic/',  // (opcional; por defecto ya es '/')
})