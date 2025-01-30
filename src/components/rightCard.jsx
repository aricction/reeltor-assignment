import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const MyCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/topPick.json");
        const jsonData = await res.json();
        setData(jsonData.top_picks || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="shadow-md w-[370px] p-8  h-[1000px] transition-all  dark:bg-dark-300 ">
      <h3 className="text-xl font-semibold m-2">My Cards</h3>

      {/* Balance Card */}
      <div className="m-2 w-[300px] h-[180px] bg-[#654afe] rounded-lg p-5 text-white">
        <p>Balance</p>
        <p className="text-4xl font-semibold">$521,625</p>
        <p className="mt-5">Monthly Profit</p>
        <p className="text-xl font-semibold">$14,225</p>
      </div>

      {/* Top Picks Header */}
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-xl font-semibold">Top Picks</h2>
        <BsThreeDots className="text-black dark:text-white" />
      </div>

      {/* List Items */}
      <ul>
        {loading ? (
          <p className="text-black dark:text-white">Loading...</p>
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-2">
              <h3 className="text-md font-medium ml-2  ">{item.name}</h3>
              <div className="flex items-center gap-5 ml-2 m-3 justify-start">
                <p className="">${item.price.toFixed(3)}</p>
                <p className="ml-7">{item.ether} Ether</p>
                <MdArrowForwardIos size={20} className="" />
              </div>
            </li>
          ))
        ) : (
          <p className="text-black dark:text-light100">No data available</p>
        )}
      </ul>
    </div>
  );
};

export default MyCard;
