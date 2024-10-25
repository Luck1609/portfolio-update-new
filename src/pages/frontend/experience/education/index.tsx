
import { Typography, TypographyH4, TypographyH6 } from "@/components/typography";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetQuery } from "@/lib/feature/api";
import { EducationCardSkeleton } from "./skeleton";
import dayjs from "dayjs";

type Education = {
  institutionName: string;
  startDate: string;
  endDate: string;
  program: string;
  description: string;
}

export const Education = () => {

  return (
    <div
      className="w-full"
    >
      <TypographyH6 className="">
        Education
      </TypographyH6>

      <div className="relative pt-10 pb-20 grid lg:grid-cols-2 gap-5">
        <EducationCard />
      </div>
    </div>
  );
};

const EducationCard = () => {
  const { data, isLoading } = useGetQuery({ url: "/education-history", method: "get" })
  const educationHistory = data as Education[]
  

  console.log('Education data', data)


  if (isLoading) return (
    Array.from(Array(4).keys()).map((key: number) => <EducationCardSkeleton key={key.toString()} />)
  )

  if (!isLoading && data.length === 0) return <div className="w-full h-60 flex items-center justify-center">
    <Typography>No data available</Typography>
  </div>

  return (
    educationHistory.map((history, key: number) => (
      <div className="w-full p-6 rounded-lg space-y-4 bg-white" key={key.toString()}>
        <div className="grid lg:grid-cols-7 lg:gap- space-x-3">
          <Skeleton className="w-16 h-16" />

          <div className="w-full lg:col-span-5">
            <Typography className="font-medium">{history.program}</Typography>

            <div className="space-y-2">
              <TypographyH6>{history.institutionName}</TypographyH6>
              <div className="flex space-x-2">
                <Typography>{dayjs(history.startDate).format("MMM. YYYY")}</Typography>
                <span>-</span>
                <Typography>{dayjs(history.endDate).format("MMM. YYYY")}</Typography>
              </div>
            </div>

            <div className="mt-5 space-y-1">
              <Typography>{history.description}</Typography>
            </div>
          </div>
        </div>

      </div>
    ))
  )
}