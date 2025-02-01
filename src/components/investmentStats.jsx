import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from "chart.js";
import { FaEthereum } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { LiaCalendarMinus } from "react-icons/lia";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const Stats = () => {
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
        barThickness: 8,
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
        categoryPercentage: 0.5,
        barPercentage: 0.3,
        ticks: { display: false },
        grid: { display: false },
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
    <div className="flex items-start justify-start gap-4 p-3 lg:w-[580px] h-[300px] sm:w-[100%] mt-10 bg-white dark:bg-gray-900  dark:text-white rounded-lg shadow-lg">
      <div className="flex flex-col items-start justify-start gap-3 ml-3">
        {[
          {
            label: "Total Investment",
            value: "0.56 Ether",
            color: "#f7bd1b",
            bgColor: "bg-[#f7bd1b]",
            icon: "AiFillDollarCircle",
          },
          {
            label: "Weekly Returns",
            value: "0.005 Ether",
            color: "#3ef7ad",
            bgColor: "bg-[#3ef7ad]",
            icon: "LiaCalendarMinus",
          },
          {
            label: "Expenses",
            value: "0.005 Ether",
            color: "#f24e82",
            bgColor: "bg-[#f24e82]",
            icon: "AiFillDollarCircle",
          },
        ].map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={index} className="flex items-center justify-between lg:w-full">
              <div className={`w-20 h-20 ${item.bgColor} flex justify-center items-center rounded-lg`}>
                <IconComponent size={30} color="white" />
              </div>
              <div className="ml-4 lg:h-[70px] sm:h-[50px] lg:grid sm:flex text-left">
                <h3 className="mb-1 lg:text-lg sm:text-[15px] font-semibold">{item.label}</h3>
                <div className="flex items-center gap-2 justify-end">
                  <FaEthereum size={30} style={{ color: item.color }} />
                  <h2 className="lg:text-xl sm:text-[15px] font-bold" style={{ color: item.color }}>
                    {item.value}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-40 h-72 p-8 rounded-lg lg:ml-24 sm:ml-12 ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Stats;
