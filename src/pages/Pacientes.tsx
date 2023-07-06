import React from "react";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import Paciente from "../types/Paciente";
import Patients from "../modules/Pacientes/components/Patients";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import api from "../axios";
import usePatients from "../hooks/usePatients";

const Pacientes = () => {
  const [patients, setPatients] = React.useState<Paciente[]>([]);
  const pacientes = usePatients();
  const navigate = useNavigate();

  const handlePatientsSearch = (search: string) => {
    if (search) {
      api
        .get(`/patients?search=${search}`)
        .then((res) => {
          setPatients(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      api
        .get("/patients")
        .then((res) => {
          setPatients(res.data);
        })
        .catch((err) => console.error(err));
    }
  };

  const addPatient = () => {
    navigate("/agregar-paciente");
  };

  React.useEffect(() => {
    setPatients(pacientes);
  }, [pacientes]);

  return (
    <>
      <div className="heading">
        <Title>Pacientes</Title>
        <SearchBar handleSearch={handlePatientsSearch} />
      </div>
      {patients.length > 0 ? (
        <Patients patients={patients} />
      ) : (
        <p>Actualmente no hay pacientes.</p>
      )}
      <Button onClick={addPatient} type="add" />
    </>
  );
};

export default Pacientes;
