import { AnimatedReveal } from "@/components/layout/animated-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { teamMembers } from "@/data/team"
import { useSeo } from "@/hooks/use-seo"

export default function AboutPage() {
  useSeo({
    title: "About Us",
    description:
      "Learn about Sreenidhi Cancer Foundation and meet our leadership team driving cancer care support programs.",
  })

  return (
    <>
      <SectionWrapper
        className="pt-16"
        description="Sreenidhi Cancer Foundation is a people-first NGO focused on early awareness, treatment support, and long-term dignity for families facing cancer."
        eyebrow="About Us"
        title="Believe There Is A Hope"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl text-primary">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Expand access to timely and affordable cancer care through medical partnerships,
                community outreach, and transparent donor support.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl text-primary">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                A future where no patient stops treatment because of financial, social, or
                logistical barriers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl text-primary">Our Values</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Compassion, accountability, teamwork, and measurable impact in every program we
                run.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="bg-gradient-to-b from-muted/45 to-white"
        description="Leadership and operations team across 12 key positions."
        eyebrow="Our Team"
        title="People behind SCF"
      >
        <AnimatedReveal>
          <div className="mb-8 grid gap-5 lg:grid-cols-2">
            <Card className="border-primary/15 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-display text-2xl text-primary">About SCF</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Sreenidhi Cancer Foundation was built by caregivers, doctors, and community
                  volunteers who believed that treatment access should never depend on a family&apos;s
                  income or location.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  We work from prevention to treatment continuity, combining medical partnerships,
                  on-ground outreach, and transparent donor accountability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/70">
              <CardContent className="p-6">
                <h3 className="font-display text-2xl text-primary">How We Work</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  SCF programs are designed with measurable targets: screenings delivered,
                  follow-ups completed, treatment interruptions reduced, and family support
                  milestones achieved.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  This systems-first approach helps us scale impact without losing compassion at the
                  individual level.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <AnimatedReveal delay={index * 0.04} key={member.id}>
              <Card className="overflow-hidden border-border/70 hover:-translate-y-1 hover:shadow-ngo-soft">
                <img
                  alt={member.name}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                  src={member.photo}
                />
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground">{member.name}</p>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.12}>
          <Card className="mt-8 border-secondary/30 bg-secondary/10">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-display text-3xl text-foreground">What Comes Next</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Our next phase expands pediatric support, district-level screenings, and volunteer
                training so more families can begin and complete treatment with confidence.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                SCF remains committed to transparent reporting, ethical partnerships, and care models
                that are both humane and scalable.
              </p>
            </CardContent>
          </Card>
        </AnimatedReveal>
      </SectionWrapper>
    </>
  )
}
