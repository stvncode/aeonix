import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarProps,
} from "@/components/ui/avatar"
import type { Meta, StoryObj } from "@storybook/react"
import "../index.css"

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args: AvatarProps) => (
    <Avatar {...args}>
      <AvatarImage
        src="https://avatar.iran.liara.run/public/28"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: (args: AvatarProps) => (
    <Avatar {...args}>
      <AvatarImage src="/broken-image.jpg" alt="@user" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const CustomSize: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar className="h-6 w-6">
        <AvatarImage
          src="https://avatar.iran.liara.run/public/28"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="https://avatar.iran.liara.run/public/28"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage
          src="https://avatar.iran.liara.run/public/28"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Initials: Story = {
  render: (args: AvatarProps) => (
    <Avatar {...args}>
      <AvatarFallback>ST</AvatarFallback>
    </Avatar>
  ),
}
