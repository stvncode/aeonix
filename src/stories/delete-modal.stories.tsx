import { Button } from "@/components/ui/button"
import { Flex } from "@/components/ui/flex"
import { DeleteModal } from "@/components/ui/modals/DeleteModal"
import { Meta, StoryObj } from "@storybook/react/*"
import { useState } from "react"

const meta = {
  title: "Components/DeleteModal",
  component: DeleteModal,
  tags: ["autodocs"],
} satisfies Meta<typeof DeleteModal>

export default meta
type Story = StoryObj<typeof DeleteModal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <DeleteModal
        onDelete={() => console.log("Delete")}
        trigger={<Button onClick={() => setOpen(true)}>Open</Button>}
        openState={[open, setOpen]}
        subtitle={
          <Flex className="gap-1">
            <div className="font-bold max-w-[200px] truncate">Storybook</div>
            <div>will be deleted permanently.</div>
          </Flex>
        }
        title="Delete this document?"
      />
    )
  },
}
