import { PiBellSimple } from "react-icons/pi";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        height: "60px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center", 
      }}
    >
      <h2 style={{ color: "grey", margin: "0" }}>Dashboard</h2>
      <div style={{ padding: "10px" }}>
        <PiBellSimple size={20} />
      </div>
    </div>
  );
};

export default Navbar;
