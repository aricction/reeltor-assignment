import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRef } from "react";
import MyCard from "./components/rightCard"
import TopPicks from "./components/topPicks";
import ImageCard from "./components/imageCard";
import Stats from "./components/investmentStats"
import Nft from "./components/nft";
import Slider from "./components/propertySlider";
import Distributions from "./components/distribution";

const StatsPage = () => {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      style={{ overflowY: "auto", maxHeight: "100vh" }}
      className="p-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* First Section: NFT Marketplace & Investment Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {/* NFT Marketplace */}
          <div className="col-span-1 rounded-lg ">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold ">NFT Marketplace</h2>
              <BsThreeDots />
            </div>
            {/* Placeholder content */}
            <div className="h-64 rounded-lg">
            <ImageCard/>
            </div>
          </div>

          {/* Investment Stats */}
          <div className="col-span-1  rounded-lg sm:mt-12 lg:mt-0 ">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold ">Investment Stats</h2>
              <BsThreeDots className="" />
            </div>
            {/* Placeholder content */}
            <div className="h-64 rounded-lg">
              <Stats />
            </div>
          </div>

          {/* Additional Section */}
          <div className="grid lg:grid-flow-col ">
            <div className="p-4 rounded-lg lg:col-span-1 lg:row-span-2">
              <div className="lg:ml-28 sm:mr-4 h-64 rounded-lg">
                <MyCard />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section: Various Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-6 gap-4 mt-12">
          {/* NFTs Owned Section */}
          <div className="col-span-1  sm:col-span-1 lg:col-span-1 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="font-bold text-xl ">NFTs Owned</p>
              <BsThreeDots className="" />
            </div>
            {/* Placeholder content */}
            <div className="h-64 rounded-lg">
              <Nft />
            </div>
          </div>

          {/* My Portfolio Section */}
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 lg:col-span-3 gap-4">
            <div className=" col-span-1 sm:mt-36 lg:mt-0 sm:col-span-2 lg:grid-cols-3 p-4 rounded-lg">
              <div className="flex justify-between items-center lg:ml-20">
                <p className="font-bold text-xl ">My Portfolio</p>
                <BsThreeDots className="text-white" />
              </div>
              {/* Placeholder content */}
              <div className="  lg:mt-12 h-18 rounded-lg">
               <Slider />
              </div>
            </div>

            {/* Distributions Section */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-3 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <BsThreeDots className="text-white" />
              </div>
              {/* Placeholder content */}
              <div className=" h-64 rounded-lg">
                <Distributions />
              </div>
            </div>

            
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-2 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-bold text-xl lg:ml-36">Top Picks</p>
                <BsThreeDots className="text-white" />
              </div>
              <div className=" h-64 rounded-lg">
              <TopPicks />
              </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsPage;
