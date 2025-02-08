import Container from "@/components/container";
import { Typography, TypographyH3 } from "@/components/typography";

export default function About() {
  return (
    <div id="about">
      <Container className="lg:p-10 rounded-lg bg-white space-y-10 mb-16">
        <TypographyH3>About me</TypographyH3>

        <div className="grid lg:grid-cols-5 gap-5">
          <div className="bg-about bg-cover rounded-xl lg:col-span-2">
            {/* <Skeleton className="w-full h-full" /> */}
          </div>
          
          <div className="lg:col-span-3 text-justify space-y-5">
            <Typography>
              I have about 3+ years of experience crafting dynamic, user-friendly web applications. My journey in web development began with a fascination for technology, and over time, I’ve honed my skills in building responsive and interactive user interfaces.
            </Typography>
            <Typography>
              While my main focus is on frontend development, I’m always exploring new frameworks and languages to expand my skill set. I enjoy working on diverse projects that challenge me to think outside the box and evolve as a developer. This drive for continuous learning pushes me to take on both frontend and backend tasks, making me a well-rounded developer.
            </Typography>
          {/* </div>
          <div className="lg:col-span-3 text-justify"> */}
            <Typography className="mt:3 lg:mt-5">
              In addition to coding, I love staying active with workouts, playing video games, and cooking in my free time. I also find inspiration in self-improvement programs, which help me keep a growth mindset both professionally and personally.
            </Typography>

            <Typography className="mt:3 lg:mt-5">
              Currently, I’m seeking new opportunities to contribute to impactful projects in a remote setting, but I’m open to relocation for the right role.
            </Typography>
            <Typography>
              Let’s create something amazing together!
            </Typography>
          </div>
          {/* <div className="lg:col-span-2">
            <Skeleton className="w-full h-72" />
          </div> */}
        </div>
      </Container>

    </div>
  )
}
