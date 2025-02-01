import { Calendar } from "@/components/ui/calendar"

import { Meta, StoryObj } from "@storybook/react/*"
import React from "react"
import "../index.css"

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-[280px]"
      />
    )
  },
}
