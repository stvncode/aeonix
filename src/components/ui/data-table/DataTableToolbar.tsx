import { Button } from "@/components/ui/button"
import { Flex } from "@/components/ui/flex"
import { Input } from "@/components/ui/input"
import { useDebounce } from "@/hooks/useDebounce"

import { ReactChildren } from "@/types/react"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { ReactNode, useEffect, useState } from "react"
import { DataTableActionsOption } from "./DataTableActionsOption"
import { DataTableViewOptions } from "./DataTableViewOptions"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  search: {
    keyword: string
    onChange: (keyword: string) => void
  }
  viewOption?: boolean
  actions?: ReactNode
}

export function DataTableToolbar<TData>({
  table,
  children,
  actions,
  search,
  viewOption,
}: DataTableToolbarProps<TData> & ReactChildren) {
  const [searchTerm, setSearchTerm] = useState(search.keyword)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const hasSearchTerm = searchTerm && searchTerm.length > 0

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleResetSearch = () => {
    setSearchTerm("")
  }

  useEffect(() => {
    setSearchTerm(search.keyword)
  }, [search.keyword])

  useEffect(() => {
    if (debouncedSearchTerm !== search.keyword) {
      search.onChange(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm, search])

  return (
    <div className="flex items-center justify-between pb-2">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-[150px] lg:w-[250px]"
        />
        {hasSearchTerm && (
          <Button
            variant="ghost"
            onClick={handleResetSearch}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Flex className="ml-auto gap-3">
        {actions && (
          <DataTableActionsOption table={table}>
            {actions}
          </DataTableActionsOption>
        )}
        {viewOption && <DataTableViewOptions table={table} />}
        {children}
      </Flex>
    </div>
  )
}
