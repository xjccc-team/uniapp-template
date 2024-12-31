// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'

export default antfu(
  {
    typescript: true,
    vue: true,
    md: true,
    stylistic: false,
    lessOpinionated: true
  },
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      'vue/block-order': 0,
      'vue/multi-word-component-names': 0,
      'unused-imports/no-unused-vars': 0,
      'no-prototype-builtins': 0,
      'ts/no-use-before-define': 0,
      'ts/no-empty-object-type': 0,
      'vue/no-v-html': 0,
      'no-console': 0,
      'node/prefer-global/process': 0,
      'function-paren-newline': ['error', 'multiline'],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true
        }
      ]
    }
  }
)
