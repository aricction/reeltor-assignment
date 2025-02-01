import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa6";
import { AiOutlineMoon } from "react-icons/ai";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  const handleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode); // Save the preference to localStorage

      // Apply or remove the "dark" class to <html> element based on newMode
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return newMode;
    });
  };

  useEffect(() => {
    // When the component mounts, set the theme based on localStorage
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 dark:text-gray-300"></span>
      <button
        onClick={handleDarkMode}
        className="w-11 h-6 bg-gray-400 rounded-full relative focus:outline-none"
      >
        <div
          className={`absolute left-1 top-0.5 text-yellow-400 transition-all ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaSun size={17} />
        </div>
       
        <div
          className={`absolute right-0.5 top-0.5 text-white transition-all ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        >
          <AiOutlineMoon size={20} />
        </div>

       
        <span
          className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-all ${
            darkMode ? "transform translate-x-5" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default DarkMode;
