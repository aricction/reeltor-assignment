import { RiHome5Line } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { LiaToolboxSolid } from "react-icons/lia";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { PiSpeedometerFill } from "react-icons/pi";

const SideBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          gap: "45px",
          padding: "15px",
          height: "100%",
          width: "80px",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <PiSpeedometerFill size={20} color="purple" />
        <RiHome5Line size={20} color="grey" />
        <FiPieChart size={20} color="grey" />
        <LiaToolboxSolid size={20} color="grey" />
        <FaRegCalendarCheck size={19} color="grey" />
        <IoSettingsOutline size={20} color="gray" />

        <div style={{ bottom: "150px", color: "purple", marginTop: "200px" }}>
          <FaPowerOff />
        </div>
      </div>
    </>
  );
};

export default SideBar;
