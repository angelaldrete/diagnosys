import RecentPatients from "./components/Recent/RecentPatients";
import Paciente from "../../types/Paciente";
import React from "react";

interface RecentProps {
  patients: Paciente[];
}

const Recent: React.FC<RecentProps> = ({ patients }) => {
  if (!patients) return null;

  return (
    <>
      <h2 className="subtitle appear">Últimos pacientes visitados</h2>
      <RecentPatients patients={patients} />
    </>
  );
};

export default Recent;
