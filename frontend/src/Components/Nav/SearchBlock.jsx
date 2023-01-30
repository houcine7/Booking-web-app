import React from "react";
import { FaHotel } from "react-icons/fa";
import { GrUserFemale } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import { MdOutlineBedroomChild } from "react-icons/md";
import { DateRangePicker } from "rsuite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inititalState = {
  city: "",
  startingDate: "",
  endingDate: "",
  adultsNumber: 0,
  childsNumber: 0,
  roomsNumber: 0,
};

const SearchBlock = () => {
  const [searchState, setSearchState] = useState(inititalState);
  const navigateTo = useNavigate();

  //handel onChange event for inputs
  const handelChange = (e) => {
    setSearchState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // handel change on date range picker
  const datePickerChange = (value) => {
    const dateStart = new Date(value[0]);
    const dateEnd = new Date(value[1]);
    setSearchState((prevState) => {
      return {
        ...prevState,
        startingDate: dateStart.toISOString().split("T")[0],
        endingDate: dateEnd.toISOString().split("T")[0],
      };
    });
  };

  // handel click event for search button
  const handelClick = () => {
    navigateTo("/hotels", { state: { searchState } });
  };

  //
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
              name="city"
              onChange={(e) => {
                handelChange(e);
              }}
              id="place"
            />
          </div>
          <div className="flex items-center relative gap-1 px-2">
            <DateRangePicker
              onChange={(value) => {
                datePickerChange(value);
              }}
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
                  name="adultsNumber"
                  onChange={(e) => {
                    handelChange(e);
                  }}
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
                name="childsNumber"
                onChange={(e) => {
                  handelChange(e);
                }}
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
                name="roomsNumber"
                onChange={(e) => {
                  handelChange(e);
                }}
                id="rooms"
              />
            </div>
          </div>
          <div className="flex items-center relative gap-1 px-2">
            <button
              className=" text-white rounded-md font-semibold text-sm bg-blue-500 px-5 py-2 transition duration-200 shadow-md hover:bg-blue-300 ease-in-out"
              onClick={handelClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
