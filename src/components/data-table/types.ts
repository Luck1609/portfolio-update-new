
// import { PaginationMeta } from "@/hooks/use-pagination";
import { ColumnDef, Table } from "@tanstack/react-table";
import { ReactNode } from "react";

export interface DataTablePaginationProps<TData> {
  table: Table<TData>
  // meta?: PaginationMeta
}


export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[];
  components?: {
    header: (table: Table<TData>) => ReactNode
  }
  // meta?: PaginationMeta
  isLoading?: boolean
}


export type Options = 'Delete' | 'Restore' | 'Deactivate'

type Props = {
  show: boolean;
  url?: string;
} | undefined

export type ActionsData = {
  view: Props;
  edit: Props;
  deactivate: {
    show: boolean;
    status: Options,
    url?: string;
  };
  delete: boolean;
  mutate: string | undefined;
  url: string;
  name: string;
}

export type DynamicButtonGroup = {
  buttonGroup?: {
    label: ReactNode;
    action: () => void
  }[]
  actions?: Partial<ActionsData>
}



export type DialogAlert = {
  title: string;
  description: string;
  url: string;
}