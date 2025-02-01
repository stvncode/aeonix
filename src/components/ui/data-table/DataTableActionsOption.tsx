import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ReactChildren } from "@/types/react"
import { Table } from "@tanstack/react-table"
import { SettingsIcon } from "lucide-react"

interface DataTableActionsOptionProps<TData> {
  table: Table<TData>
}

export function DataTableActionsOption<TData>({
  table,
  children,
}: DataTableActionsOptionProps<TData> & ReactChildren) {
  const selectedRows = table.getSelectedRowModel().rows
  const isAtLeastOneRowSelected = selectedRows.length > 0

  return isAtLeastOneRowSelected ? (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="hidden h-9 lg:flex">
            <SettingsIcon size={17} className="mr-2 mt-0.5" />
            Actions
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  ) : null
}
