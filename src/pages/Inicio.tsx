import React from "react";
import Welcome from "../modules/Inicio/Welcome";
// import Priority from "../modules/Inicio/Priority";
import Recent from "../modules/Inicio/Recent";
import Metrics from "../modules/Inicio/Metrics";
import { UserContext } from "../context/UserContext";
import usePatients from "../hooks/usePatients";
import useMonthlyIncreaseValues from "../modules/Inicio/hooks/useMonthlyIncreaseValues";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const { user } = React.useContext(UserContext);
  const patients = usePatients(3);
  const { monthlyIncreaseConsultations, monthlyIncreasePatients } =
    useMonthlyIncreaseValues();
  const navigate = useNavigate();

  if (patients && monthlyIncreaseConsultations && monthlyIncreasePatients) {
    return (
      <>
        <Welcome name={user.firstName} />
        {/* <Priority/> */}
        <Recent patients={patients} />
        <Metrics
          monthlyIncreaseConsultations={monthlyIncreaseConsultations}
          monthlyIncreasePatients={monthlyIncreasePatients}
        />
      </>
    );
  } else {
    return (
      <>
        <Welcome name={user.firstName} />
        <p className="inicio__nodata">
          Actualmente no hay datos que mostrar. Podrias iniciar con las
          siguientes acciones
        </p>
        <div className="inicio__wrapper">
          <Card
            style={{
              animationDelay: "0.2s",
            }}
            onClick={() => {
              navigate("/agregar-paciente");
            }}
          >
            <h2>Agregar Paciente</h2>
            <p>Da click aqui para agregar un paciente</p>
          </Card>
          <Card
            style={{
              animationDelay: "0.3s",
            }}
            onClick={() => {
              navigate("/agregar-consulta");
            }}
          >
            <h2>Agregar Consulta</h2>
            <p>Da click aqui para agregar una consulta</p>
          </Card>
        </div>
      </>
    );
  }
};

export default Inicio;
