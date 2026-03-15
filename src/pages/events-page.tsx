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
import { events, type EventItem, type EventTab } from "@/data/events";
import { useSeo } from "@/hooks/use-seo";

const eventTabs: { value: EventTab; label: string }[] = [
  { value: "past", label: "Past" },
  { value: "upcoming", label: "Upcoming" },
];

const parseEventDateForSort = (date: string) => {
  const trimmed = date.trim();

  if (/^\d{4}$/.test(trimmed)) {
    return new Date(Number(trimmed), 11, 31).getTime();
  }

  const normalizedRange = trimmed.replace(
    /^([A-Za-z]+)\s+\d{1,2}-(\d{1,2}),\s*(\d{4})$/,
    "$1 $2, $3",
  );
  const parsed = Date.parse(normalizedRange);
  if (!Number.isNaN(parsed)) return parsed;

  const yearMatch = trimmed.match(/(\d{4})/);
  if (yearMatch) return new Date(Number(yearMatch[1]), 11, 31).getTime();

  return 0;
};

const getDetailParagraphs = (event: EventItem) => {
  if (event.fullDescriptionParagraphs?.length) {
    return event.fullDescriptionParagraphs;
  }

  return [event.description];
};

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<EventTab>("upcoming");
  const [galleryEvent, setGalleryEvent] = useState<EventItem | null>(null);
  const [upcomingModalEvent, setUpcomingModalEvent] = useState<EventItem | null>(
    null,
  );
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredEvents = useMemo(() => {
    const tabEvents = events.filter((event) => event.tab === activeTab);
    if (activeTab !== "past") return tabEvents;

    return [...tabEvents].sort(
      (a, b) => parseEventDateForSort(b.date) - parseEventDateForSort(a.date),
    );
  }, [activeTab]);

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

      {/* Events Grid */}
      <div className={activeTab === "upcoming" ? "mt-6 mx-auto max-w-4xl" : "mt-6"}>
        <div
          className={
            activeTab === "upcoming"
              ? "grid gap-6 md:grid-cols-2"
              : "grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          }
        >
          {filteredEvents.map((event) => {
            const eventPhotos = event.photos ?? [];
            const hasPhotos = eventPhotos.length > 0;
            const isUpcoming = event.tab === "upcoming";
            const canOpenGallery = event.tab === "past" && hasPhotos;
            const upcomingPreviewText = event.summary ?? event.description;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`flex h-full min-h-[220px] flex-col justify-between overflow-hidden border-border/70 transition-shadow hover:shadow-lg ${
                    canOpenGallery ? "cursor-pointer" : ""
                  }`}
                  onClick={canOpenGallery ? () => openGallery(event) : undefined}
                  onKeyDown={
                    canOpenGallery
                      ? (evt) => {
                          if (evt.key === "Enter" || evt.key === " ") {
                            evt.preventDefault();
                            openGallery(event);
                          }
                        }
                      : undefined
                  }
                  role={canOpenGallery ? "button" : undefined}
                  tabIndex={canOpenGallery ? 0 : undefined}
                >
                  {/* Past Event Preview */}
                  {event.tab === "past" ? (
                    hasPhotos ? (
                      <div className="space-y-2 p-1">
                        <div className="grid grid-cols-2 gap-1">
                          <LazyImage
                            alt={`${event.title} photo 1`}
                            className="h-32 w-full object-cover"
                            src={eventPhotos[0]}
                            wrapperClassName="overflow-hidden rounded-tl-lg"
                          />
                          <LazyImage
                            alt={`${event.title} photo 2`}
                            className="h-32 w-full object-cover"
                            src={eventPhotos[1] ?? eventPhotos[0]}
                            wrapperClassName="overflow-hidden rounded-tr-lg"
                          />
                          <LazyImage
                            alt={`${event.title} photo 3`}
                            className="h-24 w-full object-cover"
                            src={eventPhotos[2] ?? eventPhotos[0]}
                            wrapperClassName="overflow-hidden"
                          />
                          <button
                            type="button"
                            onClick={(evt) => {
                              evt.stopPropagation();
                              openGallery(event);
                            }}
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
                  ) : null}

                  {/* Content */}
                  <CardContent className="flex-1 space-y-3 p-5">
                    {event.tab === "past" ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {event.date}
                      </p>
                    ) : null}

                    <h3 className="font-display text-2xl text-foreground">
                      {event.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-foreground/75">
                      {isUpcoming ? upcomingPreviewText : event.description}
                    </p>
                  </CardContent>

                  {/* Actions */}
                  {isUpcoming ? (
                    <CardFooter className="flex gap-3 p-5 pt-0">
                      <Button
                        className="flex-1 rounded-full"
                        onClick={() => setUpcomingModalEvent(event)}
                        type="button"
                        variant="outline"
                      >
                        Read More
                      </Button>

                      <Button
                        className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => {
                          if (event.registerUrl) {
                            window.open(event.registerUrl, "_blank", "noopener,noreferrer");
                          }
                        }}
                        type="button"
                      >
                        Register Now
                      </Button>
                    </CardFooter>
                  ) : (
                    <CardFooter className="p-5 pt-0">
                      <Button
                        className="w-full rounded-full"
                        onClick={(evt) => {
                          evt.stopPropagation();
                          openGallery(event);
                        }}
                        type="button"
                        variant="outline"
                      >
                        <Images className="h-4 w-4" />
                        View Event Photos ({eventPhotos.length})
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Event Detail Modal */}
      <Dialog
        open={Boolean(upcomingModalEvent)}
        onOpenChange={(open) => !open && setUpcomingModalEvent(null)}
      >
        <DialogContent className="max-h-[85vh] max-w-[600px] overflow-y-auto p-6 pb-10 sm:p-7">
          {upcomingModalEvent ? (
            <>
              <DialogHeader className="pr-8">
                <DialogTitle className="text-2xl">{upcomingModalEvent.title}</DialogTitle>
                <DialogDescription className="sr-only">
                  Upcoming event details and registration
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
                {getDetailParagraphs(upcomingModalEvent).map((paragraph, index) => (
                  <p key={`${upcomingModalEvent.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  className="w-full max-w-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    if (upcomingModalEvent.registerUrl) {
                      window.open(
                        upcomingModalEvent.registerUrl,
                        "_blank",
                        "noopener,noreferrer",
                      );
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

      {/* Past Event Gallery Dialog */}
      <Dialog
        open={Boolean(galleryEvent)}
        onOpenChange={(open) => !open && setGalleryEvent(null)}
      >
        <DialogContent className="max-w-4xl bg-black p-2">
          {galleryEvent ? (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{galleryEvent.title}</DialogTitle>
                <DialogDescription>Past event photo archive</DialogDescription>
              </DialogHeader>

              <div className="relative overflow-hidden rounded-lg">
                {selectedPhoto ? (
                  <LazyImage
                    alt={`${galleryEvent.title} photo ${photoIndex + 1}`}
                    className="max-h-[78vh] w-full object-contain"
                    src={selectedPhoto}
                    wrapperClassName="bg-black"
                  />
                ) : null}

                <button
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/80"
                  onClick={() => shiftPhoto("prev")}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/80"
                  onClick={() => shiftPhoto("next")}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
