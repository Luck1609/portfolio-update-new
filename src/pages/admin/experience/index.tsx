import { DataTable } from '@/components/data-table'
import columns from './columns'
import BaseTableHeader from '@/components/data-table/table-header'
import { useLocation } from 'react-router-dom'
import { TypographyH5 } from '@/components/typography'
import useUrlQuery from '@/hooks/use-url-query'
import ExperienceForm, { experienceValidation } from './form'


export type Experience = {
  id?: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
}

export const initialExperience: Experience = {
  company: "",
  role: "",
  description: "",
  startDate: "",
  endDate: "",
  image: "",
}

// export const defaultFormValues = (data: infer) => data ?? initialExperience

export default function Experience() {
  const { pathname } = useLocation()
  const { updateQuery } = useUrlQuery()
  

  return (
    <DataTable
      columns={columns(pathname)}
      data={[]}
      isLoading={false}
      meta={updateQuery}
      components={{
        header: () => (
          <BaseTableHeader<typeof initialExperience>
            addButtonProps={{
                button: {
                  label: 'New Experience',
                },
                title: "Add New Experience",
                // description: "Add new experince to your profile. Click save when you're done.",
                className: "md:max-w-3xl",
                form: {
                  validation: experienceValidation,
                  values: initialExperience,
                  component: <ExperienceForm />,
                  submitHandler: {
                    url: "/experience",
                    method: "post"
                  }
                }
            }}
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
