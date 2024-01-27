import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaDiscord, FaDribbble, FaGithub, FaTwitter } from "react-icons/fa6";
// import { BiCartAlt } from "react-icons/bi";

// import logo from "../assert/grofkiticon2.png";
export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              {/* <BiCartAlt className="text-yellow-500 text-8xl"/><p className=" font-bold tracking-widest px-1 text-4xl		">ROFKIT</p> */}
              {/* <img src={logo} alt="logo" className="w-1/2"/> */}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-700 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-700 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://github.com/Ayush-123-byte"
                    className="hover:underline"
                    rel="noreferrer"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-700 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-700 sm:text-center">
            © 2023
            <Link
              to="https://github.com/Ayush-123-byte"
              className="hover:underline"
            >
              ayushkumarakt
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-700 hover:text-gray-900">
              <TiSocialFacebook className="text-xl" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-700  hover:text-gray-900">
              <FaDiscord className="text-xl" />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="#" className="text-gray-700  hover:text-gray-900">
              <FaTwitter className="text-xl" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="text-gray-700  hover:text-gray-900">
              <FaGithub className="text-xl" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="#" className="text-gray-700  hover:text-gray-900">
              <FaDribbble className="text-xl" />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
