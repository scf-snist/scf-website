import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
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

const EMAILJS_SERVICE_ID = "service_l2o1lbd"
const EMAILJS_TEMPLATE_ID = "template_1zkdnwj"
const EMAILJS_PUBLIC_KEY = "_jonDyVL1_oa5114D"

const socialLinks = [
  {
    label: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/share/1KcX2i5K5Z/?mibextid=wwXIfr",
  },
  {
    label: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/scf.snist?igsh=aTFtdTg0b2FpczRj",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/sreenidhi-cancer-foundation/",
  },
  {
    label: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@sreenidhicancerfoundation9143?si=bAThjJt8Aw79T-SX",
  },
]

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

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY,
      )

      window.alert("Message sent successfully.")
      reset()
      setSent(true)
      window.setTimeout(() => setSent(false), 2200)
    } catch {
      setSent(false)
      window.alert("Failed to send message. Please try again.")
    }
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
      title="Let's build impact together"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden">
          <CardContent className="space-y-6 p-6">
            <div className="space-y-3 text-sm text-foreground/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Room No: 8002, Central Library Block, SNIST
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a className="hover:text-primary" href="tel:6305467998">
                  6305467998
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  className="break-all hover:text-primary"
                  href="mailto:sreenidhicancerfoundation@sreenidhi.edu.in"
                >
                  sreenidhicancerfoundation@sreenidhi.edu.in
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  href={item.url}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-border/70">
              <iframe
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Room%20No%208002%20Central%20Library%20Block%20SNIST&output=embed"
                title="SCF location map"
              />
            </div>
            <a
              className="inline-block text-sm font-medium text-primary hover:underline"
              href="https://maps.app.goo.gl/sfDSjKhFwBAKUn2M6"
              rel="noreferrer"
              target="_blank"
            >
              Open map in Google Maps
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Send Us a Message</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  Have a question about donations, volunteering, or partnerships? Fill out the
                  form and our team will get back to you as soon as possible.
                </p>
              </div>

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
