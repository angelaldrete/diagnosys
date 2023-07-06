import React from "react";
import Paciente from "../types/Paciente";
import Consultations from "../modules/Consultas/components/Consultations";
import PatientPersonalInfoKeys from "../types/PatientPersonalInfoKeys";
import Details from "../modules/Details/Details";
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

const PacienteDetail = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [patient, setPatient] = React.useState<Paciente>();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    api
      .get(`/patients/${id}`)
      .then((response) => {
        setPatient(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get(`/consultations/patient/${id}`)
      .then((response) => {
        setPatient((prevState: any) => {
          return {
            ...prevState,
            consultas: response.data,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handlePatientEdit = () => {
    navigate(`/editar-paciente/${id}`);
  };

  const handlePatientDelete = () => {
    api
      .delete(`/patients/${id}`)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="detail">
        <h1 className="detail__title title">
          {patient?.nombre} {patient?.apellido}
          <FontAwesomeIcon
            icon={faPencil}
            className="detail__title__icon"
            onClick={handlePatientEdit}
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
              detailInfo={{
                edad: patient?.edad,
                sexo: patient?.sexo,
                fechaNacimiento: patient?.fechaNacimiento,
                ultimaVisita: patient?.ultimaVisita,
                alergias: patient?.alergias,
                medicamentos: patient?.medicamentos,
                antecedentes: patient?.antecedentes,
                enfermedades: patient?.enfermedades,
              }}
              DetailInfoKeys={PatientPersonalInfoKeys}
            />
            {patient?.consultas && (
              <>
                <h2 className="detail__consultas__subtitle subtitle">
                  Consultas
                </h2>
                <Consultations consultations={patient.consultas} />
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        title="Eliminar paciente"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        actions={
          <>
            <button className="btn btn--danger" onClick={handlePatientDelete}>
              Eliminar
            </button>
          </>
        }
      >
        Estas seguro que deseas eliminar el paciente{" "}
        <strong>
          {patient?.nombre} {patient?.apellido}
        </strong>
        ?
      </Modal>
    </>
  );
};

export default PacienteDetail;
