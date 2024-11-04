import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Textarea as TextareaComponent } from "../ui/textarea";

export default function Textarea({
  name,
  className,
  label,
  placeholder,
  rows,
  maxLength,
  ...props
}: {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  rows?: number
  maxLength?: number
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div className="form-field">
          <FormLabel>{label}</FormLabel>
          <TextareaComponent
            placeholder={placeholder}
            className={cn("h-12 shadow-none", className)}
            onChange={onChange}
            value={value}
            rows={rows}
            maxLength={maxLength}
            {...props}
          />
          <FormMessage />
        </div>
      )}
    />
  );
}
