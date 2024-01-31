// src/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

const blog = [
  {
    title: "Grofkit",
    content:
      "Experience convenience at your doorstep with our grocery delivery app. Browse a vast selection, place orders effortlessly, and enjoy fresh, quality produce delivered straight to your home.",
    author: "ayush",
    date: Date(),
    img: "https://blinkit.com/careers/sites/default/files/2021-12/career-mindsets.png",
  },
  {
    title: "Grofkit",
    content:
      "Experience convenience at your doorstep with our grocery delivery app. Browse a vast selection, place orders effortlessly, and enjoy fresh, quality produce delivered straight to your home.",
    author: "ayush",
    date: Date(),
    img: "https://blinkit.com/careers/sites/default/files/2021-12/career-organisation.png",
  },
  {
    title: "Grofkit",
    content:
      "Experience convenience at your doorstep with our grocery delivery app. Browse a vast selection, place orders effortlessly, and enjoy fresh, quality produce delivered straight to your home.",
    author: "ayush",
    date: Date(),
    img: "https://blinkit.com/careers/sites/default/files/2021-12/career-organisation.png",
  },
  {
    title: "Grofkit",
    content:
      "Experience convenience at your doorstep with our grocery delivery app. Browse a vast selection, place orders effortlessly, and enjoy fresh, quality produce delivered straight to your home.",
    author: "ayush",
    date: Date(),
    img: "https://blinkit.com/careers/sites/default/files/2021-12/career-organisation.png",
  },
];

const BlogCard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 md:grid-cols-2 sm:grid-col-1 p-5 ">
        {blog.map((ele) => (
          <div className="  mx-auto bg-white shadow-md overflow-hidden">
            <div className=" shadow-inner ">
              <div className="md:flex-shrink-0">
                <img
                  className=" object-cover h-5/6 w-full"
                  src={ele.img}
                  alt="Blog Post"
                />
              </div>
              <div className="p-8">
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {ele.author}
                </div> */}
                <p className=" text-gray-600">{ele.date}</p>

                <Link
                  to="/"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {ele.title}
                </Link>
                <p className="mt-2 text-gray-500">{ele.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCard;
