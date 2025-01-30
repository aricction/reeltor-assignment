import { useEffect, useState } from "react";

const DarkMode = ({isDark, toggleDarkMode}) => {
    
    return(
       <div className="flex items-center space-x-2">
        <span className="text-gray-700">Change theme</span>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isDark}
            onChange={toggleDarkMode}
            className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-300"></div>
        </label>
       </div>
    )
}

export default DarkMode;
