import React, { ReactNode } from 'react'

import { Link } from "react-router-dom";
import DialogItem from './item'
import { getPayload } from './utils'
import { ActionsData, DialogAlert, DynamicButtonGroup } from '../types'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Icon, IconDotsVertical, IconEye, IconPencil, IconProps, IconRestore, IconTrash, IconX } from '@tabler/icons-react';
import { DEACTIVATE, RESTORE, DELETE } from '@/shared/constants';


const initialActions: Partial<ActionsData> = {
  view: {
    show: false,
    url: ''
  },
  edit: {
    show: false,
    url: ''
  },
  deactivate: {
    show: false,
    status: DEACTIVATE,
  },
  delete: false,
  url: '',
  mutate: '',
  name: '',
}



export function DynamicActionButtons({ buttonGroup = [], actions = initialActions }: DynamicButtonGroup) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [_, setHasOpenDialog] = React.useState(false);
  const dropdownTriggerRef = React.useRef(null);
  const focusRef = React.useRef(null);

  // const 


  function handleDialogItemSelect() {
    focusRef.current = dropdownTriggerRef.current;
  }

  function handleDialogItemOpenChange(open: boolean) {
    setHasOpenDialog(open);
    if (open === false) {
      setDropdownOpen(false);
    }
  }

  const AlertDialog = (
    { Icon, text, data }:
      { Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>; text: string; data: DialogAlert }
  ) => {
    return (
      <DialogItem
        triggerChildren={{
          Icon,
          text
        }}
        onSelect={handleDialogItemSelect}
        onOpenChange={handleDialogItemOpenChange}
        data={data}
        mutation={actions.mutate ?? ''}
      />
    )
  }

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger
        className="flex rounded-md px-4 py-2 font-semibold"
        ref={dropdownTriggerRef}
      >
        <IconDotsVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        {
          actions?.view?.show && (
            <DropdownMenuItem>
              <Link to={`${actions?.view.url}`} className="flex space-x-2 items-center">
                <IconEye />
                <span>View</span>
              </Link>
            </DropdownMenuItem>
          )
        }
        {
          actions?.edit?.show && (
            <DropdownMenuItem>
              <Link to={`${actions.edit.url}`} className="flex space-x-2 items-center">
                <IconPencil size={18} />
                <span>Edit</span>
              </Link>
            </DropdownMenuItem>
          )
        }

        {
          buttonGroup.map(({ label, action, component }: { label: ReactNode; component?: ReactNode; action: () => void }, index: number) => (
            component ?? <DropdownMenuItem onClick={action} key={index.toString()}>{label}</DropdownMenuItem>
          ))
        }

        {
          actions?.deactivate?.show && (
            <>
              <AlertDialog
                Icon={actions.deactivate.status === DEACTIVATE ? IconX : IconRestore}
                text={actions.deactivate.status === DEACTIVATE ? DEACTIVATE : RESTORE}
                data={getPayload({ type: actions.deactivate.status, url: (actions?.deactivate?.url ?? actions.url ?? ''), name: actions.name ?? '' })}
              />
            </>
          )
        }

        {
          actions.delete && (
            <>
              <AlertDialog
                Icon={IconTrash}
                text={DELETE}
                data={getPayload({ type: DELETE, url: actions?.url ?? '', name: actions?.name ?? '' })}
              />
            </>
          )
        }

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
