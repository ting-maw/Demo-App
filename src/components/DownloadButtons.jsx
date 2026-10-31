import { DOWNLOAD_BUTTONS } from '../config.js'

/**
 * 根据设备类型渲染对应的下载按钮
 * - android：仅显示「Download for Android」
 * - ios：仅显示「Download for iOS」
 * - pc：同时显示两个下载按钮
 */
export default function DownloadButtons({ device }) {
  if (device === 'android') {
    const { label, href } = DOWNLOAD_BUTTONS.android
    return (
      <div className="buttons">
        <a className="btn-download" href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      </div>
    )
  }

  if (device === 'ios') {
    const { label, href } = DOWNLOAD_BUTTONS.ios
    return (
      <div className="buttons">
        <a className="btn-download" href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      </div>
    )
  }

  // PC / 其他设备：同时显示两个下载按钮
  return (
    <div className="buttons">
      <a
        className="btn-download"
        href={DOWNLOAD_BUTTONS.android.href}
        target="_blank"
        rel="noreferrer"
      >
        {DOWNLOAD_BUTTONS.android.label}
      </a>
      <a
        className="btn-download btn-download--alt"
        href={DOWNLOAD_BUTTONS.ios.href}
        target="_blank"
        rel="noreferrer"
      >
        {DOWNLOAD_BUTTONS.ios.label}
      </a>
    </div>
  )
}
