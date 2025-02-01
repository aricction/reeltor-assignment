import { MdArrowForwardIos } from "react-icons/md"; // Assuming you're using this icon
import { useState, useEffect } from "react";

const TopPicks = () => {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:ml-36">
      <ul className="shadow-md sm:items-center lg:w-[350px] sm:w-[400px] sm:h-[500px] p-2 pl-5 bg-white rounded-xl">
        {loading ? (
          <p className="text-black dark:text-white">Loading...</p>
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-2 mt-8 sm:items-center ">
              <h3 className="text-md font-medium ml-2 ">{item.name}</h3>
              <div className="flex items-center sm:justify-between lg:gap-5 ml-2 justify-start">
                <p className="">${item.price.toFixed(3)}</p>
                <p className="ml-7">{item.ether} Ether</p>
                <MdArrowForwardIos size={20} />
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

export default TopPicks;
