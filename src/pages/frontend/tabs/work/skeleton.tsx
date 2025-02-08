import { Skeleton } from "@/components/ui/skeleton"

export const ExperienceSkeleton = () => {
  return (

    <div className="w-full flex justify-start pt-10 md:pt-20 md:gap-7">
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full border p-2" />
        </div>

        <div className="hidden md:block md:pl-20 w-full">
          <Skeleton className="w-full h-12" />
        </div>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">

        <div className="md:hidden mb-4 text-left">
          <Skeleton className="w-4/5 h-10" />
        </div>

        <div className="w-full bg-white rounded-lg p-5">
          <div className="grid lg:grid-cols-6 lg:gap-3 space-y-4 lg:space-y-0">
            <Skeleton className="h-28" />
            <div className="w-full lg:col-span-5">
              <div className="space-y-2">
                <Skeleton className="w-4/5 h-10" />
                <Skeleton className="w-2/5 h-7" />
              </div>

              <div className="mt-5 space-y-2">
                <Skeleton className="h-5 w-full rounded-full" />
                <Skeleton className="h-5 w-full rounded-full" />
                <Skeleton className="h-5 w-2/5 rounded-full" />
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-8 gap-3 mt-5">
                {
                  Array.from(Array(6).keys()).map((key: number) => <Skeleton className="w-full h-6" key={key.toString()} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}