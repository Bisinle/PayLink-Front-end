import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Food", value: 540 },
  { name: "Rent", value: 620 },
  { name: "Bills", value: 453 },
  { name: "Investment", value: 230 },
  { name: "Transportation", value: 686 },
  { name: "HealthCare", value: 900 },
];

const RADIAN = Math.PI / 180;
const COLORS = [
  "#00C49F",
  "#F2320D",
  "#FFBB28",
  "#FF8042",
  "#301934",
  "#9E08E2",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Pichart() {
  return (
    <div className="w-full  bg-white p-4 rounded-sm border flex justify-center items-center border-gray-200  shadow-lgflex flex-col">
      <strong className="text-gray-700 font-medium">Expense Types</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}