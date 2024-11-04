import { DataTable } from '@/components/data-table'
import columns from './columns'
import BaseTableHeader from '@/components/data-table/table-header'
import { TypographyH5 } from '@/components/typography'
import useUrlQuery from '@/hooks/use-url-query'
import ProjectForm, { projectValidation } from './form'
import { useGetQuery } from '@/lib/feature/api'
import { Image } from '@/shared/types'
import { IconPlus } from '@tabler/icons-react'
import { ModalFormProps } from '@/components/form/modal'




export type Project = {
  id?: string;
  name: string;
  description: string;
  image: Image | string;
  stack: string;
  publishedAt?: Date | null
}

export default function Project() {
  const {data, isLoading} = useGetQuery({url: "/project", method: "get"})
  const { updateQuery } = useUrlQuery()
  const projects = data as Project[]
  

  return (
    <DataTable
      columns={columns}
      data={projects ?? []}
      isLoading={isLoading}
      // meta={updateQuery}
      components={{
        header: () => (
          <BaseTableHeader
            addButtonProps={projectFormProps}
            statusFilterProps={{
              show: false,
              component: <TypographyH5>Project Management</TypographyH5>
            }}
            searchComponentProps={{
              show: true,
              updateQuery
            }}
          />
        )
      }}
    />
  )
}


export const projectFormProps: ModalFormProps<Omit<Project, "image"> & {picture: string}> =  ({
    button: {
      label: <>
        <IconPlus size={18} />
        <span className="">New Project</span>
      </>,
      className: "h-12 border-none",
      variant: "default"
    },
    title: "Add New Project",
    // description: "Add new experince to your profile. Click save when you're done.",
    className: "md:max-w-3xl",
    form: {
      validation: projectValidation,
      values: {
        name: "",
        description: "",
        picture: "",
        stack: "",
      },
      component: <ProjectForm />,
      submitHandler: {
        url: "/project",
        method: "post",
        handler: (data: Omit<Project, "logo"> & {picture: File}) => {
          const { picture, stack, ...fields } = data
          const payload = new FormData();

          (Object.entries(fields)).forEach(([key, value]) => {
            payload.append(key, String(value))
          });

          const tools = stack.split(",")
          tools.forEach((tool: string) => {
            payload.append("stack[]", tool.trim())
          });

          payload.append("picture", picture)

          return payload
        }
      }
    }
  })