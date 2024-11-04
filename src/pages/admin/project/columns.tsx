import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { DynamicActionButtons } from '@/components/data-table/action-buttons';
import { Typography, TypographySm } from "@/components/typography";
import { cn, getAssetURL } from '@/lib/utils';
import { Project, projectFormProps } from '.';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { IconEdit, IconRestore, IconTrash, IconX } from '@tabler/icons-react';
import NoticeModal from '@/components/notice-modal';
import FormModal from '@/components/form/modal';
import { Image } from '@/shared/types';
import { updateProjectValidation } from './form';
import { usePostMutation } from '@/lib/feature/api';

const columns: ColumnDef<Project>[] = [
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
    cell: (({ row: { original: { image, name } } }) => {
      const logo = image as Image;
      
      return (
        <div className="flex items-center space-x-2">
          <img src={getAssetURL(logo.url)} alt="" className="w-16 h-16 rounded" />
          <Typography>{name}</Typography>
        </div>
      )
    })
  },
  {
    header: "Status",
    cell: ({ row: { original: { publishedAt } } }) => <TypographySm className={cn("p-2 px-3 rounded-lg", publishedAt ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500")}>{publishedAt ? "Published" : "Unpublished"}</TypographySm>
  },
  {
    id: "actions",
    cell: ({ row: { original: { id, ...data } } }) => {
      const [submitAction] = usePostMutation()
      const softDelete = async (status: string = "") => {
        await submitAction({ url: `/project${status}/${id}`, method: "delete"})
      }
      
      return (
        <DynamicActionButtons
          buttons={[
            {
              component: (
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="p-0">
                  <FormModal
                    {...{
                      ...projectFormProps,
                      button: {
                        label: <>
                          <IconEdit className="h-5 w-5" />
                          <TypographySm className="font-normal">Edit</TypographySm>
                        </>,
                      },
                      title: "Edit Project",
                      form: {
                        ...projectFormProps.form,
                        values: {
                          ...data,
                          stack: JSON.parse(data.stack).join(","),
                          picture: data.image
                        },
                        validation: updateProjectValidation,
                        submitHandler: {
                          ...projectFormProps.form.submitHandler,
                          url: `/project/${id}`,
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
                    {data.publishedAt ? <IconX className="h-5 w-5" /> : <IconRestore className="h-5 w-5" />}
                    <TypographySm className="font-normal">{data.publishedAt ? "Unpublish" : "Publish"}</TypographySm>
                  </>}
                  title="Are you sure of this action?"
                  description={`This action will ${data.publishedAt ? "remove the project from public view" : "show the project in public view"}. Do you still want to continue with this action?`}
                  action={() => softDelete("-status")}
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
                  action={() => softDelete("")}
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