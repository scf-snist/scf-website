import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMemo, useState } from "react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { LazyImage } from "@/components/shared/lazy-image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { galleryImages } from "@/data/gallery"
import { useSeo } from "@/hooks/use-seo"

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selectedIndex = useMemo(
    () => galleryImages.findIndex((image) => image.id === selectedId),
    [selectedId],
  )
  const selectedImage = selectedIndex >= 0 ? galleryImages[selectedIndex] : null

  const shift = (direction: "prev" | "next") => {
    if (selectedIndex < 0) return
    const nextIndex =
      direction === "next"
        ? (selectedIndex + 1) % galleryImages.length
        : (selectedIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedId(galleryImages[nextIndex]?.id ?? null)
  }

  useSeo({
    title: "Gallery",
    description:
      "Explore SCF's impact moments through outreach photography, volunteer campaigns, and patient support programs.",
  })

  return (
    <SectionWrapper
      className="min-h-[60vh] pt-16"
      description="A visual archive of outreach camps, volunteer programs, and patient-centered initiatives."
      eyebrow="Moments of Impact"
      title="SCF Gallery"
    >
      <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image) => (
          <button
            className="group block w-full max-w-[375px] overflow-hidden rounded-xl border border-border/60 bg-white shadow-ngo-card"
            key={image.id}
            onClick={() => setSelectedId(image.id)}
            type="button"
          >
            <LazyImage
              alt={image.alt}
              className="h-full w-full transition duration-500 group-hover:scale-105"
              src={image.src}
              wrapperClassName="aspect-[375/255] w-full bg-muted"
            />
          </button>
        ))}
      </div>

      <Dialog onOpenChange={(open) => !open && setSelectedId(null)} open={selectedId !== null}>
        <DialogContent className="max-w-4xl bg-black p-2">
          {selectedImage ? (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>Gallery image preview</DialogTitle>
                <DialogDescription>{selectedImage.alt}</DialogDescription>
              </DialogHeader>

              <div className="relative overflow-hidden rounded-lg">
                <LazyImage
                  alt={selectedImage.alt}
                  className="h-full w-full object-contain"
                  src={selectedImage.src}
                  wrapperClassName="aspect-[16/10] bg-black"
                />
                <button
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                  onClick={() => shift("prev")}
                  type="button"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                  onClick={() => shift("next")}
                  type="button"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  )
}
