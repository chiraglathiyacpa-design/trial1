import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // REPLACE 'your-repo-name' with the name of your GitHub repository
  // Example: if your URL is github.com/john/my-portfolio, use '/my-portfolio/'
  base: '/your-repo-name/',
  resolve: {
    alias: {
      // This ensures that any "@/" imports from Figma Make map to your src folder
      "@": "/src",
    },
  },
})
