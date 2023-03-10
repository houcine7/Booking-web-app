import React from "react";
import Header from "./Header";
import SearchBlock from "./SearchBlock";

import { Link } from "react-router-dom";
const NavBar = ({ isListHotels }) => {
  return (
    <>
      <div className="bg-blue-500 pb-12">
        <div className="container max-w-4xl  mx-auto relative">
          <div className="h-11 flex justify-between items-center px-2">
            <Link to={"/"}>
              <h1 className="font-bold text-lg text-white">Booker</h1>
            </Link>

            <div className="flex gap-6 text-blue-800">
              <button className="rounded-md font-semibold text-sm bg-slate-50 px-3 py-1 duration-200 shadow-md hover:bg-gray-200 ease-in-out">
                Login
              </button>
              <button className="rounded-md font-semibold text-sm bg-slate-50 px-3 py-1 duration-200 shadow-md hover:bg-gray-200 ease-in-out">
                Register
              </button>
            </div>
          </div>
          <Header isListHotels={isListHotels} />
          {!isListHotels && <SearchBlock />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
