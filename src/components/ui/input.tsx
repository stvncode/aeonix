import { cn } from "@/lib/utils"
import * as React from "react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    React.useEffect(() => {
      if (!props.disabled) document.getElementById("chat-input")?.focus()
    }, [props.disabled])

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:border focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        id="chat-input"
        ref={ref}
        autoFocus={true}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
