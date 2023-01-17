import React from "react";
import Featured from "./Featured";
import HomesGuests from "./HomesGuests";
import PropertyList from "./PropertyList";

const Home = () => {
  return (
    <section className="mt-10 px-3">
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
    </section>
  );
};

export default Home;
