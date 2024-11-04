import { DataTable } from '@/components/data-table'
import columns from './columns'
import BaseTableHeader from '@/components/data-table/table-header'
import { TypographyH5 } from '@/components/typography'
import useUrlQuery from '@/hooks/use-url-query'
import EducationForm, { educationValidation } from './form'
import { useGetQuery } from '@/lib/feature/api'
import { Image } from '@/shared/types'
import { IconPlus } from '@tabler/icons-react'
import { ModalFormProps } from '@/components/form/modal'




export type Education = {
  id?: string;
  institutionName: string;
  program: string;
  description: string;
  startDate: string;
  endDate: string;
  image: Image | string;
  publishedAt?: Date | null
}

export default function Education() {
  const {data, isLoading} = useGetQuery({url: "/education", method: "get"})
  const { updateQuery } = useUrlQuery()
  const educations = data as Education[]
  

  return (
    <DataTable
      columns={columns}
      data={educations ?? []}
      isLoading={isLoading}
      // meta={updateQuery}
      components={{
        header: () => (
          <BaseTableHeader
            addButtonProps={educationFormProps}
            statusFilterProps={{
              show: false,
              component: <TypographyH5>Education Management</TypographyH5>
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


export const educationFormProps: ModalFormProps<Omit<Education, "image"> & {picture: string}> =  ({
    button: {
      label: <>
        <IconPlus size={18} />
        <span className="">New Education</span>
      </>,
      className: "h-12 border-none",
      variant: "default"
    },
    title: "Add New Education",
    // description: "Add new experince to your profile. Click save when you're done.",
    className: "md:max-w-3xl",
    form: {
      validation: educationValidation,
      values: {
        institutionName: "",
        program: "",
        description: "",
        startDate: "",
        endDate: "",
        picture: "",
      },
      component: <EducationForm />,
      submitHandler: {
        url: "/education",
        method: "post",
        handler: (data: Omit<Education, "picture"> & {picture: File}) => {
          const { picture, ...fields } = data
          const payload = new FormData();

          (Object.entries(fields)).forEach(([key, value]) => {
            payload.append(key, String(value))
          });

          payload.append("picture", picture)

          return payload
        }
      }
    }
  })