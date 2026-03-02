import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 550)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.button
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-ngo-soft"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      transition={{ duration: 0.26 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
        scale: visible ? 1 : 0.9,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  )
}

