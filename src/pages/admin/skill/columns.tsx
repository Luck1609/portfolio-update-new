import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { DynamicActionButtons } from '@/components/data-table/action-buttons';
import { Typography, TypographySm } from "@/components/typography";
import { cn, getAssetURL } from '@/lib/utils';
import { Experience, experienceFormProps } from '.';
import dayjs from 'dayjs';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { IconEdit, IconTrash, IconX } from '@tabler/icons-react';
import NoticeModal from '@/components/notice-modal';
import FormModal from '@/components/form/modal';
import { Image } from '@/shared/types';
import { updateExperienceValidation } from './form';
import { usePostMutation } from '@/lib/feature/api';

const columns: ColumnDef<Experience>[] = [
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
    cell: (({ row: { original: { image, company } } }) => {
      const logo = image as Image;
      
      return (
        <div className="flex items-center space-x-2">
          <img src={getAssetURL(logo.url)} alt="" className="w-16 h-16 rounded" />
          <Typography>{company}</Typography>
        </div>
      )
    })
  },
  {
    accessorKey: "role",
    header: "Role"
  },
  {
    accessorKey: "startDate",
    header: "Start date",
    cell: ({ row: { original: { startDate } } }) => <span className="">{dayjs(startDate).format("MMM, YYYY")}</span>
  },
  {
    accessorKey: "endDate",
    header: "End date",
    cell: ({ row: { original: { endDate } } }) => <span className="">{dayjs(endDate).format("MMM, YYYY")}</span>
  },
  {
    header: "Status",
    cell: ({ row: { original: { publishedAt } } }) => <TypographySm className={cn("p-2 px-3 rounded-lg", publishedAt ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500")}>{publishedAt ? "Published" : "Unpublished"}</TypographySm>
  },
  {
    id: "actions",
    cell: ({ row: { original: { id, ...data } } }) => {
      const [submitAction] = usePostMutation()
      const softDelete = async (isDelete?: boolean) => {
        await submitAction({ url: `/experience${isDelete ? "" : "-status"}/${id}`, method: "delete"})
      }
      
      return (
        <DynamicActionButtons
          buttons={[
            {
              component: (
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="p-0">
                  <FormModal
                    {...{
                      ...experienceFormProps,
                      button: {
                        label: <>
                          <IconEdit className="h-5 w-5" />
                          <TypographySm className="font-normal">Edit</TypographySm>
                        </>,
                      },
                      title: "Edit Experience",
                      form: {
                        ...experienceFormProps.form,
                        values: {
                          ...data,
                          stack: JSON.parse(data.stack).join(","),
                          startDate: dayjs(data.startDate).format("YYYY-MM-DD"),
                          endDate: dayjs(data.endDate).format("YYYY-MM-DD"),
                          logo: data.image
                        },
                        validation: updateExperienceValidation,
                        submitHandler: {
                          ...experienceFormProps.form.submitHandler,
                          url: `/experience/${id}`,
                          method: "patch"
                        }
                      }
                    }}
                  />
                </DropdownMenuItem>
              )
            },
            {
              component: <DropdownMenuItem onClick={(e) => e.preventDefault()} className="p-0">
                <NoticeModal
                  trigger={<>
                    <IconX className="h-5 w-5" />
                    <TypographySm className="font-normal">Unpublish</TypographySm>
                  </>}
                  title="Are you sure of this action?"
                  description="This action will remove the experience from public view. Do you still want to continue with this action?"
                  action={softDelete}
                />
              </DropdownMenuItem>
            },
            {
              component: <DropdownMenuItem onClick={(e) => e.preventDefault()} className="p-0">
                <NoticeModal
                  trigger={<>
                    <IconTrash className="h-5 w-5" />
                    <TypographySm className="font-normal">Delete</TypographySm>
                  </>}
                  title="Are you sure of this action?"
                  description="This action will permanently delete this from the database. Do you still want to continue with this action?"
                  action={softDelete}
                />
              </DropdownMenuItem>
            }
          ]}
        />
      )
    }
  },
]


export default columns