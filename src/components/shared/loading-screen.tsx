import { motion } from "framer-motion"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white">
      <div className="text-center">
        <motion.img
          alt="Sreenidhi Cancer Foundation logo"
          animate={{ scale: [0.96, 1.02, 0.96] }}
          className="mx-auto h-20 w-20 rounded-2xl object-contain shadow-ngo-soft"
          src="/logo.png"
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
          Sreenidhi Cancer Foundation
        </p>
        <div className="mt-5 h-1.5 w-56 overflow-hidden rounded-full bg-muted">
          <motion.div
            animate={{ x: ["-100%", "110%"] }}
            className="h-full w-20 rounded-full bg-primary"
            transition={{ duration: 1.15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  )
}
