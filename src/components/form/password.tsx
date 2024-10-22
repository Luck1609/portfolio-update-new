import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input as FormInput } from "../ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export default function Password({
  name,
  className,
  label,
  disabled = false,
}: {
  name: string;
  className?: string;
  label?: string;
  disabled?: boolean;
}) {
  const { control } = useFormContext(),
    [show, setShow] = useState(false),
    toggle = () => setShow(!show);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cn("w-full space-y-0 form-field", error ? 'error' : '')}>
          <FormLabel>{label}</FormLabel>
          <FormControl className="relative">
            <div className="relative">
              <FormInput
                placeholder="••••••••"
                type={show ? "text" : "password"}
                className={cn("h-12 shadow-none", className)}
                {...field}
                disabled={disabled}
              />
              {show ? (
                <IconEyeOff
                  size={20}
                  className="absolute right-3 bottom-4"
                  onClick={toggle}
                />
              ) : (
                <IconEye
                  size={20}
                  className="absolute right-3 bottom-4"
                  onClick={toggle}
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
