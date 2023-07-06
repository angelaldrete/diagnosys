import React from "react";
import Consulta from "../../../types/Consulta";
import Consultation from "./Consultation";
import Card from "../../../components/Card";

interface ConsultationsProps {
  consultations?: Consulta[];
}

const Consultations: React.FC<ConsultationsProps> = ({ consultations }) => {
  return (
    <ul className="consultations">
      {consultations?.map((consulta, idx) => (
        <li
          key={idx}
          className="consultations__item"
          style={{
            animationDelay: `calc(${idx} * 0.1s)`,
          }}
        >
          <Card>
            <Consultation consultation={consulta} />
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Consultations;
