import { Fragment, ReactNode } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconDotsVertical } from '@tabler/icons-react';
import { AlertDialog } from '@/components/ui/alert-dialog'

type ActionButtons = {
  component: ReactNode
}



export function DynamicActionButtons({buttons}: {buttons: ActionButtons[]}) {


  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="flex rounded-md px-4 py-2 font-semibold"
        >
          <IconDotsVertical />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40">
          {
            buttons.map(({ component }, key: number) => <Fragment key={key.toString()}>{component}</Fragment>)
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </AlertDialog>
  );
}
