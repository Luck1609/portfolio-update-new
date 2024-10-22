import { Skeleton } from "@/components/ui/skeleton"

export const ExperienceSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-lg p-5">
      <div className="grid lg:grid-cols-6 lg:gap-3 space-y-4 lg:space-y-0">
        <Skeleton className="h-28" />
        <div className="w-full lg:col-span-5">
          <div className="space-y-3">
            <Skeleton className="w-4/5 h-10" />
            <Skeleton className="w-2/5 h-7" />
          </div>

          <div className="mt-10 space-y-2">
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-2/5 rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-10">
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}