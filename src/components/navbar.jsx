import { PiBellSimple } from "react-icons/pi";
import DarkMode from "./darkmode"; 

const Navbar = ({ isDark, toggleDarkMode }) => {
  return (
    <div
      className={`w-full h-16 px-4 flex items-center justify-between shadow-md 
        ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`
      }
    >
      <h2 className="m-0 text-lg sm:text-xl font-semibold">Dashboard</h2>
      <DarkMode isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <div className="p-2">
        <PiBellSimple size={20} />
      </div>
    </div>
  );
};

export default Navbar;
