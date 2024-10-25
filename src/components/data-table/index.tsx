import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTableProps } from "./types"
import { TypographySm } from "../typography"
import { TooltipButton } from "../tooltip-button"
import Container from "../container"
import { IconFolderSymlink, IconTrash } from "@tabler/icons-react"
import { Loading } from "../form/button"


export function DataTable<TData, TValue>({
  columns,
  data,
  components,
  meta,
  isLoading = true,
}: DataTableProps<TData, TValue>) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // pageCount: meta?.pageCount,
    meta,
    // initialState: {
    //   pagination: {
    //     pageIndex: meta?.page ? meta?.page - 1 : 0,
    //     pageSize: meta?.pageSize ?? 10
    //   }
    // }
  })

  return (
    <Container className="max-w-7xl lg:py-8">
      <div className="bg-white lg:p-5 rounded-lg">
        {components?.header(table)}

        {
          table.getFilteredSelectedRowModel().rows.length > 0 &&
          <div className="w-full p-2 bg-secondary bg-opacity-15 rounded-md theme-text flex items-center justify-between">
            <TypographySm><span className="font-semibold">{table.getFilteredSelectedRowModel().rows.length}</span> rows selected</TypographySm>

            <div className="flex items-center space-x-3">
              <TooltipButton label="Delete">
                <div className="flex items-center space-x-1 bg-red-500 p-2 rounded-md text-sm">
                  <IconTrash size={18} />
                  <span>Delete</span>
                </div>
              </TooltipButton>

              <TooltipButton label="Export data">
                <div className="flex items-center space-x-1 bg-dark-border p-2 rounded-md text-sm">
                  <IconFolderSymlink size={18} />
                  <span>Export</span>
                </div>
              </TooltipButton>
            </div>
          </div>
        }

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="dark:text-dark-text px-2 font-medium">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {
              isLoading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-56 text-center">
                    <Loading text="Loading data, please wait..." />
                  </TableCell>
                </TableRow>
              ) : (
                table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="dark:border-dark-border dark:text-dark-text hover:!bg-secondary hover:!bg-opacity-15"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="p-2">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )
              )
            }
          </TableBody>
        </Table>

      </div>
  </Container>
  )
}
