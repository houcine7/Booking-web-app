import React from "react";
import Hotel from "./Hotel";
import { SearchComponenet } from "./SearchComponenet";

const ListHotel = () => {
  return (
    <div className="container max-w-5xl mx-auto mt-7">
      <div className="grid grid-cols-3 gap-4 relative">
        <SearchComponenet />
        <div className="col-span-2 flex flex-col gap-6">
          <Hotel />
          <Hotel />
          <Hotel />
          <Hotel />
          <Hotel />
        </div>
      </div>
    </div>
  );
};

export default ListHotel;
