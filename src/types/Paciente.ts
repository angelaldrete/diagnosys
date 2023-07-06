import Consulta from "./Consulta"

interface Paciente {
  id: number
  nombre: string
  apellido: string
  fechaNacimiento: string
  sexo: string
  edad: number
  alergias?: string[]
  enfermedades?: string[]
  medicamentos?: string[]
  antecedentes?: string[]
  telefono?: string
  email?: string
  ultimaVisita?: string
  consultas?: Consulta[]
  createdAt: string
  updatedAt: string
}

export default Paciente