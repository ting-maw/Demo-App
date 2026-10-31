/**
 * 应用信息与下载链接的集中配置
 * —— 后续如需替换下载地址，只需修改本文件，无需改动组件代码。
 */

export const APP_INFO = {
  name: 'Demo App',
  tagline: 'Your Everyday Digital Companion',
  description: '一款面向日常生活的智能伙伴，随时随地，触手可及。',
}

/**
 * 下载链接集中配置
 * 按键名（android / ios）映射到对应的下载地址。
 */
export const DOWNLOAD_LINKS = {
  android: 'https://www.baidu.com',
  ios: 'https://www.google.com',
}

/**
 * 下载按钮配置（显示文案 + 跳转地址）
 */
export const DOWNLOAD_BUTTONS = {
  android: {
    label: 'Download for Android',
    href: DOWNLOAD_LINKS.android,
  },
  ios: {
    label: 'Download for iOS',
    href: DOWNLOAD_LINKS.ios,
  },
}

/**
 * 设备类型对应的中文展示名
 */
export const DEVICE_LABEL = {
  android: 'Android',
  ios: 'iOS（iPhone / iPad）',
  pc: 'PC / 其他设备',
}
