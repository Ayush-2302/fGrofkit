import React from "react";
import img1 from "../assert/dish1.avif";
import img2 from "../assert/dish6.avif";
import img3 from "../assert/dish3.avif";
import img4 from "../assert/dish4.webp";
import img5 from "../assert/dish5.webp";
import img6 from "../assert/dish6.avif";
import DishesCard from "../layout/DishCard";

const Dishes = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center m-auto items-center  ">
      <h1 className=" text-4xl text-gray-900 font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>
      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img2} title="Tasty Dish" price="$12.99" />
        <DishesCard img={img3} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img4} title="Tasty Dish" price="$11.99" />
        <DishesCard img={img5} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
      </div>
    </div>
  );
};

export default Dishes;
