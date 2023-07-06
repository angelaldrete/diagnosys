import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppForm from "../components/Form/AppForm";
import FormStructure from "../types/FormStructure";
import useConsultationFormStructure from "../modules/Forms/hooks/useConsultationFormStructure";
import api from "../axios";
import { useParams } from "react-router-dom";

const EditarConsulta = () => {
  const navigate = useNavigate();
  const consultationFormStructure: FormStructure[] =
    useConsultationFormStructure();

  const handleConsultationSubmit = () => {
    const form = consultationFormRef.current!;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    api
      .put(`/consultations/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const { id } = useParams();

  const consultationFormRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    api
      .get(`/consultations/${id}`)
      .then((res) => {
        const consultation = res.data;
        consultationFormRef.current!.pacienteId.value = consultation.pacienteId;
        consultationFormRef.current!.fecha.value = consultation.fecha;
        consultationFormRef.current!.hora.value = consultation.hora;
        consultationFormRef.current!.motivo.value = consultation.motivo;
        consultationFormRef.current!.diagnostico.value =
          consultation.diagnostico;
        consultationFormRef.current!.tratamiento.value =
          consultation.tratamiento;
        consultationFormRef.current!.observaciones.value =
          consultation.observaciones;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleConsultationUpdate = () => {
    const form = consultationFormRef.current!;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    api
      .put(`/consultations/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AppForm
        title="Editar consulta"
        btnText="Guardar"
        structure={consultationFormStructure}
        handleSubmit={handleConsultationSubmit}
        formRef={consultationFormRef}
        onCancel={handleCancel}
        modalTitle="Editar consulta"
        modalMessage="¿Estás seguro de que quieres editar esta consulta?"
        modalActions={
          <>
            <button
              className="btn btn--confirm"
              onClick={() => {
                handleConsultationUpdate();
              }}
            >
              Guardar
            </button>
          </>
        }
      />
    </>
  );
};

export default EditarConsulta;
