import { AboutPreviewSection } from "@/sections/home/about-preview-section"
import { HeroSection } from "@/sections/home/hero-section"
import { ImpactStatsSection } from "@/sections/home/impact-stats-section"
import { TestimonialsSection } from "@/sections/home/testimonials-section"
import { UpcomingEventsSection } from "@/sections/home/upcoming-events-section"
import { useSeo } from "@/hooks/use-seo"

export default function HomePage() {
  useSeo({
    title: "Home",
    description:
      "Sreenidhi Cancer Foundation supports cancer care equity through awareness drives, diagnostics, volunteer networks, and transparent donations.",
  })

  return (
    <>
      <HeroSection />
      <ImpactStatsSection />
      <UpcomingEventsSection />
      <AboutPreviewSection />
      <TestimonialsSection />
    </>
  )
}
