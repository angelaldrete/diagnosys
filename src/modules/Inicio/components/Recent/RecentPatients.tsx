import React from "react";
import Paciente from "../../../../types/Paciente";
import RecentPatient from "./RecentPatient";
import Card from "../../../../components/Card";
import { useNavigate } from "react-router-dom";

interface RecentPatientsProps {
  patients: Paciente[];
}

const RecentPatients: React.FC<RecentPatientsProps> = ({ patients }) => {
  const navigate = useNavigate();

  const navigateToPatient = (id: Paciente["id"]) => {
    navigate(`/pacientes/${id}`);
  };

  return (
    <>
      <ul className="recent-patients">
        {patients.map((patient, idx) => (
          <li
            key={patient.id}
            className="recent-patients__patient"
            style={{
              animationDelay: `${idx * 150}ms`,
            }}
            onClick={() => navigateToPatient(patient.id)}
          >
            <Card>
              <RecentPatient
                patient={{
                  firstName: patient.nombre,
                  lastName: patient.apellido,
                  age: patient.edad,
                }}
              />
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecentPatients;
