import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目站需配置 base，避免资源 404 白屏
export default defineConfig({
  base: '/color-poems/',
  plugins: [react()],
})
