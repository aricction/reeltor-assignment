import React, { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { GiElectric } from "react-icons/gi";
import { motion } from "framer-motion";
import { useRef } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); 
        const jsonData = await response.json();
        setData(jsonData.real_estate); 
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div ref={scrollRef}
    style={{ overflowY: "auto", maxHeight: "100vh" }}
    className="p-5 pt-10">
      <h3 className="text-lg font-semibold">Discover popular properties</h3>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div  
        className=" grid h-full lg:grid-cols-3   gap-1">
          {data.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative rounded-lg p-4 lg:w-[410px] "
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}  
              
            >
              {item.featured && (
                <div className="absolute bg-purple-600 text-white flex items-center justify-center w-28 h-11 rounded-lg top-7 left-7 z-10 p-2">
                  <GiElectric size={25} />
                  <strong>FEATURED</strong>
                </div>
              )}
              {item.sponsored && (
                <div className="absolute bg-pink-500 text-white flex items-center justify-center w-28 h-11 rounded-lg top-7 left-7 z-10 p-2">
                  <GiElectric  size={25} />
                  <strong>Sponsored</strong>
                </div>
              )}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover rounded-lg" 
              />
              <div className="flex flex-col gap-1 mt-3">
                <h2 className="text-lg font-semibold">${item.price.toLocaleString()} / mo</h2>
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.address}</p>
              </div>
              <div className="flex items-center gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1">
                  <IoBedOutline size={20} />
                  <p>{item.bedrooms} bed</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaShower size={15} />
                  <p>{item.bathrooms} bath</p>
                </div>
                <div className="flex items-center gap-1">
                  <LuSquareArrowOutUpRight size={15} />
                  <p>{item.area} sqft</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
