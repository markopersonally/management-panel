import React from "react";
import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { BsPencil } from "react-icons/bs";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineData = {
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
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Purchase",
      data: [43, 10, 50, 32, 70, 40, 55, 56, 81, 80, 59, 65],
      fill: false,
      backgroundColor: "rgb(228, 37, 37)",
      borderColor: "rgba(228, 37, 37, 0.2)",
    },
  ],
};

const pieData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(173, 72, 94)",
        "rgb(40, 104, 146)",
        "rgb(199, 155, 53)",
      ],
      hoverOffset: 4,
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
      text: "Annual Growth",
    },
  },
};

const content = "p-8";
const divChart = "w-max h-max mb-8 flex gap-10";
const divBoxItems = "grid grid-cols-3 gap-4";
const divItems = "p-4 bg-white rounded shadow hover:bg-slate-400 duration-500";
const divItemsText = "text-xl font-bold";

export default function Dashboard() {
  return (
    <Section>
      <H1>
        <BsPencil />
        Dashboard
      </H1>
      <div className={content}>
        <div className={divChart}>
          <div>
            <Line data={lineData} options={options} />
          </div>
          <div>
            <Pie data={pieData} options={options} />
          </div>
        </div>
        <div className={divBoxItems}>
          {[
            "Statistics",
            "Recent Activities",
            "Notifications",
            "User Engagement",
            "Sales Data",
            "Performance",
          ].map((title) => (
            <div className={divItems} key={title}>
              <h2 className={divItemsText}>{title}</h2>
              <p>Content goes here...</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
