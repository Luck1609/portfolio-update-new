
import { AlertDialog } from '@radix-ui/react-alert-dialog'
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type NoticeModalProps = {
  trigger: ReactNode; 
  className?: string;
  title: string;
  description: ReactNode;
  action: () =>void
}

export default function NoticeModal({ trigger, className, title, description, action }: NoticeModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn("w-full flex items-center space-x-1 py-2 px-3", className)}>
          {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={action}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
 