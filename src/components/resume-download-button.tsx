import resume from "@/assets/docs/resume-nathaniel-obeng.pdf"
import { DownloadIcon } from "@radix-ui/react-icons"

export default function ResumeDownloadButton() {
  return (
    <a href={resume} className="flex items-center justify-center rounded-lg p-4 w-52 space-x-2 bg-teal-500 text-white mt-5" download={true}>
      <span>Download CV</span>
      <DownloadIcon />
    </a>
  )
}
