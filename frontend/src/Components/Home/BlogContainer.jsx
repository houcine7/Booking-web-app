import React from "react";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
  return (
    <div className="mt-5 px-10 mb-10">
      <h1 className="font-bold text-xl mb-3">
        Get inspiration Read our bolgs
        <span className="w-28 h-1 border-b-4 border-blue-600 block "></span>
      </h1>
      <div className="grid grid-flow-row grid-cols-3 gap-2">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-2 mt-3">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogContainer;
