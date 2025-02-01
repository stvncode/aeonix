import { Button } from "@/components/ui/button"
import { Meta, StoryObj } from "@storybook/react"
import { Camera, Loader2, Mail } from "lucide-react"
import "../index.css"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "success",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "default",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2" /> Login with Email
      </>
    ),
  },
}

export const IconButton: Story = {
  args: {
    size: "icon",
    children: <Camera />,
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" /> Please wait
      </>
    ),
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#">Anchor Button</a>,
  },
}
