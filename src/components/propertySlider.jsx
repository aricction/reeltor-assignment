import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

const Slider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./property.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.property_data);
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2.5) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2.5 + data.length) % data.length);
  };

  return (
    <div className="relative flex items-center justify-center lg:mt-1 lg:ml-64 mt-2 sm:mt-12">
      {/* Carousel for large screens */}
      <div className="hidden sm:flex absolute lg:w-[700px] w-[50%] overflow-hidden border-l-2 border-r-2 border-gray-300">
        <motion.div
          className="flex space-x-4"
          animate={{ x: -currentIndex * 300 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <div
              key={index}
              className="border-2 border-solid shadow-md w-[260px] h-[80px] rounded-lg p-2 bg-white dark:bg-dark-200 flex items-center"
            >
              <img src={item.image} className="w-[60px] h-[60px] rounded-xl" alt={item.name} />
              <div className="ml-4 flex flex-col">
                <p className="text-m font-semibold">{item.name}</p>
                <div className="flex items-center">
                  <FaEthereum color="gray" />
                  <p className="lg:text-lg font-semibold text-gray-500">{item.ether} Ether</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* List view for small screens */}
      <div className="sm:hidden flex flex-col space-y-4 w-full px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 border-solid shadow-md w-full h-[80px] rounded-lg p-2 bg-white dark:bg-dark-200 flex items-center"
          >
            <img src={item.image} className="w-[60px] h-[60px] rounded-xl" alt={item.name} />
            <div className="ml-4 flex flex-col">
              <p className="text-m font-semibold">{item.name}</p>
              <div className="flex items-center">
                <FaEthereum color="gray" />
                <p className="lg:text-lg font-semibold text-gray-500">{item.ether} Ether</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="hidden sm:block absolute left-0 bg-gray-200 p-2 z-10 rounded-full">
        <GrFormPrevious size={24} />
      </button>
      <button onClick={nextSlide} className="hidden sm:block absolute right-0 bg-gray-200 p-2 rounded-full">
        <MdNavigateNext size={24} />
      </button>
    </div>
  );
};

export default Slider;
