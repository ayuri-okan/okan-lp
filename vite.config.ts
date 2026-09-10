import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// マルチページ構成: トップ(/) と オカン。ち(/okanchi/)
// 入力はプロジェクトルートからの相対パスで指定する(Nodeの型に依存しないため)
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        okanchi: 'okanchi/index.html',
      },
    },
  },
})
