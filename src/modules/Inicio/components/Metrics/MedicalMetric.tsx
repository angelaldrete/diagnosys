import React from "react";

interface MedicalMetricProps {
  name: string;
  value: number;
}

const MedicalMetric: React.FC<MedicalMetricProps> = ({ name, value }) => {
  return (
    <div className="metrics__metric">
      <strong className="metrics__subtitle">{name}: </strong>
      <h2 className="metrics__data">{value}</h2>
    </div>
  );
};

export default MedicalMetric;
