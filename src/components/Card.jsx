import React, { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { GiElectric } from "react-icons/gi";
import { motion } from "framer-motion";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); 
        const jsonData = await response.json();
        setData(jsonData.real_estate); 
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", paddingTop:"100px" , }}>
    
      <h3 style={{ marginLeft:"-150px"}}>Discover popular properties</h3>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <div style={{ display: "grid",  gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", justifyContent: "center" }}>
          {data.map((item, index) => (
            <motion.div key={index} style={{
              
              borderRadius: "10px",
              padding: "15px",
              width: "310px",
            

            }}
             whileHover={{scale:1.1}} >
              {item.featured && (

                <div style=
                {{
                  position:"absolute",
                  backgroundColor:"#654afe",
                  width:"120px",
                  height:"45px",
                  borderRadius:"14px",
                  margin:"15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center" ,
                  zIndex:"1"}}>   
              <p>

              <GiElectric color="white" size={20}/>
                 
                <strong style={{color:"white"}}>FEATURED</strong> 
                {item.featured}</p>
              </div>
              
            )}
              {item.sponsored && (
                <div style={{
                  position:"absolute",
                  backgroundColor:"#ff86a4",
                  width:"120px",
                  height:"45px",
                  borderRadius:"14px",
                  margin:"15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center" ,
                  zIndex:"1"
                  
                }}>
                 <GiElectric color="white" size={20}/>
                   <strong style={{color:"white", marginLeft: "5px"}}>Sponsored</strong> 
                </div>
              )}
              <img src={item.image}
              alt={item.name}
              style={{
                width:"100%",
                height:"250px",
                objectFit:"cover",
                borderRadius:"15px"
              }}/>
              
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", gap: "10px" }}>
  <h2 style={{ margin: "0", paddingTop: "12px" }}>${item.price.toLocaleString()} / mo</h2>
  <h3 style={{ margin: "0", padding: "0" }}>{item.name}</h3>
  <p style={{ margin: "0", padding: "0", color:"gray" }}>{item.address}</p>
</div>

             
              <div style={{ display: "flex", alignItems: "center", space:"20px",gap: "15px",justifyContent: "start" }}>
                <IoBedOutline color="black" size={20} />
                <p>{item.bedrooms} bed</p>
                <FaShower color="black" size={15} />
                <p>{item.bathrooms} bath</p>
                <LuSquareArrowOutUpRight color="black" size={15}/>
                <p>{item.area} sqft</p>
              </div>

              
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
