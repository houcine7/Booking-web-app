import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Featured from "./Featured";

const API_BASE_URL = "http://localhost:6060/api/";
const FeaturedList = () => {
  const { data, loading, error } = useFetch(
    API_BASE_URL + "hotels/count?cities=Paris,Madrid,NewYork"
  );
  return (
    <div className="flex gap-2 justify-center">
      {loading ? (
        <p>Loading ..</p>
      ) : (
        <>
          <Featured
            image={"./images/paris.png"}
            city={"Paris"}
            numberP={data[0]?.Paris}
          />
          <Featured
            image={"./images/newYork.png"}
            city={"New York"}
            numberP={data[2]?.NewYork}
          />
          <Featured
            image={"./images/madrid.png"}
            city={"Madrid"}
            numberP={data[1]?.Madrid}
          />
        </>
      )}
    </div>
  );
};

export default FeaturedList;
