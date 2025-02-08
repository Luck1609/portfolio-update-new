import { Suspense } from 'react'
import Container from '@/components/container'
import { Typography, TypographyH3, TypographyH5 } from '@/components/typography'
import ProjectSkeleton from './skeleton'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Children } from '@/vite-env'


export type Project = {
  name: string;
  image: string;
  description: string;
  stack: string;
}

function Wrapper({ children }: Children) {

  return (
    <div id="projects">
      <Suspense fallback={<>Loading projects</>}>
        <Container className="py-20">
          <TypographyH3>Portolio projects</TypographyH3>

          <div className="grid lg:grid-cols-2 gap-y-12 gap-x-8 mt-8">
            {children}
          </div>
        </Container>
      </Suspense>
    </div>
  )
}


export default function Projects() {
  
  return (
    <Wrapper>
      {
        Array.from(Array(4).keys()).map((key: number) => <ProjectSkeleton key={key.toString()} />)
      }
    </Wrapper>
  )

  // if (data.length === 0) return (
  //   <Wrapper>
  //     <div className="w-full h-72 flex items-center justify-center lg:col-span-2">
  //       <Typography>No data available</Typography>
  //     </div>
  //   </Wrapper>
  // )

  // return (
  //   <Wrapper>
  //     {
  //       data.map((project) => (
  //         <a href="" target="_blank" rel="noreferrer" className="w-full bg-white rounded-xl overflow-hidden">
  //           <Skeleton className="h-80 w-full rounded-none mb-5" />

  //           <div className="px-5 pb-8">
  //             <TypographyH5 className="mb-3">{project.name}</TypographyH5>
              
  //             <Typography>{project.description}</Typography>

  //             <ul className="w-full space-x-3 mt-5">
  //               {
  //                 JSON.parse(project.stack).map((name: string) => (
  //                   <li className="inline-block">
  //                     <Badge className="">{name}</Badge>
  //                   </li>
  //                 ))
  //               }
  //             </ul>
  //           </div>
  //         </a>
  //       ))
  //     }
  //   </Wrapper>
  // )
}