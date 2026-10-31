import Particles from './components/Particles.jsx'
import DownloadButtons from './components/DownloadButtons.jsx'
import useDevice from './hooks/useDevice.js'
import { APP_INFO, DEVICE_LABEL } from './config.js'
import './App.css'

export default function App() {
  const device = useDevice()

  return (
    <div className="app">
      {/* 背景：海底粒子 + 光晕 */}
      <Particles />
      <div className="glow glow--top" aria-hidden="true" />
      <div className="glow glow--bottom" aria-hidden="true" />

      <main className="hero">
        <div className="card">
          <img
            className="logo"
            src="/logo.svg"
            alt={`${APP_INFO.name} Logo`}
            width="88"
            height="88"
          />
          <h1 className="app-name">{APP_INFO.name}</h1>
          <p className="tagline">{APP_INFO.tagline}</p>
          <p className="desc">{APP_INFO.description}</p>

          <DownloadButtons device={device} />

          <p className="device-hint">
            检测到当前设备：<span className="device-name">{DEVICE_LABEL[device]}</span>
          </p>
        </div>
      </main>

      {/* 底部波浪 */}
      <div className="waves" aria-hidden="true">
        <svg
          className="wave wave--back"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,96 480,16 720,48 C960,80 1200,32 1440,64 L1440,120 L0,120 Z" />
        </svg>
        <svg
          className="wave wave--front"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C240,48 480,112 720,72 C960,32 1200,96 1440,72 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  )
}
