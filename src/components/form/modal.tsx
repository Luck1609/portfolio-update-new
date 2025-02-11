import { Button } from "@/components/ui/button";
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
import { ReactNode } from "react";

export type ModalFormProps<Values> = {
  title: string;
  className?: string
  button: {
    label: ReactNode,
    className?: string
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
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

export default function FormModal<Values>(props: ModalFormProps<Values>) {
  const methods = useForm<typeof props.form.validation>({
    defaultValues: props.form.values,
    resolver: zodResolver(props.form.validation),
    mode: "all"
  })
  const { handleSubmit } = methods
  const [submitForm] = usePostMutation()

  const submit: SubmitHandler<typeof props.form.validation> = async (formData) => {
    const { url, method, handler } = props.form.submitHandler
    const payload = handler ? handler(formData) : formData
    await submitForm({ url, method, payload })
  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("h-8 space-x-1 text-left w-full justify-start px-3", props.button?.className)} variant={props.button.variant ?? "ghost"}>
          {props?.button?.label}
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
              <FormButton className="w-36">Save changes</FormButton>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}