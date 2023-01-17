import React from "react";

const BlogCard = () => {
  return (
    <div className="relative h-80 border-black overflow-hidden cursor-pointer">
      <img
        src="./images/villas.png"
        alt="bolg object"
        className="rounded-sm h-full object-cover w-full transition duration-200 ease-in-out hover:scale-110"
      />
      <div className="text-white absolute bottom-10 px-5">
        <h1 className="text-2xl font-bold">The titile of this Blog </h1>
        <h1 className="font-semibold text-lg">The sub titile of this Blog </h1>
      </div>
    </div>
  );
};

export default BlogCard;
