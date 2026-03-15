import type { PropsWithChildren, ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Container } from "./container"

type SectionWrapperProps = PropsWithChildren<{
  id?: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  className?: string
}>

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section className={cn("py-18 md:py-22", className)} id={id}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="font-display text-4xl text-foreground md:text-5xl">{title}</h2> : null}
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
