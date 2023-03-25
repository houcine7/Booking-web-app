import React from "react";
import { useFetch } from "../../hooks/useFetch";
import CardHomes from "./CardHomes";
import { API_BASE_URL } from "../../constants/api";

const cardsData = [
  {
    image: "./images/hotels.png",
    describtion: "this a simple desc",
    city: "London",
    nbReviews: "1000",
    price: "5033",
    rating: "8.8",
  },
  {
    image: "./images/hotel1.png",
    describtion: "simple description",
    city: "Rabat",
    nbReviews: "555",
    price: "3030",
    rating: "9.1",
  },
  {
    image: "./images/hotel2.png",
    describtion: "this is a simple description  2",
    city: "New York",
    nbReviews: "200",
    price: "7000",
    rating: "9.9",
  },
  {
    image: "./images/hotel3.png",
    describtion: "this is a simple description  3",
    city: "Paris",
    nbReviews: "211",
    price: "8220",
    rating: "7.5",
  },
];

const HomesGuests = () => {
  const { data, loading, error } = useFetch(
    API_BASE_URL + "hotels?featured=true&size=4"
  );
  return (
    <div className="px-8 my-4">
      <h1 className="font-bold text-xl mb-3">
        Homes guests love
        <span className="w-14 h-1 border-b-4 border-blue-600 block "></span>
      </h1>
      <div className="flex gap-2 justify-center">
        {data.map((item) => {
          return (
            <CardHomes
              key={item._id}
              name={item.name}
              image={item.photos[0]}
              rating={item.rating}
              nbReviews={item.nbReviews}
              describtion={item.description}
              city={item.city}
              price={item.cheapestPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomesGuests;
