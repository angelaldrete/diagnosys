import React from "react";
import Consulta from "../../../types/Consulta";
import { useNavigate } from "react-router-dom";
import { transformDate } from "../../../utils/dateFormat";
import api from "../../../axios";

interface ConsultationProps {
  consultation: Consulta;
}

const Consultation: React.FC<ConsultationProps> = ({ consultation }) => {
  const [patientName, setPatientName] = React.useState<string>("");
  const navigate = useNavigate();

  React.useEffect(() => {
    api
      .get(`/patients/${consultation.pacienteId}`)
      .then((response) => {
        const { nombre, apellido } = response.data;
        setPatientName(`${nombre} ${apellido}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [consultation.pacienteId]);

  return (
    <div
      className="consultations__content"
      onClick={() => {
        navigate(`/consultas/${consultation.id}`);
      }}
    >
      <h2 className="consultations__title">{patientName}</h2>

      <div className="consultations__info">
        <p className="consultations__info-item">
          <strong>Fecha:</strong> {transformDate(consultation.fecha)}
        </p>
        <p className="consultations__info-item">
          <strong>Hora:</strong> {consultation.hora}
        </p>
        <p className="consultations__info-item">
          <strong>Diagnostico:</strong> {consultation.diagnostico}
        </p>
      </div>
    </div>
  );
};

export default Consultation;
