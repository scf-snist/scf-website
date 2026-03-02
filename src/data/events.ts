import { REGISTER_FORM_URL } from "@/constants/links"

export type EventTab = "past" | "upcoming"

export type EventItem = {
  id: string
  title: string
  description: string
  date: string
  image: string
  tab: EventTab
  registerUrl?: string
  photos?: string[]
}

export const events: EventItem[] = [
  {
    id: "event-1",
    title: "Rural Screening Caravan",
    description:
      "Mobile diagnostics and awareness workshops across three underserved districts.",
    date: "January 18, 2026",
    image:
      "https://images.unsplash.com/photo-1516549655669-df6c5d2f53fe?auto=format&fit=crop&w=1200&q=80",
    tab: "past",
    photos: [
      "https://images.unsplash.com/photo-1516549655669-df6c5d2f53fe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469571486292-b53601020d55?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "event-2",
    title: "City Blood Drive Marathon",
    description:
      "A 12-hour donation initiative in partnership with hospitals and college volunteers.",
    date: "February 4, 2026",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
    tab: "past",
    photos: [
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584516150909-c43483ee7935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "event-3",
    title: "National Hope Run 2026",
    description:
      "Fundraising marathon to finance treatment plans for low-income families.",
    date: "April 21, 2026",
    image:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80",
    tab: "upcoming",
    registerUrl: REGISTER_FORM_URL,
  },
  {
    id: "event-4",
    title: "Pediatric Care Equipment Drive",
    description:
      "Program dedicated to supplying pediatric oncology wards with critical devices.",
    date: "May 12, 2026",
    image:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7935?auto=format&fit=crop&w=1200&q=80",
    tab: "upcoming",
    registerUrl: REGISTER_FORM_URL,
  },
]

