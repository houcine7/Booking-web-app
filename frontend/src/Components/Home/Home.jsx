import React from "react";
import EmailContainer from "../Email/EmailContainer";
import BlogContainer from "./BlogContainer";
import Featured from "./Featured";
import HomesGuests from "./HomesGuests";
import PropertyList from "./PropertyList";

const Home = () => {
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
