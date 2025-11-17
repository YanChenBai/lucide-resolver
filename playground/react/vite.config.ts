import react from '@vitejs/plugin-react'
import LucideReactResolver from 'lucide-resolver/react'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      resolvers: [
        LucideReactResolver(),
      ],
    }),
  ],
})
