import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-[var(--bg)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Lift + press only on filled/bordered buttons; ghost and link stay flat.
        default:
          "bg-[var(--cta)] text-[var(--cta-text)] font-semibold hover:bg-[var(--cta-hover)] shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        outline:
          "border border-[var(--border-strong)] bg-transparent text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--bg-elevated)] shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        secondary:
          "bg-[var(--bg-elevated)] text-[var(--ink)] hover:bg-[var(--border)] shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        ghost: "text-[var(--ink)] hover:bg-[var(--bg-elevated)] hover:text-[var(--accent)] active:bg-[var(--border)]",
        link: "text-[var(--accent)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
