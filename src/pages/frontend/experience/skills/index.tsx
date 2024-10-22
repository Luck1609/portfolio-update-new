import Container from '@/components/container'
import { frontend, languages } from '@/assets/img/frontend'
import { Typography, TypographyH4, TypographyH6 } from '@/components/typography'
import { cn } from '@/lib/utils'
import SkillSkeleton from './skeleton'

export default function Skills() {
  return (
    <Container className="mt-20">
      <TypographyH4 className="">Languages and Frameworks I've worked with</TypographyH4>
      <TypographyH6>Languages</TypographyH6>
      <div className="grid lg:grid-cols-8 lg:gap-8 py-10">
        <SkillSkeleton />
        {
          languages.map(({ label, img, className }) => (
            <div className={cn("rounded-full bg-white shadow-sm odd:rounded-tr-none even:rounded-tl-none overflow-hidden pt-6 w-32 h-32 relative even:text-left odd:text-right duration-300 hover:scale-105", className)}>
              <Typography className="px-3 py-1.5 absolute -top-3 left-0 w-full">{label}</Typography>
              <img src={img} alt="" className="w-24 h-24 m-auto rounded-full" />
            </div>
          ))
        }
      </div>
    </Container>
  )
}
