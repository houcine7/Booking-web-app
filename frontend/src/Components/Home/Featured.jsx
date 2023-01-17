import React from "react";

const Featured = ({ image, city, numberP }) => {
  return (
    <div className="relative w-80">
      <img
        src={image}
        alt="paris"
        className="rounded object-cover h-52 w-full"
      />
      <div className="absolute text-white z-10 top-32 px-4">
        <h2 className="font-bold text-xl">{city}</h2>
        <p className="font-semibold">{numberP} properties</p>
      </div>
    </div>
  );
};

export default Featured;
