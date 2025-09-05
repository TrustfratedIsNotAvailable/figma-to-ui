import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";


// Weekly data
const data = [
  { day: "Sun", sales: 1600 },
  { day: "Mon", sales: 1000 },
  { day: "Tue", sales: 1800 },
  { day: "Wed", sales: 1300 },
  { day: "Thu", sales: 2450 },
  { day: "Fri", sales: 1300 },
  { day: "Sat", sales: 800 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { value } = payload[0];
    return (
      <div className="bg-yellow-50 shadow-md p-2 rounded text-center">
        <div className="font-semibold text-gray-700">Highest Sale</div>
        <div className="flex items-center justify-center gap-1 mt-1">
          <FaArrowTrendUp className="w-4 h-4 text-brand-50" />
          <span className="font-bold">${value}</span>
        </div>
      </div>
    );
  }
  return null;
};

const WeeklySalesChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const todayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
      >
        <XAxis dataKey="day" stroke="#555" />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Bar
          dataKey="sales"
          radius={[4, 4, 0, 0]}
          isAnimationActive={false}
          onMouseOver={(data, index) => setHoveredIndex(index)}
          onMouseOut={() => setHoveredIndex(null)}
        >
          {data.map((entry, index) => {
            let fillColor = "#DFEDE3"; // default color
            if (index === todayIndex) fillColor = "#DAFFC2"; // today
            if (index === hoveredIndex) fillColor = "#0F4E23"; // hover
            return <Cell key={`cell-${index}`} fill={fillColor} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklySalesChart;
