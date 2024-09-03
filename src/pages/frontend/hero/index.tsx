import { Typography, TypographyH1 } from "@/components/typography";
import { FlipWords } from "./flipword";
import { Background } from "./background";
import Container from "@/components/container";
import { ArrowDownToLine } from "lucide-react";


export default function Hero() {
  return (
    <div className="py-10">
      <Container className="flex justify-center items-center relative h-[580px] bg-white rounded-xl overflow-hidden">
        <div className="w-4/6">
          <TypographyH1 className="!leading-snug">
            Hello there! I am Nathaniel, a <FlipWords words={['Frontend', 'Backend', 'Fullstack']} className="text-teal-500" /> Developer
          </TypographyH1>
          <div className="w-4/5">
            <Typography className="text-justify">
              Versatile Fullstack Web Developer with over four years of experience, primarily in freelance and
              contract roles. Proficient in  both frontend and backend technologies, with a strong ability to adapt and
              learn new frameworks and languages. Demonstrated success in launching MVPs, automating
              deployments, and transforming complex requirements into effective solutions.
            </Typography>
          </div>

          <a href="" className="flex items-center justify-center rounded-lg p-4 w-52 space-x-2 bg-teal-500 text-white mt-5">
            <span>Download CV</span>
            <ArrowDownToLine />
          </a>
        </div>
      
        <div className="w-1/4"></div>
        <Background number={7} />
      </Container>
    </div>
  )
}


