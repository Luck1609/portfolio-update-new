import coursera from "@/assets/img/education/coursera.webp"
import knust from "@/assets/img/education/knust.webp"

export const education = [
  {
    program: "Introduction to Structured Query Language (SQL)",
    startDate: new Date("2021-01-05"),
    endDate: new Date("2021-02-02"),
    mode: "Online",
    description: "Brief description about the course here",
    logo: coursera,
    institution: "Coursera"
  },
  {
    program: "Front-End Web Development with React",
    startDate: new Date("2020-08-20"),
    endDate: new Date("2020-10-12"),
    mode: "Online",
    description: "Brief description about the course here",
    logo: coursera,
    institution: "Coursera"
  },
  {
    program: "BSc. Human Settlement Planning",
    startDate: new Date("2014-08-08"),
    endDate: new Date("2018-07-11"),
    mode: "In-person",
    description: "Brief description about the course here",
    logo: knust,
    institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
  },
]