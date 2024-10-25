import { useRef } from 'react'
import { FileUploaderType } from '.'
import { useFormContext } from 'react-hook-form'
import AddImageButton from './add-image-button'
import { FormLabel } from '../ui/form'


export default function UploaderInput(props: FileUploaderType) {
  const { setValue, watch } = useFormContext()
    
  const ref = useRef<HTMLInputElement | null>(null);
  const { label, type, name } = props
  const value = watch(name)

  
  const triggerInput = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleChange = () => {
    const files = ref.current?.files as FileList;
    let images

    if (files?.length > 0) {
      if (props.type === 'single') {  
        images = files[0]
      }
      else {
        const imageToAdd: File[] = Object.values(files)

        images = [...value, ...imageToAdd]
      }
    }
    setValue(name, images, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
  };


  return (
    <>
      <FormLabel className="mb-1.5">
        {label} 
        {
          type === "multiple" && <span className="text-danger">(Maximum {props?.maxFiles})</span>
        }
      </FormLabel>

      <input
        ref={ref}
        type="file"
        className="hidden"
        multiple={type === "multiple"}
        onChange={handleChange}
      />

      <AddImageButton
        triggerInput={triggerInput}
        className={props.className}
        dimensions={props.dimensions}
        name={name}
        type={type}
        maxFiles={type === "multiple" ? props.maxFiles : 1}
      />
    </>
  )
}

