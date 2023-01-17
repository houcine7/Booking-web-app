import React from "react";
import { FaHotel } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GrUserFemale } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import { MdOutlineBedroomChild } from "react-icons/md";

const SearchBlock = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-7 absolute shadow-lg">
        <div className="rounded bg-white border-pink-400 border-2 flex justify-between">
          <div className="flex items-center relative gap-1 px-2">
            <label htmlFor="place">
              <span className="cursor-pointer">
                <FaHotel />
              </span>
            </label>

            <input
              type="text"
              className="border-gray-200 rounded outline-none text-sm h-10 text-gray-800"
              placeholder="Where are you giong"
              id="place"
            />
          </div>
          <div className="flex items-center relative gap-1 px-2">
            <label htmlFor="date">
              <span className="cursor-pointer">
                <BsFillCalendarDateFill />
              </span>
            </label>

            <input
              type="date"
              className="border-gray-200 rounded outline-none text-sm h-10 text-gray-800 items-center"
              placeholder="Where are you giong"
              id="date"
            />
          </div>
          <div className="flex items-center relative gap-1 px-2">
            <div className="flex items-center relative gap-1">
              <label htmlFor="adults">
                <span className="cursor-pointer">
                  <GrUserFemale />
                </span>
              </label>

              <div div className="flex items-center relative">
                <input
                  type="number"
                  className="border-gray-200 rounded outline-none text-sm h-10 text-gray-800 w-14"
                  placeholder="adults"
                  id="adults"
                />
              </div>
            </div>
            <div div className="flex items-center relative gap-1">
              <label htmlFor="kids">
                <span className="cursor-pointer">
                  <TbUsers />
                </span>
              </label>
              <input
                type="number"
                className="border-gray-200 rounded outline-none text-sm h-10 text-gray-800 w-14"
                placeholder="kids"
                id="kids"
              />
            </div>
            <div className="flex items-center relative gap-1">
              <label htmlFor="rooms">
                <span className="cursor-pointer">
                  <MdOutlineBedroomChild />
                </span>
              </label>
              <input
                type="number"
                className="border-gray-200 rounded outline-none text-sm h-10 text-gray-800 w-14"
                placeholder="rooms"
                id="rooms"
              />
            </div>
          </div>
          <div className="flex items-center relative gap-1 px-2">
            <button className=" text-white rounded-md font-semibold text-sm bg-blue-500 px-5 py-2 transition duration-200 shadow-md hover:bg-blue-300 ease-in-out">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
