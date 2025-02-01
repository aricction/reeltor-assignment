import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const MyCard = () => {
  

  return (
    <div className="fshadow-md top-0 sm:w-[100%] lg:w-[400px] h-[300px] p-8 sm:ml-1 m-5 bg-white dark:bg-black-600 ">
      <h3 className="text-xl font-semibold ml-1">My Cards</h3>

      {/* Balance Card */}
      <div className="ml-2 mt-3 lg:w-[300px] h-[180px] bg-[#654afe] rounded-lg p-5 text-white">
        <p>Balance</p>
        <p className="text-4xl font-semibold">$521,625</p>
        <p className="mt-5">Monthly Profit</p>
        <p className="text-xl font-semibold">$14,225</p>
      </div>

   
      
    </div>
  );
};

export default MyCard;
