import { DataTable } from '@/components/data-table'
import columns from './columns'
import BaseTableHeader from '@/components/data-table/table-header'
import { TypographyH5 } from '@/components/typography'
import useUrlQuery from '@/hooks/use-url-query'
import ExperienceForm, { experienceValidation } from './form'
import { useGetQuery } from '@/lib/feature/api'
import { Image } from '@/shared/types'
import { IconPlus } from '@tabler/icons-react'
import { ModalFormProps } from '@/components/form/modal'




export type Experience = {
  id?: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  image: Image | string;
  stack: string;
  publishedAt?: Date | null
}

export default function Experience() {
  const {data, isLoading} = useGetQuery({url: "/experience", method: "get"})
  const { updateQuery } = useUrlQuery()
  const experiences = data as Experience[]
  

  return (
    <DataTable
      columns={columns}
      data={experiences ?? []}
      isLoading={isLoading}
      // meta={updateQuery}
      components={{
        header: () => (
          <BaseTableHeader
            addButtonProps={experienceFormProps}
            statusFilterProps={{
              show: false,
              component: <TypographyH5>Experience Management</TypographyH5>
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


export const experienceFormProps: ModalFormProps<Omit<Experience, "image"> & {logo: string}> =  ({
    button: {
      label: <>
        <IconPlus size={18} />
        <span className="">New Experience</span>
      </>,
      className: "h-12 border-none",
      variant: "default"
    },
    title: "Add New Experience",
    // description: "Add new experince to your profile. Click save when you're done.",
    className: "md:max-w-3xl",
    form: {
      validation: experienceValidation,
      values: {
        company: "",
        role: "",
        description: "",
        startDate: "",
        endDate: "",
        logo: "",
        stack: ""
      },
      component: <ExperienceForm />,
      submitHandler: {
        url: "/experience",
        method: "post",
        handler: (data: Omit<Experience, "logo"> & {logo: File}) => {
          const { logo, stack, ...fields } = data
          const payload = new FormData();

          (Object.entries(fields)).forEach(([key, value]) => {
            payload.append(key, String(value))
          });

          const tools = stack.split(",")
          tools.forEach((tool: string) => {
            payload.append("stack[]", tool.trim())
          });

          payload.append("logo", logo)

          return payload
        }
      }
    }
  })