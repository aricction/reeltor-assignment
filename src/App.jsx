import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import StatsPage from "./statsPage";
import Card from "./components/Card"; 
import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <BrowserRouter>
       <div className={`transition-all ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
       <div className="ml-20">
          <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
        </div>

        <div className="flex">
          <SideBar isDark={isDark} /> 
         
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<StatsPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/cards" element={<Card  />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
