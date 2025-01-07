import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
// 组件自动引入有问题，无法识别自动引入组件上得class
// 嵌套自动引入的组件，无法渲染
// import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then((i) => i.default)

  return {
    plugins: [
      uni(),
      UnoCss(),
      // Components({
      //   dts: 'src/components.d.ts',
      //   dirs: ['src/components']
      // }),
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
