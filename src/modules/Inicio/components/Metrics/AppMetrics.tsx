import useMedicalMetrics from "../../hooks/useMedicalMetrics";
import MedicalMetrics from "./MedicalMetrics";
import MedicalMetricsBase from "../../types/MedicalMetricsBase";

const AppMetrics = () => {
  const medicalMetrics: MedicalMetricsBase = useMedicalMetrics();

  return (
    <>
      <h2 className="subtitle appear">Metricas de la aplicación</h2>
      <MedicalMetrics medicalMetrics={medicalMetrics} />
    </>
  );
};

export default AppMetrics;
