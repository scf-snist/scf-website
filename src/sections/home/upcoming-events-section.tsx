import { useState } from "react"
import { Link } from "react-router-dom"

import { AnimatedReveal } from "@/components/layout/animated-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { events, type EventItem } from "@/data/events"

const upcomingEvents = events.filter((event) => event.tab === "upcoming").slice(0, 2)

const getDetailParagraphs = (event: EventItem) => {
  if (event.fullDescriptionParagraphs?.length) {
    return event.fullDescriptionParagraphs
  }

  return [event.description]
}

export function UpcomingEventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

  return (
    <SectionWrapper
      className="bg-gradient-to-b from-white to-muted/50"
      description="Register directly from here and reserve your place in our upcoming impact programs."
      eyebrow="Upcoming Events"
      title="Join the next SCF initiatives"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {upcomingEvents.map((event, index) => (
          <AnimatedReveal delay={index * 0.06} key={event.id}>
            <Card className="flex h-full flex-col border-border/70">
              <CardContent className="flex-1 space-y-3 p-5">
                <h3 className="font-display text-2xl text-foreground">{event.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">
                  {event.fullDescriptionParagraphs?.[0] ?? event.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-3 p-5 pt-0">
                <Button
                  className="flex-1 rounded-full"
                  onClick={() => setSelectedEvent(event)}
                  type="button"
                  variant="outline"
                >
                  Read More
                </Button>

                <Button
                  className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    if (event.registerUrl) {
                      window.open(event.registerUrl, "_blank", "noopener,noreferrer")
                    }
                  }}
                  type="button"
                >
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          </AnimatedReveal>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Button asChild className="rounded-full px-6" variant="outline">
          <Link to="/events">View all events</Link>
        </Button>
      </div>

      <Dialog open={Boolean(selectedEvent)} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-h-[85vh] max-w-[600px] overflow-y-auto p-6 pb-10 sm:p-7">
          {selectedEvent ? (
            <>
              <DialogHeader className="pr-8">
                <DialogTitle className="text-2xl">{selectedEvent.title}</DialogTitle>
                <DialogDescription className="sr-only">
                  Upcoming event details and registration
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
                {getDetailParagraphs(selectedEvent).map((paragraph, index) => (
                  <p key={`${selectedEvent.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  className="w-full max-w-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    if (selectedEvent.registerUrl) {
                      window.open(selectedEvent.registerUrl, "_blank", "noopener,noreferrer")
                    }
                  }}
                  type="button"
                >
                  Register Now
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  )
}
