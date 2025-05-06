import * as Pinia from 'pinia'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  // 添加全局系统变量
  const systemInfo = uni.getSystemInfoSync()
  const menuButtonBoundingClientRect = uni.getMenuButtonBoundingClientRect()
  app.config.globalProperties.$systemInfo = systemInfo
  app.config.globalProperties.$menuButtonBoundingClientRect = menuButtonBoundingClientRect
  app.mount('#app')
  return {
    app,
    Pinia
  }
}
