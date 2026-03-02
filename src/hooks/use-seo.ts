import { useEffect } from "react"

type SEOConfig = {
  title: string
  description: string
}

function setMetaTag(name: string, content: string, attr: "name" | "property" = "name") {
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

export function useSeo({ title, description }: SEOConfig) {
  useEffect(() => {
    const fullTitle = `${title} | SCF`
    document.title = fullTitle

    setMetaTag("description", description)
    setMetaTag("og:title", fullTitle, "property")
    setMetaTag("og:description", description, "property")
    setMetaTag("twitter:title", fullTitle)
    setMetaTag("twitter:description", description)
  }, [description, title])
}

