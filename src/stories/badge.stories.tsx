import { Badge } from "@/components/ui/badge"
import type { Meta, StoryObj } from "@storybook/react"
import "../index.css"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: () => <Badge>Badge</Badge>,
}

export const Secondary: Story = {
  render: () => <Badge variant="secondary">Secondary</Badge>,
}

export const Destructive: Story = {
  render: () => <Badge variant="destructive">Destructive</Badge>,
}

export const Outline: Story = {
  render: () => <Badge variant="outline">Outline</Badge>,
}

export const WithIcon: Story = {
  render: () => (
    <Badge>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
      Success
    </Badge>
  ),
}

export const BadgeGroup: Story = {
  render: () => (
    <div className="space-x-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}
