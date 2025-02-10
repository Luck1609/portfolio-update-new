import grsc from "@/assets/img/work/grsc.webp"
import ra from "@/assets/img/work/ra.webp"

export const work = [
  {
    position: "Fullstack Developer",
    company: "GetStart Research Solution Center",
    type: "Remote",
    city: "Kumasi",
    country: "Ghana",
    startDate: new Date("2023-04-04"),
    endDate: null,
    logo: grsc,
    description: "Description goes here",
    stack: JSON.stringify(['React', 'Redux', 'Tailwind CSS', 'Node JS', 'Laravel', 'MySQL'])
  },
  {
    position: "Frontend Developer",
    company: "ReachAfrika Company Ltd.",
    type: "Remote",
    city: "Accra",
    country: "Ghana",
    startDate: new Date("2021-04-08"),
    endDate: new Date("2022-09-30"),
    logo: ra,
    description: "Description goes here",
    stack: JSON.stringify(['React', 'Redux', 'Tailwind CSS', 'API integration'])
  },
]