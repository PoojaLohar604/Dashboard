import React, { useState } from "react";
import "./Graphone.css";
import { SlCalender } from "react-icons/sl";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Graphone = () => {
  const data = [
    { name: "Jan 23", expenses: 800 },
    { name: "Feb 23", expenses: 1500 },
    { name: "Mar 23", expenses: 1200 },
    { name: "Apr 23", expenses: 1500 },
    { name: "May 23", expenses: 900 },
    { name: "Jun 23", expenses: 2000 },
    { name: "Jul 23", expenses: 1700 },
    { name: "Aug 23", expenses: 2200 },
    { name: "Sep 23", expenses: 1300 },
    { name: "Oct 23", expenses: 1800 },
  ];
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="chart-container">
      <div className="heading-datepicker">
        <h3>Total Expenses</h3>
        <div className="date-picker-container">
          <div> <SlCalender /></div>
          <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat=" 2023 - 24"
            className="date-picker-input"
            placeholderText="Select date"
          />
          </div>
          <div><MdKeyboardArrowDown /></div>      
        </div>
      </div>

      <div className="graphe-one">
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={data}>
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
            />
            <YAxis
              tick={{ fontSize: 12, fontWeight: "bold", color: "#5D5D5D" }}
              tickFormatter={(value) => `$${value}k`}
              domain={[100, 2500]}
              ticks={[100, 500, 1000, 1500, 2000, 2500]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar
              dataKey="expenses"
              fill="#3498DB"
              barSize={25}
              minPointSize={100}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graphone;
