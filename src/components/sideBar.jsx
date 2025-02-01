import { RiHome5Line } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { LiaToolboxSolid } from "react-icons/lia";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { PiSpeedometerFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const SideBar = ({ isDark }) => {
  return (
    <div className="relative" >

    <div
      className="flex flex-col items-center gap-11 p-4 h-screen h-[999px] w-20 shadow-md bg-white ">
      <PiSpeedometerFill size={20} className="text-purple-700" />

    
      <Link to="/cards">
        <RiHome5Line size={20} className={`cursor-pointer hover:text-purple-600 ${isDark ? 'text-white' : 'text-gray-500'}`} />
      </Link>

      <Link to="/stats">
        <FiPieChart size={20} className={`cursor-pointer hover:text-purple-600 ${isDark ? 'text-white' : 'text-gray-500'}`} />
      </Link>

      <Link to="">
        <LiaToolboxSolid size={20} className={`cursor-pointer hover:text-purple-600 ${isDark ? 'text-white' : 'text-gray-500'}`} />
      </Link>

      <Link to="">
        <FaRegCalendarCheck size={19} className={`cursor-pointer hover:text-purple-600 ${isDark ? 'text-white' : 'text-gray-500'}`} />
      </Link>

      <Link to="">
        <IoSettingsOutline size={20} className={`cursor-pointer hover:text-purple-600 ${isDark ? 'text-white' : 'text-gray-500'}`} />
      </Link>

      <div className={`${isDark ? 'text-white' : 'text-purple-600'} mt-24`}>
        <FaPowerOff size={20} />
      </div>
    </div>
  </div>
  );
};

export default SideBar;
