import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title,
} from "chart.js";
import "./index.scss";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Social Media",
      borderColor: "rgb(104,228,151)",
      borderWidth: 4,
      fill: true,
      data: [23, 42, 35, 27, 43, 22, 17],
      yAxisID: "social",
      legend: {

      }
    },
    {
      type: "bar",
      label: "Website Blog",
      backgroundColor: "rgb(40,160,251)",
      data: [440, 505, 414, 671, 227, 413, 201],
      borderColor: "white",
      borderWidth: 2,
      yAxisID: "blog",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Traffic Sources",
      align: "start",
      font: {
        size: 28,
      },
    },
    legend: {
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
      },
    },
  },
  interaction: {
    mode: "point",
  },
  scales: {
    blog: {
      type: "linear",
      display: true,
      position: "left",
      beginAtZero: true,
      title: {
        display: true,
        text: "Website Blog",
      },
      min: 0,
      max: 800,
    },
    social: {
      type: "linear",
      display: true,
      position: "right",
      beginAtZero: true,
      title: {
        display: true,
        text: "Social Media",
      },
      min: 0,
      max: 48,
      ticks: {
        stepSize: 4,
      },
    },
  },
};

const ChartJs = () => {
  return (
    <div className="container">
      <div className="chartjs">
        <h1>Chart.js</h1>
        <Chart options={options} data={data} />
      </div>
    </div>
  );
};

export default ChartJs;
