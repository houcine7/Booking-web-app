import React, { useState } from "react";

export const SearchComponenet = ({ searchState }) => {
  //
  const inititalState = {
    city: searchState.city,
    startingDate: searchState.startingDate,
    endingDate: searchState.endingDate,
    adultsNumber: searchState.adultsNumber,
    childsNumber: searchState.childsNumber,
    roomsNumber: searchState.roomsNumber,
    minPrice: 0,
  };

  const [formData, setFormData] = useState(inititalState);
  //
  const handelChange = (e) => {
    //
  };
  return (
    <div className="col-span-1 rounded-lg bg-blue-900 text-white px-2 py-4 h-fit sticky top-8">
      <h1 className="text-lg font-bold">Search</h1>
      <div className="mt-2">
        <label htmlFor="city" className="block mb-1">
          destination
        </label>
        <input
          type="text"
          name="city"
          id="destinaion"
          placeholder="where are you going"
          value={formData.city}
          onChange={(e) => handelChange(e)}
          className="w-full h-10 px-2 rounded-sm text-sm text-gray-800 outline-none"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="startingDate" className="block mb-1">
          Starting date
        </label>
        <input
          type="date"
          name="startingDate"
          id="starting date"
          value={formData.startingDate}
          onChange={(e) => handelChange(e)}
          className="w-full h-10 px-2 rounded-sm text-sm text-gray-800 outline-none"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="endingDate" className="block mb-1">
          End date
        </label>
        <input
          type="date"
          name="endingDate"
          id="starting date"
          value={formData.endingDate}
          onChange={(e) => handelChange(e)}
          className="w-full h-10 px-2 rounded-sm text-sm text-gray-800 outline-none"
        />
      </div>

      <div className="options mt-2">
        <h3>Options</h3>
        <div className="px-2">
          <div className="flex justify-between items-center mt-2">
            <label htmlFor="minPrice">
              Min price <span className="text-sm font-thin">(per night)</span>
            </label>
            <input
              type="number"
              name="minPrice"
              className="w-16 rounded outline-none text-gray-800 px-1"
              value={formData.minPrice}
              onChange={(e) => handelChange(e)}
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="maxPrice">
              Max price <span className="text-sm font-thin">(per night)</span>
            </label>
            <input
              type="number"
              name="maxPrice"
              className="w-16 rounded outline-none text-gray-800 px-1"
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="adultsNumber">Adults</label>
            <input
              type="number"
              name="adultsNumber"
              className="w-16 rounded outline-none text-gray-800 px-1"
              value={formData.adultsNumber}
              onChange={(e) => handelChange(e)}
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="childsNumber">Childrens</label>
            <input
              type="number"
              name="childsNumber"
              className="w-16 rounded outline-none text-gray-800 px-1"
              value={formData.childsNumber}
              onChange={(e) => handelChange(e)}
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="roomsNumber">Rooms</label>
            <input
              type="number"
              name="roomsNumber"
              className="w-16 rounded outline-none text-gray-800 px-1"
              value={formData.roomsNumber}
              onChange={(e) => handelChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-green-500 h-9 text-lg font-bold rounded-sm shadow-lg transition duration-300 ease-in-out hover:bg-green-700">
          Search
        </button>
      </div>
    </div>
  );
};
