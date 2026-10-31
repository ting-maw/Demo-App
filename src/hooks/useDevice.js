import { useState } from 'react'

/**
 * 根据 User-Agent 识别访问设备类型
 * @returns {'android' | 'ios' | 'pc'}
 */
export function detectDevice(ua = navigator.userAgent) {
  if (/android/i.test(ua)) return 'android'
  if (/iphone|ipod/i.test(ua)) return 'ios'
  // iPad：iPadOS 13+ 的 UA 伪装成 Mac，需借助多点触控能力判断
  if (/ipad/i.test(ua)) return 'ios'
  if (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return 'ios'
  return 'pc'
}

/**
 * 页面打开后自动识别当前访问设备
 */
export default function useDevice() {
  const [device] = useState(() => detectDevice())
  return device
}
