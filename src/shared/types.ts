import { Icon, IconProps } from "@tabler/icons-react"
import { ReactNode } from "react"

export type ComponentBaseProps = {
  children: ReactNode
}

export type StringObject = Record<string, string>

export type TabularIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>

export type HttpMethods = "get" | "patch" | "post" | "delete"

export type Image = { url: string, size: string, type: string, name: string }