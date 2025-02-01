import { CircleCheckIcon, CopyIcon } from "lucide-react"
import {
  ComponentProps,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react"
import { Flex } from "./flex"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"

export interface CopyToClipboardProps {
  data?: string
  trigger?: ReactElement
  tooltipSide?: ComponentProps<typeof TooltipContent>["side"]
}

export const CopyToClipboard = ({
  data,
  trigger,
  tooltipSide = "top",
}: CopyToClipboardProps) => {
  const [showCopied, setShowCopied] = useState(false)
  const timer = useRef<NodeJS.Timeout>()

  const handleCopy = async () => {
    const value = data || ""
    await navigator.clipboard.writeText(value)
    setShowCopied(true)
    clearCurrentTimer()
    timer.current = setTimeout(() => setShowCopied(false), 2000)
  }

  const triggerWithHandler =
    trigger &&
    cloneElement(trigger, {
      onClick: (e: Event) => {
        e.stopPropagation()
        handleCopy()
      },
    })

  const clearCurrentTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }

  useEffect(() => {
    return () => {
      clearCurrentTimer()
    }
  }, [])

  return (
    <TooltipProvider>
      <Tooltip open={showCopied}>
        <TooltipTrigger asChild>
          {trigger ? (
            triggerWithHandler
          ) : (
            <CopyIcon
              size={16}
              className="text-primary mt-2 cursor-pointer"
              onClick={handleCopy}
            />
          )}
        </TooltipTrigger>
        <TooltipContent side={tooltipSide} sideOffset={5}>
          <Flex align="center" className="gap-1">
            <CircleCheckIcon size={16} className="text-success" />
            Copied!
          </Flex>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
