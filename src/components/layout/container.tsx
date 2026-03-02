import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

type ContainerProps = PropsWithChildren<{
  className?: string
}>

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("container mx-auto", className)}>{children}</div>
}

