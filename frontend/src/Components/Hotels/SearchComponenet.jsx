import React from "react";

export const SearchComponenet = () => {
  return (
    <div className="col-span-1 rounded-lg bg-blue-900 text-white px-2 py-4 h-fit sticky top-8">
      <h1 className="text-lg font-bold">Search</h1>
      <div className="mt-2">
        <label htmlFor="destination" className="block mb-1">
          destination
        </label>
        <input
          type="text"
          name="destination"
          id="destinaion"
          placeholder="where are you going"
          className="w-full h-10 px-2 rounded-sm text-sm text-gray-800 outline-none"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="checkInDate" className="block mb-1">
          check-in date
        </label>
        <input
          type="date"
          name="checkInDate"
          id="destinaion"
          placeholder="where are you going"
          className="w-full h-10 px-2 rounded-sm text-sm text-gray-800 outline-none"
        />
      </div>

      <div className="options mt-2">
        <h1>Options</h1>
        <div className="px-2">
          <div className="flex justify-between items-center mt-2">
            <label htmlFor="">
              Min price <span className="text-sm font-thin">(per night)</span>
            </label>
            <input
              type="number"
              className="w-16 rounded outline-none text-gray-800 px-1"
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="">
              Max price <span className="text-sm font-thin">(per night)</span>
            </label>
            <input
              type="number"
              className="w-16 rounded outline-none text-gray-800 px-1"
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="">Adults</label>
            <input
              type="number"
              className="w-16 rounded outline-none text-gray-800 px-1"
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="">Childrens</label>
            <input
              type="number"
              className="w-16 rounded outline-none text-gray-800 px-1"
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <label htmlFor="">Rooms</label>
            <input
              type="number"
              className="w-16 rounded outline-none text-gray-800 px-1"
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
