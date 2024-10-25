import { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Renderer from './renderer';
import { FileUploaderType } from '.';
import { useFormContext } from 'react-hook-form';
import { IconPlus } from '@tabler/icons-react';


type Handler = Omit<FileUploaderType, 'label'> & {
  className?: string | undefined;
  triggerInput: () => void;
  dimensions: string;
  maxFiles: number;
}


export default function AddImageButton(props: Handler) {
  const { type, dimensions, triggerInput, className, name  } = props

  const { watch } = useFormContext()
  const value = watch(name)


  return (
      <div className={cn("grid", type === 'single' ? '' : 'gap-3 lg:grid-cols-3', value ? className : '')}>

        {
          value && (
            type === 'single' ? (
              <Renderer
                {...{
                  img: value,
                  name: name,
                  dimensions: dimensions,
                  index: 1
                }}
              />
            ) : (
              value.length > 0 &&
              value.map((img: File, index: number) => (
                <Fragment key={index.toString()}>
                  <Renderer
                    {...{
                      img,
                      name,
                      index,
                      dimensions,
                    }}
                  />
                </Fragment>
              ))
            )
          )
        }

        
        {((type === 'single' && !value) || (type === 'multiple' && value.length < props.maxFiles)) && (
          <Button
            className={cn("flex items-center space-x-1 border-2", dimensions)}
            type="button"
            onClick={triggerInput}
            variant="outline"
          >
            <IconPlus size={16} />
            <span>Add image</span>
          </Button>
        )}
      </div>
  )
}
