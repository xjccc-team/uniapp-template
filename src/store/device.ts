import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('deviceStore', () => {
  const app = getCurrentInstance()
  if (!app) {
    throw new Error('getCurrentInstance returned null')
  }
  const { appContext } = app
  const { statusBarHeight, platform, safeArea = {} } = appContext.config.globalProperties.$systemInfo
  const { top, height, width } = appContext.config.globalProperties.$menuButtonBoundingClientRect

  // 胶囊按钮的位置距离
  const menuPadding = top - statusBarHeight
  const menuBarHeight = ref(height + menuPadding * 2) // header高度

  const isIOS = platform === 'ios'
  const isAndroid = platform === 'android'

  // 头条小程序按钮会在搜索框上，看着效果无违和感，快手小程序的胶囊按钮宽度包含反馈按钮
  const menuButtonWidth = ref(width + 20)

  return {
    top,
    statusBarHeight,
    menuBarHeight,
    menuPadding,
    menuButtonWidth,
    menuButtonBoundingWidth: width,
    isIOS,
    isAndroid,
    safeArea
  }
})
