import type {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form"

export type List<T> = {
  data: T[]
  pagination: Pagination
}

export type Pagination = {
  total: number
  currentPage: number
  nextPage: number | null
}

export type IdTitle = {
  title: string
  id: number
}

export type QueryObject = {
  [key: string]:
    | number[]
    | QueryObject
    | string[]
    | number
    | string
    | null
    | undefined
}

export type Document = {
  id: number
  slug: string
  title: string
  dateCreate: string
  uuid: string
  type: IdTitle & { slug: string; icon: string }
  extension?: string
}

export interface FieldProps<T extends FieldValues> {
  register: UseFormRegister<T>
  errors: FieldErrors<FieldValues>
  control?: Control<T>
  setValue?: UseFormSetValue<T>
}
