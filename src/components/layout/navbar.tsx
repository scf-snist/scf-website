import { motion } from "framer-motion"
import { Menu, Search, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

import { REGISTER_FORM_URL } from "@/constants/links"
import { mainNavItems } from "@/data/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Container } from "./container"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/40 bg-white/75 backdrop-blur-xl shadow-ngo-soft"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link className="flex items-center gap-2.5" to="/">
            <img
              alt="SCF logo"
              className="h-12 w-12 rounded-lg object-contain"
              loading="eager"
              src="/logo.png"
            />
            <div>
              <p className="font-display text-2xl leading-none text-primary">SCF</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                Sreenidhi Cancer Foundation
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {mainNavItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "text-sm font-semibold text-foreground/80 transition hover:text-primary",
                    isActive && "text-primary",
                  )
                }
                key={item.path}
                onClick={() => setOpen(false)}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              aria-label="Search"
              className="grid h-9 w-9 place-items-center rounded-full border border-border/70 text-foreground/80 transition hover:border-primary hover:text-primary"
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <Button asChild className="rounded-full px-6" size="sm" variant="secondary">
              <a href={REGISTER_FORM_URL} rel="noreferrer" target="_blank">
                Register Now
              </a>
            </Button>
            <Button asChild className="rounded-full px-6" size="sm">
              <Link to="/donate">Donate now</Link>
            </Button>
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-white/70 text-foreground lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <motion.div
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-border/70 bg-white/95 backdrop-blur-md lg:hidden"
      >
        <Container className="py-4">
          <div className="flex flex-col gap-3">
            {mainNavItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-2 py-2 text-sm font-semibold transition hover:bg-muted",
                    isActive && "bg-muted text-primary",
                  )
                }
                key={item.path}
                onClick={() => setOpen(false)}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="mt-1 rounded-full">
              <a href={REGISTER_FORM_URL} rel="noreferrer" target="_blank">
                Register Now
              </a>
            </Button>
          </div>
        </Container>
      </motion.div>
    </header>
  )
}
