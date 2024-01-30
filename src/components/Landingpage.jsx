import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-yellow-400 flex   mx-auto justify-center items-center  text-white py-20 h-[460px]">
        <div className="">
          <h1 className="text-5xl text-black font-extrabold mb-4 p-10">
            {/* Delicious Meals, Delivered Fast */}
            Going to rock on web soon...
          </h1>
          <p className=" uppercase text-lg mb-8 text-center font-bold text-white">
            {/* Going to rock on web soon... */}
          </p>
          <Link to="https://play.google.com/store/apps/details?id=com.apponward.grofKit&hl=en&gl=US">
            <div className="flex justify-center">
              <button className="bg-white flex items-center gap-2 hover:bg-gray-100 text-black  px-8 py-2 rounded-full font-bold">
                <IoLogoGooglePlaystore className="  text-3xl" />
                <span>Available on play store</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
      

      {/* How It Works Section */}
      <div className="container mx-auto mt-16">
        <h2 className="text-3xl font-extrabold mb-8 text-center">
          Who we are !
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-yellow-400  text-white rounded-full p-4 mb-4 inline-block">
              <IoIosArrowForward className="text-3xl" />
            </div>
            <p className="font-bold mb-2">Choose Your Meal</p>
            <p>Explore a variety of cuisines and dishes.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-yellow-400  text-white rounded-full p-4 mb-4 inline-block">
              <IoIosArrowForward className="text-3xl" />
            </div>
            <p className="font-bold mb-2">Place Your Order</p>
            <p>Quickly and easily place your order online.</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-yellow-400  text-white rounded-full p-4 mb-4 inline-block">
              <IoIosArrowForward className="text-3xl" />
            </div>
            <p className="font-bold mb-2">Enjoy Your Meal</p>
            <p>Sit back, relax, and enjoy your delicious meal.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400  text-white mt-20 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-black font-extrabold  mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg font-bold mb-8">
            Explore our app and discover a world of culinary delights.
          </p>
          <div className="flex justify-center">
            <button className="bg-white hover:bg-gray-100 text-black  px-8 py-2 rounded-full font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
