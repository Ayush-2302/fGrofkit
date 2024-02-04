import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiAlarm, BiMenu, BiMoon } from "react-icons/bi";
import { darkMode } from "../context/Darkmode";
import MiniNave from "./MiniNave";
import grofkiticon from "../assert/grofkiticon2.png";
function Nave2() {
  const { mode, toggle } = useContext(darkMode);
  const [mini, setMini] = useState(false);
  const handleMini = () => {
    setMini(!mini);
  };

  const menu = [
    {
      to: "/",
      menuName: "Home",
    },
    {
      to: "/about",
      menuName: "About",
    },
    {
      to: "/carrier",
      menuName: "Carrier",
    },
    {
      to: "/partner",
      menuName: "Partner",
    },
    {
      to: "/blog",
      menuName: "Blogs",
    },
   
    {
      to: "/contact",
      menuName: "Contact",
    },
  ];
  return (
    <>
      <header className=" sticky z-50 top-0">
        <nav className="navbar px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to="/"
              className="md:hidden lg:flex sm:hidden hidden items-center"
            >
              <img src={grofkiticon} alt="" className="w-36 h-10  " />
            </Link>
            <div
              onClick={handleMini}
              className=" text-white  text-4xl p-1 border-2 rounded-md  lg:hidden"
            >
              <BiMenu />
            </div>
            <div className="  flex items-center lg:order-2">
              <Link
                to="/"
                className="text-white  hover:bg-yellow-500 hover:text-black focus:ring-2 focus:ring-yellow-300 font-semibold  rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Login
              </Link>
              <Link
                to="/"
                className=" bg-yellow-400  hover:bg-yellow-500  focus:ring-2 focus:ring-gray-300 font-semibold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </Link>
              <button className="  text-white pl-2 text-2xl" onClick={toggle}>
                {mode === "light" ? <BiAlarm /> : <BiMoon />}
              </button>
            </div>

            {
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <div className=" nav-item flex flex-col mt-4 font-semibold lg:flex-row  text-base lg:space-x-8 lg:mt-0">
                  {menu.map((ele,index) => (
                    <NavLink
                    key={index}
                      to={ele.to}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? " text-gray-400" : "text-white"
                        } border-b   lg:border-0  lg:p-0  hover:text-gray-400`
                      }
                    >
                      {ele.menuName}
                    </NavLink>
                  ))}
                </div>
              </div>
            }
          </div>
        </nav>
        {mini ? <MiniNave /> : ""}
      </header>
    </>
  );
}

export default Nave2;
