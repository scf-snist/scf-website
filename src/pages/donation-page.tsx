import { Building2, Copy, ShieldCheck } from "lucide-react"
import { useState } from "react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PAYMENT_ACKNOWLEDGEMENT_FORM_URL } from "@/constants/links"
import { useSeo } from "@/hooks/use-seo"

export default function DonationPage() {
  const [copied, setCopied] = useState(false)

  const bankDetailsText = [
    "Account Name : Sreenidhi Cancer Foundation",
    "Bank Name : Airtel Online Bank",
    "Account Number : 6305467998",
    "IFSC Code : AIRP0000001",
    "Branch : Airtel Online Bank",
    "UPI ID : 6305467998-2@ybl",
  ].join("\n")

  const copyBankDetails = async () => {
    try {
      await navigator.clipboard.writeText(bankDetailsText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const openAcknowledgementForm = () => {
    window.open(PAYMENT_ACKNOWLEDGEMENT_FORM_URL, "_blank", "noopener,noreferrer")
  }

  useSeo({
    title: "Donate",
    description:
      "Support SCF with transparent and trusted donations that fund awareness, diagnostics, treatment support, and family care.",
  })

  return (
    <SectionWrapper
      className="pt-16"
      description={
        <span className="md:whitespace-nowrap">
          Give with confidence. Every contribution is tracked, reported, and converted into direct
          patient care support.
        </span>
      }
      eyebrow="Donate"
      title={<span className="md:whitespace-nowrap">Your support saves treatment journeys</span>}
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
              Registration: 306/2016
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-7">
        <Card>
          <CardHeader>
            <CardTitle>Donate via UPI / Bank Transfer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-foreground/75">
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-lg border border-border/70 bg-muted/30 p-4">
                <h4 className="text-sm font-semibold text-foreground">Scan & Donate</h4>
                <div className="flex flex-1 items-center justify-center py-3">
                  <div className="flex w-full items-center justify-center rounded-lg border border-border/60 bg-background/80 p-4">
                    <img
                      alt="UPI donation QR code"
                      className="block h-auto w-full max-w-[420px] rounded-md border border-border/60 bg-white object-contain"
                      loading="lazy"
                      src="/paymentqr.jpg"
                    />
                  </div>
                </div>
                <p className="text-center text-xs text-foreground/70">
                  Scan using any UPI app (PhonePe, Google Pay, Paytm).
                </p>
              </div>

              <div className="flex h-full flex-col rounded-lg border border-border/70 bg-muted/30 p-4">
                <h4 className="text-sm font-semibold text-foreground">Direct Bank Transfer</h4>
                <div className="mt-3 space-y-1 rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium text-foreground">Account Name : Sreenidhi Cancer Foundation</p>
                  <p className="font-medium text-foreground">Bank Name : Airtel Online Bank</p>
                  <p className="font-medium text-foreground">Account Number : 6305467998</p>
                  <p className="font-medium text-foreground">IFSC Code : AIRP0000001</p>
                  <p className="font-medium text-foreground">Branch : Airtel Online Bank</p>
                </div>

                <h4 className="mt-3 text-sm font-semibold text-foreground">Paythrough upi id</h4>
                <div className="mt-1 rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium text-foreground">upi id : 6305467998-2@ybl</p>
                </div>

                <Button
                  className="mt-3 w-full rounded-full"
                  onClick={copyBankDetails}
                  type="button"
                  variant="outline"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "Copied!" : "Copy Bank Details"}
                </Button>

                <Button className="mt-2 w-full rounded-full" onClick={openAcknowledgementForm} type="button">
                  Acknowledge Payment (fill after a donation is made)
                </Button>
              </div>
            </div>

            <p className="rounded-lg border border-border/70 bg-muted/30 px-3 py-2 text-xs leading-relaxed text-foreground/70">
              After donating, please email the transaction screenshot to sreenidhicancerfoundation@sreenidhi.edu.in for
              acknowledgment.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}

