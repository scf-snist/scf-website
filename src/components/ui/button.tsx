import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-ngo-soft hover:-translate-y-0.5 hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-ngo-soft hover:-translate-y-0.5 hover:bg-secondary/90",
        outline:
          "border border-primary/30 bg-white text-foreground hover:border-primary hover:bg-primary/5",
        ghost: "text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

type Ripple = {
  id: number
  x: number
  y: number
  size: number
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([])
    const Comp = asChild ? Slot : "button"

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const sizeValue = Math.max(rect.width, rect.height) * 0.75
      const ripple: Ripple = {
        id: Date.now(),
        x: event.clientX - rect.left - sizeValue / 2,
        y: event.clientY - rect.top - sizeValue / 2,
        size: sizeValue,
      }

      setRipples((previous) => [...previous, ripple])
      window.setTimeout(() => {
        setRipples((previous) =>
          previous.filter((item) => item.id !== ripple.id),
        )
      }, 520)
      onClick?.(event)
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {ripples.map((ripple) => (
          <span
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-white/30 animate-ping"
            key={ripple.id}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              animationDuration: "520ms",
            }}
          />
        ))}
        <span className="relative z-10 inline-flex items-center gap-2">
          {props.children}
        </span>
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button }
