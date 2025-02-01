import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Flex } from "@/components/ui/flex"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { BasicSpinner } from "@/components/ui/spinner"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const renameSchema = z.object({
  name: z.string().min(1).max(35, "The name exceeds 35 characters."),
})

export type RenameSchema = z.infer<typeof renameSchema>

export interface RenameModalProps {
  openState: [boolean, (isOpen: boolean) => void]
  onRename: (name: string) => void
  title: string
  isLoading: boolean
  subtitle?: string
  trigger?: React.ReactNode
  defaultName?: string
}

export const RenameModal = ({
  openState: [open, setOpen],
  trigger,
  onRename,
  title,
  subtitle,
  isLoading,
  defaultName,
}: RenameModalProps) => {
  const form = useForm<RenameSchema>({
    resolver: zodResolver(renameSchema),
    defaultValues: {
      name: defaultName,
    },
  })

  const currentValue = form.watch("name")
  const isValid = form.formState.isValid
  const hasChanged =
    currentValue?.trim() !== defaultName?.trim() && currentValue?.trim() !== ""

  const onConfirm = ({ name }: { name: string }) => {
    if (!hasChanged) return
    onRename(name)
    setOpen(false)
    form.reset()
  }

  const handleCancel = () => {
    form.reset({ name: defaultName })
    setOpen(false)
  }

  React.useEffect(() => {
    if (!open) {
      form.reset({ name: defaultName })
    }
  }, [open, defaultName, form])

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          handleCancel()
        }
        setOpen(isOpen)
      }}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="w-[31rem]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {subtitle && <DialogDescription>{subtitle}</DialogDescription>}
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onConfirm)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="New chat" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Maximum 35 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Flex align="center" justify="between" className="gap-2">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isValid || !hasChanged || isLoading}
              >
                {isLoading ? <BasicSpinner /> : "Rename"}
              </Button>
            </Flex>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
