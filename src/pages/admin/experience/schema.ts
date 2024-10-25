import { ALLOWED_FILE_MIMETYPES, MB_SIZE } from "@/lib/constants";
import * as yup from "yup"


export type Experience = {
  image: File | string;
  caption: string;
  id?: string;
}


export const ExperienceValidation = yup.object().shape({
  image: yup.mixed().required()
    .test("size", "Image size must not be larger than 1Mb", (value) => {
      const image = value as File

      if (image) return image.size <= MB_SIZE
    })
    .test("type", "Image format must be one of (JPG, PNG, WEBP)", (value) => {
      const image = value as File

      if (image) return ALLOWED_FILE_MIMETYPES(image.type)
    }),
  caption: yup.string().trim().optional(),
})


export const ExperienceUpdateValidation = yup.object().shape({
  image: yup.mixed()
    .test("size", "Image size must not be larger than 1Mb", (value) => {
      const image = value as File
      
      if (typeof image === 'string') return true
      else return image.size <= MB_SIZE
    })
    .test("type", "Image format must be one of (JPG, PNG, WEBP)", (value) => {
      const image = value as File

      if (typeof image === 'string') return true
      else return ALLOWED_FILE_MIMETYPES(image.type)
    }).optional(),
  caption: yup.string().trim().optional(),
})