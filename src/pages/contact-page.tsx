import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { FloatingField } from "@/components/forms/floating-field"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useSeo } from "@/hooks/use-seo"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email."),
  subject: z.string().min(4, "Please add a subject."),
  message: z.string().min(12, "Please share a little more detail."),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    reset()
    setSent(true)
    window.setTimeout(() => setSent(false), 2200)
  }

  useSeo({
    title: "Contact",
    description:
      "Reach SCF for volunteering, donations, partnerships, and program support inquiries.",
  })

  return (
    <SectionWrapper
      className="pt-16"
      description="We respond to donor, volunteer, and partnership enquiries with care and clarity."
      eyebrow="Contact"
      title="Let’s build impact together"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden">
          <CardContent className="space-y-6 p-6">
            <div className="space-y-3 text-sm text-foreground/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                124 Care Avenue, Chennai, India
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                connect@scf.org
              </p>
            </div>

            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <button
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  key={index}
                  type="button"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-border/70">
              <iframe
                className="h-72 w-full"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.245%2C13.02%2C80.295%2C13.08&layer=mapnik"
                title="SCF location map"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <FloatingField id="name" label="Name">
                <Input className="peer pt-5" id="name" placeholder=" " {...register("name")} />
              </FloatingField>
              <FloatingField id="email" label="Email">
                <Input className="peer pt-5" id="email" placeholder=" " {...register("email")} />
              </FloatingField>
              <FloatingField id="subject" label="Subject">
                <Input
                  className="peer pt-5"
                  id="subject"
                  placeholder=" "
                  {...register("subject")}
                />
              </FloatingField>
              <FloatingField id="message" label="Message">
                <Textarea
                  className="peer min-h-32 pt-6"
                  id="message"
                  placeholder=" "
                  {...register("message")}
                />
              </FloatingField>

              <AnimatePresence mode="wait">
                {Object.keys(errors).length > 0 ? (
                  <motion.p
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                    exit={{ opacity: 0, y: -4 }}
                    initial={{ opacity: 0, y: -4 }}
                    key="error"
                  >
                    {Object.values(errors)[0]?.message}
                  </motion.p>
                ) : sent ? (
                  <motion.p
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-green-500/30 bg-green-100 px-3 py-2 text-sm text-green-700"
                    exit={{ opacity: 0, y: -4 }}
                    initial={{ opacity: 0, y: -4 }}
                    key="sent"
                  >
                    Message sent successfully. We will get back soon.
                  </motion.p>
                ) : null}
              </AnimatePresence>

              <Button className="w-full rounded-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}

