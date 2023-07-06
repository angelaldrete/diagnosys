import { FormFieldType } from "../../../types/FormStructure";
import FormStructure from "../../../types/FormStructure";

const usePatientFormStructure = () => {
  const patientFormStructure: FormStructure[] = [
    {
      category: "Datos generales del paciente",
      fields: [
        {
          id: "nombre",
          label: "Nombre",
          type: FormFieldType.text,
          placeholder: "Nombre",
          pattern: "[A-Za-z]+",
          patternError: "El nombre solo puede contener letras",
        },
        {
          id: "apellido",
          label: "Apellido",
          type: FormFieldType.text,
          placeholder: "Apellido",
          pattern: "[A-Za-z]+",
          patternError: "El apellido solo puede contener letras",
        },
        {
          id: "fechaNacimiento",
          label: "Fecha de nacimiento",
          type: FormFieldType.date,
        },
        {
          id: "edad",
          label: "Edad",
          type: FormFieldType.number,
          placeholder: "Edad",
          pattern: "[0-9]+",
          patternError: "La edad solo puede contener números",
        },
        {
          id: "sexo",
          label: "Sexo",
          type: FormFieldType.select,
          options: [
            { id: "Masculino", value: "Masculino" },
            { id: "Femenino", value: "Femenino" },
          ],
          patternError: "El sexo solo puede contener letras",
        },
        {
          id: "telefono",
          label: "Teléfono",
          type: FormFieldType.text,
          placeholder: "Teléfono",
          pattern: "[0-9]+",
          patternError: "El teléfono solo puede contener números",
        },
        {
          id: "email",
          label: "Correo Electrónico",
          type: FormFieldType.email,
          placeholder: "Correo Electrónico",
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
          patternError: "El correo electrónico debe tener el formato correcto",
        },
      ],
    },
    {
      category: "Datos médicos del paciente",
      fields: [
        {
          id: "alergias",
          label: "Alergias",
          type: FormFieldType.textarea,
          placeholder: "Alergias",
          pattern: "[A-Za-z0-9., -]*",
          patternError: "Las alergias solo pueden contener letras",
        },
        {
          id: "enfermedades",
          label: "Enfermedades",
          type: FormFieldType.textarea,
          placeholder: "Enfermedades",
          pattern: "[A-Za-z0-9., -]*",
          patternError: "Las enfermedades solo pueden contener letras",
        },
        {
          id: "medicamentos",
          label: "Medicamentos",
          type: FormFieldType.textarea,
          placeholder: "Medicamentos",
          pattern: "[A-Za-z0-9., -]*",
          patternError: "Los medicamentos solo pueden contener letras",
        },
        {
          id: "antecedentes",
          label: "Antecedentes",
          type: FormFieldType.textarea,
          placeholder: "Antecedentes",
          pattern: "[A-Za-z0-9., -]*",
          patternError: "Los antecedentes solo pueden contener letras",
        },
      ],
    },
  ];

  return patientFormStructure;
};

export default usePatientFormStructure;
