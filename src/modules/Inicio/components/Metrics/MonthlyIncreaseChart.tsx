import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";
import MonthlyIncreaseValue from "../../types/MonthlyIncreaseValue";

interface MonthlyIncreaseChartProps {
  title: string;
  val: string;
  data: MonthlyIncreaseValue[] | any[];
}

const MonthlyIncreaseChart: React.FC<MonthlyIncreaseChartProps> = ({
  title,
  val,
  data,
}) => {
  return (
    <div className="monthly-metrics__element">
      <strong className="monthly-metrics__title">{title}: </strong>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, bottom: 5, left: 0 }}
        >
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip
            formatter={(value: number) => [value, `${val}`]}
            labelStyle={{ color: "#333" }}
          />
          <CartesianGrid stroke="#999" strokeDasharray="3 3" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyIncreaseChart;
