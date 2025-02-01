import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ReactChildren } from "@/types/react"
import { DotsVerticalIcon } from "@radix-ui/react-icons"

export const DataTableRowActions = ({ children }: ReactChildren) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
      >
        <DotsVerticalIcon className="h-4 w-4" />
        <span className="sr-only">Open menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-[160px]">
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
)
