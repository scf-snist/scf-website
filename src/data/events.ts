export type EventTab = "past" | "upcoming"

export type EventItem = {
  id: string
  title: string
  summary?: string
  description: string
  fullDescriptionParagraphs?: string[]
  date: string
  image: string
  tab: EventTab
  registerUrl?: string
  photos?: string[]
}

export const events: EventItem[] = [
  {
    id: "event-3",
    title: "Make a Wish",
    summary:
      "A heartfelt initiative designed to fulfill the small but meaningful wishes of children who are courageously battling cancer. Through this program, we aim to bring moments of happiness, comfort, and hope into the lives of young patients during their treatment journey. By understanding the wishes and dreams of these children, the initiative seeks to create memorable experiences that help them stay positive and emotionally supported.",
    description:
      "A heartfelt initiative designed to fulfill the small but meaningful wishes of children who are courageously battling cancer. Through this program, we aim to bring moments of happiness, comfort, and hope into the lives of young patients during their treatment journey. By understanding the wishes and dreams of these children, the initiative seeks to create memorable experiences that help them stay positive and emotionally supported. The Make a Wish program focuses on spreading joy and encouragement at a time when children and their families are facing immense challenges. Whether it is a special gift, a joyful experience, or a simple dream come true, every wish fulfilled becomes a powerful reminder that they are surrounded by care and compassion. Volunteers, donors, and supporters work together to make these moments possible, turning kindness into lasting smiles. Beyond fulfilling wishes, this initiative also aims to uplift the spirits of families and strengthen the sense of community around children undergoing treatment. By bringing together compassionate individuals who want to make a difference, the program creates an atmosphere of hope, positivity, and emotional support that can help children stay strong throughout their healing journey.",
    fullDescriptionParagraphs: [
      "A heartfelt initiative designed to fulfill the small but meaningful wishes of children who are courageously battling cancer. Through this program, we aim to bring moments of happiness, comfort, and hope into the lives of young patients during their treatment journey. By understanding the wishes and dreams of these children, the initiative seeks to create memorable experiences that help them stay positive and emotionally supported.",
      "The Make a Wish program focuses on spreading joy and encouragement at a time when children and their families are facing immense challenges. Whether it is a special gift, a joyful experience, or a simple dream come true, every wish fulfilled becomes a powerful reminder that they are surrounded by care and compassion. Volunteers, donors, and supporters work together to make these moments possible, turning kindness into lasting smiles.",
      "Beyond fulfilling wishes, this initiative also aims to uplift the spirits of families and strengthen the sense of community around children undergoing treatment. By bringing together compassionate individuals who want to make a difference, the program creates an atmosphere of hope, positivity, and emotional support that can help children stay strong throughout their healing journey.",
    ],
    date: "2026",
    image: "/logo.png",
    tab: "upcoming",
    registerUrl: "https://forms.gle/5rCTWCoTggnHHKNY6",
  },
  {
    id: "event-4",
    title: "Hospital Visit",
    summary:
      "A compassionate initiative where volunteers visit hospitals to interact with cancer patients, offering encouragement, emotional support, and distributing essential care packages. The program is designed to create meaningful moments of connection with patients who are undergoing challenging treatment journeys, helping them feel supported and remembered by the community.",
    description:
      "A compassionate initiative where volunteers visit hospitals to interact with cancer patients, offering encouragement, emotional support, and distributing essential care packages. The program is designed to create meaningful moments of connection with patients who are undergoing challenging treatment journeys, helping them feel supported and remembered by the community. During these visits, volunteers spend time speaking with patients and their families, listening to their experiences, and sharing words of comfort and motivation. Small acts of kindness such as providing nutritious food, care kits, and thoughtful interactions can make a significant difference in uplifting the spirits of patients who are going through physically and emotionally demanding treatments. The Hospital Visit initiative also aims to strengthen the sense of community support around cancer patients. By showing compassion, empathy, and solidarity, volunteers help remind patients and their families that they are not alone in their fight. These visits foster hope, build emotional resilience, and create a supportive environment that encourages patients to stay strong throughout their recovery journey.",
    fullDescriptionParagraphs: [
      "A compassionate initiative where volunteers visit hospitals to interact with cancer patients, offering encouragement, emotional support, and distributing essential care packages. The program is designed to create meaningful moments of connection with patients who are undergoing challenging treatment journeys, helping them feel supported and remembered by the community.",
      "During these visits, volunteers spend time speaking with patients and their families, listening to their experiences, and sharing words of comfort and motivation. Small acts of kindness such as providing nutritious food, care kits, and thoughtful interactions can make a significant difference in uplifting the spirits of patients who are going through physically and emotionally demanding treatments.",
      "The Hospital Visit initiative also aims to strengthen the sense of community support around cancer patients. By showing compassion, empathy, and solidarity, volunteers help remind patients and their families that they are not alone in their fight. These visits foster hope, build emotional resilience, and create a supportive environment that encourages patients to stay strong throughout their recovery journey.",
    ],
    date: "2026",
    image: "/logo.png",
    tab: "upcoming",
    registerUrl: "https://forms.gle/UWLynJPBu3ziUW7E8",
  },
  {
    id: "event-5",
    title: "WALK FOR A HOPE",
    description:
      "Walk for Hope - Awareness Initiative by Sreenidhi Cancer Foundation organized \"Walk for Hope\", an awareness initiative aimed at promoting cancer awareness, encouraging early detection, and fostering community support for individuals battling cancer. The event brought together students, volunteers, healthcare supporters, and members of the public who participated in a symbolic walk to express solidarity with cancer patients and survivors. The initiative served as a platform to spread awareness about the importance of preventive healthcare, timely screening, and access to support systems for those affected by cancer.",
    date: "2019",
    image: "/walk-for-a-hope-1.jpg",
    tab: "past",
    photos: [
      "/walk-for-a-hope-1.jpg",
      "/walk-for-a-hope-2.jpg",
      "/walk-for-a-hope-3.jpg",
      "/walk-for-a-hope-4.jpg",
      "/walk-for-a-hope-5.jpg",
    ],
  },
  {
    id: "event-6",
    title: "MAKE A WISH",
    description:
      "Make-A-Wish Initiative at MNJ Cancer Hospital Sreenidhi Cancer Foundation organized a \"Make-A-Wish\" initiative at MNJ Institute of Oncology and Regional Cancer Centre with the objective of supporting children undergoing cancer treatment and bringing moments of happiness into their lives. The primary aim of the initiative was to raise funds and understand the wishes of children battling cancer,",
    date: "2025",
    image: "/make-a-wish-1.jpg",
    tab: "past",
    photos: [
      "/make-a-wish-1.jpg",
      "/make-a-wish-2.jpg",
      "/make-a-wish-3.jpg",
      "/make-a-wish-4.jpg",
      "/make-a-wish-5.jpg",
      "/make-a-wish-6.jpg",
      "/make-a-wish-7.jpg",
    ],
  },
  {
    id: "event-7",
    title: "STEM CELL DONATION",
    description:
      "Stem Cell Donation Drive Conducted in Association with DATRI Foundation Sreenidhi Cancer Foundation, in association with DATRI Blood Stem Cell Donors Registry, successfully organized a Stem Cell Donation Awareness and Registration Drive to promote awareness about stem cell transplantation and encourage voluntary donor registrations.",
    date: "2024",
    image: "/stem-cell-donation-1.jpg",
    tab: "past",
    photos: ["/stem-cell-donation-1.jpg", "/stem-cell-donation-2.jpg"],
  },
  {
    id: "event-8",
    title: "Hospital Visit",
    description:
      "Our team visited MNJ Hospital with the aim of spreading compassion and support to patients undergoing treatment. During the visit, we distributed healthy and nutritious food to patients and their attendants, ensuring that the food provided contributes positively to their well-being during difficult times.",
    date: "2025",
    image: "/hospital-visit-1.jpg",
    tab: "past",
    photos: [
      "/hospital-visit-1.jpg",
      "/hospital-visit-2.jpg",
      "/hospital-visit-3.jpg",
      "/hospital-visit-4.jpg",
      "/hospital-visit-5.jpg",
    ],
  },
  {
    id: "event-9",
    title: "INTERNATIONAL YOGA DAY",
    description:
      "On the occasion of International Yoga Day, our team will be visiting government schools to promote the importance of yoga and healthy living among students. The initiative aims to introduce young minds to the benefits of yoga for physical fitness, mental well-being, and concentration.",
    date: "2025",
    image: "/international-yoga-day-1.jpg",
    tab: "past",
    photos: [
      "/international-yoga-day-1.jpg",
      "/international-yoga-day-2.jpg",
      "/international-yoga-day-3.jpg",
      "/international-yoga-day-4.jpg",
      "/international-yoga-day-5.jpg",
    ],
  },
  {
    id: "event-10",
    title: "A Letter to Younger Myself",
    description:
      "On the occasion of International Women's Day, the Sreenidhi Cancer Foundation presents \"A Letter to My Younger Self\" - an initiative encouraging individuals to reflect on their journey and share meaningful messages with their younger selves.",
    date: "2024",
    image: "/letter-to-younger-self-1.jpg",
    tab: "past",
    photos: [
      "/letter-to-younger-self-1.jpg",
      "/letter-to-younger-self-2.jpg",
      "/letter-to-younger-self-3.jpg",
      "/letter-to-younger-self-4.jpg",
      "/letter-to-younger-self-5.jpg",
      "/letter-to-younger-self-6.jpg",
    ],
  },
  {
    id: "event-11",
    title: "NO SHAVE NOVEMBER",
    description:
      "The Sreenidhi Cancer Foundation presents \"No Shave November\", an initiative aimed at spreading awareness and supporting cancer welfare. This campaign encourages individuals to skip shaving for the entire month of November and donate the money they would normally spend on grooming to support cancer patients and related welfare activities.",
    date: "2024",
    image: "/no-shave-november-1.jpg",
    tab: "past",
    photos: ["/no-shave-november-1.jpg"],
  },
  {
    id: "event-12",
    title: "PROJECT PINK",
    description:
      "This initiative aims to provide essential health services including cancer screening, general health checkups, eye and dental examinations, ENT checkups, blood donation, and stem-cell donation awareness. By bringing these services directly to campus, the program encourages early detection, healthy living, and community participation in life-saving initiatives.",
    date: "2025",
    image: "/project-pink-1.jpg",
    tab: "past",
    photos: [
      "/project-pink-1.jpg",
      "/project-pink-2.jpg",
      "/project-pink-3.jpg",
      "/project-pink-4.jpg",
    ],
  },
  {
    id: "event-13",
    title: "Breast Cancer Awareness Walk",
    description:
      "The Sreenidhi Cancer Foundation, in association with MNJ Cancer Hospital, is organizing a Breast Cancer Awareness Walk to promote awareness about early detection, prevention, and support for those affected by breast cancer.",
    date: "2025",
    image: "/breast-cancer-awareness-walk-1.jpg",
    tab: "past",
    photos: [
      "/breast-cancer-awareness-walk-1.jpg",
      "/breast-cancer-awareness-walk-2.jpg",
      "/breast-cancer-awareness-walk-3.jpg",
      "/breast-cancer-awareness-walk-4.jpg",
      "/breast-cancer-awareness-walk-5.jpg",
      "/breast-cancer-awareness-walk-6.jpg",
    ],
  },
  {
    id: "event-14",
    title: "MATHU VADALARA",
    description:
      "The Sreenidhi Cancer Foundation presents \"Mathu Vadalara\", a No Tobacco Day Awareness Session organized to educate and spread awareness about the harmful effects of tobacco consumption.",
    date: "2025",
    image: "/mathu-vadhalara-1.jpg",
    tab: "past",
    photos: [
      "/mathu-vadhalara-1.jpg",
      "/mathu-vadhalara-2.jpg",
      "/mathu-vadhalara-3.jpg",
      "/mathu-vadhalara-4.jpg",
      "/mathu-vadhalara-5.jpg",
    ],
  },
  {
    id: "event-15",
    title: "CANCER SCREENING CAMP",
    description:
      "The camp provided essential healthcare services including cancer risk consultation, cancer screening, ultrasound screening, and oral cancer screening. Through this initiative, participants were encouraged to understand the importance of regular health checkups and early diagnosis in preventing serious health complications.",
    date: "2025",
    image: "/cancer-screening-camp-1.jpg",
    tab: "past",
    photos: [
      "/cancer-screening-camp-1.jpg",
      "/cancer-screening-camp-2.jpg",
      "/cancer-screening-camp-3.jpg",
      "/cancer-screening-camp-4.jpg",
      "/cancer-screening-camp-5.jpg",
    ],
  },
  {
    id: "event-16",
    title: "BLOOD DONATION CAMP",
    description:
      "The Sreenidhi Cancer Foundation organized a Blood Donation Camp on 21st-22nd March 2024 to encourage voluntary blood donation and support patients in need of life-saving blood transfusions.",
    date: "March 21-22, 2024",
    image: "/blood-donation-camp-1.jpg",
    tab: "past",
    photos: [
      "/blood-donation-camp-1.jpg",
      "/blood-donation-camp-2.jpg",
      "/blood-donation-camp-3.jpg",
      "/blood-donation-camp-4.jpg",
      "/blood-donation-camp-5.jpg",
      "/blood-donation-camp-6.jpg",
      "/blood-donation-camp-7.jpg",
    ],
  },
]
