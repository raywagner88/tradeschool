import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    RubyPlugin(),
    ui({
      inertia: true
    }),
  ],
})
