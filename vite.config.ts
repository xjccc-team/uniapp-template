import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then((i) => i.default)

  return {
    plugins: [
      uni(),
      UnoCss(),
      AutoImport({
        dts: 'src/auto-import.d.ts',
        imports: [
          'vue',
          'vue-router',
          {
            '@dcloudio/uni-app': ['onLoad', 'onShow', 'onLaunch', 'onHide', 'onShareAppMessage']
          }
        ]
      })
    ]
  }
})
