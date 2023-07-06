import Paciente from "../types/Paciente";
import React from "react";
import Consulta from "../types/Consulta";
import Details from "../modules/Details/Details";
import ConsultationInfo from "../types/ConsultationInfo";
import ConsultationInfoKeys from "../types/ConsultationInfoKeys";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";
import api from "../axios";

const ConsultaDetail = () => {
  const [consultation, setConsultation] = React.useState<Consulta>(
    {} as Consulta
  );

  const [isOpen, setIsOpen] = React.useState(false);

  const [patient, setPatient] = React.useState<Paciente>({} as Paciente);

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const consultationInfo: ConsultationInfo = {
    fecha: consultation.fecha,
    hora: consultation.hora,
    motivo: consultation.motivo,
    diagnostico: consultation.diagnostico,
    tratamiento: consultation.tratamiento,
    observaciones: consultation.observaciones,
  };

  React.useEffect(() => {
    api
      .get(`/consultations/${id}`)
      .then((response) => {
        setConsultation(response.data);
        api
          .get(`/patients/${response.data.pacienteId}`)
          .then((response) => {
            setPatient(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleConsultationEdit = () => {
    navigate(`/editar-consulta/${id}`);
  };

  const handleConsultationDelete = () => {
    api
      .delete(`/consultations/${id}`)
      .then(() => {
        navigate("/consultas");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="detail">
        <h1 className="detail__title title">
          {patient.nombre} {patient.apellido}
          <FontAwesomeIcon
            icon={faPencil}
            className="detail__title__icon"
            onClick={handleConsultationEdit}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="detail__title__icon"
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="detail__title__icon"
            onClick={() => {
              navigate(-1);
            }}
          />
        </h1>
        <div className="detail__info">
          <div className="detail__info__element">
            <Details
              detailInfo={consultationInfo}
              DetailInfoKeys={ConsultationInfoKeys}
            />
          </div>
        </div>
      </div>
      <Modal
        title="Eliminar consulta"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        actions={
          <>
            <button
              className="btn btn--danger"
              onClick={handleConsultationDelete}
            >
              Eliminar
            </button>
          </>
        }
      >
        Estas seguro que deseas eliminar la consulta de{" "}
        <strong>
          {patient.nombre} {patient.apellido}
        </strong>
        ?
      </Modal>
    </>
  );
};

export default ConsultaDetail;
