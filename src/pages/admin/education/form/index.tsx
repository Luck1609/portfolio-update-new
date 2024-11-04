import Input from "@/components/form/input";
import Textarea from "@/components/form/textarea";
import FileUploader from "@/components/uploader";
import { ALLOWED_FILE_TYPES, MAX_SIZE } from "@/shared/constants";
import { z } from "zod";


export default function EducationForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 pb-8 px-1">
      <Input name="institutionName" label="Name" placeholder="Institution name" />
      <Input name="program" label="Program" placeholder="Program studied" />

      <div className="grid lg:col-span-2 lg:grid-cols-4 gap-5">
        <Input name="startDate" label="Start date" placeholder="Start date" type="date" />
        
        <Input name="endDate" label="End date" placeholder="End date" type="date" />

        <div className="lg:col-span-2">
          <FileUploader name="picture" label="Institution logo" type="single" dimensions="w-24 h-24" />
        </div>
      </div>


      <div className="lg:col-span-2">
        <Textarea name="description" label="Description" placeholder="Description of your role" rows={6} />
      </div>
    </div>
  )
}


export const educationValidation = z.object({
  institutionName: z.string().min(1, {message: "Name is a required field"}),
  program: z.string().min(1, {message: "Program is a required field"}),
  description: z.string().min(1, {message: "Description is a required field"}),
  startDate: z.string().date().min(1, {message: "Start date is a required field"}),
  endDate: z.string().date().min(1, {message: "End date is a required field"}).optional(),
  picture: z.any()
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return ALLOWED_FILE_TYPES.includes(image.type)
        }
      },
      { message: "Logo must JPEG, WEBP, PNG or GIF" }
    )
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return image.size <= MAX_SIZE
        }
      },
      { message: "Logo must be less than or equal to 500Kb" }
    )
})

export const updateEducationValidation = z.object({
  institutionName: z.string().min(1, {message: "Name is a required field"}),
  program: z.string().min(1, {message: "Program is a required field"}),
  description: z.string().min(1, {message: "Description is a required field"}),
  startDate: z.string().date().min(1, {message: "Start date is a required field"}),
  endDate: z.string().date().min(1, {message: "End date is a required field"}).optional(),
  picture: z.any()
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return ALLOWED_FILE_TYPES.includes(image.type)
        }
      },
      { message: "Logo must JPEG, WEBP, PNG or GIF" }
    )
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return image.size <= MAX_SIZE
        }
      },
      { message: "Logo must be less than or equal to 500Kb" }
    ).optional()
})