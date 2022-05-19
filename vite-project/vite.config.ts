import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
  ],
  base: './' ,
  css: {
    preprocessorOptions:{
      scss:{//共通読み込みのファイルを指定
        additionalData: `
        @import "/src/common/scss/_variable.scss";
        @import "/src/common/scss/common.scss";
        `
      }
    }
  }
})
