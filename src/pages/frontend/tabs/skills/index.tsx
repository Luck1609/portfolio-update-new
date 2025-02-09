import { Typography, TypographyH6 } from '@/components/typography'
import { cn } from '@/lib/utils'
import { Children } from '@/vite-env'
import { skills } from './data'


export type Skill = { name: string, image: string }

function Wrapper({ children }: Children) {
  return (
    <section className="mt-6">
      <TypographyH6>Language & Frameworks I've worked with</TypographyH6>
      <div className="py-10 space-y-16">
        {children}
      </div>
    </section>
  )
}


export default function Skill() {


  // if (isLoading) return (
  //   <Wrapper>
  //     {
  //       Array.from(Array(16).keys()).map((key: number) => <SkillSkeleton key={key.toString()} />)
  //     }
  //   </Wrapper>
  // )

  // if (skills.length === 0) return (
  //   <Wrapper>
  //     <section className="w-full h-72 flex items-center justify-center lg:col-span-8">
  //       <Typography>No data available</Typography>
  //     </section>
  //   </Wrapper>
  // )

  return (
    <Wrapper>
      {
        Object.entries(skills).map(([title, skill], index: number) => (
          <div key={index.toString()}>
            <TypographyH6 className="mb-5">{title}</TypographyH6>

            <ul className="space-x-5">
              {
                skill.map(({ name, logo }, index: number) => (
                  <li className={cn("inline-flex rounded-full bg-white shadow-sm odd:rounded-tr-none even:rounded-tl-none overflow-hidden pt-6 w-32 h-32 relative even:text-left odd:text-right duration-300 hover:scale-105")} key={index.toString()}>
                    <Typography className={cn("px-2 py-1.5 absolute top-0 left-0 w-full")}>{name}</Typography>
                    <img src={logo} alt={name} className="w-24 h-24 m-auto" title="Logo" />
                  </li>
                ))
              }
            </ul>
          </div>

        ))
      }
    </Wrapper>
  )
}