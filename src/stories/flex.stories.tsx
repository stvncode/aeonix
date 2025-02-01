import { Flex } from "@/components/ui/flex"
import { Meta, StoryObj } from "@storybook/react/*"

const meta = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof Flex>

export const Row: Story = {
  render: () => (
    <Flex align="center" className="gap-2" direction="row">
      <div className="bg-red-500 w-8 h-8">1</div>
      <div className="bg-blue-500 w-8 h-8">2</div>
      <div className="bg-green-500 w-8 h-8">3</div>
    </Flex>
  ),
}

export const Column: Story = {
  render: () => (
    <Flex align="center" className="gap-2" direction="column">
      <div className="bg-red-500 w-8 h-8">1</div>
      <div className="bg-blue-500 w-8 h-8">2</div>
      <div className="bg-green-500 w-8 h-8">3</div>
    </Flex>
  ),
}

export const Justify: Story = {
  render: () => (
    <Flex align="center" className="gap-2" justify="center">
      <div className="bg-red-500 w-8 h-8">1</div>
      <div className="bg-blue-500 w-8 h-8">2</div>
      <div className="bg-green-500 w-8 h-8">3</div>
    </Flex>
  ),
}
