import React from "react";
import Paciente from "../types/Paciente";
import api from "../axios";

const usePatients = (limit?: number) => {
  const [patients, setPatients] = React.useState<Paciente[]>([]);

  React.useEffect(() => {
    api
      .get(`${limit ? `/patients?limit=${limit}` : "/patients"}`)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return patients;
};

export default usePatients;
