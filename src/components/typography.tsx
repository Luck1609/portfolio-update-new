import { cn } from "@/lib/utils"
import { ReactNode } from "react";

export function TypographyMuted({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}


export function TypographyXs({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <small className={cn("text-xs font-medium leading-none", className)}>
      {children}
    </small>
  )
}

export function TypographySm({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  )
}


export function TypographyLg({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("text-lg font-semibold", className)}>
    {children}
  </div>
}


export function TypographyLead({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn("text-sm lg:text-xl text-muted-foreground", className)}>
      {children}
    </p>
  )
}



export function Typography({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn("mt-3 lg:[&:not(:first-child)]:mt-6 text-sm lg:text-base leading-6 lg:leading-7", className)}>
      {children}
    </p>
  )
}


export function TypographyH6({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h4 className={cn("scroll-m-10 text-md lg:text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}

export function TypographyH5({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h4 className={cn("scroll-m-16 text-lg lg:text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}


export function TypographyH4({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h4 className={cn("scroll-m-20 text-xl lg:text-3xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}

export function TypographyH3({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl lg:text-4xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  )
}

export function TypographyH2({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h2 className={cn("scroll-m-20 pb-2 text-3xl lg:text-5xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  )
}

export function TypographyH1({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl", className)}>
      {children}
    </h1>
  )
}