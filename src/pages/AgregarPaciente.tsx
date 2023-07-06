import React from "react";
import { useNavigate } from "react-router-dom";
import AppForm from "../components/Form/AppForm";
import FormStructure from "../types/FormStructure";
import usePatientFormStructure from "../modules/Forms/hooks/usePatientFormStructure";
import api from "../axios";

const AgregarPaciente = () => {
  const navigate = useNavigate();
  const patientFormStructure: FormStructure[] = usePatientFormStructure();

  const handlePatientSubmit = () => {
    const patientForm = patientFormRef.current;
    if (patientForm) {
      const formData = new FormData(patientForm);
      const data = Object.fromEntries(formData);
      api
        .post("/patients", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const patientFormRef = React.useRef<HTMLFormElement>(null);

  return (
    <>
      <AppForm
        title="Agregar paciente"
        btnText="Agregar paciente"
        structure={patientFormStructure}
        handleSubmit={handlePatientSubmit}
        formRef={patientFormRef}
        onCancel={handleCancel}
      />
    </>
  );
};

export default AgregarPaciente;
