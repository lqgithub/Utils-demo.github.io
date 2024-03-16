import path from 'path';
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend';  

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => defineConfig({
  define: {
      'process.env': loadEnv(mode, process.cwd())
  },
  plugins: [
    vue(),
    VueSetupExtend(),
  ],
  resolve: {
    alias: {
      // '@': path.resolve(process.cwd(), '/src'),
      '@': '/src',
    }  
  } ,
})
