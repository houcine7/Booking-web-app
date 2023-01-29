import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HotelCard from "./HotelCard";
import { SearchComponenet } from "./SearchComponenet";

const ListHotel = () => {
  const navigateTo = useNavigate();
  const location = useLocation();

  return (
    <div className="">
      <div className="container max-w-5xl mx-auto mt-7">
        <div className="grid grid-cols-3 gap-4 relative">
          <SearchComponenet searchState={location.state.searchState} />
          <div className="col-span-2 flex flex-col gap-6">
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListHotel;
