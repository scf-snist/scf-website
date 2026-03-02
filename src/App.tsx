import { AnimatePresence } from "framer-motion"
import { lazy, Suspense, useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { MainLayout } from "@/components/layout/main-layout"
import { LoadingScreen } from "@/components/shared/loading-screen"
import { PageTransition } from "@/components/shared/page-transition"
import { RouteScrollRestoration } from "@/components/shared/route-scroll-restoration"
import { ScrollProgress } from "@/components/shared/scroll-progress"
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button"

const HomePage = lazy(() => import("@/pages/home-page"))
const AboutPage = lazy(() => import("@/pages/about-page"))
const EventsPage = lazy(() => import("@/pages/events-page"))
const GalleryPage = lazy(() => import("@/pages/gallery-page"))
const DonationPage = lazy(() => import("@/pages/donation-page"))
const JoinPage = lazy(() => import("@/pages/join-page"))
const ContactPage = lazy(() => import("@/pages/contact-page"))
const NotFoundPage = lazy(() => import("@/pages/not-found-page"))

function App() {
  const location = useLocation()
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setBooting(false), 1200)
    return () => window.clearTimeout(timeoutId)
  }, [])

  if (booting) {
    return <LoadingScreen />
  }

  return (
    <>
      <ScrollProgress />
      <RouteScrollRestoration />
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route element={<MainLayout />}>
              <Route
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                }
                index
              />
              <Route
                element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                }
                path="/about"
              />
              <Route
                element={
                  <PageTransition>
                    <EventsPage />
                  </PageTransition>
                }
                path="/events"
              />
              <Route
                element={
                  <PageTransition>
                    <GalleryPage />
                  </PageTransition>
                }
                path="/gallery"
              />
              <Route
                element={
                  <PageTransition>
                    <DonationPage />
                  </PageTransition>
                }
                path="/donate"
              />
              <Route
                element={
                  <PageTransition>
                    <JoinPage />
                  </PageTransition>
                }
                path="/join"
              />
              <Route
                element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                }
                path="/contact"
              />
              <Route
                element={
                  <PageTransition>
                    <NotFoundPage />
                  </PageTransition>
                }
                path="*"
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
      <ScrollToTopButton />
    </>
  )
}

export default App
