import { SectionWrapper } from "@/components/layout/section-wrapper"
import { useSeo } from "@/hooks/use-seo"

export default function JoinPage() {
  useSeo({
    title: "Join SCF",
    description: "Fill the form below to become a volunteer at SCF.",
  })

  return (
    <SectionWrapper className="pt-16">
      <div className="text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">JOIN SCF</p>
        <h2 className="font-display text-lg text-foreground whitespace-nowrap sm:text-2xl md:text-5xl">
          Be the reason someone keeps going
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/75 md:text-base">
          Fill the form below to become a volunteer at SCF.
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-xl border border-border/70 bg-white shadow-ngo-card">
        <iframe
          className="block h-[900px] w-full"
          loading="lazy"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdsGkH7J_7XFD2wMtC0AuB_HIFMGfPXXKMzUlQqKFGTMzdVPw/viewform"
          title="Join Sreenidhi Cancer Foundation"
        >
          Loading...
        </iframe>
      </div>
    </SectionWrapper>
  )
}
