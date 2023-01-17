import React from "react";
import TypeCard from "./TypeCard";

const cardsData = [
  {
    image: "./images/hotels.png",
    name: "Hotels",
    number: "300",
  },
  {
    image: "./images/villas.png",
    name: "Villas",
    number: "122",
  },
  {
    image: "./images/appartement.png",
    name: "Appartement",
    number: "100",
  },
  {
    image: "./images/reorts.png",
    name: "Reorts",
    number: "500",
  },
];

const PropertyList = () => {
  return (
    <div className="mt-5 px-10">
      <h1 className="font-bold text-xl mb-3">
        Browse by property type
        <span className="w-20 h-1 border-b-4 border-blue-600 block "></span>
      </h1>

      <div className="flex gap-2 justify-center">
        {/* add cards here  */}
        {cardsData.map((item, index) => {
          //
          return (
            <TypeCard
              key={index}
              image={item.image}
              name={item.name}
              number={item.number}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyList;
