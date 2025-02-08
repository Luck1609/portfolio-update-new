
import { Typography, TypographyH6, TypographySm } from "@/components/typography";
import dayjs from "dayjs";
import { Children } from "@/vite-env";
import { education } from "./data";

export type Education = {
  institutionName: string;
  startDate: string;
  endDate: string;
  program: string;
  description: string;
}

const Wrapper = ({ children }: Children) => {

  return (
    <div className="w-full mt-6">
      <TypographyH6 className="">
        Education
      </TypographyH6>

      <div className="relative pt-6 pb-20 grid lg:grid-cols-2 gap-5">
        {children}
      </div>
    </div>
  );
};

export default function Education() {


  // return (
  //   <Wrapper>
  //     {
  //       Array.from(Array(4).keys()).map((key: number) => <EducationCardSkeleton key={key.toString()} />)
  //     }
  //   </Wrapper>
  // )

  if (education.length === 0) return (
    <Wrapper>
      <div className="w-full h-72 flex items-center justify-center lg:col-span-2">
        <Typography>No data available</Typography>
      </div>
    </Wrapper>
  )

  return (
    <Wrapper>
      {
        education.map((history, key: number) => (
          <div className="w-full p-6 rounded-lg space-y-4 bg-white" key={key.toString()}>
            <div className="grid lg:grid-cols-7 lg:gap- space-x-3">
              <img src={history.logo} className="w-16 h-16" />

              <div className="w-full lg:col-span-5">
                <Typography className="font-medium space-x-2">
                  <span>{history.institution}</span>
                  <TypographySm className="bg-slate-200 inline-block px-1 py-1 rounded font-normal">{history.mode}</TypographySm>
                </Typography>

                <div className="space-y-2">
                  <TypographyH6>{history.program}</TypographyH6>
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
      }
    </Wrapper>
  )
}