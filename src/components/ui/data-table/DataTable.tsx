import { Flex } from "@/components/ui/flex"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ReactChildren } from "@/types/react"
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import * as React from "react"
import { ReactNode } from "react"
import { TableBodyEmpty, TableBodySkeleton } from "./DataTableElements"
import { DataTablePagination } from "./DataTablePagination"
import { DataTableToolbar } from "./DataTableToolbar"
import { getElementPath } from "./utils"

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pagination: {
    page: number
    pageSize: 10 | 20 | 30 | 40 | 50
    total: number
    onChange: (page: number, pageSize: 10 | 20 | 30 | 40 | 50) => void
  }
  search: {
    keyword: string
    onChange: (keyword: string) => void
  }
  isLoading: boolean
  emptyText: string
  viewOption?: boolean
  actions?: ReactNode
  navigateHandler?: (row: Row<TData>) => void
}

export function DataTable<TData, TValue>({
  columns,
  data,
  children,
  search,
  pagination,
  actions,
  isLoading,
  viewOption,
  navigateHandler,
  emptyText,
}: DataTableProps<TData, TValue> & ReactChildren) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  // We need to do that otherwise the row click will happen on actions event
  const handleRowClick = React.useCallback(
    (e: React.MouseEvent, row: Row<TData>) => {
      const target = e.target as HTMLElement
      const path = getElementPath(target)

      const shouldPreventNavigation = path.some((element) => {
        if (
          element.matches(
            'button, [role="button"], input[type="checkbox"], .no-navigate, a, [data-prevent-navigate]'
          )
        ) {
          return true
        }
        if (
          element.hasAttribute("disabled") ||
          element.getAttribute("aria-disabled") === "true" ||
          element.classList.contains("disabled") ||
          element.dataset.disabled === "true"
        ) {
          return true
        }
        if (
          element.getAttribute("role") === "menu" ||
          element.getAttribute("role") === "dialog" ||
          element.getAttribute("role") === "listbox"
        ) {
          return true
        }
        return false
      })

      if (shouldPreventNavigation) {
        return
      }

      const modalOrDropdown = document.querySelector(
        '[role="dialog"], [role="menu"], [role="listbox"]'
      )
      if (modalOrDropdown) {
        return
      }

      navigateHandler?.(row)
    },
    [navigateHandler]
  )

  return (
    <div className="h-full">
      <DataTableToolbar
        table={table}
        search={search}
        actions={actions}
        viewOption={viewOption}
      >
        {children}
      </DataTableToolbar>
      <Flex direction="column" className="mt-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          {isLoading ? (
            <TableBodySkeleton
              columns={columns}
              perPage={pagination.pageSize}
            />
          ) : data?.length ? (
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={(e) => handleRowClick(e, row)}
                >
                  {row.getVisibleCells().map((cell, index, array) => (
                    <TableCell
                      key={cell.id}
                      className={`${
                        index === array.length - 1 ? "w-[1%]" : ""
                      } ${navigateHandler ? "cursor-pointer" : ""}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBodyEmpty columnCount={columns.length}>
              <Flex align="center" direction="column" className="gap-2">
                <div className="font-bold text-xl">{emptyText}</div>
                <div className="text-secondary-foreground/50">
                  Try adjusting your filters or search criteria
                </div>
              </Flex>
            </TableBodyEmpty>
          )}
        </Table>
        <DataTablePagination table={table} pagination={pagination} />
      </Flex>
    </div>
  )
}
