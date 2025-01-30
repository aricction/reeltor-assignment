import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Distributions = () => {
  const [smooth, setSmooth] = useState(true);

  const toggleSmoothness = () => {
    setSmooth((prev) => !prev);
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "$",
        data: [300, 280, 235, 210, 229, 260, 300],
        borderColor: "rgba(98, 75, 250, 0.99)",
        backgroundColor: "rgba(98, 75, 250, 0.99)",
        fill: true,
        tension: smooth,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: smooth, // Smooth toggle effect
      },
    },
    plugins: {
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { display: true },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true,
          stepSize: 50,
          maxTicksLimit: 6,
        },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="mt-2 bg-white shadow-md w-[700px] rounded-xl h-[280px]">
     <div className=" ml-3">
     <p className="text-xl p-4 font-semibold">Total Distributions</p>
     </div>
     <div className="p-8">
      <Line data={data} options={options} />
     </div>
    </div>
  );
};

export default Distributions;
