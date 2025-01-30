import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

const ImageCard = () => {
  const colors = {
    orange: "#F2C265",
    grey: "#a9a9a9",
  };

  const stars = Array(5).fill(0);
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="w-[400px] h-[300px] m-10  shadow-md rounded-xl overflow-hidden relative ">
        <p className="absolute bottom-[60px] left-4 text-xl text-white ">House Andromeda</p>

      <div className="absolute flex gap-2 m-2 items-center justify-center">
  <div className="text-white rounded-lg bg-gray-400 w-20 text-center ">
    Top picks
  </div>
  <p className="text-white rounded-lg bg-gray-400 w-20 text-center">
    Featured
  </p>
</div>

      <div className="absolute flex items-center bottom-9 left-[120px]  transform -translate-x-1/2 z-10 flex justify-center space-x-1">
      <FaEthereum color="white" />
      <p className="text-white ">  
      1.44 Ether
      </p>

        {stars.map((_, index) => (
          <FaStar
            key={index}
            size={15}
            color={rating > index ? colors.orange : colors.grey}
            onClick={() => handleRating(index)}
            className="cursor-pointer"
          />
        ))}
      </div>
      {/* Image */}
      <img src="/images/2.jpg" alt="Image" className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageCard;
