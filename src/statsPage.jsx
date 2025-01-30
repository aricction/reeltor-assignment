import Distributions from "./components/Distribution";
import ImageCard from "./components/imageCard";
import Stats from "./components/InvestmentStats";
import Nft from "./components/nft";
import Slider from "./components/propertySlider";
import MyCard from "./components/rightCard";
import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRef } from "react";

const StatsPage = ({isDark}) => {
   const scrollRef = useRef(null);
    return (
        <div
        
        ref={scrollRef}
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >

   
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="items-center"
    >
      <div className="grid h-64 grid-cols-3 place-content-stretch gap-2">
        <div className="col-span-1 row-span-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold ml-8 ">NFT Marketplace</h2>
            <BsThreeDots />
          </div>
          <ImageCard />
        </div>

        <div className="z-10 col-span-1">
          <div className="flex flex-cols justify-between items-center">
            <h2 className="text-xl font-semibold ml-6">Investment stats</h2>
            <BsThreeDots />
          </div>
          <Stats />
        </div>

        <div className="ml-32 z-13 bg-white-400 col-span-1 row-span-2">
          <MyCard isDark={isDark} />
        </div>
      </div>


      <div className="grid h-auto grid-cols-6 mt-12 gap-2">
        {/* First div (left side) */}
        <div className="mt-24 m-8 col-span-1 row-span-2">
          <div className="flex justify-between items-end">
            <p className="font-bold text-xl ml-4">NFTs Owned</p>
            <BsThreeDots className="grid" />
          </div>
          <Nft />
        </div>

        {/* Second div (top right) */}
        <div className="ml-20 mt-24 col-span-2 row-span">
          <p className="font-bold text-xl ml-7">My Portfolio</p>
          <Slider />
        </div>

        {/* Third div (distributions section) */}
        <div className="ml-28 mt-16 col-span-4 row-span-2">
          <Distributions />
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default StatsPage;
