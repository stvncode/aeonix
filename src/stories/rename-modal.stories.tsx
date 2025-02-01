import { Button } from "@/components/ui/button"
import { RenameModal } from "@/components/ui/modals/RenameModal"
import { Meta, StoryObj } from "@storybook/react/*"
import { PencilIcon } from "lucide-react"
import { useState } from "react"

const meta = {
  title: "Components/RenameModal",
  component: RenameModal,
  tags: ["autodocs"],
} satisfies Meta<typeof RenameModal>

export default meta
type Story = StoryObj<typeof RenameModal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <RenameModal
        defaultName="Rename me"
        onRename={(name) => console.log("Rename", name)}
        openState={[open, setOpen]}
        isLoading={false}
        title="Rename conversation"
        trigger={
          <Button variant="ghost" size="roundIcon">
            <PencilIcon size={16} />
          </Button>
        }
      />
    )
  },
}
