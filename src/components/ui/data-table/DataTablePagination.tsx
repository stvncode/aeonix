import { Button } from "@/components/ui/button"
import { Flex } from "@/components/ui/flex"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  pagination: {
    page: number
    pageSize: 10 | 20 | 30 | 40 | 50
    total: number
    onChange: (page: number, pageSize: 10 | 20 | 30 | 40 | 50) => void
  }
}

export function DataTablePagination<TData>({
  table,
  pagination,
}: DataTablePaginationProps<TData>) {
  const totalPages = Math.ceil(pagination.total / pagination.pageSize)

  const handlePageSizeChange = (value: string) => {
    const newPageSize = Number(value) as 10 | 20 | 30 | 40 | 50
    pagination.onChange(1, newPageSize)
  }

  const goToFirstPage = () => {
    pagination.onChange(1, pagination.pageSize)
  }

  const goToPreviousPage = () => {
    pagination.onChange(Math.max(1, pagination.page - 1), pagination.pageSize)
  }

  const goToNextPage = () => {
    pagination.onChange(
      Math.min(totalPages, pagination.page + 1),
      pagination.pageSize
    )
  }

  const goToLastPage = () => {
    pagination.onChange(totalPages, pagination.pageSize)
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 border-x border-b border-border rounded-b-lg bg-background">
      <Flex align="center" className="gap-2">
        {table.getIsSomeRowsSelected() && (
          <>
            <div className="text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <Separator orientation="vertical" className="mx-2 h-4" />
          </>
        )}
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Items per page</p>
          <Select
            value={`${pagination.pageSize}`}
            onValueChange={handlePageSizeChange}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Separator orientation="vertical" className="mx-2 h-4" />
        <div className="flex-1 text-sm text-muted-foreground">
          {pagination.total} {pagination.total > 1 ? "items" : "item"} in total
        </div>
      </Flex>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {pagination.page} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={goToFirstPage}
            disabled={pagination.page <= 1}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={goToPreviousPage}
            disabled={pagination.page <= 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={goToNextPage}
            disabled={pagination.page >= totalPages}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={goToLastPage}
            disabled={pagination.page >= totalPages}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
