import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

type AnimatedRevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function AnimatedReveal({ children, className, delay = 0 }: AnimatedRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}

