import { motion, useInView } from "framer-motion"
import { HeartPulse, Users, Syringe, Megaphone } from "lucide-react"
import { useRef } from "react"

import { AnimatedReveal } from "@/components/layout/animated-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { impactMetrics } from "@/data/home"
import { useCountUp } from "@/hooks/use-count-up"

const iconMap = [Megaphone, Syringe, Users, HeartPulse] as const

function MetricCard({
  label,
  value,
  suffix,
  index,
}: {
  label: string
  value: number
  suffix?: string
  index: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const displayValue = useCountUp(value, inView, 1600)
  const Icon = iconMap[index] ?? HeartPulse

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="group h-full border-border/70 bg-white/90 hover:-translate-y-1 hover:border-primary/30 hover:shadow-ngo-soft">
        <CardContent className="flex h-full items-center gap-4 p-6">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-3xl text-foreground">
              {new Intl.NumberFormat().format(displayValue)}
              {suffix}
            </p>
            <p className="text-sm font-semibold text-foreground/70">{label}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ImpactStatsSection() {
  return (
    <SectionWrapper
      className="bg-gradient-to-b from-muted/45 to-white"
      description="Every number represents a person reached, a family supported, and a life moved closer to treatment."
      eyebrow="Our Impact"
      id="impact"
      title="Real outcomes, measured with care"
    >
      <AnimatedReveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <MetricCard
              index={index}
              key={metric.id}
              label={metric.label}
              suffix={metric.suffix}
              value={metric.value}
            />
          ))}
        </div>
      </AnimatedReveal>
    </SectionWrapper>
  )
}

