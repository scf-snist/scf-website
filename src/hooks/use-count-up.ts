import { useEffect, useState } from "react"

export function useCountUp(target: number, shouldStart: boolean, durationMs = 1700) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const startedAt = performance.now()
    let rafId = 0

    const tick = (timestamp: number) => {
      const elapsed = timestamp - startedAt
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.floor(target * eased))

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick)
      }
    }

    rafId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(rafId)
  }, [durationMs, shouldStart, target])

  return count
}

