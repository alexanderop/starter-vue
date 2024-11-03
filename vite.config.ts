import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: import.meta.env.MODE === 'production' ? '/starter-vue/' : '/',
})
