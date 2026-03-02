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

const legalLinks = [
  { label: "Privacy Policy", path: "#" },
  { label: "Terms of Service", path: "#" },
  { label: "Annual Reports", path: "#" },
  { label: "Compliance", path: "#" },
]

const socialLinks = [
  { label: "Facebook", icon: Facebook, path: "#" },
  { label: "Instagram", icon: Instagram, path: "#" },
  { label: "LinkedIn", icon: Linkedin, path: "#" },
  { label: "YouTube", icon: Youtube, path: "#" },
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
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                hello@scf.org
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
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a className="transition hover:text-secondary" href={item.path}>
                    {item.label}
                  </a>
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
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/75">
              NGO Reg: TN/SCF/2017/4821
              <br />
              80G | 12A compliant
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
