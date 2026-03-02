import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useMemo, useState } from "react";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { LazyImage } from "@/components/shared/lazy-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { REGISTER_FORM_URL } from "@/constants/links";
import { events, type EventItem, type EventTab } from "@/data/events";
import { useSeo } from "@/hooks/use-seo";

const eventTabs: { value: EventTab; label: string }[] = [
  { value: "past", label: "Past" },
  { value: "upcoming", label: "Upcoming" },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<EventTab>("upcoming");
  const [galleryEvent, setGalleryEvent] = useState<EventItem | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredEvents = useMemo(
    () => events.filter((event) => event.tab === activeTab),
    [activeTab],
  );

  const activeTabIndex = eventTabs.findIndex((tab) => tab.value === activeTab);
  const photos = galleryEvent?.photos ?? [];
  const selectedPhoto = photos[photoIndex];

  const shiftPhoto = (direction: "next" | "prev") => {
    if (!photos.length) return;
    const nextIndex =
      direction === "next"
        ? (photoIndex + 1) % photos.length
        : (photoIndex - 1 + photos.length) % photos.length;
    setPhotoIndex(nextIndex);
  };

  const openGallery = (event: EventItem) => {
    setGalleryEvent(event);
    setPhotoIndex(0);
  };

  useSeo({
    title: "Events",
    description:
      "Explore Sreenidhi Cancer Foundation past and upcoming outreach events.",
  });

  return (
    <SectionWrapper
      className="min-h-[60vh] pt-16"
      description="Participate in field programs and community events designed to improve access to cancer care."
      eyebrow="SCF Events"
      title="Where impact meets community"
    >
      {/* Tabs */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-primary/25 bg-white">
        <motion.span
          animate={{ x: activeTabIndex === 0 ? "0%" : "100%" }}
          className="absolute inset-y-0 left-0 w-1/2 rounded-2xl bg-primary shadow-ngo-soft"
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative grid grid-cols-2">
          {eventTabs.map((tab) => {
            const active = tab.value === activeTab;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`relative z-10 px-6 py-4 text-center text-base font-bold transition-colors ${
                  active ? "text-white" : "text-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Global CTA */}
      <div className="mt-4">
        <Button asChild className="w-full rounded-full px-8 sm:w-auto">
          <a href={REGISTER_FORM_URL} target="_blank" rel="noreferrer">
            Register Now
          </a>
        </Button>
      </div>

      {/* Events Grid */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((event) => {
          const eventPhotos = event.photos ?? [];
          const hasPhotos = eventPhotos.length > 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex h-full flex-col overflow-hidden border-border/70 hover:shadow-lg transition-shadow">
                
                {/* Image Area */}
                {event.tab === "past" ? (
                  hasPhotos ? (
                    <div className="space-y-2 p-1">
                      <div className="grid grid-cols-2 gap-1">
                        <LazyImage
                          alt={`${event.title} photo 1`}
                          className="h-32 w-full object-cover"
                          src={eventPhotos[0]}
                          wrapperClassName="rounded-tl-lg overflow-hidden"
                        />
                        <LazyImage
                          alt={`${event.title} photo 2`}
                          className="h-32 w-full object-cover"
                          src={eventPhotos[1] ?? eventPhotos[0]}
                          wrapperClassName="rounded-tr-lg overflow-hidden"
                        />
                        <LazyImage
                          alt={`${event.title} photo 3`}
                          className="h-24 w-full object-cover"
                          src={eventPhotos[2] ?? eventPhotos[0]}
                          wrapperClassName="overflow-hidden"
                        />
                        <button
                          type="button"
                          onClick={() => openGallery(event)}
                          className="relative h-24 overflow-hidden rounded-br-lg"
                        >
                          <LazyImage
                            alt={`${event.title} more photos`}
                            className="h-full w-full object-cover brightness-75"
                            src={eventPhotos[3] ?? eventPhotos[0]}
                          />
                          <span className="absolute inset-0 grid place-items-center bg-black/35 text-sm font-semibold text-white">
                            View {eventPhotos.length} photos
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid h-56 place-items-center bg-muted/50 px-5 text-center">
                      <p className="text-sm font-semibold text-foreground/70">
                        Photos will be added soon.
                      </p>
                    </div>
                  )
                ) : (
                  <LazyImage
                    alt={event.title}
                    className="h-56 w-full object-cover"
                    src={event.image}
                    wrapperClassName="overflow-hidden"
                  />
                )}

                {/* Content */}
                <CardContent className="flex-1 space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {event.date}
                  </p>
                  <h3 className="font-display text-2xl text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {event.description}
                  </p>
                </CardContent>

                {/* ✅ SINGLE CLEAN FOOTER */}
                <CardFooter className="p-5 pt-0">
                  {event.tab === "upcoming" ? (
                    <Button asChild className="w-full rounded-full">
                      <a
                        href={REGISTER_FORM_URL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Register Now
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full rounded-full"
                      onClick={() => openGallery(event)}
                    >
                      <Images className="h-4 w-4" />
                      View Event Photos ({eventPhotos.length})
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Gallery Dialog */}
      <Dialog
        open={Boolean(galleryEvent)}
        onOpenChange={(open) => !open && setGalleryEvent(null)}
      >
        <DialogContent className="max-w-4xl bg-black p-2">
          {galleryEvent && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{galleryEvent.title}</DialogTitle>
                <DialogDescription>
                  Past event photo archive
                </DialogDescription>
              </DialogHeader>

              <div className="relative overflow-hidden rounded-lg">
                {selectedPhoto && (
                  <LazyImage
                    alt={`${galleryEvent.title} photo ${photoIndex + 1}`}
                    className="max-h-[78vh] w-full object-contain"
                    src={selectedPhoto}
                    wrapperClassName="bg-black"
                  />
                )}

                <button
                  aria-label="Previous photo"
                  onClick={() => shiftPhoto("prev")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/80"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  aria-label="Next photo"
                  onClick={() => shiftPhoto("next")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/80"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}