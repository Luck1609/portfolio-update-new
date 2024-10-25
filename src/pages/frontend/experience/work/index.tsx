import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { ExperienceSkeleton } from "./skeleton";
import { Typography, TypographyH4, TypographyH6, TypographyLead } from "@/components/typography";
import { useGetQuery } from "@/lib/feature/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";


type Experience = {
  company: string;
  role: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string;
  stack: string
}

const Data = () => {
  const { data, isLoading } = useGetQuery({ url: "/experience-history", method: "get" })
  const experience = data as Experience[]
  
  if (isLoading) return (
    Array.from(Array(4).keys()).map((id: number) => <ExperienceSkeleton key={id.toString()} />)
  )
  if (!isLoading && data?.length === 0) return (
    <div className="w-full h-60 flex items-center justify-center">
      <Typography>No data available</Typography>
    </div>
  )
  return (
    experience.map((item, index: number) => (
      <div key={index} className="w-full flex justify-start pt-10 md:pt-20 md:gap-7">
        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
          <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
          </div>
          <TypographyH4 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
            {item.role}
          </TypographyH4>
        </div>

        <div className="relative pl-20 pr-4 md:pl-4 w-full">
          <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            {item.role}
          </h3>

          <div className="w-full bg-white rounded-lg p-5">
            <div className="grid lg:grid-cols-6 lg:gap-3 space-y-4 lg:space-y-0">
              <Skeleton className="h-28" />
              <div className="w-full lg:col-span-5">
                <div className="">
                  <TypographyLead className="font-medium">{item.company}</TypographyLead>
                  <div className="flex space-x-2">
                    <Typography>{ dayjs(item.startDate).format("MMM, YYYY") }</Typography>
                    <span>-</span>
                    <Typography>{ dayjs(item.endDate).format("MMM, YYYY") }</Typography>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <Typography>{item.description}</Typography>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-8 gap-3 mt-5">
                  {
                    JSON.parse(item.stack).map((name: string) => <Badge variant="outline" className="p-1 text-center block">{name}</Badge>)
                  }                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export const Experience = () => {
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
    <div
      className="w-full"
      ref={containerRef}
    >
      <div className="mx-auto pt-12 px-4 md:px-8 lg:px-10">
        <TypographyH6 className="">
          Experience
        </TypographyH6>
      </div>

      <div ref={ref} className="relative pb-20">
        <Data />
        
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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
