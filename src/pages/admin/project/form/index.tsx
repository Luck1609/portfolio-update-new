import Input from "@/components/form/input";
import Textarea from "@/components/form/textarea";
import FileUploader from "@/components/uploader";
import { ALLOWED_FILE_TYPES, MAX_SIZE } from "@/shared/constants";
import { z } from "zod";


export default function ExperienceForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 pb-8 px-1">
      <Input name="name" label="Name" placeholder="Project name" />

      <Input name="stack" label="Stack" placeholder="Type in stack used here, separated by comma" />
      <FileUploader name="picture" label="Procject cover" type="single" dimensions="w-24 h-24" />

      <div className="lg:col-span-2">
        <Textarea name="description" label="Description" placeholder="Description of your role" rows={6} />
      </div>
    </div>
  )
}


export const projectValidation = z.object({
  name: z.string().min(1, {message: "Name is a required field"}),
  description: z.string().min(1, {message: "Description is a required field"}),
  stack: z.string().min(1, {message: "Stack is a required field"}),
  picture: z.any()
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return ALLOWED_FILE_TYPES.includes(image.type)
        }
      },
      { message: "Cover image must JPEG, WEBP, PNG or GIF" }
    )
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return image.size <= MAX_SIZE
        }
      },
      { message: "Cover image must be less than or equal to 500Kb" }
    )
})

export const updateProjectValidation = z.object({
  name: z.string().min(1, {message: "Name is a required field"}),
  description: z.string().min(1, {message: "Description is a required field"}),
  stack: z.string().min(1, {message: "Stack is a required field"}),
  picture: z.any()
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return ALLOWED_FILE_TYPES.includes(image.type)
        }
      },
      { message: "Cover image must JPEG, WEBP, PNG or GIF" }
    )
    .refine(
      (val) => {
        if (val) {
          const image = val as File;

          return image.size <= MAX_SIZE
        }
      },
      { message: "Cover image must be less than or equal to 500Kb" }
    ).optional()
})