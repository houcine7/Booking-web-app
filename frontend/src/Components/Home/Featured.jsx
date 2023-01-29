import React from "react";

const Featured = ({ image, city, numberP }) => {
  return (
    <div className="relative w-80 overflow-hidden">
      <img
        src={image}
        alt="paris"
        className="rounded object-cover h-52 w-full "
      />
      <div className="absolute text-white z-50 top-32 px-4">
        <h2 className="font-bold text-xl">{city}</h2>
        <p className="font-semibold">{numberP} properties</p>
      </div>
      <span className="absolute w-full h-full bg-zinc-900 opacity-40 top-0 z-20"></span>
    </div>
  );
};

export default Featured;
