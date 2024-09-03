import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export default function Container({children, className}: {children: ReactNode, className?: string}) {
  return (
    <article className={cn("w-[1200px] mx-auto", className)}>
      {children}
    </article>
  )
}
