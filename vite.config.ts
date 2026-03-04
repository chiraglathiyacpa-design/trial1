import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // UPDATED: This now matches your repository name 'trial1'
  base: '/trial1/',
  resolve: {
    alias: {
      // This ensures that any "@/" imports from Figma Make map to your src folder
      "@": "/src",
    },
  },
})
