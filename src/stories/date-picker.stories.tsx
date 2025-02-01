import { DatePicker } from "@/components/ui/date-picker"
import { Meta } from "@storybook/react/*"

const meta = {
  title: "Date Picker",
  component: DatePicker,
  argTypes: {
    value: {
      control: "date",
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof DatePicker>

export default meta

export const Default = (args: typeof DatePicker) => <DatePicker {...args} />
