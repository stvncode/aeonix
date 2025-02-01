import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import "../index.css"

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="default" id="default" className="mt-1" />
        <div>
          <Label htmlFor="default" className="font-normal">
            Default
          </Label>
          <p className="text-sm text-muted-foreground">
            System default spacing and density.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="comfortable" id="comfortable" className="mt-1" />
        <div>
          <Label htmlFor="comfortable" className="font-normal">
            Comfortable
          </Label>
          <p className="text-sm text-muted-foreground">
            Increased spacing for better readability.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="compact" id="compact" className="mt-1" />
        <div>
          <Label htmlFor="compact" className="font-normal">
            Compact
          </Label>
          <p className="text-sm text-muted-foreground">
            Reduced spacing to fit more content.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <RadioGroup defaultValue="light">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="light" id="light" />
        <Label htmlFor="light" className="flex items-center space-x-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="4" fill="currentColor" />
            <path
              d="M8 0v2M8 14v2M16 8h-2M2 8H0M14 14l-1.5-1.5M3.5 3.5L2 2M14 2l-1.5 1.5M3.5 12.5L2 14"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span>Light</span>
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark" id="dark" />
        <Label htmlFor="dark" className="flex items-center space-x-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.707 1A7.002 7.002 0 0 0 15 8A7.002 7.002 0 0 1 7.707 15 7 7 0 1 1 7.707 1z"
              fill="currentColor"
            />
          </svg>
          <span>Dark</span>
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" disabled />
        <Label htmlFor="disabled-one" className="text-muted-foreground">
          Disabled Option
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" disabled />
        <Label htmlFor="disabled-two" className="text-muted-foreground">
          Disabled Option
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const Interactive: Story = {
  render: function InteractiveRadioGroup() {
    const [plan, setPlan] = useState("hobby")
    const [billing, setBilling] = useState("monthly")

    const plans = {
      hobby: { monthly: "$15", yearly: "$150" },
      pro: { monthly: "$25", yearly: "$250" },
      enterprise: { monthly: "$50", yearly: "$500" },
    }

    return (
      <div className="space-y-6">
        <RadioGroup value={plan} onValueChange={setPlan}>
          {Object.entries(plans).map(([key]) => (
            <div
              key={key}
              className="flex items-center justify-between space-x-2 rounded-lg border p-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={key} id={key} />
                <Label htmlFor={key} className="font-normal capitalize">
                  {key}
                </Label>
              </div>
              <span className="text-sm font-bold">
                {
                  plans[key as keyof typeof plans][
                    billing as keyof (typeof plans)[keyof typeof plans]
                  ]
                }
                <span className="ml-1 text-muted-foreground font-normal">
                  /{billing}
                </span>
              </span>
            </div>
          ))}
        </RadioGroup>

        <RadioGroup
          value={billing}
          onValueChange={setBilling}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly">Monthly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yearly" id="yearly" />
            <Label htmlFor="yearly">Yearly</Label>
          </div>
        </RadioGroup>
      </div>
    )
  },
}
