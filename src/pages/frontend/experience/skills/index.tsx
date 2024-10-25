import { Typography, TypographyH6 } from '@/components/typography'
import { cn } from '@/lib/utils'
import SkillSkeleton from './skeleton'
import { useGetQuery } from '@/lib/feature/api'


type Skill = {name: string, image: string}

export default function Skills() {
  return (
    <section className="mt-20">
      <TypographyH6>Language & Frameworks I've worked with</TypographyH6>
      <div className="grid lg:grid-cols-8 lg:gap-8 py-10">
        <Data />
      </div>
    </section>
  )
}


const Data = () => {
  const { data, isLoading } = useGetQuery({ url: "/skill-list", method: "get" })
  const skillList = data as Skill[]

  console.log("skills list", skillList)
  
  if (isLoading) return (
    Array.from(Array(16).keys()).map((key: number) => <SkillSkeleton key={key.toString()} />)
  )
  if (!isLoading && skillList.length === 0) return (
    <section className="w-full h-60 flex items-center justify-center">
      <Typography>No data available</Typography>
    </section>
  )

  return (
    skillList.map((skill, key: number) => (
      <div className={cn("rounded-full bg-white shadow-sm odd:rounded-tr-none even:rounded-tl-none overflow-hidden pt-6 w-32 h-32 relative even:text-left odd:text-right duration-300 hover:scale-105")} key={key.toString()}>
        <Typography className="px-3 py-1.5 absolute -top-3 left-0 w-full">{skill.name}</Typography>
        {/* <img src={img} alt="" className="w-24 h-24 m-auto rounded-full" /> */}
      </div>
    ))
  )
}