export type ImpactMetric = {
  id: string
  label: string
  value: number
  suffix?: string
}

export const impactMetrics: ImpactMetric[] = [
  { id: "awareness", label: "Awareness Drives", value: 75, suffix: "+" },
  { id: "blood", label: "Blood Units Collected", value: 1000, suffix: "+" },
  { id: "volunteers", label: "Volunteers", value: 600, suffix: "+" },
  { id: "children", label: "Children Supported", value: 2500, suffix: "+" },
]

export type Testimonial = {
  id: number
  name: string
  role: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. T Ch Siva Reddy",
    role: "Principal - SNIST",
    quote:
      "The initiatives led by the Sreenidhi Cancer Foundation truly reflect the spirit of compassion and social responsibility that we encourage at SNIST. It is inspiring to see our students actively participating in programs that create awareness, support patients, and bring positive change to society. Such efforts not only help the community but also shape our students into responsible and empathetic leaders.",
    avatar: "/sivareddy.jpg",
  },
  {
    id: 2,
    name: "Dr. A Purushotham",
    role: "Dean - Student Affairs",
    quote:
      "Student-led initiatives like the Sreenidhi Cancer Foundation demonstrate the power of youth when guided by empathy and purpose. These activities provide students with an opportunity to contribute meaningfully to society while developing leadership, teamwork, and service values that extend far beyond the classroom.",
    avatar: "/purushottam.jpg",
  },
  {
    id: 3,
    name: "Dr. Naadem Divya",
    role: "Faculty Advisor",
    quote:
      "Being part of the Sreenidhi Cancer Foundation as a faculty advisor has been an incredibly rewarding experience. Watching students come together to organize awareness drives, hospital visits, and support programs for cancer patients shows how education can go hand in hand with compassion and community service.",
    avatar: "/divya.jpg",
  },
  {
    id: 4,
    name: "Dr. Aruna Varanasi",
    role: "Dean - Trainings",
    quote:
      "The Sreenidhi Cancer Foundation is a wonderful example of how students can combine knowledge, empathy, and teamwork to make a real difference. Initiatives like these encourage young minds to look beyond academics and contribute towards building a more supportive and caring society.",
    avatar: "/aruna.jpg",
  },
]
