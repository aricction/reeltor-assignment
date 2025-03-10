import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";

const Nft = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./nft.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.nft_data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <div
            key={index}
            className={"flex flex-col lg:w-[280px] h-[90px] rounded-lg m-4 pl-4 bg-white dark:bg-dark-200 shadow-md ml-1"}
          >
            <p className={`text-lg p-2 `}>
              {item.name}
            </p>
            <div className="flex items-center">
              <FaEthereum />
              <p className="text-2xl font-bold">{item.ether} Ether</p>
              <p
                className="lg:ml-20 sm:ml-52 text-lg"
                style={{ color: item.color }}
              >
                {item.graph}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Nft;
