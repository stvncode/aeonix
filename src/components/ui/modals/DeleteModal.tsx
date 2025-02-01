import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Flex } from "@/components/ui/flex"
import { BasicSpinner } from "@/components/ui/spinner"
import React, { ReactNode, useCallback, useEffect } from "react"

export interface DeleteModalProps {
  openState: [boolean, (isOpen: boolean) => void]
  onDelete: () => void
  title: string
  subtitle: string | ReactNode
  isPending?: boolean
  trigger?: React.ReactNode
}

export const DeleteModal = ({
  openState: [open, setOpen],
  trigger,
  onDelete,
  title,
  subtitle,
  isPending,
}: DeleteModalProps) => {
  const onConfirm = useCallback(() => {
    onDelete()
    setOpen(false)
  }, [onDelete, setOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      if (e.key === "Enter" && !isPending) {
        e.preventDefault()
        onConfirm()
      }

      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, isPending, onConfirm, setOpen])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent style={{ width: "31rem" }}>
        <DialogTitle className="-mt-1">{title}</DialogTitle>
        <DialogDescription className="mt-1.5 max-w-[600px] truncate">
          {subtitle}
        </DialogDescription>
        <Flex align="center" justify="between" className="gap-2 mt-10">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            {isPending ? <BasicSpinner /> : "Delete"}
          </Button>
        </Flex>
      </DialogContent>
    </Dialog>
  )
}
