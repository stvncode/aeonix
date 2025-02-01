import { Slider } from "@/components/ui/slider"
import { Meta, StoryObj } from "@storybook/react/*"

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => <Slider defaultValue={[33]} max={100} step={1} />,
}
