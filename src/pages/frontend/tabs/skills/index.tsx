import { Typography, TypographyH6 } from '@/components/typography'
import { cn } from '@/lib/utils'
import SkillSkeleton from './skeleton'
import { TabProps } from '..'
import { Children } from '@/vite-env'


export type Skill = { name: string, image: string }

function Wrapper({ children }: Children) {
  return (
    <section className="mt-6">
      <TypographyH6>Language & Frameworks I've worked with</TypographyH6>
      <div className="grid lg:grid-cols-8 lg:gap-8 py-10">
        {children}
      </div>
    </section>
  )
}


export default function Skill({ isLoading, data }: TabProps<Skill[]>) {


  if (isLoading) return (
    <Wrapper>
      {
        Array.from(Array(16).keys()).map((key: number) => <SkillSkeleton key={key.toString()} />)
      }
    </Wrapper>
  )

  if (!isLoading && data.length === 0) return (
    <Wrapper>
      <section className="w-full h-72 flex items-center justify-center lg:col-span-8">
        <Typography>No data available</Typography>
      </section>
    </Wrapper>
  )

  return (
    <Wrapper>
      {
        data.map((skill, key: number) => (
          <div className={cn("rounded-full bg-white shadow-sm odd:rounded-tr-none even:rounded-tl-none overflow-hidden pt-6 w-32 h-32 relative even:text-left odd:text-right duration-300 hover:scale-105")} key={key.toString()}>
            <Typography className="px-3 py-1.5 absolute -top-3 left-0 w-full">{skill.name}</Typography>
            {/* <img src={img} alt="" className="w-24 h-24 m-auto rounded-full" /> */}
          </div>
        ))
      }
    </Wrapper>
  )
}