import Container from '@/components/container'
import { TypographyH3, TypographyH6 } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import Tabs from './tabs'


export type View = 'experience' | 'education' | 'skills'

const navButtons: { name: string; label: View}[] = [
  {
    name: "Experience",
    label: "experience"
  },
  {
    label: "education",
    name: "Education",
  },
  {
    label: "skills",
    name: "Skills",
  },
]

export default function SkillSet() {
  const [currentView, setCurrentView] = useState<View>("education")

  const setView = (view: View) => () => setCurrentView(view)

  return (
    <div>
      <Container>
        <div className="text-center">
          <TypographyH6 className="font-semibold mb-4">My Skills</TypographyH6>
          <TypographyH3>Curation of my skills and experience</TypographyH3>
        </div>

        <div className="flex justify-center space-x-2 lg:space-x-4 mt-10">
          {
            navButtons.map(({name, label}) => (
              <Button 
                size="lg" 
                variant="outline" 
                onClick={setView(label)} 
                className={cn("h-12 px-5 lg:h-14 lg:px-10", currentView === label ? "bg-teal-500 border-teal-500 text-white hover:bg-teal-600 hover:text-white" : "hover:bg-teal-100 hover:border-teal-100")}
              >
                {name}
              </Button>
            ))
          }

        </div>

        <Tabs name={currentView} />
      </Container>
    </div>
  )
}
