import { motion } from "framer-motion"
import { ArrowDownCircle } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { REGISTER_FORM_URL } from "@/constants/links"

const heroBackground =
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80"

export function HeroSection() {
  const scrollToImpact = () => {
    const element = document.getElementById("impact")
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      <img
        alt="Volunteer doctor supporting a patient"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        src={heroBackground}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <motion.div
        animate={{ y: [0, -16, 0] }}
        className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full bg-secondary/25 blur-3xl"
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        className="pointer-events-none absolute left-12 top-40 h-48 w-48 rounded-full bg-primary/30 blur-3xl"
        transition={{ duration: 9.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto flex min-h-[88vh] items-center py-16">
        <div className="max-w-3xl text-white">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/80"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.55 }}
          >
            Compassion in Action
          </motion.p>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[clamp(2.4rem,7vw,5.8rem)] leading-[0.95] text-white"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Believe There Is A Hope
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We support vulnerable families through awareness, diagnostics, blood access, and
            continuity of cancer care with measurable transparency.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <Button asChild className="rounded-full px-7" size="lg">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild className="rounded-full px-7" size="lg" variant="glass">
              <Link to="/join">Join SCF</Link>
            </Button>
            <Button asChild className="rounded-full px-7" size="lg" variant="secondary">
              <a href={REGISTER_FORM_URL} rel="noreferrer" target="_blank">
                Register Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <button
        aria-label="Scroll to impact section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/85 transition hover:text-white"
        onClick={scrollToImpact}
        type="button"
      >
        <ArrowDownCircle className="h-10 w-10 animate-bounce" />
      </button>
    </section>
  )
}
