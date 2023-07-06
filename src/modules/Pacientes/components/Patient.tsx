import React from "react";
import Paciente from "../../../types/Paciente";
import { useNavigate } from "react-router-dom";

interface PatientProps {
  patient: Paciente;
}

const Patient: React.FC<PatientProps> = ({ patient }) => {
  const navigate = useNavigate();

  return (
    <div
      className="patients__content"
      onClick={() => {
        navigate(`/pacientes/${patient.id}`);
      }}
    >
      <h2 className="patients__title">
        {patient.nombre} {patient.apellido}
      </h2>

      <div className="patients__age">{patient.edad} años</div>
    </div>
  );
};

export default Patient;
