import { Button } from "@/components/ui/button"
import { SonnerToaster } from "@/components/ui/sonner"
import { Meta, StoryObj } from "@storybook/react/*"
import { toast } from "sonner"

const meta = {
  title: "Components/SonnerToaster",
  component: SonnerToaster,
  tags: ["autodocs"],
} satisfies Meta<typeof SonnerToaster>

export default meta
type Story = StoryObj<typeof SonnerToaster>

export const Default: Story = {
  render: () => (
    <>
      <SonnerToaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </>
  ),
}
