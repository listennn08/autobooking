import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron/renderer'
import WindiCss from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: `${path.resolve(__dirname, './dist/')}/`,
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
      ]
    }),
    electron({
      main: {
        entry: './main.ts',
      },
    }),
    renderer(),
    WindiCss(),
  ],
  optimizeDeps: {
    exclude: ['electron'],
  },
})
