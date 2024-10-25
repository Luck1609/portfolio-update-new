import { Typography, TypographyH1, TypographyH3, TypographyLead } from "@/components/typography";
import Container from "@/components/container";
import lucky from "@/assets/img/nathaniel-obeng.png"
import ResumeDownloadButton from "@/components/resume-download-button";
import { IconAward } from "@tabler/icons-react";


export default function Hero() {
  return (
    <div className="py-5 lg:py-10 mb-10 lg:mb-0">
      <Container className="flex flex-col lg:flex-row justify-center items-center px-3 py-5 relative lg:h-[580px] bg-white rounded-xl space-y-10">
        <div className="w-full lg:w-4/6 lg:pl-10">
          <TypographyH1 className="!leading-snug">
            Hello there! Nathaniel here. I am <span className="text-teal-500">Fullstack</span> Developer
          </TypographyH1>
          {/* <TypographyH1 className="!leading-snug">
            Hello there! I am Nathaniel, a <FlipWords words={['Frontend', 'Backend', 'Fullstack']} className="text-teal-500" /> Developer
          </TypographyH1> */}
          <div className="w-full lg:w-4/5">
            <Typography className="text-justify">
              With over 3+ years of experience, primarily in freelance and
              contract roles. Proficient in  both frontend and backend technologies, with a strong ability to adapt and
              learn new frameworks and languages. Demonstrated success in launching MVPs, automating
              deployments, and transforming complex requirements into effective solutions.
            </Typography>
          </div>

          <ResumeDownloadButton />
        </div>
      
        <div className="w-full lg:w-2/4 ">
          <div className="bg-slate-100 w-60 h-60 lg:w-96 lg:h-96 rounded-lg mx-auto relative">
            <img src={lucky} alt="" className="" />

            <div className="bg-teal-500 text-white absolute -bottom-10 -right-5 flex p-3 space-x-2 rounded-lg shadow-md">
              <IconAward className="h-12 w-12" />
              <div className="">
                <TypographyH3>3+</TypographyH3>
                <TypographyLead className="font-semibold">Years of Experience</TypographyLead>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}


