import React from "react";

const EmailContainer = () => {
  return (
    <div className="flex justify-center text-white  py-12 bg-blue-500">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="font-bold text-2xl">Save time, stay connected</h1>
        <p className="font-normal text-lg">
          sing up and you will recieve the best offers
        </p>
        <div className="flex gap-2 ">
          <input
            type="email"
            placeholder="Your email address"
            id="email"
            name="email"
            className="h-11 w-72 rounded-md px-2 text-sm outline-none text-gray-900"
          />
          <button className="rounded bg-blue-800 px-3 shadow-gray-800 hover:bg-blue-700 transition duration-200 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailContainer;
