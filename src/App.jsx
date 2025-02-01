import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import StatsPage from "./statsPage";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
 

  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <div className="flex ml-20">
          <Navbar  />
        </div>

        <div className="flex">
          <SideBar  />
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<StatsPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/cards" element={<Card />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
