import { Building2, CheckCircle2, ShieldCheck, Wallet } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSeo } from "@/hooks/use-seo"

const tiers = [
  {
    title: "Care Starter",
    amount: "₹1,000",
    details: "Funds one awareness kit and patient transport support.",
  },
  {
    title: "Treatment Ally",
    amount: "₹5,000",
    details: "Supports diagnostics and medicine continuity for one family.",
  },
  {
    title: "Hope Partner",
    amount: "₹10,000",
    details: "Helps underwrite treatment and counseling interventions.",
  },
]

export default function DonationPage() {
  useSeo({
    title: "Donate",
    description:
      "Support SCF with transparent and trusted donations that fund awareness, diagnostics, treatment support, and family care.",
  })

  return (
    <SectionWrapper
      className="pt-16"
      description="Give with confidence. Every contribution is tracked, reported, and converted into direct patient care support."
      eyebrow="Donate"
      title="Your support saves treatment journeys"
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Why Donate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/75">
            <p>
              Cancer care dropout often happens due to cost gaps, travel burden, and missing
              support systems. Your donations keep treatment plans active for vulnerable families.
            </p>
            <p>
              We publish periodic program summaries with measurable outputs, resource allocation,
              and beneficiary outcomes.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge>80G Compliant</Badge>
              <Badge variant="secondary">Tax Benefit Eligible</Badge>
              <Badge variant="outline">Audited Reporting</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trust Badges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground/75">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Verified NGO Compliance
            </p>
            <p className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Registration: TN/SCF/2017/4821
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Quarterly Transparency Reports
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Where Funds Go</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Treatment & diagnostics", value: 52 },
              { label: "Awareness & screening camps", value: 24 },
              { label: "Patient travel & logistics", value: 16 },
              { label: "Administration & reporting", value: 8 },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground/80">{item.label}</span>
                  <span className="font-semibold text-primary">{item.value}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground/75">
            <p className="rounded-lg border border-dashed border-border/80 bg-muted/60 p-4 text-center">
              Secure gateway placeholder
              <br />
              Razorpay / Stripe / UPI
            </p>
            <Button className="w-full rounded-full">
              <Wallet className="h-4 w-4" />
              Donate Securely
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-7">
        <h3 className="font-display text-3xl text-foreground">Donation tiers</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card className="hover:-translate-y-1 hover:shadow-ngo-soft" key={tier.title}>
              <CardHeader>
                <CardTitle>{tier.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-display text-4xl text-primary">{tier.amount}</p>
                <p className="text-sm text-foreground/75">{tier.details}</p>
                <Button className="mt-2 w-full rounded-full" variant="outline">
                  Choose Tier
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

