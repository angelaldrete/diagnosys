import AppMetrics from "./components/Metrics/AppMetrics";
import MonthlyIncreaseChart from "./components/Metrics/MonthlyIncreaseChart";
import Card from "../../components/Card";

interface MetricsProps {
  monthlyIncreaseConsultations: number[];
  monthlyIncreasePatients: number[];
}

const Metrics: React.FC<MetricsProps> = ({
  monthlyIncreaseConsultations,
  monthlyIncreasePatients,
}) => {
  if (!monthlyIncreaseConsultations && !monthlyIncreasePatients) return null;

  return (
    <>
      <AppMetrics />
      <div className="monthly-metrics">
        <Card
          className="monthly-metrics__card"
          style={{
            animationDelay: "300ms",
          }}
        >
          <MonthlyIncreaseChart
            title="Incremento mensual de consultas"
            val="Consultas"
            data={monthlyIncreaseConsultations}
          />
        </Card>
        <Card
          className="monthly-metrics__card"
          style={{
            animationDelay: "450ms",
          }}
        >
          <MonthlyIncreaseChart
            title="Incremento mensual de pacientes"
            val="Pacientes"
            data={monthlyIncreasePatients}
          />
        </Card>
      </div>
    </>
  );
};

export default Metrics;
