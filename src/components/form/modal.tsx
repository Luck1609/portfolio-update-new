import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FormButton from "@/components/form/button";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod"
import { usePostMutation } from "@/lib/feature/api";
import { HttpMethods } from "@/shared/types";

export type AddButtonProps<Values> = {
  title: string;
  // description: string;
  className?: string
  button: {
    label: string
  }
  form: {
    validation: any;
    values: Values;
    component: JSX.Element;
    submitHandler: {
      url: string;
      method: HttpMethods
      handler?: (payload: any) => FormData
    }
  }
}

export default function FormModal<Values>(props: AddButtonProps<Values>) {
  const methods = useForm<typeof props.form.validation>({
    defaultValues: props.form.values,
    resolver: zodResolver(props.form.validation),
    mode: "all"
  })
  const { handleSubmit } = methods
  const [submitForm, { isLoading }] = usePostMutation()

  const submit: SubmitHandler<typeof props.form.validation> = async (formData) => {
    const { url, method, handler } = props.form.submitHandler
    const payload = handler ? handler(formData) : formData
    const { data, error } = await submitForm({ url, method, payload })

    if (error) console.log("error details here", error)
    else console.log('Success details here', data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-12 space-x-1 px-1.5 lg:px-2">
          <IconPlus size={18} />
          <span className="">{props?.button?.label}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-[425px]", props.className)}>
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">
            {props.title}
          </DialogTitle>
        </DialogHeader>

        <FormProvider {...methods}>
          <form className="mt-5" onSubmit={handleSubmit(submit)}>
            <ScrollArea className="h-[65dvh]">
              {props.form.component}
            </ScrollArea>

            <DialogFooter>
              <FormButton isSubmitting={isLoading} className="w-36">Save changes</FormButton>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
