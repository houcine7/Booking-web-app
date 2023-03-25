import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import HotelCard from "./HotelCard";
import { SearchComponenet } from "./SearchComponenet";

const API_BASE_URL = "http://localhost:6060/api/";
const ListHotel = () => {
  //
  const location = useLocation();
  // fetch hotels by city with useFetch
  const queryParams = location.state?.searchState;

  const { data, loading, error } = useFetch(
    API_BASE_URL +
      `hotels?cities=${queryParams?.city}&min=${
        queryParams?.minPrice || 0
      }&max=${queryParams?.maxPrice || Number.MAX_SAFE_INTEGER}&featured=true`
  );
  //
  return (
    <div className="">
      <div className="container max-w-5xl mx-auto mt-7">
        <div className="grid grid-cols-3 gap-4 relative">
          <SearchComponenet searchState={queryParams} />
          <div className="col-span-2 flex flex-col gap-6">
            {loading ? (
              <p>Loading ....</p>
            ) : (
              data[0]?.map((hotelItem, index) => {
                return (
                  <HotelCard
                    key={hotelItem._id}
                    index={hotelItem._id}
                    img={hotelItem.photos[0]}
                    title={hotelItem.name}
                    distance={hotelItem.distance}
                    desc={hotelItem.description}
                    rating={hotelItem.rating}
                    price={hotelItem.cheapestPrice}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListHotel;
