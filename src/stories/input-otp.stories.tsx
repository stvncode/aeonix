import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import "../index.css"

const meta = {
  title: "Components/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof InputOTP>

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSeparator />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const WithValidation: Story = {
  render: function OTPWithValidation() {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)

    const handleComplete = (code: string) => {
      // Simulate validation (e.g., check if OTP is "123456")
      setError(code !== "123456")
    }

    return (
      <div className="space-y-4">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={setValue}
          onComplete={handleComplete}
        >
          <InputOTPGroup className={error ? "border-red-500" : ""}>
            <InputOTPSlot index={0} className={error ? "border-red-500" : ""} />
            <InputOTPSlot index={1} className={error ? "border-red-500" : ""} />
            <InputOTPSlot index={2} className={error ? "border-red-500" : ""} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} className={error ? "border-red-500" : ""} />
            <InputOTPSlot index={4} className={error ? "border-red-500" : ""} />
            <InputOTPSlot index={5} className={error ? "border-red-500" : ""} />
          </InputOTPGroup>
        </InputOTP>
        {error && (
          <p className="text-sm text-red-500">
            Invalid verification code. Please try again.
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          Try entering "123456" for a valid code.
        </p>
      </div>
    )
  },
}

export const DisabledState: Story = {
  render: () => (
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSeparator />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const WithResendButton: Story = {
  render: function OTPWithResend() {
    const [countdown, setCountdown] = useState(30)
    const [isResending, setIsResending] = useState(false)

    const handleResend = () => {
      setIsResending(true)
      setCountdown(30)
      // Simulate API call
      setTimeout(() => {
        setIsResending(false)
      }, 1000)
    }

    React.useEffect(() => {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
        return () => clearTimeout(timer)
      }
    }, [countdown])

    return (
      <div className="space-y-4">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleResend}
            disabled={countdown > 0 || isResending}
          >
            {isResending ? "Sending..." : "Resend Code"}
          </Button>
          {countdown > 0 && (
            <span className="text-sm text-muted-foreground">
              Wait {countdown}s
            </span>
          )}
        </div>
      </div>
    )
  },
}

export const WithCustomSize: Story = {
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} className="h-16 w-16 text-2xl" />
        <InputOTPSlot index={1} className="h-16 w-16 text-2xl" />
        <InputOTPSlot index={2} className="h-16 w-16 text-2xl" />
        <InputOTPSlot index={3} className="h-16 w-16 text-2xl" />
      </InputOTPGroup>
    </InputOTP>
  ),
}
