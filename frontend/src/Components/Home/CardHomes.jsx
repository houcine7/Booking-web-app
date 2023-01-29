import React from "react";
import { MdLocationPin } from "react-icons/md";

//
const CardHomes = ({
  name,
  image,
  describtion,
  city,
  price,
  rating,
  nbReviews,
}) => {
  return (
    <div className="max-w-lg ">
      <img
        src={image}
        alt="hotel"
        className="h-60 w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-col">
        <p className="text-gray-600 font-bold"> {name} </p>
        <p className="text-gray-500 font-semibold"> {describtion} </p>
        <p className="text-gray-500 font-normal flex items-center">
          {city}
          {"  "}
          <span className="inline-block">
            <MdLocationPin />
          </span>
        </p>
        <p className=" text-gray-500">
          Starting from{" "}
          <span className="font-bold text-gray-900">MAD {price}</span>
        </p>
        {rating && (
          <div className="flex gap-3 items-center">
            <p
              className="bg-blue-600 rounded-t rounded-br text-white"
              style={{ padding: "2px 4px" }}
            >
              {rating}
            </p>
            <p className="text-gray-900 font-medium">Wonderful</p>
            <p className="font-thin">{nbReviews} reviews</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardHomes;
