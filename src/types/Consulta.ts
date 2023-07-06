interface Consulta {
  id: number
  fecha: string
  hora: string
  motivo: string
  diagnostico: string
  tratamiento: string
  observaciones?: string
  pacienteId: number
}

export default Consulta