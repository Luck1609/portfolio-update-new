import * as React from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DialogAlert } from "../types";
import { TabularIcon } from "@/shared/types";
import { Loading } from "@/components/form/button";
import { usePostMutation } from "@/lib/feature/api";

type DialogItemType = {
  triggerChildren: {
    text: string;
    Icon: TabularIcon | null
  };
  onSelect: () => void;
  data: DialogAlert
  onOpenChange: (open: boolean) => void;
  mutation: string
};

const DialogItem = React.forwardRef(
  (props: DialogItemType, forwardedRef: React.Ref<HTMLDivElement>) => {
    const { triggerChildren: {Icon, text}, data: {title, description, url}, mutation, onSelect, onOpenChange, ...itemProps } =
      props;
    const [submitted, setSubmitted] = React.useState(false)
    const [actionTrigger, { isLoading }] = usePostMutation()

    const triggerAlertAction = async () => {
      const {data, error} = await actionTrigger({
        url,
        method: "delete",
      })
      // setSubmitted(true)
      // const result = await http.delete(`${url}`)
      // mutate(mutation)
      // setSubmitted(false)
      // onOpenChange(false)
      // if (result.status === 'success') toast({
      //   status: 'success',
      //   title: `${text !== DELETE ? `${text}ed` : ''} successfully`,
      //   description: result.message
      // })

      if (error) {}
    }


    return (
      <AlertDialog onOpenChange={onOpenChange}>
        <AlertDialogTrigger asChild>
          <DropdownMenuItem
            {...itemProps}
            ref={forwardedRef}
            className="DropdownMenuItem cursor-pointer"
            onSelect={(event) => {
              event.preventDefault();
              onSelect();
            }}
          >
            <span className="flex items-center space-x-2">
              {
                Icon && <Icon size={18} />
              }
              <span>{text}</span>
            </span>
          </DropdownMenuItem>
        </AlertDialogTrigger>

        <AlertDialogPortal>
          <AlertDialogOverlay className="DialogOverlay" />
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {title}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {description}
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-500 hover:bg-red-500 hover:bg-opacity-90 hover:text-white text-white !h-12">Cancel</AlertDialogCancel>
                <Button onClick={triggerAlertAction} disabled={submitted} className="!h-12">
                  {
                    !isLoading ? 'Continue' : <Loading text="Submitting..." />
                  }
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    );
  },
);

DialogItem.displayName = "DialogItem";

export default DialogItem;
