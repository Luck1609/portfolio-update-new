import Input from "@/components/form/input";
import Textarea from "@/components/form/textarea";
import FileUploader from "@/components/uploader";
import { ALLOWED_FILE_TYPES, MAX_SIZE } from "@/shared/constants";
import { z } from "zod";


export default function ExperienceForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 pb-8 px-1">
      <Input name="company" label="Company" placeholder="Company name" />
      <Input name="role" label="Role" placeholder="Role at company" />
      <Input name="startDate" label="Start date" placeholder="Start date" />
      <Input name="endDate" label="End date" placeholder="End date" />
      <FileUploader name="image" label="Company logo" type="single" dimensions="w-24 h-24" />

      <div className="lg:col-span-2">
        <Textarea name="description" label="Description" placeholder="Description of your role" rows={6} />
      </div>
    </div>
  )
}


export const experienceValidation = z.object({
  company: z.string().trim().min(1, {message: "Company is a required field"}),
  role: z.string().trim().min(1, {message: "Role is a required field"}),
  description: z.string().trim().min(1, {message: "Description is a required field"}),
  startDate: z.string().date().min(1, {message: "Start date is a required field"}),
  endDate: z.string().date().min(1, {message: "End date is a required field"}).optional(),
  image: z.any()
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return ALLOWED_FILE_TYPES.includes(image.type)
        }
      },
      { message: "Image must JPEG, WEBP, PNG or GIF" }
    )
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return image.size <= MAX_SIZE
        }
      },
      { message: "Image must be less than or equal to 500Kb" }
    )
})