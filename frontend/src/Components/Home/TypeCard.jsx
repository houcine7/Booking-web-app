import React from "react";

const TypeCard = ({ image, name, number }) => {
  return (
    <div className="overflow-hidden ">
      <img
        src={image}
        alt="hotels"
        className="h-52 rounded-md object-cover"
        loading="lazy"
      />
      <div className="mt-2">
        <h3 className="text-lg font-bold uppercase">{name}s</h3>
        <p className="text-normal font-medium">{number}</p>
      </div>
    </div>
  );
};

export default TypeCard;
