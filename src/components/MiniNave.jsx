import React from "react";
import { Link } from "react-router-dom";

const MiniNave = () => {
  const menu = [
    {
      to: "/",
      manuName: "Home",
    },
    {
      to: "/about",
      manuName: "About",
    },
    {
      to: "/menu",
      manuName: "Menu",
    },
    {
      to: "/blog",
      manuName: "Blog",
    },
    {
      to: "/carrier",
      manuName: "Carrier",
    },
    {
      to: "/contact",
      manuName: "Contact",
    },
  ];
  return (
    <div>
      <div className="  gap-2 p-2  navbar text-white shadow-inner   ">
        {menu.map((ele) => (
          <div className="menu p-2 w-11/12 mx-auto shadow-inner text-center rounded-md hover:text-black font-semibold text-base hover:bg-[#575b5b]  ">
            <Link to={ele.to}>{ele.manuName}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniNave;
