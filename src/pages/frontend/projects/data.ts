import iai from "@/assets/img/projects/iai-website.jpg"
import frenchTutor from "@/assets/img/projects/french_tutor.jpg"
import paradise from "@/assets/img/projects/paradise.jpg"


export const projects = [
  {
    name: "Virtual City Mall",
    url: "https://vc-mall.netlify.app",
    description: "VC mall is an e-commerce project I basically did for my portfolio. It is still on-going, hoping to make it a fullstack application",
    stack: JSON.stringify(["React", "Tailwind CSS", "Shadcn UI", "Redux toolkit"]),
    image: iai
  },
  {
    name: "I Am Investible",
    url: "https://iai-frontend.netlify.app",
    description: "This website was built for a client to receive and manage applications for startup funding.",
    stack: JSON.stringify(["React", "Tailwind CSS", "Material UI"]),
    image: iai
  },
  {
    name: "Assor Tawiah Foundation",
    url: "https://atfgh.netlify.app",
    description: "Assor Tawiah Foundation is a website I built for a client. She has an NGO which focuses on Autistic children",
    stack: JSON.stringify(["React", "Tailwind CSS", "Material UI", "Google Maps API"]),
    image: paradise
  },
  {
    name: "French tutor",
    url: "https://french-tutor.netlify.app",
    description: "A landing page I built for a one of the products while I was at ReachAfrika, aimed a redireting customers to download the app",
    stack: JSON.stringify(["React", "Tailwind CSS", "Material UI"]),
    image: frenchTutor
  },
]