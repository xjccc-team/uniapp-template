// uno.config.ts
import { defineConfig, presetAttributify, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

const DEBUG = process.env.NODE_ENV === 'development'
const STATIC = `https://s${DEBUG ? '-test' : ''}.kcimg.cn/minapp/new-driver-recruitment`

export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
      ignoreAttributes: [':src']
    }),
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      whRpx: false
    }),
    // attributify autocomplete
    presetWeappAttributify()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass()
  ],
  variants: [],
  theme: {
    STATIC,
    breakpoints: {},
    colors: {
      blue: '#0089ff',
      black: '#1F2429',
      orange: '#FF7700',
      grey: 'rgba(31, 36, 41, 0.6)',
      bgcolor: '#F5F8FA'
    }
  },
  shortcuts: [],
  rules: [
    [
      /text-line-(\d+)/,
      ([, d]) => ({
        display: '-webkit-box', // 需要设置为 -webkit-box 以使用 -webkit-line-clamp
        '-webkit-box-orient': 'vertical', // 设置方向为垂直
        overflow: 'hidden', // 隐藏超出容器的文本
        '-webkit-line-clamp': d // 限制在3行文本
      })
    ],
    [
      /text-line-1/,
      () => ({
        'white-space': 'nowrap', // 确保文本不会换行
        overflow: 'hidden', // 隐藏超出容器的文本
        'text-overflow': 'ellipsis' // 使用省略号表示文本被截断
      })
    ]
  ]
})
