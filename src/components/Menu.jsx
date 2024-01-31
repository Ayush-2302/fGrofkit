import React from "react";
import Dishes from "./Dishes";
import ReviewCard1 from "../layout/ReviewCard1";
import UserCarosel from "../layout/UserCarosel";
import CarrierAccordian from "../layout/CarrierAccordian";

const Menu = () => {
  const reviews = [
    {
      userName: "John Doe",
      userAvatar:
        "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      date: "January 20, 2024",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    // Add more reviews as needed
  ];
  return (
    <>
      <div className="bg-yellow-400 h-[460px]  font-bold flex justify-center items-center text-white py-20">
        <div className=" container">
          <section id="chef" className=" text-center  p-10  ">
            <p className="text-lg  ">A Culinary Journey Like No Other</p>
            <h1 className="text-4xl pt-3 text-black  mb-2">
              Welcome to <span>GROFKIT</span>
            </h1>
            <p className=" uppercase text-lg mb-8 mx-auto pt-5  w-3/4 ">
              "Crafting innovation with purpose, we propel possibilities,
              transcending boundaries to redefine excellence in every endeavor."
            </p>
          </section>
          <div></div>
        </div>
      </div>
      <div>
      </div>
      <div className=" mt-10  ">
        <CarrierAccordian/>
      </div>
      <Dishes />
      {/* <div className="flex justify-center items-center h-screen bg-gray-100">
      <ReviewCard1 review={reviews[0]} />
    </div> */}
    </>
  );
};

export default Menu;
