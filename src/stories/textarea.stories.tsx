import { Label } from "@/components/ui/label"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import "../index.css"

const meta = {
  title: "Components/TextArea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: () => <Textarea placeholder="Type your message here." />,
}

export const Disabled: Story = {
  render: () => <Textarea placeholder="Type your message here." disabled />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-xs text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
}
