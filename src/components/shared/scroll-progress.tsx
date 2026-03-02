import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 24,
    mass: 0.2,
  })

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-primary"
      style={{ scaleX }}
    />
  )
}

