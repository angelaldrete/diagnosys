import React from "react";
import Patient from "./Patient";
import Card from "../../../components/Card";
import Paciente from "../../../types/Paciente";

interface PatientsProps {
  patients: Paciente[];
}

const Patients: React.FC<PatientsProps> = ({ patients }) => {
  return (
    <ul className="patients">
      {patients.map((paciente, idx) => (
        <li
          key={paciente.id}
          className="patients__item"
          style={{
            animationDelay: `${idx * 0.1}s`,
          }}
        >
          <Card>
            <Patient patient={paciente} />
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Patients;
