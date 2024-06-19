import React from "react";
import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { BsPencil } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 32, 50, 10, 43],
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(0, 255, 255, 0.2)",
    },
    {
      label: "purchase",
      data: [43, 10, 50, 32, 70, 40, 55, 56, 81, 80, 59, 65],
      fill: false,
      backgroundColor: "rgb(228, 37, 37)",
      borderColor: "rgba(238, 34, 34, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Annual growth",
    },
  },
};

const divItems = "p-4 bg-white rounded shadow";
const divItemsText = "text-xl font-bold";

export default function Dashboard() {
  return (
    <Section>
      <H1>
        <BsPencil />
        Dashboard
      </H1>
      <div className="p-8">
        <div className="mb-8">
          <Line data={data} options={options} />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className={divItems}>
            <h2 className={divItemsText}>Statistics</h2>
            <p>Content goes here...</p>
          </div>
          <div className={divItems}>
            <h2 className={divItemsText}>Recent Activities</h2>
            <p>Content goes here...</p>
          </div>
          <div className={divItems}>
            <h2 className={divItemsText}>Notifications</h2>
            <p>Content goes here...</p>
          </div>
          <div className={divItems}>
            <h2 className={divItemsText}>User Engagement</h2>
            <p>Content goes here...</p>
          </div>
          <div className={divItems}>
            <h2 className={divItemsText}>Sales Data</h2>
            <p>Content goes here...</p>
          </div>
          <div className={divItems}>
            <h2 className={divItemsText}>Performance</h2>
            <p>Content goes here...</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
