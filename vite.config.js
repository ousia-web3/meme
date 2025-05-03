// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',                   // ✅ 루트 디렉토리 지정
  publicDir: 'public',         // ✅ public 폴더 명시
  base: '/meme/',              // ✅ GitHub Pages용 base 경로
  plugins: [react()],
})
