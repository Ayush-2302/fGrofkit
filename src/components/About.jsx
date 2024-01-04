import React from "react";
import img from "../assert/resto.jpg";
import Team1 from "./Team1";

const About = () => {
  return (
    <>
      <div className=" min-h-screen p-20">
        <section className="text-center my-8">
          <h1 className="text-4xl text-gray-900 font-bold mb-2">
            Welcome to <span>GROFKIT</span>
          </h1>
          <p className="text-lg text-black">A Culinary Journey Like No Other</p>
        </section>

        <section id="chef" className="my-8">
          <div className="flex flex-col items-center">
            <img
              src={img}
              alt="Chef"
              className="rounded-full w-40 h-40 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Meet Chef Wolfgang Puck
            </h2>
            <p className="text-black leading-loose">
              Passionate about creating exquisite dishes that tantalize your
              taste buds, Chef Wolfgang Puck is the driving force behind the
              culinary magic at GroFit. With a background in School of Culinary
              Excellence, Chef Wolfgang Puck brings a unique blend of creativity
              and expertise to the kitchen.
            </p>
          </div>
        </section>

        <section id="restaurant" className="my-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            About Grofit
          </h2>
          <p className="text-black leading-loose">
            Grofit is not just a place to eat; it's a destination for culinary
            exploration. Our restaurant is dedicated to providing a warm and
            inviting atmosphere where every dish tells a story. From locally
            sourced ingredients to carefully crafted recipes, we strive to
            deliver an exceptional dining experience for our guests.
          </p>
          <p className="text-black leading-loose mt-4">
            At Grofit, we believe in the power of food to bring people together.
            Whether you're here for a casual meal with friends or a special
            celebration, our menu offers a diverse range of dishes to satisfy
            every palate. We take pride in our commitment to quality, flavor,
            and innovation.
          </p>

          <div className="container mx-auto my-8">
            <p className="text-black leading-loose">
              Here we bring you a delightful culinary experience right at your
              fingertips. Whether you're a seasoned chef or a cooking novice,
              our restaurant is designed to cater to all your food-related
              needs.
            </p>
            <p className="text-black leading-loose mt-4">
              At the heart of our Restaurant is a passion for good food and a
              commitment to making your cooking journey enjoyable and
              hassle-free. We offer a diverse range of recipes, cooking tips,
              and interactive features to enhance your cooking skills.
            </p>
            <h2 className="text-xl font-bold mt-6 mb-2 text-gray-900">
              Key Features:
            </h2>

            <ul className="list-disc list-inside text-black">
              <li>Explore a vast collection of recipes for every occasion.</li>
              <li>Save your favorite recipes for quick access.</li>
              <li>Step-by-step instructions to make cooking a breeze.</li>
              <li>Discover new ingredients and cooking techniques.</li>
              <li>Connect with a community of food enthusiasts.</li>
            </ul>

            <p className="text-black leading-loose mt-4">
              Our mission is to inspire you in the kitchen and make cooking an
              enjoyable part of your lifestyle. Whether you're looking for quick
              weekday dinners, special occasion recipes, or dietary-specific
              options, we have something for everyone.
            </p>
            <p className="text-black leading-loose mt-4">
              Thank you for choosing our Restaurant. We hope you have a
              fantastic culinary journey with us!
            </p>
          </div>
          <Team1/>
        </section>

        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-black leading-loose">
            We would love to hear from you! Visit us at [Restaurant Address] or
            reach out through the following channels:
          </p>
          <p className="text-black">Email:grofit@gmail.com</p>
          <p className="text-black">Phone: 4864648798</p>
        </section>
      </div>
    </>
  );
};

export default About;
