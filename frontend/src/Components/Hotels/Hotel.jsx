import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

import { BsXCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const pics = [
  {
    imgURL: "../../../images/hotel1.png",
  },
  {
    imgURL: "../../../images/hotel2.png",
  },
  {
    imgURL: "../../../images/hotel3.png",
  },
  {
    imgURL: "../../../images/hotel3.png",
  },
  {
    imgURL: "../../../images/hotels.png",
  },
];

const initialState = {
  imgeIndex: 0,
  open: false,
};
const Hotel = () => {
  const [silderImage, setSliderImage] = useState(initialState);
  const location = useLocation();

  //fetch items date from api

  // slider handlers functions
  const handelClick = (index) => {
    setSliderImage({
      imgeIndex: index,
      open: true,
    });
  };

  const handelRightClick = () => {
    setSliderImage((prevState) => {
      if (prevState.imgeIndex === pics.length - 1) {
        return {
          ...prevState,
          imgeIndex: 0,
        };
      }
      return {
        ...prevState,
        imgeIndex: prevState.imgeIndex + 1,
      };
    });
  };
  const handelLeftClick = () => {
    setSliderImage((prevState) => {
      if (prevState.imgeIndex === 0) {
        return {
          ...prevState,
          imgeIndex: pics.length - 1,
        };
      }
      return {
        ...prevState,
        imgeIndex: prevState.imgeIndex - 1,
      };
    });
  };

  //
  return (
    <div className="mt-5 max-w-5xl mx-auto relative">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-wider">
            Tower street appartements
          </h1>
          <p className="font-normal text-gray-400 flex gap-2 items-center mt-2">
            <span>
              <FaMapMarkerAlt />
            </span>
            5 new york , Old town ndld usa
          </p>
          <p className="text-blue-700 mt-2 font-semibold">
            Excellent location : 500 from center
          </p>
          <p className="text-green-600 mt-2 font-semibold">
            Book a stay over MAD 500 at this property and get a free airport
            taxi
          </p>
        </div>
        <div>
          <button className="px-3 bg-blue-700 h-10 text-white  rounded shadow transition duration-300 ease-in-out hover:bg-blue-800">
            Reserver or Book Now!
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-2 my-3">
        {pics.map((item, index) => {
          return (
            <div className="relative">
              <img
                src={item.imgURL}
                alt="pic"
                className="h-64 object-cover hover:z-40 cursor-pointer"
                key={index}
                onClick={() => handelClick(index)}
              />
            </div>
          );
        })}
      </div>
      {silderImage.open && (
        <div
          className="fixed top-0 left-0  bottom-0"
          style={{ background: "rgb(0 0 0 / 56%)" }}
        >
          <BsXCircleFill
            size={35}
            fill={"white"}
            cursor={"pointer"}
            style={{ position: "absolute", right: "3rem", top: "1rem" }}
            onClick={() =>
              setSliderImage({
                imgeIndex: 0,
                open: false,
              })
            }
          />
          <div className="flex justify-center items-center gap-4">
            <FaArrowAltCircleLeft
              size={30}
              fill={"white"}
              cursor={"pointer"}
              onClick={handelLeftClick}
            />
            <img
              src={pics[silderImage.imgeIndex].imgURL}
              alt="hotle describe"
              className="w-4/5 opacity-100 my-4"
            />
            <FaArrowAltCircleRight
              size={30}
              fill={"white"}
              cursor={"pointer"}
              onClick={() => handelRightClick()}
            />
          </div>
        </div>
      )}
      <div className="mt-8 grid grid-cols-3 gap-10 text-gray-800 mb-8">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-4">
            Stay in the heart of krakow
          </h1>
          <p className="text-lg text-gray-500">
            {"  "}Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            pariatur tempora, voluptatibus quasi delectus culpa beatae animi
            ipsum quibusdam quis eligendi eum praesentium? Illo deleniti commodi
            culpa sunt suscipit ut alias fugit ipsum! praesentium? Illo deleniti
            commodi culpa sunt suscipit ut alias fugit ipsum!praesentium? Illo
            deleniti commodi culpa sunt suscipit ut alias fugit ipsum!
          </p>
        </div>
        <div className="col-span-1 px-2 py-4 bg-blue-200">
          <h1 className="text-xl font-bold mb-2">
            {" "}
            Perfect for a 9-night stay
          </h1>
          <p className="text text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse fuga
            exercitationem
          </p>

          <h1 className="mt-4 font-bold text-xl">
            MAD 5000{" "}
            <span className="font-normal text-gray-500">(9 night)</span>
          </h1>
          <div className="px-2">
            <button className="w-full h-11 bg-blue-800 mt-6 text-white rounded-md font-semibold">
              Reserve or Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
