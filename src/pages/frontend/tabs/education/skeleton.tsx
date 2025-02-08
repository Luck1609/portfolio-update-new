import { Skeleton } from "@/components/ui/skeleton"


export const EducationCardSkeleton = () => {
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