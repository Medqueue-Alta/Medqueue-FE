import {
  Control,
  ControllerRenderProps,
  FieldValues,
  FieldPath,
  Path,
} from "react-hook-form";
import { ReactNode } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import {
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { Checkbox } from "@radix-ui/react-checkbox";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  options?: {
    label: string;
    value: string | number;
  }[];
  description?: string;
  control: Control<T>;
  "data-testid"?: string;
  disabled?: boolean;
}

interface ChildrenProps<T extends FieldValues> extends Props<T> {
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
}

export function CustomFormField<T extends FieldValues>(
  props: Readonly<ChildrenProps<T>>
) {
  const { name, label, description, control, children } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full" id={`${name}`}>
          <FormLabel className="font-bold text-lg md:text-sm">
            {label}
          </FormLabel>
          <FormControl className="text-m">{children(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function CustomFormDatePicker<T extends FieldValues>(
  props: Readonly<Props<T>>
) {
  const { name, label, placeholder, description, control } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full" id={`${name}`}>
          <FormLabel className="font-bold text-lg md:text-sm">
            {label}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? (
                  format(field.value, "dd MMM yyyy")
                ) : (
                  <span className="opacity-50">{placeholder}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                data-testid="calendar"
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                captionLayout="dropdown-buttons"
                fromDate={new Date("1900-01-01")}
                toDate={new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function CustomFormTextArea<T extends FieldValues>(
  props: Readonly<ChildrenProps<T>>
) {
  const { name, label, description, control } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full" id={`${name}`}>
          <FormLabel className="font-bold text-lg">{label}</FormLabel>
          <FormControl className="text-m">
            <Textarea
              placeholder="Tell us a little bit about yourself"
              className="resize-none"
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function CustomFormCheckbox<T extends FieldValues>(
  props: Readonly<ChildrenProps<T>>
) {
  const { name, label, description, control } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
        </FormItem>
      )}
    />
  );
}

export function CustomFormSelect<T extends FieldValues>(
  props: Readonly<Props<T>>
) {
  const { name, label, placeholder, description, control, options} = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem id={`${name}`}>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {options?.map((option) => (
                  <SelectItem value={option.value as string} key={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
