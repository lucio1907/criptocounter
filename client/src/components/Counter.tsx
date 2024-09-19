import React, { useEffect, useState } from "react";

const Counter = (): React.ReactElement => {
  const [counter, setCounter] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  const handleClick = () => {
    setCounter(counter + 1000 * multiplier);
    setRotation(rotation + 360);
  };

  useEffect(() => {
    setPoints(counter);

    const nextThreshold = 5000 * multiplier;

    if (points >= nextThreshold) {
      // Solo aumenta el multiplicador si no alcanzo el maximo
      if (multiplier < 10) {
        setMultiplier((prevValue) => prevValue + 1);
      }
    }

  }, [counter, points, multiplier]);

  return (
    <div className="h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-5xl text-white">{counter.toLocaleString()}</p>
        <p className="text-2xl text-white">
          Multiplicador: {multiplier === 10 ? 'x10 (Máx.)' : `x${multiplier}`}
        </p>
        <button
          className="w-[300px] h-[300px] mt-5 rounded-full"
          onClick={handleClick}
        >
          <img
            src="/moneda_jpeg_1.webp"
            alt="moneda-icon"
            className="w-[300px] h-[300px] object-contain transition-transform duration-500 ease-in-out rounded-full"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </button>
      </div>
    </div>
  );
};

export default Counter;
