import React from "react";

import { FaBed, FaTaxi } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

const Header = ({ isListHotels }) => {
  return (
    <div className="bg-blue-500 mt-3 px-2">
      <ul className="flex  gap-9 text-white text-semibold text-sm">
        <li className="flex items-center gap-1 border-white rounded-2xl px-2 py-1 cursor-pointer border-2 bg-blue-600">
          <FaBed /> Stays
        </li>
        <li className="flex items-center gap-1 border-white  rounded-2xl px-2 py-1 cursor-pointer hover:bg-blue-600 transition duration-200">
          <MdOutlineFlight /> Flights
        </li>
        <li className="flex items-center gap-1 border-white  rounded-2xl px-2 py-1 cursor-pointer hover:bg-blue-600 transition duration-200">
          <AiFillCar /> Car rental
        </li>
        <li className="flex items-center gap-1 border-white  rounded-2xl px-2 py-1 cursor-pointer hover:bg-blue-600 transition duration-200">
          <FaTaxi /> Airport taxis
        </li>
      </ul>

      {!isListHotels && (
        <div className="mt-8 text-white">
          <h1 className="text-2xl font-bold">Booker Save time, save money!</h1>
          <p className="text-lg font-normal mt-2">
            make it easier for everyone to experience the world
          </p>

          <div className="flex text-blue-600 gap-3 mt-3">
            <button className="rounded-md font-semibold text-sm bg-slate-50 px-5 py-2 transition duration-200 shadow-md hover:bg-gray-200 ease-in-out">
              sign in
            </button>
            <button className="rounded-md font-semibold text-sm bg-slate-50 px-5 py-2 transition duration-200 shadow-md hover:bg-gray-200 ease-in-out">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
