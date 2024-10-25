import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { cn, getAssetURL } from "@/lib/utils";
import { TooltipButton } from "@/components/tooltip-button";
import { IconUpload, IconX } from "@tabler/icons-react";

export default function Renderer({
  img,
  name,
  index,
  dimensions,
}: {
  img?: File | string;
  index: number;
  name: string;
  dimensions: string;
}) {
  const { setValue, watch, resetField } = useFormContext(), files = watch(name), ref = useRef<HTMLInputElement | null>(null);


  // Replace image
  const handleChange = () => ref.current?.click()

  const removeImg = () => {
    if (Array.isArray(files)) {
      const remaining = files.filter((_, filterIndex: number) => filterIndex !== index)

      setValue(name, remaining, {shouldDirty: true, shouldValidate: true, shouldTouch: true})
    }
    else {
      setValue(name, '')
      resetField(name, { keepError: false, keepDirty: false, keepTouched: false })
    }

  }

  const replaceImage = () => {
    let images

    if (Array.isArray(files)) {
      images = files.reduce((allImages: File[], currentImg: File, currentIndex: number) => ([
        ...allImages,
        currentIndex === index ? ref.current?.files?.[0] : currentImg
      ]), []);
    }
    else {
      images = ref.current?.files?.[0]
    }

    setValue(name, images)
  }

  return (
    <div className={cn("w-full relative theme-border rounded-lg group", img instanceof File ? 'flex items-center' : '')}>
      <div className="absolute right-1 top-1 flex items-center space-x-2">
        <TooltipButton label="Replace image">
          <Button
            className="!h-6 !w-6 rounded-full !bg-green-500 p-1 !hover:bg-green-400"
            type="button"
            onClick={handleChange}
          >
            <IconUpload size={14} />
          </Button>
        </TooltipButton>
        <TooltipButton label="Remove image">
          <Button className="!h-6 !w-6 rounded-full !bg-red-500 p-1 !hover:bg-red-500 hover:bg-opacity-90" type="button" onClick={removeImg}>
            <IconX size={14} />
          </Button>
        </TooltipButton>


        <input
          type="file"
          ref={ref}
          id=""
          className="hidden"
          onChange={replaceImage}
        />
      </div>

      <div className="flex">
        <div className={cn("relative rounded-l-md overflow-hidden mr-4", dimensions)}>
          {img && (
            <img src={!(img instanceof File) ? `${getAssetURL(`/${JSON.parse(img)?.url}`)}` : URL.createObjectURL(img)} alt="" />
          )}

        </div>
      
        {
          img && (
            <div className="text-sm">
              <div className="flex space-x-2">
                <label className="">Name:</label>
                <span>
                  {typeof img === 'string' ? JSON.parse(img)?.name : img.name}
                </span>
              </div>
              <div className="flex space-x-2">
                <label className="">Size:</label>
                <span>
                  {
                    typeof img === 'string'
                      ? JSON.parse(img)?.size
                      : `${(img.size / (1024 * 1024)).toFixed(2)}mb`
                  }
                  
                </span>
              </div>
              <div className="flex space-x-2">
                <label className="">Type:</label>
                <span>
                  {
                    typeof img === 'string'
                      ? JSON.parse(img)?.type
                      : img.type}
                </span>
              </div>
            </div>
          )
        }
      </div>

    </div>
  );
};
