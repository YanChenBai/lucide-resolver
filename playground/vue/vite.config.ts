import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import LucideVueResolver from 'lucide-resolver/vue'
import Component from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Component({
      resolvers: [
        LucideVueResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
