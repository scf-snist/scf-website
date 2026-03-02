import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type FloatingFieldProps = {
  id: string
  label: string
  className?: string
  children: ReactNode
}

export function FloatingField({ id, label, className, children }: FloatingFieldProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <label
        className="pointer-events-none absolute left-3 top-3 origin-left rounded-sm bg-white px-1 text-sm text-foreground/55 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:-top-2 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:scale-90"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

