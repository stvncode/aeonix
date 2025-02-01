import { TypeWriter } from "@/components/ui/type-writer"
import { Meta, StoryObj } from "@storybook/react/*"

const meta = {
  title: "Components/TypeWriter",
  component: TypeWriter,
  tags: ["autodocs"],
} satisfies Meta<typeof TypeWriter>

export default meta
type Story = StoryObj<typeof TypeWriter>

export const Default: Story = {
  render: () => <TypeWriter text="Hello, World!" delay={100} />,
}
