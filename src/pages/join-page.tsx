import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { HandHeart, Sparkles, Users } from "lucide-react"
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

const roleValues = ["Volunteer", "Field Coordinator", "Medical Partner"] as const

const joinSchema = z.object({
  fullName: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email."),
  phone: z
    .string()
    .min(10, "Phone number must have at least 10 digits.")
    .max(15, "Phone number is too long."),
  role: z
    .string()
    .refine(
      (value) => roleValues.includes(value as (typeof roleValues)[number]),
      "Please select a role.",
    ),
  availability: z.string().min(2, "Please share your availability."),
  message: z.string().min(12, "Tell us a little more about your motivation."),
})

type JoinFormValues = z.infer<typeof joinSchema>

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JoinFormValues>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      role: "Volunteer",
      availability: "",
      message: "",
    },
  })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700))
    setSubmitted(true)
    reset()
    window.setTimeout(() => setSubmitted(false), 2400)
  }

  useSeo({
    title: "Join SCF",
    description:
      "Join SCF as a volunteer, field coordinator, or medical partner and help scale compassionate cancer care access.",
  })

  return (
    <SectionWrapper
      className="pt-16"
      description="Bring your time, skill, and heart to a mission that supports patients and families through every stage of care."
      eyebrow="Join SCF"
      title="Be the reason someone keeps going"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <CardContent className="space-y-3 p-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-display text-2xl">Benefits</h3>
            <p className="text-sm text-foreground/75">
              Structured orientation, mentorship, verified impact hours, and leadership pathways in
              social healthcare.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 p-6">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="font-display text-2xl">Role Breakdown</h3>
            <p className="text-sm text-foreground/75">
              Outreach volunteering, logistics coordination, patient assistance, and medical camp
              support.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 p-6">
            <HandHeart className="h-5 w-5 text-primary" />
            <h3 className="font-display text-2xl">Meaningful Work</h3>
            <p className="text-sm text-foreground/75">
              Join a team that values empathy, reliability, and real outcomes over vanity metrics.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardContent className="p-6 md:p-8">
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
            <FloatingField id="fullName" label="Full Name">
              <Input
                className="peer pt-5"
                id="fullName"
                placeholder=" "
                {...register("fullName")}
              />
            </FloatingField>
            <FloatingField id="email" label="Email">
              <Input className="peer pt-5" id="email" placeholder=" " {...register("email")} />
            </FloatingField>
            <FloatingField id="phone" label="Phone">
              <Input className="peer pt-5" id="phone" placeholder=" " {...register("phone")} />
            </FloatingField>
            <div className="relative">
              <select
                className="h-12 w-full rounded-lg border border-input bg-white px-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                id="role"
                {...register("role")}
              >
                {roleValues.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <label className="pointer-events-none absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-primary">
                Role
              </label>
            </div>
            <FloatingField className="md:col-span-2" id="availability" label="Availability">
              <Input
                className="peer pt-5"
                id="availability"
                placeholder=" "
                {...register("availability")}
              />
            </FloatingField>
            <FloatingField className="md:col-span-2" id="message" label="Why do you want to join?">
              <Textarea
                className="peer min-h-32 pt-6"
                id="message"
                placeholder=" "
                {...register("message")}
              />
            </FloatingField>

            <div className="md:col-span-2">
              <AnimatePresence mode="wait">
                {Object.keys(errors).length > 0 ? (
                  <motion.p
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                    exit={{ opacity: 0, y: -5 }}
                    initial={{ opacity: 0, y: -5 }}
                    key="error"
                  >
                    {Object.values(errors)[0]?.message}
                  </motion.p>
                ) : submitted ? (
                  <motion.p
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-green-500/30 bg-green-100 px-3 py-2 text-sm text-green-700"
                    exit={{ opacity: 0, y: -5 }}
                    initial={{ opacity: 0, y: -5 }}
                    key="success"
                  >
                    Application submitted. We will contact you shortly.
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="md:col-span-2">
              <Button className="rounded-full px-8" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </SectionWrapper>
  )
}
