import React from "react";
import Consulta from "../types/Consulta";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import Consultations from "../modules/Consultas/components/Consultations";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import api from "../axios";

const Consultas = () => {
  const [consultations, setConsultations] = React.useState<Consulta[]>([]);
  const navigate = useNavigate();

  const handleConsultationsSearch = (search: string) => {
    if (search) {
      api
        .get(`/consultations?search=${search}`)
        .then((res) => {
          setConsultations(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .get("/consultations")
        .then((res) => {
          setConsultations(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  React.useEffect(() => {
    api
      .get("/consultations")
      .then((res) => {
        setConsultations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addConsultation = () => {
    navigate("/agregar-consulta");
  };

  return (
    <>
      <div className="heading">
        <Title>Consultas</Title>
        <SearchBar handleSearch={handleConsultationsSearch} />
      </div>
      {consultations.length > 0 ? (
        <Consultations consultations={consultations} />
      ) : (
        <p>Actualmente no hay consultas.</p>
      )}
      <Button onClick={addConsultation} type="add" />
    </>
  );
};

export default Consultas;
