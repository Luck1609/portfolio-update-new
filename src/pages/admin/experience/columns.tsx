import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { DynamicActionButtons } from '@/components/data-table/action-buttons';
import { Typography } from "@/components/typography";
import { getAssetURL } from '@/lib/utils';
import { Experience } from '.';

const columns = (url: string): ColumnDef<Experience>[] => {

  return [
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
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      header: "Name",
      cell: (({ row: { original: { image, company } } }) => <div className="flex items-center space-x-2">
        <img src={getAssetURL(`/${JSON.parse(String(image))?.url}`)} alt="" className="w-28 h-20 rounded" />
        <Typography>{company}</Typography>
      </div>)
    },
    {
      accessorKey: "role",
      header: "Role"
    },
    {
      accessorKey: "startDate",
      header: "Start date"
    },
    {
      accessorKey: "endDate",
      header: "End date"
    },
    {
      id: "actions",
      cell: ({ row: { original: { id } } }) => {
        return (
          <DynamicActionButtons
            actions={{
              view: {
                show: false,
              },
              edit: {
                show: true,
                url: `${url}/edit/${id}`
              },
              delete: true,
              url: `/experience/${id}`,
              mutate: '/experience',
              name: 'Experience'
            }}
          />
        )
      }
    },
  ]
}

export default columns