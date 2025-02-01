import { CopyToClipboard } from "@/components/ui/copy-to-clipboard"
import { Meta, StoryObj } from "@storybook/react/*"

const meta = {
  title: "Components/CopyToClipboard",
  component: CopyToClipboard,
  tags: ["autodocs"],
} satisfies Meta<typeof CopyToClipboard>

export default meta
type Story = StoryObj<typeof CopyToClipboard>

export const Default: Story = {
  render: () => <CopyToClipboard tooltipSide="bottom" data="I'm a copy data" />,
}
