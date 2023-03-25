import React from "react";
import { useFetch } from "../../hooks/useFetch";
import TypeCard from "./TypeCard";
import { API_BASE_URL } from "../../constants/api";
const cardsImages = [
  {
    image: "./images/hotels.png",
  },
  {
    image: "./images/appartement.png",
  },
  {
    image: "./images/villas.png",
  },

  {
    image: "./images/reorts.png",
  },
];


const PropertyList = () => {
  //
  const { data, loading, error } = useFetch(
    API_BASE_URL + "hotels/types-count"
  );

  //
  return (
    <div className="mt-5 px-10">
      <h1 className="font-bold text-xl mb-3">
        Browse by property type
        <span className="w-20 h-1 border-b-4 border-blue-600 block "></span>
      </h1>

      <div className="flex gap-2 justify-center">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          data.map((item, index) => {
            //
            return (
              <TypeCard
                key={index}
                image={cardsImages[index].image}
                name={item.typeProp}
                number={item.count}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default PropertyList;
