import React from "react";
import AppForm from "../components/Form/AppForm";
import FormStructure from "../types/FormStructure";
import { useNavigate } from "react-router-dom";
import useConsultationFormStructure from "../modules/Forms/hooks/useConsultationFormStructure";
import api from "../axios";

const AgregarConsulta = () => {
  const navigate = useNavigate();
  const consultationFormStructure: FormStructure[] =
    useConsultationFormStructure();

  const handleConsultationSubmit = () => {
    const consultationForm = consultationFormRef.current;
    if (consultationForm) {
      const formData = new FormData(consultationForm);
      const data = Object.fromEntries(formData);
      api
        .post("/consultations", data, {
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

  const consultationFormRef = React.useRef<HTMLFormElement>(null);

  return (
    <>
      <AppForm
        title="Agregar consulta"
        btnText="Agregar consulta"
        structure={consultationFormStructure}
        handleSubmit={handleConsultationSubmit}
        formRef={consultationFormRef}
        onCancel={handleCancel}
      />
    </>
  );
};

export default AgregarConsulta;
