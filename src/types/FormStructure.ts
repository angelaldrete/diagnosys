import Paciente from "./Paciente"

interface FormStructure {
  category: string
  fields: FormFieldBase[]
}

export interface FormFieldBase {
  id: string
  label: string
  type: FormFieldType
  pattern?: string
  patternError?: string
  placeholder?: string
  value?: string
  options?: Paciente[] | string[] | any[]
  list?: Paciente[] | string[] | any[]
  isDisabled?: boolean
}

export enum FormFieldType {
  text = "text",
  password = "password",
  number = "number",
  date = "date",
  time = "time",
  select = "select",
  textarea = "textarea",
  email = "email",
}

export default FormStructure