import { AnimatedReveal } from "@/components/layout/animated-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { teamMembers } from "@/data/team"
import { useSeo } from "@/hooks/use-seo"

export default function AboutPage() {
  useSeo({
    title: "About Us",
    description:
      "Sreenidhi Cancer Foundation is a student-run non-profit focused on awareness, early detection, and compassionate community support.",
  })

  return (
    <>
      <SectionWrapper
        className="pt-16"
        description="Sreenidhi Cancer Foundation (SCF) is a student-run non-profit founded by students of Sreenidhi Institute of Science and Technology, Hyderabad."
        eyebrow="About Us"
        title="Believe There Is A Hope"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl text-primary">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                To fight cancer through awareness, early detection, and compassionate community
                support.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl text-primary">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                To build a cancer-aware society where early detection and collective support save
                lives.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-2xl text-primary">Our Values</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Compassion, awareness, service, integrity, and commitment to community well-being.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="bg-gradient-to-b from-muted/45 to-white"
        description="Leadership and operations team across 17 key positions."
        eyebrow="Our Team"
        title="People behind SCF"
      >
        <AnimatedReveal>
          <div className="mb-8 grid gap-5 lg:grid-cols-2">
            <Card className="border-primary/15 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-display text-2xl text-primary">About SCF</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Sreenidhi Cancer Foundation (SCF) is a student-run non-profit organization
                  founded by students of Sreenidhi Institute of Science and Technology, Hyderabad.
                  Established in 2015 and registered in 2016, SCF works to support people in the
                  fight against cancer.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  The foundation focuses on spreading awareness, promoting early detection, and
                  supporting cancer patients. It was inspired by the story of a young leukemia
                  patient named Shravani. SCF brings students together to create meaningful social
                  impact through health and community initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/70">
              <CardContent className="p-6">
                <h3 className="font-display text-2xl text-primary">How We Work</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  SCF organizes cancer awareness programs in colleges and communities. We conduct
                  free cancer screening and health camps to encourage early detection.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  The foundation also hosts blood donation camps and stem-cell donor registration
                  drives. Volunteers engage with patients through hospital visits and support
                  initiatives. Through campaigns and events, SCF promotes a healthier and more
                  aware society.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <AnimatedReveal delay={index * 0.04} key={member.id}>
              <Card className="border-border/70 hover:-translate-y-1 hover:shadow-ngo-soft">
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
