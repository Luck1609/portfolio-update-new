import { Skeleton } from '@/components/ui/skeleton'

export default function ProjectSkeleton() {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden">
      <Skeleton className="h-80 w-full rounded-none" />
      <div className="p-5">
        <Skeleton className="h-10 w-5/6 mb-3" />
        <Skeleton className="h-6 w-full mb-1.5" />
        <Skeleton className="h-6 w-full mb-1.5" />
        <Skeleton className="h-6 w-3/5 mb-1.5" />

        <ul className="w-full space-x-3 mt-5">
          <li className="inline-block">
            <Skeleton className="rounded-lg w-20 h-7" />
          </li>
          <li className="inline-block">
            <Skeleton className="rounded-lg w-20 h-7" />
          </li>
          <li className="inline-block">
            <Skeleton className="rounded-lg w-20 h-7" />
          </li>
          <li className="inline-block">
            <Skeleton className="rounded-lg w-20 h-7" />
          </li>
        </ul>
      </div>
    </div>
  )
}
