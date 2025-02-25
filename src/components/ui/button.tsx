import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { Flex } from "./flex"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-[hsl( 0 84.2% 65.2%)]",
        success: "bg-success text-success-foreground hover:bg-success/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        ghostHeader: "hover:bg-button hover:text-primary",
        ghostPrimary:
          "text-primary hover:bg-primary hover:text-primary-foreground",
        ghostOutlined:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        opposite: "bg-foreground text-background",
        oldBlue: "bg-[#041295] text-primary-foreground hover:opacity-90",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 px-2 text-xs",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-8 w-8",
        roundIcon: "h-7 w-7",
        smallIcon: "h-5 w-5",
        xl: "h-12 px-6 py-3 text-md",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
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
  isActive?: boolean
  fullWidth?: boolean
  radius?: "sm" | "md" | "lg" | "full"
  text?: string // shortcut for children
  icon?: React.ReactNode
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      isActive,
      fullWidth,
      radius,
      size,
      asChild = false,
      text,
      icon,
      loading,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, radius, fullWidth, className }),
          isActive &&
            variant === "ghostHeader" &&
            "bg-button text-button-foreground"
        )}
        ref={ref}
        {...props}
      >
        <Flex align="center" className="gap-1.5">
          {loading ? (
            <Loader2
              className={cn(
                "h-4 w-4 animate-spin",
                children || (text && "mr-2")
              )}
            />
          ) : icon ? (
            icon
          ) : null}
          {text ? <p className="flex-1 text-left">{text}</p> : null}
          {children}
        </Flex>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
