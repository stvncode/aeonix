import { BasicSpinner } from "@/components/ui/spinner"
import { Meta, StoryObj } from "@storybook/react/*"

const meta = {
  title: "Components/Spinner",
  component: BasicSpinner,
  tags: ["autodocs"],
} satisfies Meta<typeof BasicSpinner>

export default meta
type Story = StoryObj<typeof BasicSpinner>

export const Default: Story = {
  render: () => <BasicSpinner />,
}
