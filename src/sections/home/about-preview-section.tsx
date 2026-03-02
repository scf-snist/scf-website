import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { AnimatedReveal } from "@/components/layout/animated-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Button } from "@/components/ui/button"

const aboutImage =
  "https://images.unsplash.com/photo-1528886238093-8e9f1b8fcf95?auto=format&fit=crop&w=1200&q=80"

export function AboutPreviewSection() {
  return (
    <SectionWrapper
      description="Founded by caregivers and clinicians, SCF exists to close access gaps in cancer care through on-ground interventions and trusted partnerships."
      eyebrow="About SCF"
      id="about"
      title="Trust built through action"
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <AnimatedReveal>
          <motion.div
            className="overflow-hidden rounded-2xl border border-border/60 shadow-ngo-card"
            whileHover={{ scale: 1.01 }}
          >
            <motion.img
              alt="SCF volunteers during patient support program"
              className="h-[440px] w-full object-cover"
              loading="lazy"
              src={aboutImage}
              transition={{ duration: 0.55 }}
              whileHover={{ scale: 1.08 }}
            />
          </motion.div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.12}>
          <div className="space-y-5 rounded-2xl border border-border/70 bg-white p-7 shadow-ngo-card">
            <p className="leading-relaxed text-foreground/80">
              We run awareness drives, mobile screenings, and treatment continuity programs with
              one mission: no patient should stop care because of cost, distance, or lack of
              support.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Our volunteer networks, medical partners, and transparent fund allocation model allow
              every contribution to become practical, traceable impact.
            </p>
            <Button asChild className="rounded-full px-6" variant="outline">
              <Link to="/about">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
