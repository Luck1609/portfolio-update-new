import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Hero from "./hero";
import Projects from "./projects";


export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
