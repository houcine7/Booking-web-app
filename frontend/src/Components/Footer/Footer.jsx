import React from "react";

const Footer = () => {
  return (
    <div className="py-4 px-10">
      <div className="flex justify-evenly">
        <LinksList linkList={["Link1", "Link2", "Link3"]} />
        <LinksList linkList={["Link4", "Link5", "Link6"]} />
        <LinksList linkList={["Link7", "Link8", "Link9"]} />
        <LinksList linkList={["Link7", "Link8", "Link9"]} />
        <LinksList linkList={["Link7", "Link8", "Link9"]} />
      </div>
      <div className="py-5 flex justify-center">
        <p className="text-gray-600">Copy right 2023</p>
      </div>
    </div>
  );
};

const LinksList = ({ linkList }) => {
  return (
    <ul className="text-gray-500 flex flex-col gap-2">
      <li>
        <a
          href="#home"
          className=" transition duration-200 ease-in-out  hover:underline"
        >
          {linkList[0]}
        </a>
      </li>
      <li>
        <a
          href="#home"
          className=" transition duration-200 ease-in-out  hover:underline"
        >
          {linkList[1]}
        </a>
      </li>
      <li>
        <a
          href="#home"
          className=" transition duration-200 ease-in-out  hover:underline"
        >
          {linkList[2]}
        </a>
      </li>
    </ul>
  );
};

export default Footer;
