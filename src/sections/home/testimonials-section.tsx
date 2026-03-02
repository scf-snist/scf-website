import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { AnimatedReveal } from "@/components/layout/animated-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { testimonials } from "@/data/home"

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const total = useMemo(() => testimonials.length, [])
  const activeTestimonial = testimonials[index]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 4800)
    return () => window.clearInterval(intervalId)
  }, [total])

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <SectionWrapper
      className="bg-gradient-to-b from-muted/55 to-white"
      description="Voices from patients, clinicians, and partners who have witnessed impact first-hand."
      eyebrow="Testimonials"
      id="testimonials"
      title="Stories that keep us moving"
    >
      <AnimatedReveal>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <article className="relative overflow-hidden rounded-3xl border border-border/70 bg-white p-7 shadow-ngo-card md:p-9">
            <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 14 }}
              key={activeTestimonial.id}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote className="h-7 w-7 text-primary" />
              <p className="mt-5 text-lg leading-relaxed text-foreground/85 md:text-xl">
                {activeTestimonial.quote}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    alt={activeTestimonial.name}
                    className="h-14 w-14 rounded-full border-2 border-primary/15 object-cover"
                    loading="lazy"
                    src={activeTestimonial.avatar}
                  />
                  <div>
                    <p className="font-semibold text-foreground">{activeTestimonial.name}</p>
                    <p className="text-sm text-foreground/70">{activeTestimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    aria-label="Previous testimonial"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-white text-foreground/80 transition hover:border-primary hover:text-primary"
                    onClick={() => goTo(index - 1)}
                    type="button"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next testimonial"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-white text-foreground/80 transition hover:border-primary hover:text-primary"
                    onClick={() => goTo(index + 1)}
                    type="button"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </article>

          <div className="space-y-3">
            {testimonials.map((item, itemIndex) => {
              const active = itemIndex === index
              return (
                <button
                  className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                    active
                      ? "border-primary/40 bg-primary/5 shadow-ngo-soft"
                      : "border-border/70 bg-white hover:border-primary/30"
                  }`}
                  key={item.id}
                  onClick={() => goTo(itemIndex)}
                  type="button"
                >
                  <img
                    alt={item.name}
                    className="h-12 w-12 rounded-xl object-cover"
                    loading="lazy"
                    src={item.avatar}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-foreground/65">{item.role}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </AnimatedReveal>

      <div className="mt-5 flex justify-center gap-2">
        {testimonials.map((item, dotIndex) => (
          <button
            aria-label={`View testimonial ${dotIndex + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              index === dotIndex ? "w-12 bg-primary" : "w-6 bg-primary/25"
            }`}
            key={item.id}
            onClick={() => goTo(dotIndex)}
            type="button"
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
