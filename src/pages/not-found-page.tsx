import { Link } from "react-router-dom"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Button } from "@/components/ui/button"
import { useSeo } from "@/hooks/use-seo"

export default function NotFoundPage() {
  useSeo({
    title: "404",
    description: "The page you are looking for does not exist.",
  })

  return (
    <SectionWrapper className="pt-20 text-center">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border/70 bg-white p-10 shadow-ngo-card">
        <p className="font-display text-7xl text-primary">404</p>
        <h1 className="mt-3 font-display text-4xl text-foreground">Page not found</h1>
        <p className="mt-3 text-foreground/70">
          The requested page is unavailable or has been moved.
        </p>
        <Button asChild className="mt-6 rounded-full px-7">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}

