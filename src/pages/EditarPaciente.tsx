import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePatientFormStructure from "../modules/Forms/hooks/usePatientFormStructure";
import FormStructure from "../types/FormStructure";
import AppForm from "../components/Form/AppForm";
import api from "../axios";
import { useParams } from "react-router-dom";

const EditarPaciente = () => {
  const navigate = useNavigate();
  const patientFormRef = React.useRef<HTMLFormElement>(null);
  const patientFormStructure: FormStructure[] = usePatientFormStructure();

  const { id } = useParams();

  const handleCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    api
      .get(`/patients/${id}`)
      .then((res) => {
        const patient = res.data;
        patientFormRef.current!.nombre.value = patient.nombre;
        patientFormRef.current!.apellido.value = patient.apellido;
        patientFormRef.current!.fechaNacimiento.value = patient.fechaNacimiento;
        patientFormRef.current!.edad.value = patient.edad;
        patientFormRef.current!.sexo.value = patient.sexo;
        patientFormRef.current!.telefono.value = patient.telefono;
        patientFormRef.current!.email.value = patient.email;
        patientFormRef.current!.alergias.value = patient.alergias;
        patientFormRef.current!.enfermedades.value = patient.enfermedades;
        patientFormRef.current!.medicamentos.value = patient.medicamentos;
        patientFormRef.current!.antecedentes.value = patient.antecedentes;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePatientSubmit = () => {
    const form = patientFormRef.current!;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    api
      .put(`/patients/${id}`, data, {
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
        title="Editar paciente"
        btnText="Guardar"
        structure={patientFormStructure}
        handleSubmit={handlePatientSubmit}
        formRef={patientFormRef}
        onCancel={handleCancel}
        modalTitle="Editar paciente"
        modalMessage="¿Estás seguro de que quieres editar este paciente?"
        modalActions={
          <>
            <button
              className="btn btn--confirm"
              onClick={() => {
                handlePatientSubmit();
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

export default EditarPaciente;
