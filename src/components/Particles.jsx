import { useMemo } from 'react'

const COUNT = 26

/**
 * 海底粒子背景：随机位置、大小、浮动时长的光点/气泡，
 * 营造「海底粒子感」的海洋氛围。
 */
export default function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 9 + Math.random() * 15,
        delay: -Math.random() * 24,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    [],
  )

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}
