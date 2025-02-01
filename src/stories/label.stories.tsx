import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Meta, StoryObj } from "@storybook/react"
import "../index.css"

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => <Label>Accept terms and conditions</Label>,
}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      {/* <Checkbox id="terms" /> */}
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="username"
        className="after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Username
      </Label>
      <Input id="username" placeholder="Username" />
    </div>
  ),
}
