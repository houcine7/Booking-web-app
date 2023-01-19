import React from "react";

const HotelCard = () => {
  return (
    <div className="mycard p-2 rounded-lg w-full border-gray-400 border flex gap-6">
      <div className="w-56 overflow-hidden">
        <img
          src="./images/hotel1.png"
          alt="hotel"
          className="h-full object-cover flex-1"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-blue-800">
            Tower street appartement
          </h1>
          <div className="flex gap-6">
            <p className="font-semibold text-lg">Excelent</p>
            <p
              className="bg-blue-600 rounded-t rounded-br text-white"
              style={{ padding: "2px 3px" }}
            >
              90.2
            </p>
          </div>
        </div>
        <p className="text-gray-500 font-thin mt-1">700 m from center </p>
        <p className="bg-green-600 rounded px-2 py-1 w-fit mt-1 text-xs font-bold text-white items-center">
          free airport taxi
        </p>
        <p className="mt-1 font-bold text-sm">
          Studio Apartement with Air coditioning
        </p>
        <div className="flex  justify-between mt-1 items-center">
          <p className="text-gray-500 text-sm">
            Enire studio * 1 Bathroom * 21m² 1 full bed
          </p>
          <p className="text-lg font-bold">MAD 500</p>
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
