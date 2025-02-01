import { Input, InputProps } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Meta, StoryObj } from "@storybook/react"
import { Search } from "lucide-react"
import "../index.css"

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "password", "email", "search", "file"],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default = {
  render: (args) => <Input type="email" placeholder="Email" {...args} />,
} as Story

export const Disabled = {
  render: (args) => (
    <Input disabled type="email" placeholder="Email" {...args} />
  ),
} as Story

export const WithLabel = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" {...args} />
    </div>
  ),
} as Story

export const File = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" {...args} />
    </div>
  ),
} as Story

export const WithIcon = {
  render: (args: InputProps) => (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 mt-0.5 text-muted-foreground" />
      <Input className="pl-8" placeholder="Search..." {...args} />
    </div>
  ),
} as Story
