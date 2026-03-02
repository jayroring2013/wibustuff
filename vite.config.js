import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT: Change this to your exact GitHub repository name
// Example: if your repo URL is github.com/yourname/my-anime-site
// then set: base: '/my-anime-site/'
const REPO_NAME = 'wibustuff'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
