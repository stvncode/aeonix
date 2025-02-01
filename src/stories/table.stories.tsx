import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/ui/data-table/DataTable"
import { DataTableColumnHeader } from "@/components/ui/data-table/DataTableColumnHeader"
import { Table } from "@/components/ui/table"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { Meta, StoryObj } from "@storybook/react/*"
import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof Table>

interface TableType {
  id: string
  firstName: string
  lastName: string
  age: number
  city: string
}

const listOfNames: TableType[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "New York",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    city: "Los Angeles",
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Smith",
    age: 30,
    city: "Chicago",
  },
  {
    id: "4",
    firstName: "Jane",
    lastName: "Smith",
    age: 27,
    city: "Houston",
  },
  {
    id: "5",
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "New York",
  },
  {
    id: "6",
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    city: "Los Angeles",
  },
  {
    id: "7",
    firstName: "John",
    lastName: "Smith",
    age: 30,
    city: "Chicago",
  },
  {
    id: "8",
    firstName: "Jane",
    lastName: "Smith",
    age: 27,
    city: "Houston",
  },
  {
    id: "9",
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "New York",
  },
  {
    id: "10",
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    city: "Los Angeles",
  },
  {
    id: "11",
    firstName: "John",
    lastName: "Smith",
    age: 30,
    city: "Chicago",
  },
  {
    id: "12",
    firstName: "Jane",
    lastName: "Smith",
    age: 27,
    city: "Houston",
  },
  {
    id: "13",
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "New York",
  },
  {
    id: "14",
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    city: "Los Angeles",
  },
]

const columns: () => ColumnDef<TableType>[] = () => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="FirstName" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[400px] truncate">{row.getValue("firstName")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="lastName" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[400px] truncate">{row.getValue("lastName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Age" />
    ),
    cell: ({ row }) => <div>{row.getValue("age")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => <div>{row.getValue("city")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: () => (
      <Button size="roundIcon" variant="ghost">
        <DotsVerticalIcon className="h-4 w-4" />
        <span className="sr-only">Open menu</span>
      </Button>
    ),
    enableSorting: false,
    enableHiding: true,
  },
]

export const Default: Story = {
  render: () => {
    const [keyword, onChange] = useState("")

    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState<10 | 20 | 30 | 40 | 50>(10)

    const filteredNames = listOfNames.filter(
      (name) =>
        name.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
        name.lastName.toLowerCase().includes(keyword.toLowerCase())
    )

    const startIdx = (page - 1) * pageSize
    const endIdx = startIdx + pageSize

    const data = filteredNames.slice(startIdx, endIdx)

    return (
      <DataTable
        columns={columns()}
        data={data}
        pagination={{
          page,
          pageSize,
          total: filteredNames.length > 10 ? 15 : 10,
          onChange: (page, pageSize) => {
            setPage(page)
            setPageSize(pageSize)
          },
        }}
        search={{
          keyword,
          onChange,
        }}
        isLoading={false}
        emptyText="No documents found"
        navigateHandler={({ original: { firstName } }) =>
          console.log(firstName)
        }
      >
        <Button size="sm">Add button</Button>
      </DataTable>
    )
  },
}
