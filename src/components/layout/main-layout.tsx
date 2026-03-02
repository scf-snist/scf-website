import { Outlet } from "react-router-dom"

import { Footer } from "./footer"
import { Navbar } from "./navbar"

export function MainLayout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

