import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Meta, StoryObj } from "@storybook/react"
import "../index.css"

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is an accordion?</AccordionTrigger>
        <AccordionContent>
          An accordion is a vertically stacked set of interactive headings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          It uses the WAI-ARIA design pattern with keyboard navigation support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes, you can customize styles and behavior using Tailwind CSS and
          props.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" disabled>
      <AccordionItem value="item-1">
        <AccordionTrigger>Disabled Accordion</AccordionTrigger>
        <AccordionContent>
          This accordion is disabled and cannot be interacted with.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithBorders: Story = {
  render: () => (
    <Accordion
      type="single"
      className="border border-border rounded-lg"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>With Borders</AccordionTrigger>
        <AccordionContent>
          This accordion has borders around the trigger and content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>With two items</AccordionTrigger>
        <AccordionContent>
          This accordion has borders around the trigger and content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
