import resume from "@/assets/docs/nathaniel-obeng's-resume.pdf"
import { ArrowDownToLine } from 'lucide-react'

export default function ResumeDownloadButton() {
  return (
    <a href={resume} className="flex items-center justify-center rounded-lg p-4 w-52 space-x-2 bg-teal-500 text-white mt-5" download={true}>
      <span>Download CV</span>
      <ArrowDownToLine />
    </a>
  )
}
