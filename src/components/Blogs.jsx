// src/App.js
import React, { useContext, useEffect, useState } from "react";
import UserCard from "../layout/Usercard";
import { darkMode } from "../context/Darkmode";
import Carrier from "./Carrier";
import BlogCard from "../layout/BlogCard";

function User() {
  const { users, fetchUser } = useContext(darkMode);
  // useEffect(() => {
  //   fetchUser();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      {/* <div className="user p-5 grid gap-y-5 gap-8  grid-cols-3">
        {users &&
          users.map((users) => (
            <div key={users._id}>
              <UserCard
                name={users.name}
                email={users.email}
                number={users.number}
                users={users}
              />
            </div>
          ))}
      </div> */}

      <div className="banner bg-yellow-400 h-[460px]  font-bold flex justify-center items-center text-white py-20">
        <div className=" container">
          <section id="chef" className=" text-center  p-10  ">
            <div className="  flex justify-center w-full h-[330px] ">
              <img
                src="https://blinkit.com/careers/sites/default/files/2022-03/career-masthead-desktop.png"
                alt="banner "
                className=" h-full lg:w-4/5 md:w-full "
              />
            </div>

            <div className=" h-24 w-full flex  p-10 justify-center items-center ">
              <p className=" font-bold text-xl text-white">
                "Join us on a journey of endless growth and fulfillment, where
                your aspirations meet boundless opportunities in shaping the
                future together."
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="lg:px-44 md:p-20 sm:10 p-5 pt-10 pb-10">
        <h1 className="text-4xl text-black  mb-4">Our Motive</h1>

        <p className=" mb-20">
          "Welcome to our blog, your gateway to a world of insights,
          inspiration, and innovation. Dive into thought-provoking articles,
          expert opinions, and engaging stories that unravel the latest trends,
          industry secrets, and perspectives. Whether you're seeking knowledge,
          inspiration, or simply a good read, our blog is your go-to destination
          for staying informed and inspired in an ever-evolving landscape."
        </p>

        <BlogCard />
      </div>
    </>
  );
}

export default User;
