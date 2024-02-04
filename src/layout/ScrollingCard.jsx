import React, { useState } from "react";
import Card from "./Card";
import "../../src/style/mycss.css"

import Slider from "react-slick";

function ScrollingCard() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    color:"black"
  };
  const cards = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/300/201", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/300/201", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/300/201", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/300/201", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/300/201", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/300/201", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/300/201", // Replace with your image URL
    },
    // Add more cards as needed
  ];

  return (
    <div className="">
      <Slider {...settings}>
        {cards.map((ele, index) => (
          <div className="">
            <Card
              title={ele.title}
              description={ele.description}
              imageUrl={ele.imageUrl}
              key={index}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ScrollingCard;
