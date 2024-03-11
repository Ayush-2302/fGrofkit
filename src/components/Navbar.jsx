import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiAlarm, BiMenu, BiMoon } from "react-icons/bi";
import { darkMode } from "../context/Darkmode";
import grofkiticon from "../assert/grofkiticon2.png";
import { Collapse } from "react-collapse";
function Navbar() {
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
          <div className="flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className=" lg:flex  sm:hidden hidden items-center">
              <img src={grofkiticon} alt="" className="w-36 h-10  " />
            </Link>
            <div
              onClick={handleMini}
              className=" text-white  text-4xl p-1 border-2 rounded-md  md:hidden"
            >
              <BiMenu />
            </div>

            <div className=" justify-between  items-center   lg:w-auto ">
              <div className=" nav-item md:flex hidden font-semibold  text-base  mt-0">
                {menu.map((ele, index) => (
                  <NavLink
                    key={index}
                    to={ele.to}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 hover:text-gray-400 ${
                        isActive ? " text-gray-400" : "text-white"
                      }`
                    }
                  >
                    {ele.menuName}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* <div className="  flex items-center ">
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
            </div> */}
          </div>
        </nav>

        {/* <Collapse isOpened={true || false}> */}
        {mini ? (
          <div className=" navbar md:hidden ">
            <hr />
            <div className=" nav-item font-semibold text-base  mt-0">
              {menu.map((ele, index) => (
                <NavLink
                  onClick={handleMini}
                  key={index}
                  to={ele.to}
                  className={({ isActive }) =>
                    ` py-2 px-24 duration-200   flex  hover:text-gray-400 ${
                      isActive ? " text-gray-400 " : "text-white"
                    }`
                  }
                >
                  {ele.menuName}
                </NavLink>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* </Collapse> */}
      </header>
    </>
  );
}

export default Navbar;
