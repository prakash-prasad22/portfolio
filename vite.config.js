import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    // This increases the warning limit from 500kb to 1000kb 
    // since modern portfolio libraries (GSAP/Framer) are heavy
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking splits your node_modules into separate files
        // so the browser doesn't have to load one massive JS file at once
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
})
