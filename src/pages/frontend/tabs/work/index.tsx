import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { intervalToDuration } from "date-fns";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import { Typography, TypographyH4, TypographyH6, TypographyLead } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Children } from "@/vite-env";
import { work } from "./data";


dayjs.extend(relativeTime)

export type Experience = {
  company: string;
  role: string;
  logo: string;
  startDate: Date;
  endDate: Date;
  description: string;
  stack: string
}

export default function WorkHistory() {

  // if (isLoading) return (
  //   <Wrapper>
  //     {
  //       Array.from(Array(4).keys()).map((id: number) => <ExperienceSkeleton key={id.toString()} />)
  //     }
  //   </Wrapper>
  // )

  if (work?.length === 0) return (
    <Wrapper>
      <div className="w-full h-72 flex items-center justify-center lg:col-span-2">
        <Typography>No data available</Typography>
      </div>
    </Wrapper>
  )


  return (
    <Wrapper>
      {
        work.map((item, index: number) => {
          const interval = intervalToDuration({start: item.startDate, end: item.endDate ?? new Date()})
          console.log("Interval duration", interval)
          return (
          <div key={index} className="w-full flex justify-start pt-6 md:gap-7">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 p-2" />
              </div>

              <div className="md:pl-20">
                <TypographyH4 className="hidden md:block text-xl md:text-5xl font-bold text-slate-500 dark:text-slate-500 ">
                  {item.position}
                  </TypographyH4>
                  
                <Typography className="text-slate-500">
                    {`${interval.years} year${interval.years! > 1 ? "s" : ""}, ${interval.months} month${interval.months! > 1 ? "s" : ""}`}
                </Typography>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <TypographyH4 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-500 dark:text-slate-500">
                {item.position}
              </TypographyH4>

              <div className="w-full bg-white rounded-lg p-5">
                <div className="grid lg:grid-cols-6 lg:gap-3 space-y-4 lg:space-y-0">
                  <img src={item.logo} className="h-28" />
                  <div className="w-full lg:col-span-5">
                    <div className="">
                      <TypographyLead className="font-bold">{item.company}</TypographyLead>
                      <div className="flex space-x-2 font-medium">
                        <Typography>{dayjs(item.startDate).format("MMM, YYYY")}</Typography>
                        <span>-</span>
                        {
                          item.endDate ? (
                        <Typography>{dayjs(item.endDate).format("MMM, YYYY")}</Typography>
                          ) : <span>Current</span>
                        }
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      <Typography>{item.description}</Typography>
                    </div>

                    <ul className="space-x-2 mt-5">
                      {
                        JSON.parse(item.stack).map((name: string, index: number) => (
                          <li className="inline-block" key={index.toString()}>
                            <Badge variant="outline" className="bg-slate-100 border-none p-2 text-center block">{name}</Badge>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
    </Wrapper>
  );
};

const Wrapper = ({ children }: Children) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full mt-6" ref={containerRef}>
      <div className="mx-auto">
        <TypographyH6 className="">
          Experience
        </TypographyH6>
      </div>

      <div ref={ref} className="relative pb-20">
        {children}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 dark:via-slate-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
