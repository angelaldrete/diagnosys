import { FormFieldType } from "../../../types/FormStructure";
import FormStructure from "../../../types/FormStructure";
import usePatients from "../../../hooks/usePatients";

const useConsultationFormStructure = () => {
  const patients = usePatients();

  const consultationFormStructure: FormStructure[] = [
    {
      category: "Datos generales",
      fields: [
        {
          id: "pacienteId",
          label: "Paciente",
          type: FormFieldType.select,
          placeholder: "Paciente",
          options: patients.map((patient) => ({
            id: patient.id,
            value: `${patient.nombre} ${patient.apellido}`,
          })),
        },
        {
          id: "fecha",
          label: "Fecha",
          type: FormFieldType.date,
        },
        {
          id: "hora",
          label: "Hora",
          type: FormFieldType.time,
        },
        {
          id: "motivo",
          label: "Motivo",
          type: FormFieldType.textarea,
          placeholder: "Motivo de la consulta",
          pattern: "^(?!\\s*$)[a-zA-ZÀ-ÿ\u00f1\u00d1\\d\\s\\W]+$",
          patternError:
            "El motivo de la consulta debe ser texto no vacío y no solo números o símbolos",
        },
      ],
    },
    {
      category: "Datos de la consulta",
      fields: [
        {
          id: "diagnostico",
          label: "Diagnóstico",
          type: FormFieldType.textarea,
          placeholder: "Diagnóstico de la consulta",
          pattern: "^(?!\\s*$)[a-zA-ZÀ-ÿ\u00f1\u00d1\\d\\s\\W]+$",
          patternError:
            "El diagnóstico debe ser texto no vacío y no solo números o símbolos",
        },
        {
          id: "tratamiento",
          label: "Tratamiento",
          type: FormFieldType.textarea,
          placeholder: "Tratamiento de la consulta",
          pattern: "^(?!\\s*$)[a-zA-ZÀ-ÿ\u00f1\u00d1\\d\\s\\W]+$",
          patternError:
            "El tratamiento debe ser texto no vacío y no solo números o símbolos",
        },
        {
          id: "observaciones",
          label: "Observaciones",
          type: FormFieldType.textarea,
          placeholder: "Observaciones de la consulta",
          pattern: "^(?!\\s*$)[a-zA-ZÀ-ÿ\u00f1\u00d1\\d\\s\\W]+$",
          patternError:
            "Las observaciones deben ser texto no vacío y no solo números o símbolos",
        },
      ],
    },
  ];

  return consultationFormStructure;
};

export default useConsultationFormStructure;
