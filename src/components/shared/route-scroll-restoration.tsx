import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function RouteScrollRestoration() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 120)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.hash, location.pathname])

  return null
}

