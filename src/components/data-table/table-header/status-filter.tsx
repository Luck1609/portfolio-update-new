import { ReactNode, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { IconChevronDown } from '@tabler/icons-react';


export type StatusFilterProps = {} & ({
  show: true;
  trigger: string;
  options: {
    label: string;
    action: () => void
  }[]
} | {
  show?: false;
  component?: ReactNode
})

export default function StatusFilter(props: StatusFilterProps) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    props.show ? (
      <DropdownMenu>
        <DropdownMenuTrigger className="dark:text-dark-text dark:bg-dark-border rounded-md flex items-center p-2 space-x-2">
          <span className="">{ selected ?? props.trigger}</span>
          <IconChevronDown size={18} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="dark:text-dark-text dark:bg-dark-border">
          {
            props.options?.map(({ label, action }, index: number) => (
              <DropdownMenuItem key={index.toString()} onClick={() => {
                action()
                setSelected(label)
              }}>{label}</DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    ) : props?.component && props.component
  )
}
