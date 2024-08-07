import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarChartData } from "..";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    maintainAspectRatio: false,
    responive: true,
  };
  // ChartJs.canvas.parentNode.style.height = "128px";
  // ChartJs.canvas.parentNode.style.width = "128px";

  return <Bar options={options} data={BarChartData} />;
};

export default BarChart;
