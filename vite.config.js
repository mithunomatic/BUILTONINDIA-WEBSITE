import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // builtonindia.in is served from the domain root, not a repository subpath.
  base: '/',
  plugins: [react()],
})
