import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const MyCard = ({ isDark }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/topPick.json");
        const data = await res.json();
        setData(data.top_picks);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`shadow-md w-[370px] p-8 h-screen h-[1001px] ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <h3 className="text-xl font-semibold m-2">My Cards</h3>
      <div className="m-2 mt-3 w-[300px] h-[180px] bg-[#654afe] rounded-lg mt-auto p-5 text-white">
        <p>Balance</p>
        <p className="text-4xl font-semibold">$521,625</p>

        <p className="mt-5">Monthly Profit</p>
        <p className="text-xl font-semibold">$14,225</p>
      </div>
      <ul>
        <div className="col-span-1 row-span-2">
          <div className="flex justify-between items-center mt-20">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Top Picks
            </h2>
            <BsThreeDots />
          </div>
        </div>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <h3 className={`text-md font-medium ml-2 mt-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.name}
                </h3>
                <div className="flex items-center gap-5 ml-2 m-3 justify-start mt-2">
                  <p className={`text-gray-500 mt-[-10px] ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    ${item.price.toFixed(3)}
                  </p>

                  <p className={`text-gray-500 mt-[-10px] ml-7 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {item.ether} Ether
                  </p>
                  <div className="">
                    <MdArrowForwardIos size={20} />
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default MyCard;
