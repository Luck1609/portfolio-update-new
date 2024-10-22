import {
  motion,
} from "framer-motion";
import { TypographyH4, TypographyH6 } from "@/components/typography";
import { Skeleton } from "@/components/ui/skeleton";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
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
        <EducationCard />
        <EducationCard />
      </div>
    </div>
  );
};

const EducationCard = () => {
  return (
    <div className="w-full p-6 rounded-lg space-y-4 bg-white">
      <div className="grid lg:grid-cols-7 lg:gap- space-x-3">
        <Skeleton className="w-16 h-16" />

        <div className="w-full lg:col-span-5">
          <Skeleton className="w-4/6 h-7 mb-3" />

          <div className="space-y-2">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-3/5 h-7" />
          </div>

          <div className="mt-5 space-y-1">
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-3/5 h-5" />
          </div>
        </div>
      </div>

    </div>
  )
}