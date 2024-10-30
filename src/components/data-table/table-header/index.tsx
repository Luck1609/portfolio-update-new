import { cn } from "@/lib/utils";
import SearchComponent, { SearchComponentProps } from "./search-component";
import StatusFilter, { StatusFilterProps } from "./status-filter";
import FormModal, { ModalFormProps } from "@/components/form/modal";

type BaseHeaderProps<D> = {
  statusFilterProps: StatusFilterProps
  searchComponentProps: SearchComponentProps
  addButtonProps: ModalFormProps<D>
}

export default function BaseTableHeader<D>({
  statusFilterProps,
  searchComponentProps,
  addButtonProps
}: BaseHeaderProps<D>) {
  return (
    <div className={cn("w-full grid lg:grid-cols-8 lg:mb-5 py-5 px-3 lg:p-0")}>
      <div className="col-span-3 lg:col-span-5">
        <StatusFilter {...statusFilterProps} />
      </div>

      <div className={cn("col-span-8 lg:col-span-2 order-2 lg:order-1 mt-3 lg:mt-0")}>
        {
          searchComponentProps?.show && <SearchComponent {...searchComponentProps} />
        }
      </div>

      
      <div className="col-span-5 order-1 lg:order-2 lg:col-span-1 justify-self-end">
        <FormModal {...addButtonProps} />
      </div>
    </div>
  )
}
  