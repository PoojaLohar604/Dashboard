import React from "react";
import "./GrapheTwo.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

const data = [
  { name: "2020", value: 500 },
  { name: "2021", value: 1200 },
  { name: "2022", value: 1500 },
  { name: "2023", value: 2200 },
  { name: "2024", value: 1700 },
  { name: "2025", value: 2300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`$${payload[0].value.toFixed(2)}`}</p>
        <p className="percent">+3.4%</p>
      </div>
    );
  }

  return null;
};

const SaleOverviewChart = () => {
  return (
    <div className="chart-container">
      <h3>Sale Overviews</h3>
      <div className="graphe-two">
      <ResponsiveContainer width="100%" height={230}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1ABC9C" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.19} />
            </linearGradient>
          </defs>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#969696"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fontWeight: "bold", color: "#5D5D5D" }}
            tickMargin={10}
            axisLine={false}
            tickLine={false}
            angle={-30} 
            dy={5}  
          />
          <YAxis
            tick={{ fontSize: 12, fontWeight: "bold", color: "#5D5D5D" }}
            tickFormatter={(value) => `$${value}k`}
            domain={[0, 2500]}
            ticks={[10,500, 1000, 1500, 2000, 2500]} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1ABC9C"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <ReferenceDot x="2023" y={2200} r={4} fill="white" stroke="red" />

        </AreaChart>
      </ResponsiveContainer>
      </div>
      
    </div>
  );
};

export default SaleOverviewChart;
