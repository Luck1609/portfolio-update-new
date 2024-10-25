import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export default function Container({children, className}: {children: ReactNode, className?: string}) {
  return (
    <article className={cn("max-w-[1200px] lg:mx-auto mx-3", className)}>
      {children}
    </article>
  )
}
