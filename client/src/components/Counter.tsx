import React, { useState } from "react";

const Counter = (): React.ReactElement => {
  const [counter, setCounter] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  const handleClick = () => {
    setCounter(counter + 1);
    setRotation(rotation + 360);
  };

  return (
    <div className="h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-5xl text-white">{counter.toLocaleString()}</p>
        <button className="w-[300px] h-[300px] mt-5 rounded-full" onClick={handleClick}>
          <img
            src="/moneda_jpeg_1.webp"
            alt="moneda-icon"
            className="w-[300px] h-[300px] object-contain transition-transform duration-500 ease-in-out rounded-full"
            style={{ transform: `rotate(${rotation}deg)` }} // Rotar según el estado
          />
        </button>
      </div>
    </div>
  );
};

export default Counter;
