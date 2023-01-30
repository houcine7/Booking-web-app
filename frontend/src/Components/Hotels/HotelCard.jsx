import React from "react";

const HotelCard = ({ img, title, rating, distance, desc, price }) => {
  return (
    <div className="mycard p-2 rounded-lg w-full border-gray-400 border flex gap-6">
      <div className="w-56 overflow-hidden">
        <img src={img} alt="hotel" className="h-full object-cover flex-1" />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-blue-800">{title}</h1>
          <div className="flex gap-6 items-center">
            <p className="font-semibold text-lg">Excelent</p>
            <p
              className="bg-blue-600 rounded-t rounded-br text-white"
              style={{ padding: "2px 3px" }}
            >
              {rating}
            </p>
          </div>
        </div>
        <p className="text-gray-500 font-thin mt-1">
          {distance} m from center{" "}
        </p>
        <p className="bg-green-600 rounded px-2 py-1 w-fit mt-1 text-xs font-bold text-white items-center">
          free airport taxi
        </p>
        <p className="mt-1 font-bold text-sm">{desc}</p>
        <div className="flex  justify-between mt-1 items-center">
          <p className="text-gray-500 text-sm">
            Enire studio * 1 Bathroom * 21m² 1 full bed
          </p>
          <p className="text-lg font-bold">MAD {price}</p>
        </div>
        <div className="flex  justify-between mt-1 items-center">
          <p className="text-green-600 font-bold">Free cancellation</p>
          <p className="text-gray-500 text-sm">Includs taxes and fees</p>
        </div>
        <div className="flex  justify-between mt-1 items-center">
          <p className="text-gray-500 text-xs">
            You can cencel later, so book now with this great price
          </p>
          <button className="bg-blue-600 rounded px-2 py-2 font-bold text-white shadow transition duration-200 ease-in-out hover:bg-blue-700">
            see availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
