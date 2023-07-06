import React from "react";
import MedicalMetricBase from "../../types/MedicalMetricsBase";
import MedicalMetric from "./MedicalMetric";
import Card from "../../../../components/Card";

interface MedicalMetricsProps {
  medicalMetrics: MedicalMetricBase;
}

enum MedicalMetricsKeys {
  patientCount = "Total de pacientes",
  consultationCount = "Total de consultas",
  averageAge = "Edad promedio",
  averageConsultations = "Consultas promedio",
}

const MedicalMetrics: React.FC<MedicalMetricsProps> = ({ medicalMetrics }) => {
  return (
    <ul className="metrics">
      {Object.keys(medicalMetrics).map((key, idx) => (
        <li
          key={idx}
          className="metrics__element"
          style={{
            animationDelay: `${idx * 150}ms`,
          }}
        >
          <Card>
            <MedicalMetric
              name={MedicalMetricsKeys[key as keyof typeof MedicalMetricsKeys]}
              value={medicalMetrics[key as keyof typeof MedicalMetricsKeys]}
            />
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default MedicalMetrics;
