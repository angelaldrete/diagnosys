import React from "react";
import api from "../../../axios";

const useMedicalMetrics = () => {
  const [patientCount, setPatientCount] = React.useState<number>(0);
  const [consultationCount, setConsultationCount] = React.useState<number>(0);
  const [averageAge, setAverageAge] = React.useState<number>(0);
  const [averageConsultations, setAverageConsultations] =
    React.useState<number>(0);

  React.useEffect(() => {
    api
      .get("/patients/count/month")
      .then((res) => {
        setPatientCount(res.data.count);
      })
      .catch((err) => console.error(err));

    api
      .get("/consultations/count/month")
      .then((res) => {
        setConsultationCount(res.data.count);
      })
      .catch((err) => console.error(err));

    api
      .get("/patients/average/age")
      .then((res) => {
        setAverageAge(res.data.averageAge === null ? 0 : res.data.averageAge);
      })
      .catch((err) => console.error(err));

    api
      .get("/consultations/average/month")
      .then((res) => {
        setAverageConsultations(
          res.data.average === null ? 0 : res.data.average
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return {
    patientCount,
    consultationCount,
    averageAge,
    averageConsultations,
  };
};

export default useMedicalMetrics;
