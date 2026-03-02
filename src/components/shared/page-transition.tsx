import type { PropsWithChildren } from "react"
import { motion } from "framer-motion"

export function PageTransition({ children }: PropsWithChildren) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      initial={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

