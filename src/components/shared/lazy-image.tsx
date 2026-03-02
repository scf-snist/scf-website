import { useState, type ImgHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string
}

export function LazyImage({
  className,
  wrapperClassName,
  alt,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-muted via-white/80 to-muted transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100",
        )}
      />
      <img
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-all duration-500 ease-out",
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]",
          className,
        )}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  )
}
