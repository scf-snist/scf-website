export type ImpactMetric = {
  id: string
  label: string
  value: number
  suffix?: string
}

export const impactMetrics: ImpactMetric[] = [
  { id: "awareness", label: "Awareness Drives", value: 128, suffix: "+" },
  { id: "blood", label: "Blood Units Collected", value: 25600, suffix: "+" },
  { id: "volunteers", label: "Volunteers", value: 740, suffix: "+" },
  { id: "families", label: "Families Supported", value: 1800, suffix: "+" },
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
    name: "Nithya S.",
    role: "Cancer Survivor",
    quote:
      "SCF stood beside my family during the hardest months. Their care gave us courage and dignity.",
    avatar:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 2,
    name: "Dr. Arjun Rao",
    role: "Volunteer Oncologist",
    quote:
      "From screening camps to treatment navigation, this team runs with precision and deep empathy.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 3,
    name: "Keerthana M.",
    role: "Program Donor",
    quote:
      "The transparency reports and measurable outcomes made it easy to trust every rupee donated.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 4,
    name: "Ravi K.",
    role: "Patient Caregiver",
    quote:
      "SCF helped us coordinate hospital visits and medicine support when we had no clear path forward.",
    avatar:
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 5,
    name: "Dr. Meena Iyer",
    role: "Screening Camp Partner",
    quote:
      "Their outreach model is practical and compassionate. Follow-up support makes their impact truly sustainable.",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 6,
    name: "Sanjay P.",
    role: "Volunteer Lead",
    quote:
      "Every campaign is organized with clarity, accountability, and respect for the families we serve.",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=240&q=80",
  },
]
