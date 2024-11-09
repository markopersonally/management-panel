import React from "react";
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 32, 50, 10, 43],
      fill: false,
      backgroundColor: "rgb(59, 130, 246)",
      borderColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      label: "Purchase",
      data: [43, 10, 50, 32, 70, 40, 55, 56, 81, 80, 59, 65],
      fill: false,
      backgroundColor: "rgb(239, 68, 68)",
      borderColor: "rgba(239, 68, 68, 0.5)",
    },
  ],
};

const pieData = {
  labels: ["Product A", "Product B", "Product C"],
  datasets: [
    {
      label: "Sales Distribution",
      data: [300, 50, 100],
      backgroundColor: [
        "rgba(59, 130, 246, 0.8)",
        "rgba(16, 185, 129, 0.8)",
        "rgba(249, 115, 22, 0.8)",
      ],
      hoverOffset: 4,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Annual Performance",
      font: {
        size: 16,
      },
    },
  },
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Product Sales Distribution",
      font: {
        size: 16,
      },
    },
  },
};

export default function Dashboard() {
  const stats = [
    { title: "Total Revenue", value: "$1,234,567", change: "+12.5%" },
    { title: "Active Users", value: "45,678", change: "+7.2%" },
    { title: "New Customers", value: "1,234", change: "+3.8%" },
    { title: "Satisfaction Rate", value: "98%", change: "+0.5%" },
  ];

  const recentActivities = [
    { user: "John Doe", action: "Made a purchase", time: "2 hours ago" },
    { user: "Jane Smith", action: "Left a review", time: "4 hours ago" },
    { user: "Bob Johnson", action: "Signed up", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="text-sm font-semibold text-gray-500">
              {stat.title}
            </h2>
            <p className="mt-2 text-2xl font-bold text-gray-800">
              {stat.value}
            </p>
            <p
              className={`mt-2 text-sm ${
                stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Sales vs Purchases
          </h2>
          <div className="h-[300px] w-full">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Product Sales Distribution
          </h2>
          <div className="h-[300px] w-full">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Recent Activities
          </h2>
          <ul className="divide-y divide-gray-200">
            {recentActivities.map((activity, index) => (
              <li key={index} className="py-3">
                <p className="text-sm font-medium text-gray-800">
                  {activity.user}
                </p>
                <p className="text-sm text-gray-500">{activity.action}</p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Quick Actions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <button className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
              Generate Report
            </button>
            <button className="rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600">
              Add New Product
            </button>
            <button className="rounded bg-yellow-500 px-4 py-2 font-semibold text-white hover:bg-yellow-600">
              View Inventory
            </button>
            <button className="rounded bg-purple-500 px-4 py-2 font-semibold text-white hover:bg-purple-600">
              Manage Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
