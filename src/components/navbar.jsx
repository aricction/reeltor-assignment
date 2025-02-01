import { PiBellSimple } from "react-icons/pi";
import DarkMode from "./darkMode";

const Navbar = ({ darkMode, handleDarkMode }) => {
  return (
    <div className="w-full h-16 px-4 flex items-center justify-between shadow-md bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h2>
      
      <div className="flex items-center space-x-4">
        <DarkMode darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <div className="p-2 cursor-pointer">
          <PiBellSimple size={22} className="text-gray-700 dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
