import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "./container"

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Join SCF", path: "/join" },
]

const footerEventLinks = [
  { label: "WALK FOR A HOPE", path: "/events" },
  { label: "MAKE A WISH", path: "/events" },
  { label: "BLOOD DONATION", path: "/events" },
  { label: "STEP CELL DONATION", path: "/events" },
  { label: "AWARNESS SESSIONS", path: "/events" },
]

const socialLinks = [
  {
    label: "Facebook",
    icon: Facebook,
    path: "https://www.facebook.com/share/1KcX2i5K5Z/?mibextid=wwXIfr",
  },
  {
    label: "Instagram",
    icon: Instagram,
    path: "https://www.instagram.com/scf.snist?igsh=aTFtdTg0b2FpczRj",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    path: "https://www.linkedin.com/company/sreenidhi-cancer-foundation/",
  },
  {
    label: "YouTube",
    icon: Youtube,
    path: "https://youtube.com/@sreenidhicancerfoundation9143?si=bAThjJt8Aw79T-SX",
  },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-primary/30 bg-primary text-primary-foreground">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl text-white">SCF</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              We bridge access gaps in cancer care through outreach, diagnostics, treatment
              assistance, and family-first support systems.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/85">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a className="hover:text-secondary" href="tel:6305467998">
                  6305467998
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  className="break-all hover:text-secondary"
                  href="mailto:sreenidhicancerfoundation@sreenidhi.edu.in"
                >
                  sreenidhicancerfoundation@sreenidhi.edu.in
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link className="transition hover:text-secondary" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/80">
              Events
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {footerEventLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-secondary" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/80">
              Social
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
                  href={item.path}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/75">
              Reg No: 306/2016
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-center text-xs text-white/70">
          &copy; {new Date().getFullYear()} Sreenidhi Cancer Foundation. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
