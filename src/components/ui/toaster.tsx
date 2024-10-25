import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"


const statusColors = {
  success: '!bg-green-500 !text-green-100 border-none',
  error: '!bg-red-500 !text-red-100 border-none',
  info: '!bg-blue-500 !text-blue-100 border-none',
  warning: '!bg-amber-500 !text-amber-100 border-none',
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function({ id, title, description, action, status, ...props }) {
        return (
          <Toast key={id} {...props} className={cn(statusColors[status])}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
