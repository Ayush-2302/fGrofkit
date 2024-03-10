import React, { useContext, useState } from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { darkMode } from "../context/Darkmode";

export default function Contact() {
  const { addUser } = useContext(darkMode);
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addUser(user.name, user.email, user.number);
    setUser({ name: "", email: "", number: "" });
    console.log("added user");
    console.log(user);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="  font-bold flex justify-center items-center text-black py-20">
        <div className=" w-full ">
          <section id="chef" className=" shadow-2xl text-center  contact-poster p-10  ">
            <p className="text-lg  ">A Culinary Journey Like No Other</p>
            <h1 className="text-4xl pt-3 text-black  mb-2">
              Welcome to <span>GROFKIT</span>
            </h1>

            <div className="relative flex  items-top  gap-10 p-10 rounded-lg  justify-center sm:items-center sm:pt-0">
              <div className="  w-full">
                <div className="mt-8 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 mr-2  bg-gray-50 opacity-70 hover:opacity-80 sm:rounded-lg">
                      <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                        Get in touch:
                      </h1>
                      <p className="text-normal text-lg sm:text-xl font-medium border-gray-800 mt-2">
                        Fill in the form to start a conversation
                      </p>

                      <div className="flex items-center mt-8 border-gray-800">
                        <CiLocationOn className=" text-3xl" />
                        <div className="ml-4 text-md tracking-wide font-semibold ">
                          tikri, sector48, street-2
                        </div>
                      </div>

                      <div className="flex items-center mt-4 border-gray-800">
                        <CiPhone className="text-3xl" />
                        <div className="ml-4 text-md tracking-wide font-semibold ">
                          +44 1234567890
                        </div>
                      </div>

                      <div className="flex items-center mt-2 border-gray-800">
                        <CiMail className=" text-3xl" />
                        <div className="ml-4 text-md tracking-wide font-semibold ">
                          info@gmail.com
                        </div>
                      </div>
                    </div>

                    <form className="p-6 flex flex-col justify-center">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="hidden">
                          Full Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          value={user.name}
                          onChange={onChange}
                          placeholder="Full Name"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-1">
                        <label htmlFor="number" className="hidden">
                          Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          value={user.number}
                          onChange={onChange}
                          placeholder="Number"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-1">
                        <label htmlFor="email" className="hidden">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={user.email}
                          onChange={onChange}
                          placeholder="Email"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-1">
                        <label htmlFor="email" className="hidden">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          // value={user.email}
                          // onChange={onChange}
                          placeholder="City"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-1">
                        <label htmlFor="email" className="hidden">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          // value={user.email}
                          // onChange={onChange}
                          placeholder="State"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-800 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="md:w-32 bg-green-500 hover:bg-blue-dark text-black font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-600 transition ease-in-out duration-300"
                        onClick={handleClick}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
