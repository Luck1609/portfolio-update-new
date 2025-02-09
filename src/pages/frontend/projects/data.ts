import iai from "@/assets/img/projects/iai-website.jpg"
import frenchTutor from "@/assets/img/projects/french_tutor.jpg"
import paradise from "@/assets/img/projects/paradise.jpg"


export const projects = [
  {
    name: "Virtual City Mall",
    url: "https://paradise-international.netlify.app",
    description: "",
    stack: JSON.stringify(["React", "Tailwind CSS", "Shadcn UI"]),
    image: iai
  },
  {
    name: "I Am Investible",
    url: "https://iai-frontend.netlify.app",
    description: "A simple website to receive applications for startup funding",
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
    description: "",
    stack: JSON.stringify(["React", "Tailwind CSS", "Material UI"]),
    image: frenchTutor
  },
]