// LandingPage.jsx

import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const LandingPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-yellow-400  text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl text-black font-extrabold mb-4">
            Delicious Meals, Delivered Fast
          </h1>
          <p className=" text-lg mb-8  font-bold text-white">
            Craving something tasty? Explore a world of flavors with our food
            delivery app.
          </p>
          <div className="flex justify-center">
            <button className="bg-white hover:bg-gray-100 text-black  px-8 py-2 rounded-full font-bold">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto mt-16">
        <h2 className="text-3xl font-extrabold mb-8 text-center">
          How It Works
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

      {/* Featured Restaurants Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Restaurant Image */}
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Restaurant 1"
                  className="w-full h-44  object-cover rounded-md"
                />
              </div>
              {/* Restaurant Details */}
              <h3 className="text-xl font-bold mb-2">Italian Delights</h3>
              <p className="text-gray-600">
                Authentic Italian cuisine that will leave you craving for more.
              </p>
            </div>

            {/* Restaurant 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Restaurant Image */}
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww"
                  alt="Restaurant 2"
                  className="w-full h-44  object-cover rounded-md"
                />
              </div>
              {/* Restaurant Details */}
              <h3 className="text-xl font-bold mb-2">Burger Haven</h3>
              <p className="text-gray-600">
                Satisfy your burger cravings with our mouthwatering selection.
              </p>
            </div>

            {/* Restaurant 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Restaurant Image */}
              <div className="mb-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689596510457-73a8eae21208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FsYWRzfGVufDB8fDB8fHww"
                  alt="Restaurant 3"
                  className="w-full h-44   object-cover rounded-md"
                />
              </div>
              {/* Restaurant Details */}
              <h3 className="text-xl font-bold mb-2">Fresh Salads</h3>
              <p className="text-gray-600">
                Healthy and delicious salads made with the freshest ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400  text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-black font-extrabold  mb-4">Ready to Order?</h2>
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
