import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from "chart.js";
import { FaEthereum } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { LiaCalendarMinus } from "react-icons/lia";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const Stats = () => {
  // Icon mapping
  const iconMap = {
    AiFillDollarCircle: AiFillDollarCircle,
    LiaCalendarMinus: LiaCalendarMinus,
  };

  const data = {
    labels: ["1", "2", "3"],
    datasets: [
      {
        data: [40, 45, 35],
        backgroundColor: ["#f7bd1b", "#3ef7ad", "#f24e82"],
        borderRadius: 15,
        barThickness: 15,
        maxBarThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        categoryPercentage: 0.5, // Reduce space between bars
        barPercentage: 0.3, // Adjusts bar width within available space
        ticks: { display: false },
        grid: { display: false }, // Hides x-axis grid lines
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
          stepSize: 2,
          maxTicksLimit: 6,
        },
        grid: { display: true },
      },
    },
  };

  return (
    <div
      style={{
        width: "500px",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems:"start",
        justifyContent:"start",
        gap: "30px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems:"start", justifyContent:"start", gap: "70px" }}>
        {[
          {
            label: "Total Investment",
            value: "0.56 Ether",
            color: "#f7bd1b",
            bgColor: "#f7bd1b",
            icon: "AiFillDollarCircle",
          },
          {
            label: "Weekly Returns",
            value: "0.005 Ether",
            color: "#3ef7ad",
            bgColor: "#3ef7ad",
            icon: "LiaCalendarMinus",
          },
          { label: "Expenses", value: "0.005 Ether", color: "#f24e82", bgColor: "#f24e82", icon: "AiFillDollarCircle" },
        ].map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: item.bgColor,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconComponent size={30} color="white" />
              </div>
              <div style={{ marginLeft: "15px", textAlign: "left" }}>
                <h3 style={{ marginBottom: "5px" }}>{item.label}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "flex-end" }}>
                  <FaEthereum size={30} color={item.color} />
                  <h2 style={{ color: item.color, margin: 0 }}>{item.value}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          borderRadius: "15px",
          width: "150px",
          height: "400px",
          padding: "15px",
          
          
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Stats;
