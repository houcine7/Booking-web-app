import React from "react";
import { useFetch } from "../../hooks/useFetch";
import EmailContainer from "../Email/EmailContainer";
import BlogContainer from "./BlogContainer";
import Featured from "./Featured";
import HomesGuests from "./HomesGuests";
import PropertyList from "./PropertyList";

const API_BASE_URL = "http://localhost:6060/api/";
const Home = () => {
  const { data, lodaing, error } = useFetch(
    API_BASE_URL + "hotels/count?cities=Paris,Madrid"
  );
  console.log(data);
  return (
    <section className="mt-10">
      <div className="flex gap-2 justify-center">
        <Featured image={"./images/paris.png"} city={"paris"} numberP={1555} />
        <Featured
          image={"./images/dublin.png"}
          city={"dublin"}
          numberP={1555}
        />
        <Featured image={"./images/paris.png"} city={"paris"} numberP={1555} />
      </div>
      <PropertyList />
      <HomesGuests />
      <BlogContainer />
      <EmailContainer />
    </section>
  );
};

export default Home;
