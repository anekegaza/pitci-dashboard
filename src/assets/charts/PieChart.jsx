import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { PieChartData } from "..";

ChartJs.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const options = {};
  return <Pie options={options} data={PieChartData} />;
};

export default PieChart;
