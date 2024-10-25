import { ReactNode } from "react"
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FormButton from "@/components/form/button";
import { FormProvider, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { TypographyH6 } from "@/components/typography";
import { ScrollArea } from "@/components/ui/scroll-area";

export type AddButtonProps = {
  title: string;
  description: string;
  component?: JSX.Element
  className?: string
  button: {
    label: string
  }
}

export default function AddButton(props: AddButtonProps) {
  const methods = useForm({
    defaultValues: 
  })

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
          <DialogTitle>
            <TypographyH6>{props?.title ?? "Edit profile"}</TypographyH6>
          </DialogTitle>
          <DialogDescription>
            {props?.description ?? "Make changes to your profile here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>

        <FormProvider {...methods}>
          <form className="mt-5">
            <ScrollArea className="h-[65dvh]">
              {props.component}
            </ScrollArea>

            <DialogFooter>
              <FormButton isSubmitting={false} className="w-36">Save changes</FormButton>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
