import { CalendarDays } from "lucide-react"
import { Link } from "react-router-dom"

import { AnimatedReveal } from "@/components/layout/animated-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { LazyImage } from "@/components/shared/lazy-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { REGISTER_FORM_URL } from "@/constants/links"
import { events } from "@/data/events"

const upcomingEvents = events.filter((event) => event.tab === "upcoming").slice(0, 3)

export function UpcomingEventsSection() {
  return (
    <SectionWrapper
      className="bg-gradient-to-b from-white to-muted/50"
      description="Register directly from here and reserve your place in our upcoming impact programs."
      eyebrow="Upcoming Events"
      title="Join the next SCF initiatives"
    >
      <div className="mb-6">
        <Button asChild className="w-full rounded-full px-7 sm:w-auto">
          <a href={REGISTER_FORM_URL} rel="noreferrer" target="_blank">
            Register Now
          </a>
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {upcomingEvents.map((event, index) => (
          <AnimatedReveal delay={index * 0.06} key={event.id}>
            <Card className="h-full overflow-hidden border-border/70">
              <LazyImage
                alt={event.title}
                className="h-52 w-full object-cover"
                src={event.image}
                wrapperClassName="overflow-hidden"
              />
              <CardContent className="space-y-3 p-5">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {event.date}
                </p>
                <h3 className="font-display text-2xl text-foreground">{event.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">{event.description}</p>
                <Button asChild className="mt-2 w-full rounded-full">
                  <a href={REGISTER_FORM_URL} rel="noreferrer" target="_blank">
                    Register Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedReveal>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Button asChild className="rounded-full px-6" variant="outline">
          <Link to="/events">View all events</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
