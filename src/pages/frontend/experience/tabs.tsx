import { View } from ".";
import { Education } from "./education";
import Skills from "./skills";
import { Experience } from "./work";


export default function Tabs({ name }: { name: View }) {
  
  if (name === "experience") return <Experience />
  if (name === "education") return <Education />
  if (name === "skills") return <Skills />
  return (
    <></>
  )
}
