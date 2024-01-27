import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiAlarm, BiCartAlt, BiMoon } from "react-icons/bi";
import { darkMode } from "../context/Darkmode";
import grofkiticon from "../assert/grofkiticon2.png";

export default function Navbar() {
  const { mode, toggle } = useContext(darkMode);

  return (
    <header className=" sticky z-50 top-0">
      <nav className="navbar px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            .
            <img src={grofkiticon} alt="" className="w-36 h-10  " />
          </Link>
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
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className=" nav-item flex flex-col mt-4 font-semibold lg:flex-row  text-base lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? " " : "text-gray-300"
                    } border-b lg:border-0  lg:p-0 hover:underline`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? " underline" : "text-gray-300"
                    } border-b   lg:border-0  lg:p-0  hover:underline`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "underline " : "text-gray-300"
                    } border-b   lg:border-0  lg:p-0 hover:underline`
                  }
                >
                  Menu
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "underline" : "text-gray-300"
                    } border-b   lg:border-0  lg:p-0  hover:underline`
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/carrier"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "underline" : "text-gray-300"
                    } border-b   lg:border-0  lg:p-0  hover:underline`
                  }
                >
                  Carrier
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "underline" : "text-gray-300"
                    } border-b   lg:border-0  lg:p-0  hover:underline`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
