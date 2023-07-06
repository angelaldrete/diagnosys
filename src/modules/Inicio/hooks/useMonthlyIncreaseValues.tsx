import React from "react";
import api from "../../../axios";

const useMonthlyIncreaseValues = () => {
  const [monthlyIncreaseConsultations, setMonthlyIncreaseConsultations] =
    React.useState<number[]>([]);
  const [monthlyIncreasePatients, setMonthlyIncreasePatients] = React.useState<
    number[]
  >([]);

  React.useEffect(() => {
    api
      .get("/consultations/increase/month")
      .then((res) => {
        setMonthlyIncreaseConsultations(res.data);
      })
      .catch((err) => console.error(err));
    api
      .get("/patients/increase/month")
      .then((res) => {
        setMonthlyIncreasePatients(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return {
    monthlyIncreaseConsultations,
    monthlyIncreasePatients,
  };
};

export default useMonthlyIncreaseValues;
