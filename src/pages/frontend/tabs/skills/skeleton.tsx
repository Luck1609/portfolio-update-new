import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export default function SkillSkeleton() {
  return (
      <>
        {
          Array.from(Array(12).keys()).map((id: number) => (
            <div className={cn("rounded-full bg-white shadow-sm odd:rounded-tr-none even:rounded-tl-none overflow-hidden pt-6 w-32 h-32 relative even:text-left odd:text-right duration-300 hover:scale-105")} key={id.toString()}>
              <Skeleton className="px-3 py-1.5 absolute -top-1 left-0 w-4/5 h-5" />
              <Skeleton className="w-20 h-20 m-auto rounded-full" />
            </div>
          ))
        }
      </>
  )
}
