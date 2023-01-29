import React from "react";
import { useFetch } from "../../hooks/useFetch";
import EmailContainer from "../Email/EmailContainer";
import BlogContainer from "./BlogContainer";
import FeaturedList from "./FeaturedList";
import HomesGuests from "./HomesGuests";
import PropertyList from "./PropertyList";

const Home = () => {
  return (
    <section className="mt-10">
      <FeaturedList />
      <PropertyList />
      <HomesGuests />
      <BlogContainer />
      <EmailContainer />
    </section>
  );
};

export default Home;
