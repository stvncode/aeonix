import { cva } from "class-variance-authority"
import * as React from "react"
import { cn } from "../../lib/utils"

const inputVariants = cva(
  "border-border bg-background ring-offset-background placeholder:text-xs placeholder:text-secondary placeholder:font-light flex w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:placeholder:text-hover-icon",
  {
    variants: {
      size: {
        default: "h-8",
        xs: "h-6",
        sm: "h-7",
        md: "h-8",
        lg: "h-[36px]",
        xl: "h-10",
      },
      variant: {
        default: "focus:border-transparent focus:shadow-focus",
        ghost: "border-0 p-0 outline-none ring-0",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

export type InputProps = {
  icon?: React.ReactNode
  endIcon?: React.ReactNode
  endText?: string
  rounded?: boolean
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "default" | "ghost"
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      endText,
      icon,
      size,
      variant,
      rounded,
      endIcon,
      ...props
    },
    ref
  ) => {
    const textAfterWidth = endText ? `${endText.toString().length}ch` : "auto"

    return (
      <div className="relative">
        {rounded ? (
          <style
            dangerouslySetInnerHTML={{
              __html: `
            input:not([type='checkbox']):not([type='radio']),
            textarea {
              border-radius: 0.375em !important;
            }
            `,
            }}
          ></style>
        ) : null}
        <div className="flex items-center">
          {icon ? <div className="absolute ml-2.5">{icon}</div> : null}
          <input
            className={cn(inputVariants({ size, variant }), className)}
            ref={ref}
            type={type}
            {...props}
            style={{
              paddingLeft: icon ? "2.1rem" : undefined,
              paddingRight:
                endText || endIcon
                  ? `calc(${textAfterWidth} + 2rem)`
                  : undefined,
            }}
          />
          {endText ? (
            <div
              className="text-secondary pointer-events-none absolute bottom-0 right-0 top-0 flex items-center px-2 text-xs"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {endText}
            </div>
          ) : null}
          {endIcon ? (
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center pr-2">
              {endIcon}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
