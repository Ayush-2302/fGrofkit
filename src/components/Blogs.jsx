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

      <div className="bg-yellow-400 h-[460px]  font-bold flex justify-center items-center text-white py-20">
        <div className=" container">
          <section id="chef" className=" text-center  p-10  ">
            <p className="text-lg  ">A Culinary Journey Like No Other</p>
            <h1 className="text-4xl pt-3 text-black  mb-2">
              Welcome to <span>GROFKIT</span>
            </h1>
            <p className=" uppercase text-lg mb-8 mx-auto pt-5  w-3/4 ">
              "Learn about Grofkit "
            </p>
          </section>
        </div>
      </div>

      <div className=" container    mx-auto p-10 ">
        <h1 className="text-4xl text-black  mb-4">Our Motive</h1>

        <p className=" mb-20">
          "Welcome to our blog, your gateway to a world of insights,
          inspiration, and innovation. Dive into thought-provoking articles,
          expert opinions, and engaging stories that unravel the latest trends,
          industry secrets, and perspectives. Whether you're seeking knowledge,
          inspiration, or simply a good read, our blog is your go-to destination
          for staying informed and inspired in an ever-evolving landscape."
        </p>
        
        <BlogCard/>

      </div>
    </>
  );
}

export default User;
