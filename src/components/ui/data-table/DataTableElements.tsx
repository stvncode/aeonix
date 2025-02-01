import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton } from "@/components/ui/skeleton"
import { ReactChildren } from "@/types/react"
import { ColumnDef } from "@tanstack/react-table"

export const TableBodyEmpty = ({
  children,
  columnCount,
}: { columnCount: number } & ReactChildren) => (
  <tbody className="bg-background">
    <tr>
      <td colSpan={columnCount}>
        <div className="h-60 flex items-center justify-center">{children}</div>
      </td>
    </tr>
  </tbody>
)

export const TableBodySkeleton = <TData, TValue>({
  perPage,
  columns,
  includeCheckbox = false,
}: {
  perPage: number
  columns: ColumnDef<TData, TValue>[]
  includeCheckbox?: boolean
}) => (
  <tbody className="bg-background">
    {Array.from({ length: perPage }).map((_, rowIndex) => (
      <tr key={rowIndex}>
        {includeCheckbox && (
          <td className="p-2 pl-4">
            <Checkbox disabled checked={false} />
          </td>
        )}
        {columns.map((column, colIndex) => {
          const skeletonWidth =
            column.id === "actions" || column.id === "select" ? "20px" : "100px"

          return (
            <td key={colIndex} className="p-4">
              <Skeleton style={{ width: skeletonWidth, height: "16px" }} />
            </td>
          )
        })}
      </tr>
    ))}
  </tbody>
)
