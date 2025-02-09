import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";
import Tabs from "./tabs";
import { IconHelp, IconHome, IconKeyboard, IconMail, IconPrompt } from '@tabler/icons-react'
import { Sidenav } from "./layout/sidenav";
import { Survey } from "./survey";


export default function Home() {
  // const { data, isLoading } = useGetQuery({ url: "/api", method: "get" })
  
  // data as Props

  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="tabs">
        <Tabs />
        {/*<Tabs data={data} isLoading={isLoading} /> */}
      </div>

      <div id="projects">
        <Projects />
        {/* <Projects data={data?.projects} isLoading={isLoading} /> */}
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Survey />

      <div className="w-full fixed bottom-5 flex items-center z-40">
        <Sidenav
          items={[
            {
              href: "#home",
              icon: <IconHome />,
              title: 'Home'
            },
            {
              href: "#about",
              icon: <IconHelp />,
              title: 'About'
            },
            {
              href: "#experience",
              icon: <IconKeyboard />,
              title: 'Experience'
            },
            {
              href: "#projects",
              icon: <IconPrompt />,
              title: 'Projects'
            },
            {
              href: "#contact",
              icon: <IconMail />,
              title: 'Contact'
            },
          ]}
        />
      </div>
    </>
  )
}
